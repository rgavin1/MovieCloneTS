const APIKEY = "16a2d758fecccf61be2a8107d67a5aba";

export const genres: GenreTypes[] = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

export type GenreTypes = {
  id: number;
  name: string;
};

export type RawResults = {
  page: number;
  results: string[];
  total_pages: number;
  total_results: number;
};

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
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

export type Feature = Tv | Movie | null;

export enum MediaTypes {
  MOVIE = "movie",
  TV = "tv",
  ALL = "all",
  PERSON = "person",
}

/**
 * I dont know why this function returns the same fu*kin'
 * promise twice 🤯
 */
export const resquestTrendingMedia = async (mediaType: MediaTypes) => {
  const response: any = await fetch(
    `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${APIKEY}`
  );

  return await response;
};
