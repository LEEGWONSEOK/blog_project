// getPostCategory : 카테고리별 포스트 조회
// GET : /posts/users/{userId}/categories/{postCategory}

const { Post, User } = require('../../../models');

const getPostCategory = (req, res, next) => {
  Post.findAll({
    where: {}
  }).then(result => {
    console.log("✅ 카테고리별 데이터 리스트 조회 완료");
    res.json(result);
  }).catch(error => {
    console.error(error);
  });
};

module.exports = getPostCategory;