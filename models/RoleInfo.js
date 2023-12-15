const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}

Role.init(
  {
    // Define role attributes here
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role_salary: {
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: true,
    },
    // Can add more attributes as needed
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'role',
  }
);

module.exports = Role;
