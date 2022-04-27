const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line camelcase
    static associate({ Granny_user }) {
      Card.belongsTo(Granny_user, { foreignKey: 'id_granny' });
    }
  }
  Card.init({
    id_granny: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Granny_users',
        key: 'id',
      },
    },
    link: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
