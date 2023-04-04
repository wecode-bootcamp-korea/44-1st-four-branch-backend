const userDao = require('../models/userDao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const signUp = async (first_name, last_name, email, password) => {
  const emailValidation = new RegExp(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*[.]+[a-zA-Z]{2,3}$/i
  );
  const passwordValidation = new RegExp(
    '^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})'
  );
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  if (!emailValidation.test(email)) {
    const error = new Error('INVALID EMAIL');
    err.statusCode = 400;
    throw error;
  }
  if (!passwordValidation.test(password)) {
    const error = new Error('INVALID PASSWORD');
    err.statusCode = 400;
    throw error;
  }
  const signUp = await userDao.signUp(
    first_name,
    last_name,
    email,
    hashedPassword
  );
  return signUp;
};

module.exports = {
  signUp,
};
