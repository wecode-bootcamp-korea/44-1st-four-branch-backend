const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const loginReq = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).json({ message: 'TOKEN_NEEDED' });
    }

    const decoded = jwt.verify(token, secretKey);
    req.userId = decoded.userId;
    next();
  } catch {
    return res.status(400).json({ message: 'AUTHORIZATION_ERROR' });
  }
};

module.exports = loginReq;
