import axios from "axios";
import { TMDB_URL, APIKEY } from "../../../helpers/constants";
import { Cast, MovieListResult } from "../../../utils/types";

const BASE_URL = TMDB_URL;
const config = {
    baseURL: BASE_URL,
    params: { api_key: APIKEY },
}

const castById = async (id: string): Promise<Cast[]> => {
    const urlPath = "/credits";
    const response = await axios({ ...config, url: urlPath, params: { ...config.params, id } });
    const cast = response.data.cast.slice(0, 5);
    return cast.map((member: Cast) => member.original_name);
}
const detailsById = async (id: string): Promise<any> => {
    const response = await axios.get(`${BASE_URL}/${id}?api_key=${APIKEY}&language=en-US`);
    return response.data;
}
const trending = async (): Promise<MovieListResult[]> => {
    const urlPath = "/trending/movie/week";
    const data = await axios({ ...config, url: urlPath });
    const { results } = data.data;
    return results;
}

export const getMovie = {
    castById,
    detailsById,
    trending
}
