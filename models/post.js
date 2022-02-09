const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      p_title: {          // 포스트 제목
        type: Sequelize.STRING(40),
        allowNull: false
      },
      p_thumbnail: {      // 포스트 썸네일
        type: Sequelize.STRING(200),
        allowNull: false
      },
      p_content: {        // 포스트 컨텐츠(글)
        type: Sequelize.STRING(200),
        allowNull: false
      },
      p_category: {       // 포스트 카테고리
        type: Sequelize.STRING(20),
        allowNull: true
      },
      p_comment: {        // 포스트 댓글
        type: Sequelize.STRING(100),
        allowNull: true
      }
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
      through: 'PostHashtag'    // 중간테이블명 : PostHashtag
    });
  }
}