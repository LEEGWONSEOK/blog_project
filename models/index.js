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

User.init(sequelize);
Post.init(sequelize);
Hashtag.init(sequelize);

User.associate(db);
Post.associate(db);
Hashtag.associate(db);

module.exports = db;


// user : post        => 1:N 관계 (유저 포스트 관계)
// post : hashtag     => N:M 관계 (포스트 해시태그 관계)
// user'A' : user'B'  => N:M 관계 (팔로우 팔로워 관계)

// category : post    => 1:N 관계 () ??