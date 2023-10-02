const { Types, Pokemons } = require("../../db");

const createType = async (req, res) => {
  const { name, image, hp, attack, defense, speed, height, weight } = req.body;

  // Verificar datos obligatorios
  if (!name || !image || !hp || !attack || !defense || !speed|| !height|| !weight) {
    return res.status(400).json({ error: "Missing important data" });
  }

  try {
    const newType = await Types.create({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight
    });

    // Validar la existencia de los países
    const existingPokemon = await Pokemons.findAll({
      where: { id: Pokemons},
    });

    const validPokemon = existingPokemon.map((pokemon) => pokemon.id);

    // Filtrar los países válidos que existen en la base de datos
    const filteredPokemons = Pokemons.filter((pokemon) =>
      validPokemon.includes(pokemon)
    );

    // Asociar los países a la actividad
    await newType.setPokemons(filteredPokemons);

    return res.status(200).send(`Type ${name} has been created`);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = createType;