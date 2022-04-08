// post 라우터
// URI : /users

const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');

// User Controller
const postUser = require('./controllers/postUser');
const deleteUser = require('./controllers/deleteUser');
const login = require('./controllers/login');
const logout = require('./controllers/logout');
const getUser = require('./controllers/getUser');
const patchUser = require('./controllers/patchUser');
//const { upload, postProfileImg } = require('./controllers/postProfileImg');

const router = express.Router();

// User Router
router.post('/join', isNotLoggedIn, postUser);    // 회원가입(로컬)
router.delete('/join', isLoggedIn, deleteUser);   // 회원탈퇴(로컬)
router.post('/login', isNotLoggedIn, login);      // 로그인(로컬)
router.get('/logout', isLoggedIn, logout);        // 로그아웃(Get)
router.get('/:userId', isLoggedIn, getUser);      // 회원정보 조회
router.patch('/:userId', isLoggedIn, patchUser);  // 회원정보 변경
//outer.post('/profileImg', isLoggedIn, upload.single('img'), postProfileImg);  // 프로필이미지 업로드


module.exports = router;