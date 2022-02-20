import { useState, useEffect } from 'react';
import { getFeature } from '../../../../services/get/Feature';
import { Feature } from '../../../../utils/types';


const useFeatureAllWeekly = () => {
    const [data, setData] = useState<Feature[]>([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const results = await getFeature.weeklyAllFeatures();
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

export default useFeatureAllWeekly;
