const { Pokemons } = require("../../db");

const deletePokemon = async (req, res) => {
  try {
    const { id } = req.params;

    const pokemonToDelete = await Pokemons.findByPk(id);

    if (!pokemonToDelete) throw Error("Pokemon Not Found");

    await Country.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).json(`The Pokemon ${id} was deleted succesfully`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deletePokemon;