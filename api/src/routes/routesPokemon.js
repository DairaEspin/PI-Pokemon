const {Router} = require('express')
const {getPokemons, getCharById, getByName, getTypes, getOrder, getBdd, getApi
} = require ('../handlers/getHandler')


const getPokeRouter = Router();


getPokeRouter.get("/pokemons", getPokemons)
getPokeRouter.get("/:id", getCharById)
getPokeRouter.get("/", getByName)
getPokeRouter.get("/types", getTypes)
getPokeRouter.get("/ordenamiento", getOrder);
getPokeRouter.get("/bdd", getBdd);
getPokeRouter.get("/pokeApi", getApi);


module.exports= getPokeRouter;

