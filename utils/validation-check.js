const emailValidationCheck = (email) => {
  const emailcheck = new RegExp(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*[.]+[a-zA-Z]{2,3}$/i
  );

  if (!emailcheck.test(email)) {
    const error = new Error('INVALID EMAIL');
    error.statusCode = 400;
    throw error;
  }
};

const passwordValidationCheck = (password) => {
  const passwordcheck = new RegExp(
    '^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})'
  );

  if (!passwordcheck.test(password)) {
    const error = new Error('INVALID PASSWORD');
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  emailValidationCheck,
  passwordValidationCheck,
};
