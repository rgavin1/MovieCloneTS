import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/sass/main.scss"

import { HomePage } from "./pages";
import { NavBar } from "./components";
import { Content } from "./layouts";

const App: React.FC = () => {
  return (
    <Router>
      <div className="movieApp">
        <NavBar />
        <Content />
        {/* <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
};

export default App;
