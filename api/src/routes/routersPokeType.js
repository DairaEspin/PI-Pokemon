const typePokemonRouter = require("express").Router();
const getTypePokemon = require("../controllers/typePokemon/getTypePokemon");
const getAllTypesPokemons = require("../controllers/typePokemon/getAllTypesPokemons");

typePokemonRouter.get("/all", getAllTypesPokemons);
typePokemonRouter.get("/type", getTypePokemon);

module.exports = typePokemonRouter;