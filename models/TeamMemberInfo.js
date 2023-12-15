const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class TeamMember extends Model {}

TeamMember.init(
  {
    // Define employee attributes here
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
    hire_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    salary: {
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: true,
    },
    //
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'TeamMember',
  }
);



module.exports = TeamMember;
