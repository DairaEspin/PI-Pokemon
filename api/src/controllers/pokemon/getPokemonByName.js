const { Pokemons, Types } = require("../../db");
const { Op } = require("sequelize");

const getPokemonByName = async (req, res) => {
  try {
    const { name } = req.query;

    const searchPokemon = await Pokemons.findOne({
      where: {
        [Op.or]: [
          { name: { [Op.eq]: name } },
          { name: { [Op.iLike]: `%${name}%` } },
        ],
      },
      include: { model: Types },
    });

    if(searchPokemon){ res.status(200).json({ searchPokemon })} 
  
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error occurred while searching for pokemon" });
  }
};

module.exports = getPokemonByName;