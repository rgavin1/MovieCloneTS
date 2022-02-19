import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./assets/sass/main.scss"

import { NavBar } from "./components";
import { Content as Page, Header } from "./layouts";

const App: React.FC = () => {
  return (
    <Router basename="/app">
      <div className="app">
        <Header />
        <NavBar />
        <Page />
      </div>
    </Router>
  );
};

export default App;
