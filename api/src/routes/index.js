const { Router } = require('express');
const getPokeRouter = require('./routesPokemon.js');
const postPokeRouter = require('./routesType.js');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemonsrouter", getPokeRouter );
router.use("/typesrouter", postPokeRouter);

router.get("/home",(req,res)=>{
     res.status(200).send("homePage")
 })

module.exports = router;
