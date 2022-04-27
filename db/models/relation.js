'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Relation.init({
    id_child: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Child_users',
        key: 'id',
      },
    },
    id_granny: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Granny_users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Relation',
  });
  return Relation;
};
