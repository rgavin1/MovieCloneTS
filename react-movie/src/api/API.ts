export const genres: genres[] = [
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
  { id: 10759, name: "Action & Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 10762, name: "Kids" },
  { id: 9648, name: "Mystery" },
  { id: 10763, name: "News" },
  { id: 10764, name: "Reality" },
  { id: 10765, name: "Sci-Fi & Fantasy" },
  { id: 10766, name: "Soap" },
  { id: 10767, name: "Talk" },
  { id: 10768, name: "War & Politics" },
  { id: 37, name: "Western" },
];

type genres = {
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
export type Slider = {
  title?: string;
  url?: string;
};

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

// Movies 🎥
export const requestMovieTrailers = async (movie_id: string) => {
  const response: any = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${APIKEY}&language=en-US`
  );

  return await response;
};

export const requestMovieNowPlaying = async () => {
  const response: any = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`
  );

  return await response;
};
