import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, PokemonDetail, MyPokemonList } from "./pages";
import { ApolloProvider } from "@apollo/client/react";
import client from "./config/graphql";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/mylist">
            <MyPokemonList />
          </Route>
          <Route path="/pokemon/:name">
            <PokemonDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
