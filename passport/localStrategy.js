// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcrypt');

// const User = require('../models/user');

// // Login Strategy
// module.exports = () => {
//   passport.use(new LocalStrategy({          // LocalStrategy 1번째 인수 : 전략에 관한 설정
//     usernameField: 'email',       // req.body.email
//     passwordField: 'password',    // req.body.password
//   }, async (email, password, done) => {     // LocalStrategy 2번째 인수 : 전략 수행 함수 , done = passport.authenticate
//     try {
//       const exUser = await User.findOne({ where: { email } });            // 1.   유저DB에 일치하는 이메일 있는지 찾고
//       if (exUser) {
//         const result = await bcrypt.compare(password, exUser.password);   // 2.   있으면 bcrypt로 비밀번호까지 비교해보기
//         if (result) {
//           done(null, exUser);                                             // 3-1. 비밀번호까지 같으면 done 2번째 인수로 사용자 정보 넣음
//         } else {
//           done(null, false, {message: '비밀번호 일치 X'});                // 3-2. 다르면 로그인 실패
//         }
//       } else {
//         done(null, false, { message: '가입되지 않은 회원' });             // 1-2. 일치 이메일 X 경우
//       }
//     } catch (error) {
//       console.error(error);
//       done(error);
//     }
//   }))
// }

// done 함수 호출 이후 auth.js -> Log_in Router ( POST : /auth/login ) 콜백으로 이동