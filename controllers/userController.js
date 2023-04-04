const { catchAsync } = require('../utils/error');
const userService = require('../services/userService');

const signUp = catchAsync(async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!first_name || !last_name || !email || !password) {
    const error = new Error('KEY ERROR');
    error.statusCode = 400;
    throw error;
  }
  const signUp = await userService.signUp(
    first_name,
    last_name,
    email,
    password
  );

  res.status(201).json({ message: 'CREATED USER' });
});

module.exports = {
  signUp,
};
