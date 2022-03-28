// const passport = require('passport');
// const { User, Post, Comment, Hashtag } = require('../models');


// // 블로그 조회
// const getMyblog = (req, res) => {
//   res.render('blog');
// };

// // 포스트 생성 페이지 조회
// const getPost = (req, res, next) => {
//   res.render('write');
// };

// // 포스트 생성
// const postPost = (req, res, next) => {
//   const { title, thumbnail, category, content } = req.body;
//   console.log(req.body);
//   console.log(req.user.id);
//   Post.create({
//     title,
//     thumbnail,
//     category,
//     content,
//     UserId: req.user.id,
//   }).then(result => {
//     console.log("데이터 추가 완료");
//     res.json(result);
//   }).catch(error => {
//     console.error(error);
//   });
// };

// module.exports = {
//   getMyblog,
//   getPost,
//   postPost,
//   // postLogin,
//   // deleteLogin,
// }