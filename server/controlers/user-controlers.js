const {User} = require("../models");
const asyncHandler = require('../middlwares/asyncHandler');


exports.creatUser = asyncHandler(async (req, res, next) => {
  if (req.body) {
    await User.create(req.body, );
      const user = await User.findOne({username: req.body.username})
    res.json(user._id)
  }

  res.status(200)
});

exports.getAllUsers = async (req,res) => {
  const allUsers = await User.find({})
  res.json(allUsers)
}
