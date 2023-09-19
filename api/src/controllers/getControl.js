const axios = require ('axios');
const {Pokemon} = require ("../db")
const URL = "https://pokeapi.co/api/v2/pokemon/"


const getApiAndBdd = async (offset,limit) => {
  let todosLosPokemonsDeApi = (
    await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    )
  ).data;


  let todosLosPokemonsDeBdd = await Pokemon.findAll({
    attributes: [
      "id",
      "name",
      "image",
      "hp",
      "attack",
      "speed",
      "height",
      "weight",
    ],
  });

  let detallesPrimerosPokemons = await Promise.all(
    todosLosPokemonsDeApi.results.map(async (pokemon) => {
      const response = await axios.get(pokemon.url);
      const data = response.data;
      let image;
      if (data.id >= 650 && data.id <= 1100) {
        image = data.sprites.other["official-artwork"].front_default;
      }
      const ataque = data.stats.find(
        (stat) => stat.stat.name === "attack"
      ).base_stat;

      return {
        name: data.name,
        image: data.sprites.front_default,
        types: data.types.map((type) => type.type.name),
        attack: ataque
      };
    })
  );


  return [...todosLosPokemonsDeBdd, ...detallesPrimerosPokemons,];
};



const getPokemonById = async (id, source) => {
  let pokemonFiltrado;
  let pokemon;
  if (source === "api") {
    pokemon = (await axios.get(`${URL}/${id}`)).data;
    const hpStat = pokemon.stats.find((stat) => stat.stat.name === "hp");
    const vida = hpStat.base_stat;
    const attackStat = pokemon.stats.find((stat) => stat.stat.name === "attack");
    const ataque = attackStat.base_stat;
    const velocidadStat = pokemon.stats.find((stat) => stat.stat.name === "speed");
    const velocidad = velocidadStat.base_stat;
    pokemonFiltrado = {
      id: pokemon.id,
      nombre: pokemon.name,
      imagen: pokemon.sprites.other.dream_world.front_default,
      vida: vida,
      ataque: ataque,
      velocidad: velocidad,
      altura: pokemon.height,
      peso: pokemon.weight
   };
  } else {
    pokemonFiltrado = await pokemon.findByPk(id);
  }
  return pokemonFiltrado;
};
  


const getIdRutaImg = async (id,source) => {
  let pokemonFiltrado;
let pokemon;
if (source === "api") {
  pokemon = (await axios.get(`${URL}/${id}`)).data;
  const hpStat = pokemon.stats.find((stat) => stat.stat.name === "hp");
  const vida = hpStat.base_stat;
  const attackStat = pokemon.stats.find((stat) => stat.stat.name === "attack");
  const ataque = attackStat.base_stat;
  const velocidadStat = pokemon.stats.find((stat) => stat.stat.name === "speed");
  const velocidad = velocidadStat.base_stat;
  pokemonFiltrado = {
    id: pokemon.id,
    nombre: pokemon.name,
    imagen: pokemon.sprites.other["official-artwork"].front_default,
    vida: vida,
    ataque: ataque,
    velocidad: velocidad,
    altura: pokemon.height,
    peso: pokemon.weight,
  };
} else {
  pokemonFiltrado = await pokemon.findByPk(id);
}
return pokemonFiltrado;
};

const getPokemonByName = async (name) => {
  let obteniendoPokemon = (
    await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=1281`)
  ).data;

  let pokemonURL = obteniendoPokemon.results.filter(
    (pokemon) => pokemon.name === name
  )[0].url;

  let pokemon = (await axios.get(pokemonURL)).data;

  let pokemonsInBdd = await pokemon.findAll({ where: { name: name } });

  const hpStat = pokemon.stats.find((stat) => stat.stat.name === "hp");
  const vida = hpStat.base_stat;
  const attackStat = pokemon.stats.find((stat) => stat.stat.name === "attack");
  const ataque = attackStat.base_stat;
  const velocidadStat = pokemon.stats.find(
    (stat) => stat.stat.name === "speed"
  );
  const velocidad = velocidadStat.base_stat;

  let pokemonFiltrado = {
    id: pokemon.id,
    nombre: pokemon.name,
    imagen: pokemon.sprites.other.dream_world.front_default,
    vida: vida,
    ataque: ataque,
    velocidad: velocidad,
    altura: pokemon.height,
    peso: pokemon.weight,
  };

  return [pokemonFiltrado].concat(pokemonsInBdd);

};



const getPokemonData = async (url) => {
  try {
    const response = await axios.get(url);
    const pokemonData = response.data;

    const name = pokemonData.name;
    const image = pokemonData.sprites.front_default;
    const types = pokemonData.types.map((type) => type.type.name);

    return { name, image, types };
  } catch (error) {
    console.error(error);
    throw new Error("Error Pokemon NOT found");
  }
};



const getTiposQuery = async (type) => {
  let pokeUrls = [];

  const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
  const pokemonTypeData = response.data;

  for (const pokemon of pokemonTypeData.pokemon) {
    pokeUrls.push(pokemon.pokemon.url);
  }
  

  const pokemonData = await Promise.all(pokeUrls.map((url) =>getPokemonData(url)));

  return { pokemonData };
};

const getPokeApi = async (offset = 0) => {
  const limit = 12;
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
  );
  const resultado = response.data;

  const pokeUrls = resultado.results.map((pokemon) => pokemon.url);

  const listadePokemon = await Promise.all(
    pokeUrls.map((url) => getPokemonData(url))
  );

  return { listadePokemon };
};



const getPokeBdd = async () => {
  try {
    const obteniendoTipoDeBdd = await Types.findAll({
      attributes: ["id", "name"],
    });

    const traerPokemon = await Pokemons.findAll({
      attributes: [
        "id",
        "name",
        "image",
        "hp",
        "attack",
        "speed",
        "height",
        "weight",
        "TypeId",
      ],
    });

    const result = traerPokemon.map((pokemon) => {
      const tipoDePokemon = obteniendoTipoDeBdd.find(
        (type) => type.id === pokemon.TypeId
      );
      return {
        ...pokemon.toJSON(),
        typeName: tipoDePokemon ? tipoDePokemon.name : null,
      };
    });

    return result;
  } catch (error) {
    console.error("Error from database:", error);
    throw error;
  }
};



module.exports = {
  getPokemonById,
  getPokemonByName,
  getApiAndBdd,
  getIdRutaImg,
  getTiposQuery,
  getPokeApi,
  getPokeBdd,
}

