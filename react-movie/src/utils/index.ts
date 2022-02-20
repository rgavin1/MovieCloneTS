import { Feature } from "./types";


const randomNumber = (max: number, min: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const selectRandomFeature = (list: Feature[]): Feature =>
    (list[randomNumber(0, list.length)]);

// export const HomeSlidersList: Slider[] = [
//   {
//     title: "Latest Movies",
//     url: `https://api.themoviedb.org/3/movie/latest?api_key=${APIKEY}&language=en-US`,
//   },
//   {
//     title: "Now Playing",
//     url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`,
//   },
//   {
//     title: "Popular Movies",
//     url: `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`,
//   },
//   {
//     title: "Top Rated Movies",
//     url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
//   },
//   {
//     title: "Upcoming Movies",
//     url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`,
//   },
// ];

// export const randomNumber = (length: number) => Math.floor(Math.random() * length)

const getYearFromDate = (date: string | undefined) => {
    if (!date) return;
    return date.split("-")[0];
}


export const utils = {
    selectRandomFeature,
    getYearFromDate
}