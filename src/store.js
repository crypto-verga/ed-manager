import { createStore } from 'redux'
import userPicture1 from './img/jake.jpg'

const inicialState = {
    jugadores: [{
        id: 1,
        nombre: 'Juan antonio',
        foto: userPicture1
    },
    {
        id: 2,
        nombre: 'Juan pepe',
        foto: userPicture1
    },
    {
        id: 3,
        nombre: 'Juan alejandro',
        foto: userPicture1
    }],
    titulares: [],
    suplentes: []
}


const reducerEntrenador = (state = inicialState, action) => {
    
    switch(action.type){
        case 'AGREGAR_TITULAR':
            return {
                ...state,
                titulares: state.titulares.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
            }
        case 'AGREGAR_SUPLENTE':
            return {
                ...state,
                suplentes: state.suplentes.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
            }
        case 'QUITAR_TITULAR':
            return {
                ...state,
                titulares: state.titulares.filter(j => j.id !== action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador)
            }
        case 'QUITAR_SUPLENTE':
            return {
                ...state,
                suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador)
            }
        default:
            break;
    }
    return state
}

export default createStore(reducerEntrenador)