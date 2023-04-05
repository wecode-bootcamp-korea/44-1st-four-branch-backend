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

const signIn = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  try {
    const accessToken = await userService.signIn(email, password);
    res.status(200).json({ accessToken });
  } catch (err) {
    res.status(err.statusCode || 500).json({ accessToken });
  }
});

module.exports = {
  signUp,
  signIn,
};
