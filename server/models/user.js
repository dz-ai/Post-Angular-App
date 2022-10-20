const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const User = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'pleas enter your name'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'pleas enter valid email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ]
  },
  pass: {
    type: String,
  required: [true, 'pleas enter 6 letter/number/signs password'],
    minLength: 6,
    select: false
  },
  posts:[{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
  comments:[{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

User.pre('save', async function (next) {
  console.log(this.pass)

  if (!this.isModified('pass')){
      next()
  }
  const salt = await bcrypt.genSalt(10);
  this.pass = await bcrypt.hash(this.pass, salt);
});

User.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.pass)
};

User.methods.getJwtToken = async function () {
   return  await jwt.sign({id: this._id}, 'lsdjhgksjdhgdsjkhqksahg');
}

module.exports = mongoose.model('User', User);
