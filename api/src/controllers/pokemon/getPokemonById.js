const { Pokemons, Types } = require("../../db");

const getPokemonById = async (req, res) => {
  try {
    const { id } = req.params;
    const searchPokemon = await Pokemons.findByPk(id.toUpperCase(), {
      include: { model: Types },
    });

      return res.status(200).json({ searchPokemon });


  } catch (error) {
    return res.status(404).json({ message: "Pokemon not found" });
  }
};

module.exports = getPokemonById;