import React, { useEffect, useState } from "react";
import { Feature, Genre, Genres, RawResults } from "../../utils/types";




const Container: React.FC<{ results?: RawResults; }> = ({ results }) => {
  const [feature, setFeature] = useState<any>(null);

  useEffect(() => setFeature(results?.results[1]), [results]);

  return (
    <div id="hero" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${feature?.backdrop_path})` }}>
      <div id="featureDescription">
        <h1 className="heading-one">
          {feature?.title ? feature?.title : feature?.name}
        </h1>
        <ul id="feature-data">
          <li>{feature?.vote_average} Rating</li>
          <li>2021</li>
          <li>2 Seasons</li>
          <li>4k ultra HD</li>
          <li>5:1</li>
        </ul>
        <p id="feature-description" className="content">
          {feature?.overview}
        </p>
        <p id="feature-actors" className="content">
          Lorem Ipsum, Dolor Sit Amet, Consectetur Adipisicing
        </p>
        <ul id="feature-genre" className="list-genre">
          {Genres.map((genre: any) => {
            if (!(feature?.genre_ids.includes(genre.id))) return null;
            return <li>{genre.name}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default Container;
