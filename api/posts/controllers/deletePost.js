// deletePost : 포스트 삭제
// DELETE : /posts/{postId}

const Post = require('../../../models/post');

const deletePost = (req, res, next) => {
  let postId = req.params.postId;
  Post.destroy({
    where: { id: postId }
  }).then(result => {
    console.log("✅ 포스터 삭제 완료");
    res.json(result);
  }).catch(error => {
    console.error(error);
  });
};

module.exports = deletePost;