import { useState, useEffect } from 'react';
import { getFeature } from '../../../../services/get/Feature';
import { MovieListResult } from '../../../../utils/types';


const useFeatureMovieDaily = () => {
    const [data, setData] = useState<MovieListResult[]>([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const results = await getFeature.dailyMovieFeatures();
                setData(results)
            } catch (e: any) {
                setError(e);
            } finally {
                setLoading(false);
            }
        })();
    }, [])
    return { loading, data, error } as const;
};

export default useFeatureMovieDaily;
