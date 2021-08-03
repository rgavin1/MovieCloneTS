import { Button, Container } from "@material-ui/core";
import React, { useContext } from "react";

import { HeroContext } from "../useContext";
import { Genre, Modal } from "./index";
import "./styles/Hero.css";

import StarIcon from "@material-ui/icons/Star";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import InfoIcon from "@material-ui/icons/Info";

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
            {/* {feature?.genre_ids && <Genre ids={feature?.genre_ids} />} */}
          </div>
          <br />
          <div className="hero-button-group">
            <Button title="Add" variant="contained">
              {" "}
              <AddIcon />
            </Button>
            <Button title="Like" variant="contained">
              <FavoriteIcon />
            </Button>
            <Button title="More Info" variant="contained">
              <InfoIcon />
            </Button>
            {Boolean(feature?.id) && <Modal id={feature?.id} />}
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
