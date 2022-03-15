const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');

// 회원가입 조회
const getJoin = (req, res, next) => {
  console.log('getjoin');
  res.render("join");
}

// 회원가입 Ctrl
const postJoin = async (req, res, next) => {     // 로그인 'X'인 경우만 사용
  const { email, nickname, password, githubUrl, introduce } = req.body;                       // req.body에서 email, nick, password만 빼서 사용
  console.log(req.body);
  try {
    const exUser = await User.findOne({ where: { email } });        // 기존에 동일 email 가입자가 있는지
    if (exUser) {                                           
      return res.redirect('./join?error=exist');                    // 있다면 에러(주소뒤 쿼리스트링) 표시
    }
    const hash = await bcrypt.hash(password, 12);                   // 없다면 비밀번호 암호화
    await User.create({
      email,
      nickname,
      password: hash,
      githubUrl,
      introduce,
    });
    return res.redirect('/users/login');    
  } catch (error) {
    console.error(error);
    return next(err);
  }
}

// 회원탈퇴 Ctrl
// const deleteJoin = async (req, res, next) => {     // 로그인 'X'인 경우만 사용
  
// };

// 로그인 조회
const getLogin = (req, res, next) => {
  res.render("login");
  console.log('getLogin');
}


// 로그인 Ctrl
const postLogin = (req, res, next) => {
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

// 로그아웃 Ctrl
const deleteLogin = (req, res) => {
  req.logout();             // 서버에 세션쿠키 지움(로그인 풀림)
  req.session.destroy();    // 세션 자체 없애기
  //req.redirect('/users/login');
  res.redirect('/users/login');
};

// 회원정보 조회
// const getUser

// // 회원정보 변경
// const patchUser

module.exports = {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  deleteLogin,
}