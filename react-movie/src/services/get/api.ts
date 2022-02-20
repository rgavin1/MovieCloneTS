import { Media } from "../../utils/types";

require('dotenv').config()
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
const APIKEY: string | undefined = process.env.REACT_APP_TMDB_APIKEY

/**
 * I dont know why this function returns the same fu*kin'
 * promise twice 🤯
 */
export const resquestTrendingMedia = async (mediaType: Media.ALL) => {
  const response: any = await fetch(
    `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${APIKEY}`
  );

  return await response;
};

export const requestMovieTrailers = async (movieId: string) => {
  const response: any = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${APIKEY}`
  );

  return await response;
};
