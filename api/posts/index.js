// post 라우터(comment 포함)
// URI : /posts

const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');

// Post Controller
const getPost = require('./controllers/getPost');
const getPostAll = require('./controllers/getPostAll');
const getPostCategory = require('./controllers/getPostCategory');
const postPost = require('./controllers/postPost');
const patchPost = require('./controllers/patchPost');
const deletePost = require('./controllers/deletePost');

// Comment Controller
const postComment = require('./controllers/postComment');
//const getComment = require('./controllers/getComment');
const putComment = require('./controllers/putComment');
const deleteComment = require('./controllers/deleteComment');

const router = express.Router();

// Comment Router
router.post('/:postId/comments', isLoggedIn, postComment);                // 댓글 생성
//router.get('/:postId/comments', isLoggedIn, getComment);                  // 전체 댓글 조회 -> 포스트 조회에 넣자
router.put('/:postId/comments/:commentId', isLoggedIn, putComment);       // 댓글 수정
router.delete('/:postId/comments/:commentId', isLoggedIn, deleteComment); // 댓글 삭제

// Post Router
router.post('/', isLoggedIn, postPost);                     // 포스트 생성
router.get('/:postId', isLoggedIn, getPost);                // 단일 포스트 조회
router.get('/users/:postId', isLoggedIn, getPostAll);       // 전체 포스트 조회
router.get('/users/:userId/categories/:postCategory', isLoggedIn, getPostCategory);  // 카테고리별 포스트 조회
router.patch('/:postId', isLoggedIn, patchPost);            // 포스트 수정
router.delete('/:postId', isLoggedIn, deletePost);          // 포스트 삭제

module.exports = router;