const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Child_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Relation, Granny_user}) {
      Child_user.belongsToMany(Granny_user, { through: Relation, foreignKey: 'id_child' });
    }
  }
  Child_user.init({
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
    modelName: 'Child_user',
  });
  return Child_user;
};
