const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const orderRouter = require('./orderRouter');

router.use('/order', orderRouter.router);
router.use('/users', userRouter.router);

module.exports = router;
djfasdkfjdsakfjdsa;
dsfjhsadfj;
