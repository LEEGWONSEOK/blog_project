const Sequelize = require('sequelize')

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true
      },
      nick: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(100),        // 100글자인 이유? => 해시화되면 글이 길어지기 때문
        allowNull: true                     // true? : sns 계정은 비번 필요없기 때문
      },
      introduce: {
        type: Sequelize.STRING(200),
        allowNull: true
      },
      provider: {                           // provider, snsId : SNS로그인을 했을 경우 저장
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: 'local'               // 'local' 이면 로컬로그인 아니면 SNS 로그인
      },
      profile: {                            // 프로필 이미지
        type: Sequelize.STRING(10),
        allowNull: false               // 'local' 이면 로컬로그인 아니면 SNS 로그인
      },
      snsId: {
        type: Sequelize.STRING(30),
        allowNull: true
      }
    }, {
      sequelize,
      timestamps: true,                     // true? => create_at, update_at, delete_at 자동 기록 가능해짐
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,                       // 
      charset: 'utf8mb4',                   // 한글 + 이모지 지원
      collate: 'utf8mb4_general_ci'
    })
  }

  static associate(db) {
    // User vs Post   >>   1:N
    db.User.hasMany(db.Post)

    // User vs User   >>   N:M
    db.User.belongsToMany(db.User, {
      foreignKey: 'followingId',    // ForeignKey 이름 변경(누가 팔로워고 팔로잉인지 확인하기 위해 라벨링)
      as: 'Followers',              // Followers인 이유? => 팔로워들을 가져올려면 팔로잉을 알아야 된다
      through: 'Follow'
    })
    db.User.belongsToMany(db.User, {
      foreignKey: 'followerId',
      as: 'Followings',
      through: 'Follow'
    })
  }
}