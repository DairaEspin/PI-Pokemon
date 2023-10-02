const { Types, PokemonsTypes } = require("../../db");
const axios = require('axios');

const getTypePokemon = async (req, res) => {
  try {
    let { id } = req.params;
    const response = await axios.get(`https://pokeapi.co/api/v2/type`);
    const apiData = response.data;
    let searchTypePokemon = await PokemonsTypes.findAll({
      where: { TypeIdType: id },
    });
    let type = await Types.findByPk(id);

    if (searchTypePokemon.length > 0)
      return res.status(200).json({ searchTypePokemon, type, apiData });
    return res.status(404).json({ message: "Type not found" });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

module.exports = getTypePokemon;