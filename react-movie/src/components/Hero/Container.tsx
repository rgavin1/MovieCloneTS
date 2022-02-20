import React from "react";
import {
  SkeletonTitle,
  SkeletonSentence,
  SkeletonDescription,
} from "../../layouts/";
// import { feature } from "../../services/request/feature";
// import { getYearFromDate } from "../../utils";
import { Feature, Media } from "../../utils/types";

const Container: React.FC<{
  results?: Feature;
  isLoading: boolean;
}> = ({ results, isLoading }) => {
  // const [details, setDetails] = useState<Feature>();
  // const [cast, setCast] = useState<Member[] | null>(null);

  return (
    <div
      id="hero"
      style={{
        backgroundImage: isLoading
          ? "none"
          : `url(https://image.tmdb.org/t/p/original${results?.backdrop_path})`,
      }}
    >
      <div id="featureDescription">
        {isLoading && <SkeletonTitle />}
        {!isLoading && (
          <h1 className="heading-one">
            {results?.media_type === Media.MOVIE
              ? results.title
              : results?.name}
          </h1>
        )}
        <ul id="feature-data">
          {isLoading && <SkeletonSentence />}
          {!isLoading && (
            <>
              <li>{results?.vote_average} Rating</li>
              {/* <li>{getYearFromDate((details?.first_air_date || details?.release_date) as string)}</li> */}
              <li style={{ display: "none" }}>2 Seasons</li>
              <li>4k ultra HD</li>
              <li>5:1</li>
            </>
          )}
        </ul>
        <p id="feature-description" className="content">
          {isLoading && <SkeletonDescription />}
          {!isLoading && results?.overview}
        </p>
        <ul id="feature-credits" className="content">
          {isLoading && <SkeletonSentence />}
          {/* {!isLoading && cast?.map((member: Member, index: number) =>
            <li key={index}>{member}</li>
          )} */}
        </ul>
        <ul id="feature-genre" className="list-genre">
          {isLoading && <SkeletonSentence />}
          {/* {!isLoading && Genres.map((genre: Genre, index) => {
            if (!(details?.genre_ids.includes(genre.id))) return null;
            return <li key={index}>{genre.name}</li>
          })} */}
        </ul>
      </div>
    </div>
  );
};

export default Container;
