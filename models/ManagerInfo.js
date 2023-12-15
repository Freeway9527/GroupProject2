const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Manager extends Model {}

Manager.init(
  {
    // Define manager attributes here
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // Can add more attributes as needed
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'manager',
  }
);

module.exports = Manager;
