const express = require('express');
const productRouter = require('./productRouter');
const cartRouter = require('./cartRouter');
const userRouter = require('./userRouter');
const orderRouter = require('./orderRouter');

const router = express.Router();

router.use('/products', productRouter.router);
router.use('/carts', cartRouter.router);
router.use('/users', userRouter.router);
router.use('/orders', orderRouter.router);

module.exports = router;
