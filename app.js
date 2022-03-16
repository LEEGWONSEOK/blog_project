// Package
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');

dotenv.config();

const pageRouter = require('./routes/page');
//const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const { sequelize } = require('./models');
const passportConfig = require('./passport');

const app = express();
passportConfig();
sequelize.sync({ force: false })      // force: true >> 테이블 다 지우고 다시 생성(데이터 다 날아감, 실무X) / alter: true >> 데이터 유지 가능
  .then(() => {
    console.log('✅ DB connect!');
  })
  .catch((err) => {
    console.error(err);
  });

// App Setting
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


// Router
app.use(morgan('dev'));                                            // 'combined' : publish
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));
app.use(passport.initialize());    // passport.initialize 미들웨어 : req객체(요청)에 passport 설정 넣음
app.use(passport.session());       // passport.session 미들웨어 : req.session객체에 passport 정보 저장

// Page Router
app.use('/', pageRouter);
//app.use('/auth', authRouter);

app.use('/users', userRouter);
app.use('/posts', postRouter);

// 404 Middleware
app.use((req, res, next) => {
  res.send('404 not found');
});

// Error Middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.send('Error!');
});

// Load the App
app.listen(app.get('port'), () => {
  console.log('✅ express server running');
});