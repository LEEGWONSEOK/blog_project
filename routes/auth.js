const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

// // Sign_in Router ( POST : /auth/join) ? 모달창으로 할려고 하는데 어케할지?
// router.post('/join', isNotLoggedIn, async (req, res, next) => {     // 로그인 'X'인 경우만 사용
//   const { email, nick, password } = req.body;                       // req.body에서 email, nick, password만 빼서 사용
//   try {
//     const exUser = await User.findOne({ where: { email } });        // 기존에 동일 email 가입자가 있는지
//     if (exUser) {                                           
//       return res.redirect('./join?error=exist');                    // 있다면 에러(주소뒤 쿼리스트링) 표시
//     }
//     const hash = await bcrypt.hash(password, 12);                   // 없다면 비밀번호 암호화
//     await User.create({
//       email,
//       nick,
//         password: hash,
//     });
//     return res.redirect('/');    
//   } catch (error) {
//     console.error(error);
//     return next(err);
//   }
// })

// // Log_in Router ( POST : /auth/login )
// router.post('/login', isNotLoggedIn, (req, res, next) => {
//   passport.authenticate('local', (authError, user, info) => {
//     if (authError) {                              // 서버 에러 경우
//       console.error(authError);
//       return next(authError);
//     }
//     if (!user) {                                  // 로그인 실패한 경우
//       return res.redirect(`/?loginError=${info.message}`);
//     }
//     return req.login(user, (loginError) => {      // 로그인 성공한 경우 -> passport/index.js 이동
//       if (loginError) {
//         console.error(loginError);
//         return next(loginError);
//       }
//       // 세션 쿠키를 브라우저로 보내준다
//       return res.redirect('/');         // 로그인 성공!
//     });
//   })(req, res, next);      // middleware in middleware
// });

// // Log_out Router ( GET : /auth/logout )
// router.get('/logout', isLoggedIn, (req, res) => {
//   req.logout();             // 서버에 세션쿠키 지움(로그인 풀림)
//   req.session.destroy();    // 세션 자체 없애기
//   req.redirect('/');
// });

// // Log_in Router(Google) ( GET : /auth/google )
// router.get('/google', passport.authenticate('google'));

// router.get('/google/callback', passport.authenticate('google', {
//   failureRedirect: '/',
// }), (req, res) => {
//   res.redirect('/');
// });

// // Log_in Router(kakao) ( GET : /auth/kakao )
// router.get('/kakao', passport.authenticate('kakao'));

// router.get('/kakao/callback', passport.authenticate('kakao', {
//   failureRedirect: '/',      // 로그인 실패시 이동할 곳
// }), (req, res) => {
//   res.redirect('/');         // 로그인 성공시 이동할 곳
// });

module.exports = router;