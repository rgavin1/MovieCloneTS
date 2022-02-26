import axios from "axios";
import { TMDB_URL, APIKEY } from "../../../helpers/constants";
import { Feature, Media, MovieListResult, SearchResults, TvListResult } from "../../../utils/types";

const BASE_URL = TMDB_URL;
const config = {
    baseURL: BASE_URL,
    params: { api_key: APIKEY },
}

const weeklyAllFeatures = async (): Promise<Feature[]> => {
    const urlPath = "trending/all/week";
    const response = await axios({ ...config, url: urlPath });
    const { results } = response.data
    return results.filter((res: SearchResults) => res.media_type !== Media.PERSON);
}
const dailyAllFeatures = async (): Promise<Feature[]> => {
    const urlPath = "trending/all/day";
    const response = await axios({ ...config, url: urlPath });
    const { results } = response.data
    return results.filter((res: SearchResults) => res.media_type !== Media.PERSON);
}
const weeklyMovieFeatures = async (): Promise<MovieListResult[]> => {
    const urlPath = "trending/movie/week";
    const { data } = await axios({ ...config, url: urlPath });
    return data.results;
}
const dailyMovieFeatures = async (): Promise<MovieListResult[]> => {
    const urlPath = "trending/movie/day";
    const { data } = await axios({ ...config, url: urlPath });
    return data.results;
}
const weeklyTvFeatures = async (): Promise<TvListResult[]> => {
    const urlPath = "trending/tv/week";
    const { data } = await axios({ ...config, url: urlPath });
    return data.results;
}
const dailyTvFeatures = async (): Promise<TvListResult[]> => {
    const urlPath = "trending/tv/day";
    const { data } = await axios({ ...config, url: urlPath });
    return data.results;
}
export const getFeature = {
    dailyAllFeatures,
    dailyMovieFeatures,
    dailyTvFeatures,
    weeklyAllFeatures,
    weeklyMovieFeatures,
    weeklyTvFeatures,
}