

const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware');
const Product = require('../models/Product');
const User = require('../models/User');
const stripe = require("stripe")("sk_test_tR3PYbcVNZZ796tH88S4VQ2u");

router.get('/user/cart', isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id).populate('cart');
    const totalAmount = user.cart.reduce((sum, curr) => sum + curr.price, 0);
    const productInfo = user.cart.map((p) => p.desc).join(',');
    res.render('cart/cart', { user, totalAmount, productInfo });
});

router.post('/user/:productId/add', isLoggedIn, async (req, res) => {
    let { productId } = req.params;
    let userId = req.user._id;
    let product = await Product.findById(productId);
    let user = await User.findById(userId);
    user.cart.push(product);
    await user.save();
    res.redirect('/user/cart');
});

// ✅ ADD THIS: Checkout route (POST)
router.post('/product/payment', isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id).populate('cart');
    const totalAmount = user.cart.reduce((sum, curr) => sum + curr.price, 0);

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: user.cart.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                    description: item.desc
                },
                unit_amount: item.price * 100
            },
            quantity: 1
        })),
        mode: 'payment',
        success_url: 'http://localhost:5000/success',
        cancel_url: 'http://localhost:5000/cancel'
    });

    res.redirect(session.url);
});

// ✅ ADD THESE: Success & Cancel Routes
// router.get('/success', (req, res) => {
//     res.send('Payment Successful! 🎉');
// });
router.get('/success', async (req, res) => {
    const user = await User.findById(req.user._id).populate('cart');

    // Move cart to orders
    user.orders.push({
        items: user.cart,
        purchasedAt: new Date()
    });

    user.cart = []; // Empty cart after order
    await user.save();

    res.render('payment/success', { user });
});

router.get('/cancel', (req, res) => {
    res.send('Payment Cancelled. 😕');
});

router.get('/user/orders', isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id).populate('orders.items');
    res.render('orders/index', { orders: user.orders });
});


// ✅ Export the router at the end
module.exports = router;
