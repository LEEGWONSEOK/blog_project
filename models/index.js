const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require('../config/config.js')[env]     // 설정파일 불러오기
// 만들 모델
const User = require('./user')
const Post = require('./post')
const Hashtag = require('./hashtag')


const db = {}
const sequelize = new Sequelize(
  config.database, config.username, config.password, config
)   // 순서 중요!

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Hashtag = Hashtag;
db.Comment = Comment;

User.init(sequelize);
Post.init(sequelize);
Hashtag.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Post.associate(db);
Hashtag.associate(db);
Comment.associate(db);

module.exports = db;
