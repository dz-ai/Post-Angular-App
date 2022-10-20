const express = require('express');
const {creatPost, getAllPosts, getUserPosts} = require("../controlers/post-controlers");
const {tokenVerification} = require("../middlwares/aout-midd");

const router = express.Router({mergeParams: true});

router.get('/posts',getAllPosts)
router.post('/user-posts',tokenVerification ,getUserPosts)
router.post('/new-post',creatPost);




module.exports = router;
