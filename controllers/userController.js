const { catchAsync } = require('../utils/error');
const userService = require('../services/userService');

const signUp = catchAsync(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    const error = new Error('KEY ERROR');
    error.statusCode = 400;
    throw error;
  }
  await userService.signUp(firstName, lastName, email, password);

  res.status(201).json({ message: 'CREATED USER' });
});

const signIn = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const resUser = await userService.signIn(email, password);
  res.status(200).json(resUser);
});

module.exports = {
  signUp,
  signIn,
};
