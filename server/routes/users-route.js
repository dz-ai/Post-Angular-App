const express = require('express'),
       models = require("../models/index");
const {creatUser, getAllUsers} = require("../controlers/user-controlers");

const router = express.Router({mergeParams: true});

router.route('/')
  .post(creatUser);

router.route('/all')
  .get(getAllUsers);

module.exports = router;
