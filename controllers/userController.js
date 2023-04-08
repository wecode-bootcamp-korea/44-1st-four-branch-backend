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
  const accessToken = await userService.signIn(email, password);
  res.status(200).json({ accessToken });
});

const addressInfo = catchAsync(async (req, res) => {
  const { country, postcode, detail } = req.body;
  const userId = req.userId;
  if (!country || !postcode || !detail) {
    const error = new Error('KEY ERROR');
    error.statusCode = 400;
    throw error;
  }
  await userService.addressInfo(country, postcode, detail, userId);
  res.status(201).json({ message: 'ADDRESS REGIST SUCESS' });
});

module.exports = {
  signUp,
  signIn,
  addressInfo,
};
