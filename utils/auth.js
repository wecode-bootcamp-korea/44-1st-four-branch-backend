const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
const { catchAsync } = require('./error');

const loginReq = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const error = new Error('TOKEN_NEEDED');
    error.statusCode = 401;
    return next(error);
  }

  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  const user = await userService.getUserById(decoded.userId);

  if (!user) {
    const error = new Error('USER_DOES_NOT_EXIST');
    error.statusCode = 404;

    return next(error);
  }
  req.userId = decoded.userId;

  next();
});

module.exports = loginReq;
