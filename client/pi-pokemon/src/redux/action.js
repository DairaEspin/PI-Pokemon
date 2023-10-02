import axios from 'axios';

export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_TYPE = 'GET_TYPE';
export const GET_DETAIL = 'GET_DETAIL';
export const SEARCH_FOR_NAME = 'SEARCH_FOR_NAME';
export const ORDER_FOR_NAME_AZ = 'ORDER_FOR_NAME_AZ';
export const ORDER_FOR_NAME_ZA = 'ORDER_FOR_NAME_ZA';
export const FILTER_CREATE = 'FILTER_CREATE';
export const ORDER_BY_TYPE= 'ORDER_BY_Type';
export const ORDER_BY_PESO = 'ORDER_BY_PESO';
export const ORDER_BY_ALTURA = 'ORDER_BY_ALTURA';
export const POST_POKEMON = 'POST_POKEMON';

export const getAllPokemons = () => {
   return async function (dispatch) {
     try {
       let json = await axios.get('pokemons/get');
       return dispatch({
         type: GET_ALL_POKEMONS,
         payload: json.data,
       });
     } catch (error) {
         throw error;
     }
   };
 };

 export const getDetail = (payload) => async dispatch => {
  
    return await fetch(`http://localhost:3000/pokemon/${payload}`)
    .then (respose => respose.json())
    .then (json => dispatch ({type: GET_DETAIL, payload: json} ))
 }
 
 export const getAlltypes = () => async dispatch => {
    return await fetch(`http://localhost:3000/type`)
       .then(respose => respose.json())
       .then (json => dispatch ({type: GET_TYPE, payload: json}))
       
 }
 
 export const searchForName = (payload) => async dispatch => {
    try {
       
     
     return await fetch(`${`http://localhost:3000/pokemon/`}/?name=${payload}`)
       .then (respose => respose.json())
      .then (json => dispatch ({type: SEARCH_FOR_NAME, payload:json}))
   }catch {
      return alert ('No se encontró el pokemon,intente con otro')
   }
  }

 
 export function postPokemon(payload) { 
    return async function() {
            const response = await axios.post(`http://localhost:3000/pokemon/`, payload);
            console.log(response)
          return response;
    }
 };
 




 export const orderByNameAz = (payload) =>{
    console.log(payload)
    return {
       type: ORDER_FOR_NAME_AZ,
       payload
    }
 };
 
 export const orderByNameZa = (payload) =>{
    console.log(payload)
    return {
       type: ORDER_FOR_NAME_ZA,
       payload
    }
 };

 export const filterCreated = (payload) => {
    return  {
       type: FILTER_CREATE,
       payload
    }
 };
 
 export const orderByType = (payload) => {
 console.log(payload)
    return {
       type: ORDER_BY_TYPE,
       payload
    }
 };
 
 export const orderByPeso = (payload) => {
    console.log(payload)
    return {
       type: ORDER_BY_PESO,
       payload
    }
 };
 
 export const orderByAltura = (payload) => {
    console.log(payload)
    return {
       type: ORDER_BY_ALTURA,
       payload
    }
 };