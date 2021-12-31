import axios from "axios";
import { Member } from "../../utils/types";
require('dotenv').config()




// eslint-disable-next-line @typescript-eslint/no-unused-expressions
const APIKEY: string | undefined = process.env.REACT_APP_TMDB_APIKEY
const URL = "https://api.themoviedb.org/3/movie";


const getCastById = async (id: string): Promise<Member[]> => {
    const response = await axios.get(`${URL}/${id}/credits?api_key=${APIKEY}&language=en-US`);
    const cast = response.data.cast.slice(0, 5);
    return cast.map((member: Member) => member.name);
}

export const movie = {
    getCastById
}
