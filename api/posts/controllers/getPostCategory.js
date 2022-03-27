// getPostCategory : 카테고리별 포스트 조회
// GET : /posts/users/{userId}/categories/{postCategory}

const Post = require('../../../models/post');

const getPostCategory = (req, res, next) => {
  let userId = req.params.userId;
  let postCategory = req.params.postCategory;
  Post.findAll({
    where: {
      UserId: userId,
      category: postCategory
    }
  }).then(result => {
    console.log("✅ 카테고리별 데이터 리스트 조회 완료");
    res.json(result);
  }).catch(error => {
    console.error(error);
  });
};

module.exports = getPostCategory;