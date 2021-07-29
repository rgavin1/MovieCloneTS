import { Button, Container, Icon } from "@material-ui/core";
import React, { useContext } from "react";

import { HeroContext } from "../useContext";
import { Genre } from "./index";
import "./styles/Hero.css";

import StarIcon from "@material-ui/icons/Star";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const Hero: React.FC = () => {
  const feature = useContext(HeroContext);

  return (
    <div
      className="hero-container"
      style={{
        background: "rgb(0 0 0 / 46%)",
        backgroundImage: `url(
          https://image.tmdb.org/t/p/original${feature?.backdrop_path}
        )`,
      }}
    >
      <Container>
        <div className="hero-data">
          <h1>{feature?.title}</h1>
          <ul className="hero-meta">
            <li>{`${feature?.release_date}`.slice(0, 4)}</li>
            <li className="hero-meta-vote">
              <StarIcon /> <span>{feature?.vote_average}</span>
            </li>
            <li className="hero-meta-vote">
              <PeopleAltIcon /> {feature?.vote_count}
            </li>
          </ul>
          <p>Overview {feature?.overview}</p>
          <div className="hero-genre">
            {feature?.genre_ids && <Genre ids={feature?.genre_ids} />}
          </div>
          <br />
          <div className="hero-button-group">
            <Button variant="contained">More Info</Button>
            <Button
              variant="contained"
              color="primary"
              endIcon={<PlayArrowIcon />}
            >
              Watch Trailer
            </Button>
          </div>
        </div>
      </Container>

      {/* <h2>Poster Path: </h2>
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/original${feature?.poster_path}`}
          alt=""
        />
      </Container> */}
    </div>
  );
};

export default Hero;
