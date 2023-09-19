const {Router} = require('express')
const postPokemons = require ('../handlers/postHandler')

const postPokeRouter = Router();


postPokeRouter.post("/post", postPokemons)

module.exports= postPokeRouter;
