// postUser : 회원가입
// GET : /users/join

const bcrypt = require('bcrypt');
const passport = require('passport');

const User = require('../../../models/user');

const postUser = async (req, res, next) => {     // 로그인 'X'인 경우만 사용
  const { email, nickname, password, githubUrl, introduce } = req.body;  // req.body에서 email, nick, password만 빼서 사용
  try {
    const exUser = await User.findOne({ where: { email } });  // 기존에 동일 email 가입자가 있는지
    if (exUser) {
      return res.redirect('./join?error=exist');  // 있다면 에러(주소뒤 쿼리스트링) 표시
    }
    const hash = await bcrypt.hash(password, 12);  // 없다면 비밀번호 암호화
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

module.exports = postUser;