const { catchAsync } = require('../utils/error');
const userService = require('../services/userService');

const signUp = catchAsync(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastname || !email || !password) {
    const error = new Error('KEY ERROR');
    error.statusCode = 400;
    throw error;
  }
  await userService.signUp(firstName, lastName, email, password);

  res.status(201).json({ message: 'CREATED USER' });
});

const signIn = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const accessToken = await userService.signIn(email, password);
  res.status(200).json({ accessToken });
});

const addressInfo = catchAsync(async (req, res) => {
  const { country, postcode, detail, userid } = req.body;
  if (!country || !postcode || !detail || !userid) {
    const error = new Error('KEY ERROR');
    error.statusCode = 400;
    throw error;
  }
  await userService.addressInfo(country, postcode, detail, userid);
});

module.exports = {
  signUp,
  signIn,
  addressInfo,
};
