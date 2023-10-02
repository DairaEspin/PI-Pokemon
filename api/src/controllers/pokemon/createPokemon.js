const { Pokemons } = require("../../db");

const createPokemon = async (req, res) => {
  try {
    const {
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight
    } = req.body;

    if (
      !name ||
      !image ||
      !hp ||
      !attack ||
      !defense ||
      !speed ||
      !height ||
      !weight
    )
      throw Error("All fields are required");

    const newPokemon = await Pokemons.create({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight
    });
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = createPokemon;