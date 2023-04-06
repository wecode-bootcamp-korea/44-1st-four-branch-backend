const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const productRouter = require('./productRouter');

router.use('/products', productRouter.router);
router.use('/users', userRouter.router);

module.exports = router;
