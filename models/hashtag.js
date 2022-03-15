const Sequelize = require('sequelize')

module.exports = class Hashtag extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      hashtag: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true
      }
    }, {
      sequelize,
      timestamps: false,         
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
      through: 'postHashtags'
    })
  }
}