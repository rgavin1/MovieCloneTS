import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/tv">Tv</Link>
        </li>
        <li>
          <Link to="/movie">Movie</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
