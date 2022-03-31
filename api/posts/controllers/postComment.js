// postComment : 댓글 생성
// POST : /posts/{postId}/comments

const Post = require('../../../models/post');
const Comment = require('../../../models/comment');

const postComment = (req, res, next) => {
  const { comment, author } = req.body;
  Comment.create({
    author: req.user.id,
    comment,
    PostId // 쿼리스트링에 있는 포스트 정보 넣자req.user.id,
  }).then(result => {
    console.log("✅ 포스트 생성 완료");
    res.json(result);
  }).catch(error => {
    console.error(error);
  });
};

module.exports = postPost;