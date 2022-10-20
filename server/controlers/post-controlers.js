const {Post, User} = require("../models");


exports.creatPost = async (req, res) => {
  const {post, token} = req.body;
  const userName = await User.findById(token);

  const newPost = await Post.create({
    username: userName.username,
    post: post
  })

  await User.findByIdAndUpdate(token, {
    $push: {
      posts: newPost._id
    }
  }, {"new": true, "upsert": true})


  res.json(newPost)

}

exports.getAllPosts = async (req, res) => {
  const allPosts = await Post.find().limit(15).sort([['createdAt', -1]]);
  allPosts ?
    res.json(allPosts) :
    'no posts to show';

}

exports.getUserPosts = async (req, res) => {

  const { username } = req.body;
  const userId = req.userId.id;
  if (username !== 'null' && username !== undefined) {

    const posts = await User.findOne({username})
      .populate({
        path: 'posts',
        options: {
          sort: { createdAt: -1 }
        }
      });

    res.json(posts.posts);

  } else {
console.log(userId)

    const posts = await User.findById(req.userId.id)
      .populate({
        path: 'posts',
        options: {
          sort: { createdAt: -1 }
        }
      });

    res.json(posts.posts);

  }
}



