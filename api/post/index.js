const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');

const {
  getPost,
  postPost
} = require('./controllers')

const router = express.Router();


// 포스트 생성 Router ( POST : /users/join )
router.get('/', isLoggedIn, getPost);
router.post('/', isLoggedIn, postPost);




module.exports = router;


// const getPost = require("./controllers/getPost");
// const postPost = require("./controllers/postPost");
