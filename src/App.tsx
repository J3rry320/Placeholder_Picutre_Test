import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import PhotoTable from "./containers/PhotoTable";
import { store } from "./store";

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
