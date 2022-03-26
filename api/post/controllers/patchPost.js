// getPostCategory : 카테고리별 포스트 조회
// PATCH : /posts/{postId}

const { Post, User } = require('../../../models');

const patchPost = (req, res, next) => {
  Post.findAll({
    where: { id: req.params.id }
  }).then(result => {
    console.log("✅ 포스트 수정 완료");
    res.json(result);
  }).catch(error => {
    console.error(error);
  });
};

module.exports = patchPost;