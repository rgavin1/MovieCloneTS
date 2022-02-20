import axios from "axios";
import { TMDB_URL, APIKEY } from "../../../helpers/constants";
import { Member, MovieListResult } from "../../../utils/types";

const BASE_URL = TMDB_URL;
const config = {
    baseURL: BASE_URL,
    params: { api_key: APIKEY },
}

const castById = async (id: string): Promise<Member[]> => {
    const response = await axios.get(`${BASE_URL}/${id}/credits?api_key=${APIKEY}&language=en-US`);
    const cast = response.data.cast.slice(0, 5);
    return cast.map((member: Member) => member.name);
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
