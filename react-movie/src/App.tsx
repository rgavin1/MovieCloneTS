import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./assets/sass/main.scss"

// import { HomePage } from "./pages";
import { NavBar } from "./components";
import { Content, Header } from "./layouts";

const App: React.FC = () => {
  return (
    <Router>
      <div className="movieApp">
        <Header />
        <NavBar />
        {/* TODO: Set Content to take props url, 
          * page_name, and return a list of routes
          */}
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
