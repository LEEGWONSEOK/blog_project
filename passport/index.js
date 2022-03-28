// const passport = require('passport');
// const local = require('./localStrategy');
// // const google = require('./googleStrategy');
// // const kakao = require('./kakaoStrategy');

// const User = require('../models/user');

// module.exports = () => {
//   passport.serializeUser((user, done) => {              // serializeUser : 로그인 시 실행됨. req.session객체에 어떤 데이터 저장하는지 정함
//     done(null, user.id);    // 세션에 user id만 저장    // done(에러발생시, 저장할 데이터)
//   });

//   passport.deserializeUser((id, done) => {              // deserializeUser : 매 요청시 실행
//     User.findOne({ 
//       where: { id },
//       include: [{
//         model: User,
//         attributes: ['id', 'nickname'],
//         as: 'Followers'
//       }, {
//         model: User,
//         attributes: ['id', 'nickname'],
//         as: 'Followings'
//       }],
//     })
//       .then(user => done(null, user))   // req.user, req.isAuthenticated()
//       .catch(err => done(err));
//   });

//   local();       // 로컬 전략 등록
//   //google();      // 구글 전략 등록
//   //kakao();       // 카카오 전략 등록
// };
