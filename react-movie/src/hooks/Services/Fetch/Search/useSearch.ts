import { useEffect, useState } from "react";
import { search } from "../../../../services/get/Search";
import { SearchResults } from "../../../../utils/types";

const useSearch = (query: string) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<SearchResults[]>([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        (async () => {
            if (query) {
                try {
                    setLoading(true);
                    const results = await search.byTerm(query);
                    setData(results);
                } catch (e: any) {
                    setError(e);
                } finally {
                    setLoading(false);
                }
            }
        })();
    }, [query]);
    return { loading, data, error } as const;
};
export default useSearch;
