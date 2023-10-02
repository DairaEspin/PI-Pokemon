const { Router } = require('express');
const router = Router();
const pokemonsRoute = require('./routesPokemon.js');
const typesRoute = require('./routesType.js');
const pokeTypeRoute = require ('./routersPokeType.js');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemon", pokemonsRoute );
router.use("/type", typesRoute);
router.use("/pokemonstypes", pokeTypeRoute);

router.get("/home",(req,res)=>{
     res.status(200).send("homePage")
 })

module.exports = router;
