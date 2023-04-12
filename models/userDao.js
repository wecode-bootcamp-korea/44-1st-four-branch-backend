const appDataSource = require('./appDataSource');

const creatUser = async (firstName, lastName, email, password) => {
  try {
    const result = await appDataSource.query(
      `INSERT INTO users(
        first_name,
        last_name,
        email,
        password,
        point
      ) VALUES (?, ?, ?, ?, 990000)
      `,
      [firstName, lastName, email, password, email]
    );
    return result;
  } catch (err) {
    err.message = 'INVALID DATA';
    err.statusCode = 400;
    throw err;
  }
};

const duplicationEmail = async (email) => {
  try {
    const [result] = await appDataSource.query(
      `SELECT EXISTS (
        SELECT
        id
        FROM users
        WHERE email = ?
        ) registerd 
        `,
      [email]
    );
    return !!parseInt(result.registerd);
  } catch (err) {
    err.message = 'INVALID DATA';
    err.statusCode = 400;
    throw err;
  }
};

const getUserByEmail = async (email) => {
  try {
    const [logIn] = await appDataSource.query(
      `SELECT
      id,
      email,
      password,
      last_name userLastName
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

const addressInfo = async (country, postcode, detail, userId) => {
  try {
    return await appDataSource.query(
      `INSERT INTO addresses (
        country ,
        postcode ,
        detail,
        user_id 
      ) VALUES (?, ?, ?, ?)
      `,
      [country, postcode, detail, userId]
    );
  } catch (err) {
    err.message = 'INVALID DATA';
    err.statusCode = 400;
    throw err;
  }
};

const getUserById = async (userId) => {
  try {
    const [user] = await appDataSource.query(
      `SELECT
        id,
        first_name,
        last_name,
        email,
        point,
        agreements,
        created_at,
        updated_at
      FROM users
      WHERE id = ?`,
      [userId]
    );
    return user;
  } catch (err) {
    err.message = 'DATABASE_ERROR';
    err.statusCode = 400;
    throw err;
  }
};

module.exports = {
  creatUser,
  getUserByEmail,
  duplicationEmail,
  addressInfo,
  getUserById,
};
