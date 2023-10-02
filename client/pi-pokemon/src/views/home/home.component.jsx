 import Searchbar from "../../components/searchbar/searchbar.component";
 import styles from "./home.module.css";
import axios from "axios";
 import { useHistory } from 'react-router-dom';
import Cards from "../../components/cards/cards.component"


 function Home() {

   const history = useHistory();
  
   const handleSearchClick = async (valorDeBusqueda) => {    //Funcion para al clickear en cada tarjeta haga un query con el nombre
 const response = await axios.get(        
   `http://localhost:3001/pokemons/?name=${valorDeBusqueda}`               //del Pokemon solicitado por click       `http://localhost:3001/pokemon/?name=${valorDeBusqueda}`
    );
     history.push(`/home/${valorDeBusqueda}`, { pokemon: response.data });
   };

   return (
     <div className={styles.home}>
       <Searchbar />
       <Cards handleSearchClick={handleSearchClick} />
     </div>
   );
 }

export default Home;