const { DataTypes } = require('sequelize');
// const { sequelize} = require('../db');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("Types",{
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         defaultValue: DataTypes.UUIDV4
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
    },
    {timestamps: false}
    );
  };
