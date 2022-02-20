import { useState, useEffect } from 'react';
import { getFeature } from '../../../../services/get/Feature';
import { TvListResult } from '../../../../utils/types';


const useFeatureTvDaily = () => {
    const [data, setData] = useState<TvListResult[]>([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const results = await getFeature.dailyTvFeatures();
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

export default useFeatureTvDaily;
