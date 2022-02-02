const Sequelize = require('sequelize')

module.exports = class Hashtag extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      h_title: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true
      }
    }, {
      sequelize,
      timestamps: true,         // create_at, update_at, delete_at 기록용
      underscored: false,
      modelName: 'Hashtag',
      tableName: 'hashtags',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci'
    })
  }

  static associate(db) {
    // Post vs Hashtag   >>   N:M
    db.Hashtag.belongsToMany(db.Post, {
      through: 'PostHashtag'
    })
  }
}