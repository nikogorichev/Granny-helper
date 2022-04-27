const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line camelcase
  class Granny_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Card, Child_user, Relation }) {
      // eslint-disable-next-line camelcase
      Granny_user.hasMany(Card, { foreignKey: 'id_granny' });
      Granny_user.belongsToMany(Child_user, { through: Relation, foreignKey: 'id_granny' });
    }
  }
  Granny_user.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Granny_user',
  });
  return Granny_user;
};
