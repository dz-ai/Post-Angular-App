const mongoose = require('mongoose');

const Post = mongoose.model('Post', new mongoose.Schema({
  username:String,
  post:String,
  comments:[{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
  createdAt: {
    type: Date,
    default: Date.now()
  }
}))

module.exports = Post;
