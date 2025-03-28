const express = require('express');
const router = express.Router();
const multer = require('multer');
const vision = require('@google-cloud/vision');
const Product = require('../../models/Product');

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' });

// Google Vision client
const client = new vision.ImageAnnotatorClient();

// GET route for rendering the image search form
router.get('/image-search', (req, res) => {
  res.render('products/imageSearch', { products: [] }); // ✅ Always pass products array
});

// POST route for handling image upload and search
router.post('/image-search', upload.single('image'), async (req, res) => {
  try {
    const [result] = await client.labelDetection(req.file.path);
    const labels = result.labelAnnotations.map(label => label.description);

    const query = {
      $text: { $search: labels.join(' ') }
    };

    const products = await Product.find(query);

    res.render('products/imageSearch', { products }); // ✅ Always pass products
  } catch (err) {
    console.error('Vision API Error:', err);
    res.render('products/imageSearch', { products: [] }); // ✅ Prevent crash
  }
});

module.exports = router;
