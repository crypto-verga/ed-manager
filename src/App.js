import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import Jugadores from "./componentes/Jugadores";

const App = () => (
  <Provider store={store}>
      <main>
        <h1 >EDmanager</h1>
        <Jugadores />
      </main>
  </Provider>
)

export default App;
