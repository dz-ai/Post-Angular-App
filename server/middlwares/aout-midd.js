const jwt = require('jsonwebtoken');

exports.tokenVerification = async function ( req, res, next) {
  const token = req.headers.auth.split(' ')[1];
  console.log(token);
  const userId = jwt.verify(token, 'lsdjhgksjdhgdsjkhqksahg');
  console.log(userId);
  if (userId) {
    req.userId = userId;
    next()
  }
}
