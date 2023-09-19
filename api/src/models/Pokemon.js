const { DataTypes } = require('sequelize');
// const { sequelize } = require('../db');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Pokemons",{
    id: {
       type: DataTypes.UUID,
       primaryKey: true,
       defaultValue: DataTypes.UUIDV4
    },
    name: {
       type: DataTypes.STRING,
       allowNull: false,
    },
    image: {
       type: DataTypes.STRING,
       allowNull: false,
    },
    hp: {
       type: DataTypes.INTEGER,
       allowNull:false,
    },
    attack: {
       type: DataTypes.INTEGER,
       allowNull: false,
    },
    defense: {
       type: DataTypes.INTEGER,
       allowNull: false,
    },
    speed:{ 
       type: DataTypes.INTEGER,
    },
    height: {
       type: DataTypes.INTEGER,
       allowNull: false,
    },
    weight: {
       type: DataTypes.INTEGER,
       allowNull: false,
    },
  },
  {timestamps: false}
  );
};



