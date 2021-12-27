import React, { useEffect, useState } from "react";
import { getYearFromDate, randomNumber } from "../../utils";
import { Feature, Genre, Genres, RawResults } from "../../utils/types";
import { movie } from "../../services/request";



const Container: React.FC<{ results?: RawResults; }> = ({ results }) => {
  const [feature, setFeature] = useState<Feature>(null);


  useEffect(() => setFeature(results?.results[randomNumber(results.results.length)]), [results]);
  useEffect(() => {
    // TODO: ADD CREDITS
    console.log("Call the api");
    movie.creditsById();
  }, []);

  return (
    <div id="hero" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${feature?.backdrop_path})` }}>
      <div id="featureDescription">
        <h1 className="heading-one">
          {feature?.title ? feature?.title : feature?.name}
        </h1>
        <ul id="feature-data">
          <li>{feature?.vote_average} Rating</li>
          <li>{getYearFromDate((feature?.first_air_date || feature?.release_date) as string)}</li>
          <li style={{ display: "none" }}>2 Seasons</li>
          <li>4k ultra HD</li>
          <li>5:1</li>
        </ul>
        <p id="feature-description" className="content">
          {feature?.overview}
        </p>
        <p id="feature-credits" className="content">
          {feature?.media_type === "movie" ? "Movie" : "TV"}
        </p>
        <ul id="feature-genre" className="list-genre">
          {Genres.map((genre: Genre, index) => {
            if (!(feature?.genre_ids.includes(genre.id))) return null;
            return <li key={index}>{genre.name}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default Container;
