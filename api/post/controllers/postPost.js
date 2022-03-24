const Post = require('../../../models/post');

const postPost = (req, res, next) => {
  const { title, thumbnail, category, content } = req.body;
  Post.create({
    title,
    thumbnail,
    category,
    content,
    UserId: req.user.id,
  }).then(result => {
    console.log("데이터 추가 완료");
    res.json(result);
  }).catch(error => {
    console.error(error);
  });
};

module.exports = postPost;