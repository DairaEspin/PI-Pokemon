const { Pokemons, Types } = require("../db")

const madePokemon = async (newPokemon) => {
  try {
    // Extrae los valores de las propiedades del objeto newPokemon.
    const { name, image, hp, attack, speed, height, weight, type } =
      newPokemon;

    // Buscando el tipo en la base de datos que coincida con el tipo traido por parametro.
      const tipoSeleccionado = await Types.findOne({where: {name: type}});

      if (!tipoSeleccionado) {
        throw new Error('tipo de Pokemon invalido');
      }
    // Crea un nuevo objeto con las propiedades y valores correspondientes.
    const data = {
      name,
      image,
      hp,
      attack,
      speed,
      height,
      weight,
      TypeId: tipoSeleccionado.id,
    };
    // Crea un nuevo registro de Pokémon en la base de datos utilizando el objeto data.
    const createdPokemon = await Pokemons.create(data);
    return createdPokemon;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { madePokemon };