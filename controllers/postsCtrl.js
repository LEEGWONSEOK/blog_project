const passport = require('passport');
const { User, Post, Comment, Hashtag } = require('../models/user');

const postPost = (req, res) => {
  req.logout();             // 서버에 세션쿠키 지움(로그인 풀림)
  req.session.destroy();    // 세션 자체 없애기
  req.redirect('/');
};


module.exports = {
  postPost,
  postLogin,
  deleteLogin,
}