const express = require('express');

const productRouter = require('./productRouter');
const userRouter = require('./userRouter');
const orderRouter = require('./orderRouter');

const router = express.Router();

router.use('/products', productRouter.router);
router.use('/users', userRouter.router);
router.use('/orders', orderRouter.router);

module.exports = router;
