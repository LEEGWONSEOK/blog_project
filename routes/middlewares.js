// 현재 로그인 O
exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {            // 로그인 O : req.isAuthenticated() = true
    next();
  } else {
    res.status(403).send('로그인 필요');
  }
};

// 현재 로그인 X
exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent('로그인 했음');
    res.redirect(`/?error=${message}`);
  }
};