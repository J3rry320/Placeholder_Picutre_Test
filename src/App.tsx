import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import PhotoTable from "./containers/PhotoTable";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={PhotoTable} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
