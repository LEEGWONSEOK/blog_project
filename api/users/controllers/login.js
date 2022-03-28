// login : 로그인(로컬)
// POST : /users/login

const passport = require('passport');

const User = require('../../../models/user');

// const login = (req, res, next) => {
//   User.findOne({
//     // where: { id: req.params.id }
//     where: { email: req.body.email }
//   }).then(result => {
//     console.log("✅ 로그인 완료");
//     res.json(result);
//   }).catch(error => {
//     console.error(error);
//   });
// };

const login = (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {                              // 서버 에러 경우
      console.error(authError);
      return next(authError);
    }
    if (!user) {                                  // 로그인 실패한 경우
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, (loginError) => {      // 로그인 성공한 경우 -> passport/index.js 이동
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      // 세션 쿠키를 브라우저로 보내준다
      return res.redirect('/');         // 로그인 성공!
    });
  })(req, res, next);      // middleware in middleware
};



module.exports = login;