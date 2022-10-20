const User = require('../models/user');

exports.login = async (req, res) => {
  const { email, pass } = req.body;

  const user = await User
    .findOne({ email })
    .select('+pass');

  const isMatched = await user.matchPassword(pass);

  if (isMatched) {
    const token = await user.getJwtToken()
    res.json(token);
  }


}

