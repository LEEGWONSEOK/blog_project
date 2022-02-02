// Package
const express = require('express')
const path = require('path')
const nunjucks = require('nunjucks')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const dotenv = require('dotenv')
const passport = require('passport')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
dotenv.config()

const indexRouter = require('./routes')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const { sequelize } = require('./models')
const passportConfig = require('./passport')

const app = express()
passportConfig()
sequelize.sync({ force: true })      // force: true >> 테이블 다 지우고 다시 생성(데이터 다 날아감, 실무X) / alter: true >> 데이터 유지 가능
  .then(() => {
    console.log('DB connect!')
  })
  .catch((err) => {
    console.error(err)
  })

// App Setting
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'html')
nunjucks.configure('views', {
  express: app,
  watch: true
})

// Router
app.use(morgan('dev'))                                            // 'combined' : publish
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false
  }
}))
app.use(passport.initialize())    // passport.initialize 미들웨어 : req객체(요청)에 passport 설정 넣음
app.use(passport.session())       // passport.session 미들웨어 : req.session객체에 passport 정보 저장

// Page Router
app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/user', userRouter)

// 404 Middleware
app.use((req, res, next) => {
  res.send('404 not found')
})


// Error Middleware
app.use((err, req, res, next) => {
  console.error(err)
  res.send('Error!')
})

// Load the App
app.listen(app.get('port'), () => {
  console.log('express server running')
})


// API 명세 작업? 프론트 백 인터페이스(소통)
// 프론트가 어떤 요청을 하면 백엔드가 응답을 하면 될지 정해보기(스웨거)
// (추가) 이슈트러블 정리
// + 깃헙 해당 프로젝트 레포지토리 정리 광재랑 연결(?)
// (포스트) 이미지 어떻게 할지
