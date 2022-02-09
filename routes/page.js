const express = require('express')
const path = require('path')
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')
const { Post, User, Hashtag } = require('../models')
const router = express.Router()

// isLoggedIn: all << 로그인O 전체적으로 다 들어가는 부분
// router.use(isLoggedIn, (req, res, next) => {
//   res.render('index', { login: '로그인' })
//   // 검색버튼, 글쓰기, 프로필
//   next()
// })

// isNotLoggedIn: all << 로그인X 전체적으로 다 들어가는 부분
// router.use(isNotLoggedIn, (req, res, next) => {
//   // 검색버튼, 로그인
//   next()
// })

// User's Blog main Page
router.get('/@:user', (req, res) => {
  res.send(`hello, ${req.params.user}`)
  // blog_main 요청
  // [db]
  // user > email앞단(req.params.user), nick, introduce  
  // post > p_title, p_thumbnail, category, create_at, 
  // like_count, post_count, follower_count, following_count
})

// 아마 팔로우 카운트일듯?
router.use((req, res, next) => {
  res.locals.user = req.user
  res.locals.followerCount = req.user ? req.user.Followers.length : 0
  res.locals.followingCount = req.user ? req.user.Followings.length : 0
  res.locals.followerIdList = req.user ? req.user.Followings.map(f => f.id) : []
  next()
})

// Sign_in Page
router.get('/join', isNotLoggedIn, (req, res) => {
  res.send('회원가입 페이지')
  // 
})

// Blog_postEdit Page
router.get('/write', isLoggedIn, (req, res) => {
  res.send('글쓰기 페이지')
})

// search tag
router.get('/tags/:tag', (req, res) => {
  res.send(`tag search : ${req.params.tag}`)
})

// Hashtag Page(default)
router.get('/tags', (req, res) => {
  res.send('Hash tag main page')
})

// Home Page
// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../views/index.html'))
  
// })
router.get('/', async (req, res) => {
  const users = await User.findAll()
  const result = []

  for (const user of users) {
    result.push({
      id: user.id,
      email: user.email,
      nick: user.nick,
      password: user.password,
      introduce: user.introduce,
      provider: user.provider,
      profile: user.profile,
      snsId: user.snsId,
    });
  };

  res.send(result);
});

// 해시태그 라우터
router.get('/hashtag', async (req, res, next) => {
  const query = req.query.hashtag;
  if (!query) {
    return res.redirect('/');
  }
  try {
    const hashtag = await Hashtag.findOne({ where: { title: query } });
    let posts = [];
    if (hashtag) {
      posts = await hashtag.getPosts({ include: [{ model: User }] });
    }

    return res.render('main', {
      title: `${query} | NodeBird`,
      twits: posts,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router