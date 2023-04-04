const appDataSource = require('./appDataSource');

const signUp = async (first_name, last_name, email, password) => {
  try {
    const result = await appDataSource.query(
      `INSERT INTO users(
        first_name,
        last_name,
        email,
        password,
        point
      ) VALUES (?, ?, ?, ?, 100000)
      `,
      [first_name, last_name, email, password]
    );
    return result;
  } catch (err) {
    err.message = 'INVALID DATA';
    err.statusCode = 400;

    throw err;
  }
};

module.exports = {
  signUp,
};
