// import styles from "./searchbar.module.css";
// import { useState } from "react";
// import axios from "axios";
// import { useHistory} from "react-router-dom";
// import { Route, BrowserRouter} from "react-router-dom";



// function Searchbar() {

//   const history = useHistory();

//   const [searchValue, setSearchValue] = useState("");

//   const handleSearchChange = (event) => {
//     setSearchValue(event.target.value);
//   };

//    const handleSearchClick = async () => {
//       const response = await axios.get(
//        `http://localhost:3001/pokemons/?name=${searchValue}`
//     );
//  history.push(`/home/${searchValue}`, { pokemon: response.data });
//    };

//   const handleClickDeBotonTodos = () => {
//     history.push("/home")
//    }

// const handleClickBotonTypes = () => {
//   history.push("/type")
//     }

//    const handleClickBotonMostrarApi = () => {
//    history.push("/pokemonDeApi");
//   }


//  const handleClickCrearPokemon = () => {
//    history.push("/create")
//    }

  
//   return (
//     <div>
//       <div onChange={handleSearchChange} className={styles.buscador}>
//         <button onClick={handleClickCrearPokemon} className={styles.button}>
//           Crear Pokemon
//         </button>
//         <input type="text" className={styles.input} />
//         <button onClick={handleSearchClick} className={styles.button}>
//           Buscar
//         </button>
//       </div>
//       <div className={styles.opciones}>
//         <button
//           onClick={handleClickDeBotonTodos}
//           className={styles.buttonOpciones}
//         >
//           Todos
//         </button>
//         <button
//           onClick={handleClickBotonTypes}
//           className={styles.buttonOpciones}
//         >
//           Tipo
//         </button>
//         <button
//           onClick={handleClickBotonMostrarApi}
//           className={styles.buttonOpciones}
//         >
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Searchbar;


import React from "react";
import  '../searchbar/searchbar.css'
import { searchForName } from "../../redux/action";
import { useState } from "react";
import { useDispatch } from "react-redux";



export default function Searchbar () {

const dispatch = useDispatch();
const [name, setName] = useState ('');

function handleInputChange (e) {
   setName (e.target.value);
}

function handleSubmit (e) {
    e.preventDefault()
    dispatch (searchForName(name))
    setName('')
    
}

    return (
        <div>
           <div className="buttom">
              <button type="submit" onClick={handleSubmit} className='btnPokebola'></button>
              <input className='searchName' value={name} onChange={handleInputChange} type="text" placeholder="Buscar por pokemon.." />
             </div>
            
           </div>
        
        
    )

}