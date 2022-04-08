// Package
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
const http = require('http');
const cors = require('cors');

dotenv.config();

const userRouter = require('./api/users');
const postRouter = require('./api/posts');
const { sequelize } = require('./models');
const passportConfig = require('./api/passport');

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
app.set('port', process.env.PORT);
let corsOptions = {
  origin: 'localhost:3000',
  credential: true
}
app.use(cors(corsOptions));
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
app.use(passport.initialize());
app.use(passport.session());

// Page Router
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
  console.log(`✅ express server running on ${process.env.PORT}`);
});