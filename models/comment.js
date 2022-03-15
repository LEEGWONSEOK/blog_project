const Sequelize = require('sequelize')

module.exports = class Hashtag extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      comment: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true
      }
    }, {
      sequelize,
      timestamps: true,         // create_at, update_at, delete_at 기록용
      underscored: false,
      modelName: 'Comment',
      tableName: 'comments',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci'
    })
  }

  static associate(db) {
    // Post vs Comment   >>   1:N
    db.Comment.belongsTo(db.Post)
  }
}