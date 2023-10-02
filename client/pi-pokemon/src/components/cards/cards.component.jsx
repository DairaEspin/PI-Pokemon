import styles from "./cards.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios"
import Card from "../card/card.component";


async function getPokemons(offset,limit) {
  const response = await axios.get(
    `http://localhost:3001/pokemons/all?offset=${offset}&limit=${limit}`
  );
  const data = response.data;
  return data;
}



function Cards(props) {



  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {

    const getPokemonsFromAPI = async () => {
     
      const limit = 12;
      const offset = (page - 1) * limit;

      

      
      const response = await getPokemons(offset, limit);
      setPokemons(response);
    };

    getPokemonsFromAPI();
  }, [page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={styles.contenedorTodo}>
      <div className={styles.tarjetaContainer}>
        {pokemons.map((pokemon, index) => { 
          return (
            <div key={index}>
              <Card
                handleSearchClick={props.handleSearchClick} //pasada por props al componente hijo, Home es el componente padre
                name={pokemon.name}
                image={pokemon.image}
                types={pokemon.types}
              />
            </div>
          );})}  
      </div>
      <button className={styles.botonDeSiguiente} onClick={handleNextPage}>Siguiente</button>
    </div>
  );
}


export default Cards;

