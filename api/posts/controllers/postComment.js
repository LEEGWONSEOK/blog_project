// postComment : 댓글 생성
// POST : /posts/{postId}/comments

const Comment = require('../../../models/comment');

const postComment = (req, res, next) => {
  const { comment, author } = req.body;
  let postId = req.params.postId;
  Comment.create({
    comment,
    author: req.user.id,
    PostId: postId,
  }).then(result => {
    console.log("✅ 댓글 생성 완료");
    res.json(result);
  }).catch(error => {
    console.error(error);
  });
};

module.exports = postComment;