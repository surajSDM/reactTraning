import React from 'react';
import Routes from "./config/routes";
import { Provider } from "mobx-react";
import Stores from "./store";
const App = () => (
  <Provider stores={Stores}> <Routes /> </Provider>
);


export default App;
