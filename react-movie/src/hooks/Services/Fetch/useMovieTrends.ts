import { useState, useEffect } from "react";
import { getMovie } from "../../../services/get/Movies";
import { MovieListResult } from "../../../utils/types";

const useMovieTrends = () => {
    const [data, setData] = useState<MovieListResult[]>([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const results = await getMovie.trending();
                setData(results)
            } catch (e: any) {
                setError(e);
            } finally {
                setLoading(false);
            }
        })();
    }, [])
    return { loading, data, error } as const;
}

export default useMovieTrends;