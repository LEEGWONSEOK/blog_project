// deleteUser : 회원탈퇴
// DELETE : /users/join

const bcrypt = require('bcrypt');
const passport = require('passport');

const User = require('../../../models/user');

const deleteUser = (req, res, next) => {
  User.findOne({
    where: { id: req.params.id }
  }).then(result => {
    console.log("✅ 회원탈퇴 완료");
    res.json(result);
  }).catch(error => {
    console.error(error);
  });
};

module.exports = deleteUser;