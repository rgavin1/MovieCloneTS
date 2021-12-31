import React, { useEffect, useState } from "react";
import { feature } from "../../services/request/feature";
import { getYearFromDate } from "../../utils";
import { Feature, Genre, Genres, Member, RawResults } from "../../utils/types";



const Container: React.FC<{ results?: RawResults; }> = ({ results }) => {
  const [details, setDetails] = useState<Feature>(null);
  const [cast, setCast] = useState<Member[] | null>(null);

  useEffect(() => {

    (async () => {
      const response = await feature.getDetails(results as RawResults);
      setDetails(response.feature);
      setCast(response.cast);
    })()

  }, [results]);

  return (
    <div id="hero" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${details?.backdrop_path})` }}>
      <div id="featureDescription">
        <h1 className="heading-one">
          {details?.title ? details?.title : details?.name}
        </h1>
        <ul id="feature-data">
          <li>{details?.vote_average} Rating</li>
          <li>{getYearFromDate((details?.first_air_date || details?.release_date) as string)}</li>
          <li style={{ display: "none" }}>2 Seasons</li>
          <li>4k ultra HD</li>
          <li>5:1</li>
        </ul>
        <p id="feature-description" className="content">
          {details?.overview}
        </p>
        <ul id="feature-credits" className="content">
          {cast?.map((member: Member, index: number) =>
            <li key={index}>{member}</li>
          )}
        </ul>
        <ul id="feature-genre" className="list-genre">
          {Genres.map((genre: Genre, index) => {
            if (!(details?.genre_ids.includes(genre.id))) return null;
            return <li key={index}>{genre.name}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default Container;
