const express = require('express');

const userController = require('../controllers/userController');
const loginReq = require('../utils/auth');

const router = express.Router();

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);
router.post('/address', loginReq, userController.addressInfo);

module.exports = {
  router,
};
