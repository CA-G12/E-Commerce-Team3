const router = require('express').Router();
const { getProduct, filterProduct } = require('../controllers/product');
const {
  getCart,
  addToCart,
  deleteFromCart,
  updateCart,
} = require('../controllers/cart');

router.get('/product/search/', filterProduct);
router.get('/product', (req, res) => res.send('product'));
router.get('/product/:id', getProduct);

router.get('/cart/:userId', getCart);
router.post('/cart/', addToCart);
router.delete('/cart/', deleteFromCart);
router.put('/cart/', updateCart);

module.exports = router;
