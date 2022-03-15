const express = require('express');
const path = require('path');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const postsCtrl = require("../controllers/postsCtrl");
const router = express.Router();


// 포스트 생성 Router ( POST : /users/join )
router.get('/', isLoggedIn, postsCtrl.getPost);
router.post('/', isLoggedIn, postsCtrl.postPost);


// router.get('/board', function(req, res, next) {
//   res.render('show');
//   });
  

module.exports = router