const { Pokemons, Types } = require("../../db");
const axios = require('axios');

const getAllTypesPokemons = async (req, res) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/type`);

    // Extrae los datos que necesitas de la respuesta
    const apiData = response.data; // Ajusta esto según la estructura de la respuesta de la API externa

    let allTypes = await Types.findAll({
      include: {
        model: Pokemons,
        attributes: ["id", "name", "image", "hp", "speed","attack", "defense", "height", "weight"],
      },
    });

    return res.status(200).json({ allTypes, apiData });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports =  getAllTypesPokemons;