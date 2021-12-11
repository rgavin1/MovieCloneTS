require('dotenv').config()
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
const APIKEY: string | undefined = process.env.REACT_APPTMDB_APIKEY

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
  totalPages: number;
  totalResults: number;
};

type Movie = {
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  id: string;
  mediaType: string;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: string;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  vote_count: number;
};

type Tv = Movie & {
  firstAirDate: string;
  name: string;
  originCountry: string[];
  originalName: string;
};

export type RawTrailerInfo = {
  id: string;
  iso_3166_1: string;
  iso_639_1: string;
  key: string;
  name: string;
  official: boolean;
  publishedAt: string;
  site: string;
  size: number;
  type: string;
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

export const requestMovieTrailers = async (movieId: string) => {
  const response: any = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${APIKEY}`
  );

  return await response;
};
