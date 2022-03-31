// const passport = require('passport');
// const KakaoStrategy = require('passport-kakao').Strategy;

// const User = require('../models/user');

// module.exports = () => {
//   passport.use(new KakaoStrategy({
//     clientID: process.env.KAKAO_CLIENT_ID,                       // 카카오 로그인에서 발급받은 REST API 키
//     clientSecret: process.env.KAKAO_CLIENT_SECRET,
//     callbackURL: '/auth/kakao/callback',                         // 카카오로부터 인증결과를 받을 라우터 주소
//   }, async (accessToken, refreshToken, profile, done) => {
//     console.log('kakao profile : ', profile);
//     try {
//       const exUser = await User.findOne({                        // 기존 카카오 계정이 있는지 조회
//         where: { snsID: profile.id, provider: 'kakao' },
//       });
//       if (exUser) {
//         done(null, exUser);
//       } else {
//         const newUser = await User.create({
//           email: profile._json && profile._json.kakao_account_email,
//           nick: profile.displayName,
//           snsId: profile.id,
//           provider: 'kakao',
//         });
//         done(null, newUser);
//       }
//     } catch (error) {
//       console.error(error);
//       done(error);
//     }
//   }));
// };