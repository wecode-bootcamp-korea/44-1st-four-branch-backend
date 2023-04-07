const express = require('express');
<<<<<<< HEAD
const productRouter = require('./productRouter');
const cartRouter = require('./cartRouter');
=======

const productRouter = require('./productRouter');
>>>>>>> main
const userRouter = require('./userRouter');

const router = express.Router();

router.use('/products', productRouter.router);
<<<<<<< HEAD
router.use('/carts', cartRouter.router);
=======
>>>>>>> main
router.use('/users', userRouter.router);

module.exports = router;
