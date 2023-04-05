const appDataSource = require('./appDataSource');

const signUp = async (first_name, last_name, email, password) => {
  try {
    const result = await appDataSource.query(
      `INSERT INTO users(
        first_name,
        last_name,
        email,
        password,
        point,
        agreements
      ) VALUES (?, ?, ?, ?, 100000, json_object(1,"true",2,"true"))
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

const signIn = async (email) => {
  try {
    const logIn = await appDataSource.query(
      `SELECT
      id,
      email,
      password
      FROM users
      WHERE users.email = ?
      `,
      [email]
    );
    return logIn;
  } catch (err) {
    err.message = 'INVALID DATA';
    err.statusCode = 400;
    throw err;
  }
};

module.exports = {
  signUp,
  signIn,
};
