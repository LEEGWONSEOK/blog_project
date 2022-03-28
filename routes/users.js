// const express = require('express');
// const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
// const usersCtrl = require("../controllers/usersCtrl");
// const router = express.Router();


// // 회원가입 Router ( POST : /users/join )
// router.get('/join', isNotLoggedIn, usersCtrl.getJoin);
// router.post('/join', isNotLoggedIn, usersCtrl.postJoin);

// // // 회원탈퇴 Router ( POST : /users/join )
// // router.delete('/join', isLoggedIn, usersCtrl.deleteJoin);


// // 로그인 ( POST : /users/login )
// router.get('/login', isNotLoggedIn, usersCtrl.getLogin);
// router.post('/login', isNotLoggedIn, usersCtrl.postLogin);

// // 로그아웃 ( DELETE : /users/login )
// router.get('/logout', isLoggedIn, usersCtrl.deleteLogin);


// // Sign_in Router ( POST : /users/join )
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

// // Log_in Router ( POST : /users/login )
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

// // Log_out Router ( DELETE : /users/login )
// router.delete('/logout', isLoggedIn, (req, res) => {
//   req.logout();             // 서버에 세션쿠키 지움(로그인 풀림)
//   req.session.destroy();    // 세션 자체 없애기
//   req.redirect('/');
// });

module.exports = router