const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      title: {          
        type: Sequelize.STRING(40),
        allowNull: false,
        comment: "포스트 제목",
      },
      thumbnail: {      
        type: Sequelize.STRING(200),
        allowNull: false,
        comment: "포스트 썸네일",
      },
      category: {       
        type: Sequelize.STRING(20),
        allowNull: true,
        comment: "포스트 카테고리",
      },
      content: {        
        type: Sequelize.STRING(200),
        allowNull: false,
        comment: "포스트 내용",
      },
    }, {
      sequelize,
      timestamps: true,         // create_at, update_at, delete_at 기록용
      underscored: false,
      modelName: 'Post',
      tableName: 'posts',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci'
    })
  }

  static associate(db) {
    // User vs Post   >>   1:N
    db.Post.belongsTo(db.User)

    // Post vs Hashtag   >>   N:M
    db.Post.belongsToMany(db.Hashtag, {
      through: 'postHashtags'    // 중간테이블명 : PostHashtag
    });
         
    // Post vs Comment   >>   1:N
    db.Post.hasMany(db.Comment)
  }
}