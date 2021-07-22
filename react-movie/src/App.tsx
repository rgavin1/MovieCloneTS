import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Pages
import { HomePage, SearchPage, TvPage, MoviePage } from "./pages";
// Components
import { NavBar } from "./components";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/tv">
            <TvPage />
          </Route>
          <Route path="/movie">
            <MoviePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
