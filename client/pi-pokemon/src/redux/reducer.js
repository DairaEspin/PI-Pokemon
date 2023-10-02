import { GET_TYPE } from "./action";
import { GET_ALL_POKEMONS,GET_DETAIL, GET_TYPE, SEARCH_FOR_NAME,ORDER_FOR_NAME_AZ, ORDER_FOR_NAME_ZA,FILTER_CREATE, 
    ORDER_BY_TYPE, ORDER_BY_PESO, ORDER_BY_ALTURA, POST_POKEMON } from "./actions";


    const inicialState = {
        pokemon: [],
       pokemonAll: [],
        pokemonDetail: [],
        type: [],
    };

    const rootReducer = (state = inicialState, action) => {

    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
              ...state,
                pokemon: action.payload,
                pokemonAll: action.payload
            };
            
        case GET_TYPE:
            return {
              ...state,
                ttype: action.payload
            };
        case GET_DETAIL:
            return {
             ...state,
                pokemonDetail: action.payload
            };
        case SEARCH_FOR_NAME:
            return {
            ...state,
                pokemon: action.payload
            };
            case POST_POKEMON:
                return{
                    ...state,
                 pokemonAll:[...action.payload]


                };
            case ORDER_FOR_NAME_AZ:
                let resultAZ = state.pokemon.sort(function(a, b){
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                });
                return {
                    ...state,
                    pokemon: resultAZ
                }
            case ORDER_FOR_NAME_ZA:
                let resultZA = state.pokemon.sort(function(a, b){
                    if (a.name > b.name) return -1;
                    if (a.name < b.name) return 1;
                    return 0;
                });
                return {
                    ...state,
                    pokemon: resultZA
                };

    
                case FILTER_CREATE:
                    const createdFilter = action.payload === 'Creadas'? state.pokemon.filter(el => el.createdInDb) : state.pokemon.filter(el=>!el.createdInDb)
            
                    return {
                        ...state,
                        pokemon: createdFilter
                    };
                    
                case ORDER_BY_TYPE: 
                    const filterTemp = state.pokemonAll.filter(pokemons => {
                        if (!pokemons.type) return undefined;
                        return pokemons.type.includes(action.payload)
                    })
                    console.log(filterTemp);
                    return {
                        ...state,
                        pokemon: filterTemp
                    }
                    case ORDER_BY_PESO:
                    
                    let resultsMin = state.pokemon.sort((a,b) => parseInt(a.weight.split(" - ")[0]) - parseInt(b.weight.split(" - ")[0]))
                    let resultmin1 = resultsMin.sort((a,b)=> {
                        if (parseInt(a.weight.split(" - ")[0]) === parseInt(b.weight.split(" - ")[0])) {
                            return parseInt(a.weight.split(" - ")[1]) - parseInt(b.weight.split(" - ")[1])
                        } else return 0;
                    } )
        
                        return {
                            ...state,
                            pokemon: resultmin1 
                        }
                    case ORDER_BY_ALTURA:
                        let resultsMax = state.pokemon.sort((a,b) => parseInt(b.height.split(" - ")[0]) - parseInt(a.height.split(" - ")[0]))
                        let resultMax1 = resultsMax.sort((a,b)=> {
                        if (parseInt(b.height.split(" - ")[0]) === parseInt(a.height.split(" - ")[0])) {
                            return parseInt(b.height.split(" - ")[1]) - parseInt(a.height.split(" - ")[1])
                        } else return 0;
                    } )
                        
                        console.log(resultsMax)
                        return {
                            ...state,
                            pokemon: resultMax1
                        };
                    default: 
                    return {...state}
            }
        }
        
        export default rootReducer;