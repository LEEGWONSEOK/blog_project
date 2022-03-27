// patchPost : 포스트 수정
// PATCH : /posts/{postId}

const Post = require('../../../models/post');

const patchPost = (req, res, next) => {
  let postId = req.params.postId;
  const { title, thumbnail, category, content } = req.body;
  Post.update({
    title,
    thumbnail,
    category,
    content
  }, {
    where: { id: postId }
  }).then(result => {
    console.log("✅ 포스트 수정 완료");
    res.json(result);
  }).catch(error => {
    console.error(error);
  });
};

module.exports = patchPost;