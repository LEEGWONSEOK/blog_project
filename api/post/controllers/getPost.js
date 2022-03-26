// getPost : 단일 포스트 조회
// GET : /posts/{postId}

const Post = require('../../../models/post');

const getPost = (req, res, next) => {
  Post.findOne({
    where: { id: req.params.id }
  }).then(result => {
    console.log("✅ 단일 포스트 조회 완료");
    res.json(result);
  }).catch(error => {
    console.error(error);
  });
};

module.exports = getPost;