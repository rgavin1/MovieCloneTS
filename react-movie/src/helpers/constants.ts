import { Genre } from "../utils/types";

require('dotenv').config();
export const APIKEY = process.env.REACT_APP_TMDB_APIKEY
export const TMDB_URL = "https://api.themoviedb.org/3/";
export const GENRES_LIST: Genre = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
};