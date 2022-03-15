const express = require('express');
const path = require('path');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const postsCtrl = require("../controllers/postsCtrl");
const router = express.Router();




module.exports = router