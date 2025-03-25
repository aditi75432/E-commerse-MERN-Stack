

const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // secret key from .env
const { isLoggedIn } = require('../middleware');
const User = require('../models/User');


router.post('/create-checkout-session', isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id).populate('cart');
    
    const line_items = user.cart.map(product => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: product.desc
            },
            unit_amount: product.price * 100 // cents
        },
        quantity: 1
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:5000/success',
        cancel_url: 'http://localhost:5000/cancel'
    });

    res.redirect(303, session.url); // 303 = redirect for POST
});

// success/cancel pages
// router.get('/success', (req, res) => {
//     res.send('✅ Payment Successful (Test Mode)');
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
    res.send('❌ Payment Cancelled');
});

router.get('/user/orders', isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id).populate('orders.items');
    res.render('orders/index', { orders: user.orders });
});


module.exports = router;
