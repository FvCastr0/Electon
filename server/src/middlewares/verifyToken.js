const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) res.status(401).json({ msg: 'Unauthorized token' });

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userId = decoded.id;

    if (!req.userId) {
      return res.status(401).json({ msg: 'Unidentified user' });
    }

    next();
  } catch (e) {
    res.status(400).json({ msg: 'Invalid token' });
  }
};

module.exports = verifyToken;
