const { madePokemon } = require("../controllers/postControl");

//La función postHandler se utiliza como controlador para una ruta específica. 
//Esta función toma dos parámetros: req (la solicitud HTTP entrante) y res (la respuesta HTTP que se enviará al cliente).
const postPokemons = async (req, res) => {
    // La variable llamada newPokemon asigna el cuerpo de la solicitud entrante (req.body) a esta variable.
    // Espera que el cuerpo de la solicitud contenga datos relacionados con un nuevo Pokémon que se va a crear o procesar.
const newPokemon = req.body
  try {
    //Se intenta llamar a la función madePokemon pasando newPokemon como argumento.
    // La llamada a madePokemon se realiza dentro de un bloque await para manejar promesas.
    const response = await madePokemon(newPokemon)
    //Se envía una respuesta HTTP con un estado 200 (OK) y se envía el resultado como una respuesta JSON al cliente.
    res.status(200).json(response);
    // Si ocurre un error se captura en el bloque catch y se envía una respuesta de error HTTP 
    //con un estado 400 junto al mensaje de error en formato JSON.
  } catch (error) {
    
    res.status(400).json({error:error.message})
  }
};

module.exports = postPokemons;
