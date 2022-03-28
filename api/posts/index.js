// post 라우터
// URI : /posts

const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');

// User Controller
const getPost = require('./controllers/getPost');
const getPostAll = require('./controllers/getPostAll');
const getPostCategory = require('./controllers/getPostCategory');
const postPost = require('./controllers/postPost');
const patchPost = require('./controllers/patchPost');
const deletePost = require('./controllers/deletePost');

const router = express.Router();

// Post Router
router.post('/', isLoggedIn, postPost);             // 포스트 생성
router.get('/:postId', isLoggedIn, getPost);        // 단일 포스트 조회
router.get('/users', isLoggedIn, getPostAll);       // 전체 포스트 조회
router.get('/users/:userId/categories/:postCategory', isLoggedIn, getPostCategory);  // 카테고리별 포스트 조회
router.patch('/:postId', isLoggedIn, patchPost);    // 포스트 수정
router.delete('/:postId', isLoggedIn, deletePost);  // 포스트 삭제

module.exports = router;