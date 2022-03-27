// post 라우터
// URI : /users

const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const {
  postUser,
  deleteUser,
  login,
  logout,
  getUser,
  patchUser
} = require('./controllers');

const router = express.Router();

// User Router
router.post('/join', isNotLoggedIn, postUser);    // 회원가입(로컬)
router.delete('/join', isLoggedIn, deleteUser);   // 회원탈퇴(로컬)
router.post('/login', isNotLoggedIn, login);      // 로그인(로컬)
router.get('/logout', isLoggedIn, logout);        // 로그아웃(Get)
router.get('/:userId', isLoggedIn, getUser);      // 회원정보 조회
router.patch('/:userId', isLoggedIn, patchUser);  // 회원정보 변경

module.exports = router;