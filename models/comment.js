const Sequelize = require('sequelize')

module.exports = class Hashtag extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      comment: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true
      },
      author: {
        type: Sequelize.STRING(15),
        allowNull: false,
      }
    }, {
      sequelize,
      timestamps: true,
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