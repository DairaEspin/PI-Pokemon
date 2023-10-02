const axios = require('axios');
const {Pokemons, Types} = require ('../../db')


const getAllPokemons = async (req, res) => {
   try {
     // Hacer una solicitud GET a la API de Pokémon
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
     if (!response.data) throw Error("Pokemons not Found");
   // Los datos de los Pokémon se encuentran en response.data.results
     const pokemon = response.data.results;
     return res.status(200).json(pokemon);
   } catch (error) {
     return res.status(500).json({ message: error.message });
   }
 };

module.exports = getAllPokemons;