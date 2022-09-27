const productRouter = require('express').Router();
const { getProduct, filterProduct } = require('../controllers/product');
const {
  getCart,
  addToCart,
  deleteFromCart,
  updateCart,
} = require('../controllers/cart');

productRouter.get('/product/search/', filterProduct);
productRouter.get('/product', (req, res) => res.send('product'));
productRouter.get('/product/:id', getProduct);

productRouter.get('/cart/:userId', getCart);
productRouter.post('/cart/', addToCart);
productRouter.delete('/cart/', deleteFromCart);
productRouter.put('/cart/', updateCart);

module.exports = productRouter;
