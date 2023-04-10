const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userDao = require('../models/userDao');
const {
  emailValidationCheck,
  passwordValidationCheck,
} = require('../utils/validation-check');

const signUp = async (firstName, lastName, email, password) => {
  await emailValidationCheck(email);
  await passwordValidationCheck(password);
  const emailcheck = await userDao.duplicationEmail(email);
  if (emailcheck) {
    const error = new Error('CANT USE EMAIL');
    error.statusCode = 400;
    throw error;
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  return userDao.creatUser(firstName, lastName, email, hashedPassword);
};

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);
  if (!user) {
    const err = new Error('INVALID DATA');
    err.statusCode = 400;
    throw err;
  }

  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    const error = new Error('INVALID DATA');
    error.statusCode = 400;
    throw error;
  }

  const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
    expiresIn: '5d',
  });
  return token;
};

const addressInfo = async (country, postcode, detail, email) => {
  return await userDao.addressInfo(country, postcode, detail, email);
};

const getUserById = async (userId, lastName) => {
  return userDao.getUserById(userId, lastName);
};

module.exports = {
  signUp,
  signIn,
  addressInfo,
  getUserById,
};
