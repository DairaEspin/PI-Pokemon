import Searchbar from "../../components/searchbar/searchbar.component";
import styles from "./types.module.css";
import axios from "axios";
import { useState } from "react";
import Card from "../../components/card/card.component";
import { useHistory } from "react-router-dom";


function Types() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(12);

  const handleTypeButtonClick = async (type) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/pokemon/type/?type=${type.toLowerCase()}`
      );
      const data = response.data.pokemonData;
      setPokemon(data);
    } catch (error) {
      console.error(error);
    }
  };

   const indexOfLastCard = currentPage * cardsPerPage;
   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
   const currentCards = pokemon.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    if (pageNumber === 0) {
      setCurrentPage(1);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  const history = useHistory();

  const handleSearchClick = async (valorDeBusqueda) => {
    const response = await axios.get(
      `http://localhost:3000/pokemon/?name=${valorDeBusqueda}`
    );
    history.push(`/home/${valorDeBusqueda}`, { pokemon: response.data });
  };

   

  return (
    <div className={styles.typesPadre}>
      <Searchbar />
      <div className={styles.contenedoBotonTipos}>
        <button
          onClick={() => handleTypeButtonClick("normal")}
          className={styles.buttonTipos}
        >
          Normal
        </button>
        <button
          onClick={() => handleTypeButtonClick("fighting")}
          className={styles.buttonTipos}
        >
          Fighting
        </button>
        <button
          onClick={() => handleTypeButtonClick("flying")}
          className={styles.buttonTipos}
        >
          Flying
        </button>
        <button
          onClick={() => handleTypeButtonClick("poison")}
          className={styles.buttonTipos}
        >
          Poison
        </button>
        <button
          onClick={() => handleTypeButtonClick("ground")}
          className={styles.buttonTipos}
        >
          Ground
        </button>
        <button
          onClick={() => handleTypeButtonClick("rock")}
          className={styles.buttonTipos}
        >
          Rock
        </button>
        <button
          onClick={() => handleTypeButtonClick("bug")}
          className={styles.buttonTipos}
        >
          Bug
        </button>
        <button
          onClick={() => handleTypeButtonClick("ghost")}
          className={styles.buttonTipos}
        >
          Ghost
        </button>
        <button
          onClick={() => handleTypeButtonClick("steel")}
          className={styles.buttonTipos}
        >
          Steel
        </button>
        <button
          onClick={() => handleTypeButtonClick("fire")}
          className={styles.buttonTipos}
        >
          Fire
        </button>
        <button
          onClick={() => handleTypeButtonClick("water")}
          className={styles.buttonTipos}
        >
          Water
        </button>
        <button
          onClick={() => handleTypeButtonClick("grass")}
          className={styles.buttonTipos}
        >
          Grass
        </button>
        <button
          onClick={() => handleTypeButtonClick("electric")}
          className={styles.buttonTipos}
        >
          Electric
        </button>
        <button
          onClick={() => handleTypeButtonClick("psychic")}
          className={styles.buttonTipos}
        >
          Psychic
        </button>
        <button
          onClick={() => handleTypeButtonClick("ice")}
          className={styles.buttonTipos}
        >
          Ice
        </button>
        <button
          onClick={() => handleTypeButtonClick("dragon")}
          className={styles.buttonTipos}
        >
          Dragon
        </button>
        <button
          onClick={() => handleTypeButtonClick("dark")}
          className={styles.buttonTipos}
        >
          Dark
        </button>
        <button
          onClick={() => handleTypeButtonClick("fairy")}
          className={styles.buttonTipos}
        >
          Fairy
        </button>
        <button
          onClick={() => handleTypeButtonClick("unknow")}
          className={styles.buttonTipos}
        >
          Unknow
        </button>
        <button
          onClick={() => handleTypeButtonClick("shadow")}
          className={styles.buttonTipos}
        >
          Shadow
        </button>
        <div>
          <div className={styles.tarjetaContainer}>
            {pokemon &&
              Array.isArray(pokemon) &&
              currentCards.map((pokemon, index) => {
                return (
                  <div key={index}>
                    <Card
                      handleSearchClick={handleSearchClick}
                      name={pokemon.name}
                      image={pokemon.image}
                      types={pokemon.types}
                    />
                  </div>
                );
              })}
          </div>
          <div className={styles.contenedorDeButons}>
            <button
              className={styles.buttonTipos}
              onClick={() => paginate(currentPage - 1)}
            >
              Anterior
            </button>
            <button
              className={styles.buttonTipos}
              onClick={() => paginate(currentPage + 1)}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Types;