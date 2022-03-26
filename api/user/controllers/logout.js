// logout : 로그아웃(로컬)
// GET : /users/logout

const logout = (req, res) => {
  req.logout();             // 서버에 세션쿠키 지움(로그인 풀림)
  req.session.destroy();    // 세션 자체 없애기
  res.redirect('/users/login');
};

module.exports = logout;