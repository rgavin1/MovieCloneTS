import React from "react";
import "./App.css";
// Pages
import { HomePage, SearchPage, TvPage, MoviePage } from "./pages";
// Components
import { NavBar } from "./components";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <h1>Movie Clone</h1>
      <HomePage />
      <SearchPage />
      <TvPage />
      <MoviePage />
    </div>
  );
};

export default App;
