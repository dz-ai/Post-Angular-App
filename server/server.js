const express  = require('express'),
      cors     = require('cors'),
      mongoose = require('mongoose');


const app = express();
app.use(express.json());
app.use(cors());


// const {User, Post} = require("./models");
// (async ()=> await User.deleteMany({}))();
//
// (async ()=> await Post.deleteMany({}))();


const
  UserRoute = require('./routes/users-route');
  PostRout = require('./routes/posts-route');
  Auth = require('./routes/auth-route');

app.use('/users', UserRoute);
app.use('/posts', PostRout);
app.use('/auth', Auth);



mongoose.connect('mongodb://localhost:27017/my-facebook', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('connect'))
  .catch(err => console.error(err));

app.listen(7000, () => console.log(7000))
