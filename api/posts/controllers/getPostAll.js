// getPostAll : 전체 포스트 조회
// GET : /posts/users/{userId}

const Post = require('../../../models/post');

const getPostAll = (req, res, next) => {
  let userId = req.params.userId;
  Post.findAll({
    where: { UserId: userId }
  }).then(result => {
    console.log("✅ 전체 포스트 조회 완료");
    res.json(result);
  }).catch(error => {
    console.error(error);
  });
};

module.exports = getPostAll;