const router = require('express').Router();
const { getProduct, filterProduct } = require('../controllers/product');

router.get('/product/search/', filterProduct);
router.get('/product', (req, res) => res.send('product'));
router.get('/product/:id', getProduct);

router.get('/cart/:userId');
router.post('/cart/');
router.delete('/cart/');
router.put('/cart/');

module.exports = router;
