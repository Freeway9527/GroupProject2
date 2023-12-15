const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Department extends Model {}

Department.init(
  {
    // Define department attributes here
    department_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    department_location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // Can add more attributes as needed
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'department',
  }
);

module.exports = Department;
