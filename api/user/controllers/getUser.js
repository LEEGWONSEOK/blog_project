// getUser : 회원정보 조회
// DELETE : /users/:userId

const bcrypt = require('bcrypt');
const passport = require('passport');

const User = require('../../../models/user');

const getUser = (req, res, next) => {
  User.findOne({
    where: { id: req.params.id }
  }).then(result => {
    console.log("✅ 회원정보 조회 완료");
    res.json(result);
  }).catch(error => {
    console.error(error);
  });
};

module.exports = getUser;