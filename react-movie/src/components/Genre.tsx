import React from "react";
import { genres } from "../api/API";

const Genre: React.FC<{ ids: number[] }> = ({ ids }) => {
  return (
    <ul>
      {ids.map((termid, index) => {
        const term = genres.find((genre) => genre.id === termid);
        return <li key={index}>{term?.name}</li>;
      })}
    </ul>
  );
};

export default Genre;
