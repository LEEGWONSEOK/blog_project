// 현재 로그인 O
exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {            // 로그인 O => true
    next()
  } else {
    res.status(403).send('로그인 필요')
  }
}

// 현재 로그인 X
exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next()
  } else {
    const message = encodeURIComponent('로그인 했음')
    res.redirect(`/?error=${message}`)
  }
}

// ※ 분리시키는 이유?
// 로그인   상태 : 로그아웃 O, 로그인 X, 글쓰기 O 등
// 로그아웃 상태 : 로그아웃 X, 로그인 O, 글쓰기 X 등
// 서로 할수 있는 권한이 다르기 때문
