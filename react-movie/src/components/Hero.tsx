import { Container } from "@material-ui/core";
import React, { useContext } from "react";

import { HeroContext } from "../useContext";
import "./styles/Hero.css";

const Hero: React.FC = () => {
  const feature = useContext(HeroContext);

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(
          https://image.tmdb.org/t/p/original${feature?.backdrop_path}
        )`,
      }}
    >
      <Container>
        <h2>Title {feature?.title}</h2>
        <h2>Adult {feature?.adult}</h2>
        <h2>Backdrop Path: ${feature?.backdrop_path}</h2>
        <h2>Genre Ids {feature?.genre_ids}</h2>
        <h2>ID {feature?.id}</h2>
        <h2>Media Type {feature?.media_type}</h2>
        <h2>Original Language {feature?.original_language}</h2>
        <h2>Original Title {feature?.original_title}</h2>
        <h2>Overview {feature?.overview}</h2>
        <h2>Popularity {feature?.popularity}</h2>
        <h2>Release Date {feature?.release_date}</h2>
        <h2>Video {feature?.video}</h2>
        <h2>Vote Average {feature?.vote_average}</h2>
        <h2>Vote Count {feature?.vote_count}</h2>
      </Container>

      <h2>Poster Path: </h2>
      <img
        src={`https://image.tmdb.org/t/p/original${feature?.poster_path}`}
        alt=""
      />
    </div>
  );
};

export default Hero;
