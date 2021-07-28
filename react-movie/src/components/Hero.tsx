import React, { useContext } from "react";

import { HeroContext } from "../useContext";

const Hero: React.FC = () => {
  const useList = useContext(HeroContext);

  return (
    <>
      <h1>Hero Image</h1>
      <h2>Adult {useList?.adult}</h2>
      <h2>Backdrop Path:</h2>
      <img
        src={`https://image.tmdb.org/t/p/original${useList?.backdrop_path}`}
        alt=""
      />
      <h2>Genre Ids {useList?.genre_ids}</h2>
      <h2>ID {useList?.id}</h2>
      <h2>Media Type {useList?.media_type}</h2>
      <h2>Original Language {useList?.original_language}</h2>
      <h2>Original Title {useList?.original_title}</h2>
      <h2>Overview {useList?.overview}</h2>
      <h2>Popularity {useList?.popularity}</h2>
      <h2>Poster Path: </h2>
      <img
        src={`https://image.tmdb.org/t/p/original${useList?.poster_path}`}
        alt=""
      />
      <h2>Release Date {useList?.release_date}</h2>
      <h2>Title {useList?.title}</h2>
      <h2>Video {useList?.video}</h2>
      <h2>Vote Average {useList?.vote_average}</h2>
      <h2>Vote Count {useList?.vote_count}</h2>
    </>
  );
};

export default Hero;
