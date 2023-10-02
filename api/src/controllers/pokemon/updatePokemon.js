const { Pokemons } = require("../../db");

const updatePokemon = async (req, res) => {
  try {
    const { id } = req.params;
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

    const pokemon = await Pokemons.findByPk(id);

    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon Not Found" });
    }

    //EJEMPLO DE LOGICA AQUI
    // Si name se proporciona en el cuerpo de la solicitud
    // Entonces se le asigna pokemon.name
    // De lo contrario se mantiene el valor actual de pokemon.name
    pokemon.id = id || pokemon.id;
    pokemon.name = name || pokemon.name;
    pokemon.image = image || pokemon.image;
    pokemon.hp = hp || pokemon.hp;
    pokemon.attack = attack || pokemon.attack;
    pokemon.defense = defense || pokemon.defense;
    pokemon.speed = speed || pokemon.speed;
    pokemon.height = height || pokemon.height;
    pokemon.weight = weight || pokemon.weight;

    await pokemon.save();

    return res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updatePokemon;