const passport = require('passport');
const { User, Post, Comment, Hashtag } = require('../models');



const getMyblog = (req, res) => {
  res.render('blog');
};
// const getPost = (req, res) => {
//   req.logout();             
//   req.session.destroy();    
//   req.redirect('/');
// };

const getPost = (req, res, next) => {
  res.render('write');
};

const postPost = (req, res, next) => {
  const { title, thumbnail, category, content } = req.body; 
  console.log(req.body);
  console.log(req.user.id);
  try {
    Post.create({
      title,
      thumbnail,
      category,
      content,
      UserId: req.user.id,
    }).then( result => {
      console.log("데이터 추가 완료");
      res.json(result);
    }).catch( err => {
      console.log("데이터 추가 실패");
    })
    return res.redirect('/');   
  } catch (error) {
    console.error(error);
    return next(err);
  }
};

module.exports = {
  getMyblog,
  getPost,
  postPost,
  // postLogin,
  // deleteLogin,
}