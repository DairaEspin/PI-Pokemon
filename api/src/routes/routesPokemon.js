const pokemonRouter = require("express").Router();
const getAllPokemons = require("../controllers/pokemon/getAllPokemons");
const getPokemonById = require("../controllers/pokemon/getPokemonById");
const getPokemonByName = require("../controllers/pokemon/getAllPokemons");
const createPokemon = require("../controllers/pokemon/createPokemon");
const updatePokemon = require("../controllers/pokemon/updatePokemon");
const deletePokemon = require("../controllers/pokemon/deletePokemon");

pokemonRouter.get("/", (req, res) => {
  const { name } = req.query;
  !name ? getAllPokemons(req, res) : getPokemonByName(req, res);
});
pokemonRouter.get("/:Byid", getPokemonById);
pokemonRouter.post("/create", createPokemon);
pokemonRouter.put("/update", updatePokemon);
pokemonRouter.delete("/delete", deletePokemon);

module.exports = pokemonRouter;


