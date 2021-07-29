const APIKEY = "16a2d758fecccf61be2a8107d67a5aba";

export type RawResults = {
  page: number;
  results: string[];
  total_pages: number;
  total_results: number;
};

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[] | number | null;
  id: string;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type Tv = Movie & {
  first_air_date: string;
  name: string;
  origin_country: string[];
  original_name: string;
};

export type Feature = Movie | Tv | null;

export enum MediaTypes {
  MOVIE = "movie",
  TV = "tv",
  ALL = "all",
  PERSON = "person",
}

/**
 * I dont this function returns the same fu*kin'
 * function twice 🤯
 */
export const resquestTrendingMedia = async (mediaType: MediaTypes) => {
  const response: any = await fetch(
    `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${APIKEY}`
  );

  return await response;
};
