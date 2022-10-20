const express = require('express');

const { login } = require('../controlers/auth-controlers')

const router = express.Router({mergeParams: true});

router.route('/login').post(login);

module.exports = router;
