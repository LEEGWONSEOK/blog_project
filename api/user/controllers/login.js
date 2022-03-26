// login : 로그인(로컬)
// GET : /users/login

const bcrypt = require('bcrypt');
const passport = require('passport');

const User = require('../../../models/user');

const login = (req, res, next) => {
  User.findOne({
    where: { id: req.params.id }
  }).then(result => {
    console.log("✅ 로그인 완료");
    res.json(result);
  }).catch(error => {
    console.error(error);
  });
};

module.exports = login;