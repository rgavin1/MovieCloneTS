import axios from "axios"
import { randomNumber } from "../../utils";
import { Feature, Member, RawResponse, RawResults } from "../../utils/types";

require('dotenv').config();
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
const APIKEY: string | undefined = process.env.REACT_APP_TMDB_APIKEY

const getDetails = async (results: RawResults): Promise<RawResponse | any> => {
    const randomFeature: Feature = results?.results[randomNumber(results.results.length)];

    let response;

    if (randomFeature?.title) {
        try {
            response = await axios.get(`https://api.themoviedb.org/3/movie/${randomFeature?.id}/credits?api_key=${APIKEY}&language=en-US`);
        } catch (error) {
            return error
        }
    } else {
        try {
            response = await axios.get(`https://api.themoviedb.org/3/tv/${randomFeature?.id}?api_key=${APIKEY}&language=en-US`);
        } catch (error) {
            return error
        }
    }

    let cast: Member[] | undefined;

    if (response.data.cast) {
        cast = response.data.cast.slice(0, 5).map((member: Member) => member.name);
    }

    return {
        feature: randomFeature,
        cast: cast
    };
}

export const feature = {
    getDetails
}