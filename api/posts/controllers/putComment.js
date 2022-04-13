// putComment : 댓글 수정
// PUT : /{postId}/comments/{commentId}

const Comment = require('../../../models/comment');

const putComment = (req, res, next) => {
  let postId = req.params.postId;
  let commentId = req.params.commentId;
  const { comment, author } = req.body;
  Comment.update({
    comment,
    author,
  }, {
    where: { id: commentId, PostId: postId }
  }).then(result => {
    console.log("✅ 댓글 수정 완료");
    res.json(result);
  }).catch(error => {
    console.error(error);
  });
};

module.exports = putComment;