const express = require('express');
const orderRouter = require('./orderRouter');
const router = express.Router();

router.use('/order', orderRouter.router);

module.exports = router;
