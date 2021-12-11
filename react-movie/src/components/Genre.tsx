import React from "react";
// import { genres } from "../../services/API";

const Genre: React.FC<{ ids: any[] }> = ({ ids }) => {
  return (
    <ul>
      {ids.map((termid, index) => {
        return <h1>Ok</h1>
        // const term = genres.find((genre) => genre.id === termid);
        // return <li key={index}>{term?.name}</li>;
      })}
    </ul>
  );
};

export default Genre;
