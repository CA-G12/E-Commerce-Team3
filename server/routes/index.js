const router = require('express').Router();
const { getProduct } = require('../controllers/product');

router.get('/product');
router.get('/product/:id', getProduct);
router.get('/product/search/');

router.get('/cart/:userId');
router.post('/cart/');
router.delete('/cart/');
router.put('/cart/');

module.exports = router;
