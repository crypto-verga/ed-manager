import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import Jugadores from "./componentes/Jugadores";
import EquipoSelecionado from "./componentes/EquipoSelecionado";
import './styles/styles.scss'

const App = () => (
  <Provider store={store}>
    <main>
      <h1 >EDmanager</h1>
      <Jugadores />
      <EquipoSelecionado />
    </main>
  </Provider>
)

export default App;
