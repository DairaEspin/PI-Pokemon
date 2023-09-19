const axios = require("axios");
const { Types } = require("../db");




const obtenerTiposDePokemones = async () => {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/type/")
        const tiposDePokemon = response.data
        for (const tipo of tiposDePokemon.results) {
          await Types.create({ name: tipo.name });
        }
    } catch (error) {
        console.log(error)
        
    }

};


module.exports = { obtenerTiposDePokemones };