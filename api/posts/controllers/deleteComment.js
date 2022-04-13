// deleteComment : 댓글 삭제
// DELETE : /{postId}/comments/{commentId}

const Comment = require('../../../models/comment');

const deleteComment = (req, res, next) => {
  let postId = req.params.postId;
  let commentId = req.params.commentId;
  Comment.destroy({
    where: { id: commentId, PostId: postId }
  }).then(result => {
    console.log("✅ 댓글 삭제 완료");
    res.json(result);
  }).catch(error => {
    console.error(error);
  });
};

module.exports = deleteComment;