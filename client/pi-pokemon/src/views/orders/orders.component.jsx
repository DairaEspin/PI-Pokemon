
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./orders.module.css";
import Searchbar from "../../components/searchbar/searchbar.component";
import OrdenaCard from "../../components/order/order.component";

async function getPokemons() {
  const response = await axios.get(
    `http://localhost:3001/pokemons/all`
  );
  const data = response.data;

  console.log(data);
  return data;

}

const UseOrders = () => {
  const [originalPokemons, setOriginalPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getPokemonsFromAPI = async () => {
      const response = await getPokemons();
      setOriginalPokemons(response);
      setPokemons(response);
    };

    getPokemonsFromAPI();
  }, [page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSortPorNombreArriba = () => {
    const sortedPokemons = [...pokemons].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setPokemons(sortedPokemons);
  };

  const handleSortPorNombreAbajo = () => {
    const sortedPokemons = [...pokemons].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setPokemons(sortedPokemons);
  };

  const handleSortPorAtaqueArriba = () => {
    const sortedPokemons = [...pokemons].sort((a, b) => a.attack - b.attack);
    setPokemons(sortedPokemons);
  };

  const handleSortPorAtaqueAbajo = () => {
    const sortedPokemons = [...pokemons].sort((a, b) => b.attack - a.attack);
    setPokemons(sortedPokemons);
  };

  return (
    <div className={styles.padreDeTodo}>
      <Searchbar />
      <div>
        <div className={styles.padreDeBotones}>
          <button className={styles.buttonOpciones} onClick={handleSortPorNombreArriba}>
            Ordenar Alf ↑
          </button>
          <button className={styles.buttonOpciones} onClick={handleSortPorNombreAbajo}>
            Ordenar Alf ↓
          </button>
          <button className={styles.buttonOpciones} onClick={handleSortPorAtaqueArriba}>
            Ordenar Ataque ↑
          </button>
          <button className={styles.buttonOpciones} onClick={handleSortPorAtaqueAbajo}>
            Ordenar Ataque ↓
          </button>
        </div>
        <div className={styles.tarjetaContainer}>
          {pokemons.map((pokemon, index) => {
            return (
              <div key={index}>
                <OrdenaCard
                  name={pokemon.name}
                  image={pokemon.image}
                  attack={pokemon.attack}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.contenedorSiguiente}>
          <button className={styles.buttonOpciones} onClick={handleNextPage}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseOrders;