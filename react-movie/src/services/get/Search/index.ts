import axios from "axios";
import { TMDB_URL, APIKEY } from "../../../helpers/constants";
import { SearchResults } from "../../../utils/types";

const BASE_URL = TMDB_URL;
const config = {
    baseURL: BASE_URL,
    params: { api_key: APIKEY, query: "" },
};

// TODO: Introduce Recursive pagination
const byTerm = async (query: string): Promise<SearchResults[]> => {
    const basePath = "search/multi";

    const data = await axios({ ...config, url: basePath, params: { ...config.params, query } });
    return data.data.results;
};

export const search = {
    byTerm,
};
