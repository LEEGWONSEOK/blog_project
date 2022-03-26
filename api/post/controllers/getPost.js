// getPost : 포스트 조회

const Post = require('../../../models/post');

const getPost = (req, res, next) => {
  const { title, thumbnail, category, content } = req.body;
  Post.findOne({
    title,
    thumbnail,
    category,
    content,
    UserId: req.user.id,
  }).then(result => {
    console.log("✅ 데이터 추가 완료");
    res.json(result);
  }).catch(error => {
    console.error(error);
  });
};

module.exports = getPost;