const {
    getPokemonById,
    getPokemonByName,
    getApiAndBdd,
    getIdRutaImg,
    getTiposQuery,
    getPokeApi,
    getPokeBdd,
    getPokeOrder,
} = require ('../controllers/getControl');



const getPokemons = async (req, res) => {

    const limit = parseInt(req.query.limit);
    const offset = parseInt(req.query.offset);

  try {
    const response = await getApiAndBdd(offset,limit)
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({error:error.message});
  }
};



const getCharById = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
      if(id > 0 && id < 650){
      const response = await getPokemonById(id,source)
      res.status(200).json(response)
      } else {
        const response = await getIdRutaImg(id, source);
        res.status(200).json(response)
      }
    } catch (error) {
      res.status(400).json({error:error.message});
    }
  };


  const getByName = async (req, res) => {
    const { name } = req.query;
   try {
     if (name) {
       const pokemonByName = await getPokemonByName(name);
       res.status(200).json(pokemonByName);
     } else {
       alert(
         "NOT Found That Pokemon"
       );
     }
   } catch (error) {
     res.status(400).json({error:error.message});
   }
 };

// Definimos una función que maneja la ruta /types y envía la respuesta al cliente
const getTypes = async (req, res) => {
  const { type } = req.query;
  try {
    let getPokemonType = await getTiposQuery(type);
    res.status(200).json(getPokemonType)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
};

const getApi = async (req, res) => {
  try {
    const page = req.query.page;
    let getPokemondeApi = await getPokeApi(page);
    res.status(200).json(getPokemondeApi);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBdd = async (req, res) => {
  
  try {
    const response = await getPokeBdd();
    res.status(200).json(response)
    
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

const getOrder = async (req,res) => {

  try {
    const response = await getPokeOrder();
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};


module.exports = { getPokemons, getCharById, getByName, getTypes, getOrder, getBdd, getApi };