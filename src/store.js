import { createStore } from 'redux'

const inicialState = {
    jugadores: [],
    titulares: [],
    suplentes: []
}


const reducerEntrenador = (state = inicialState, action) => {
     return state
}

export default createStore(reducerEntrenador)