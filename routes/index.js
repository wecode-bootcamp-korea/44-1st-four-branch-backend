const express = require('express');
const productRouter = require('./productRouter');
const cartRouter = require('./cartRouter');

const router = express.Router();

router.use('/products', productRouter.router);
router.use('/carts', cartRouter.router);

module.exports = router;
