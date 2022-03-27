// getPost : 단일 포스트 조회
// GET : /posts/{postId}

const Post = require('../../../models/post');

const getPost = (req, res, next) => {
  let postId = req.params.postId;
  Post.findOne({
    where: { id: postId }
  }).then(result => {
    console.log("✅ 단일 포스트 조회 완료");
    res.json(result);
  }).catch(error => {
    console.error(error);
  });
};

module.exports = getPost;