import React, { useEffect, useState } from 'react';
import { SearchResults } from '../../../../utils/types';

const Container: React.FC<{ detail: SearchResults; }> = (detail) => {
    const [item, setItem] = useState<SearchResults>();

    useEffect(() => setItem({ ...detail.detail }), [detail]);

    return <div id="search-result__card">
        {/* { Add Link } */}
        <div id="search-result__card__img" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${item?.media_type === "person" ? item?.profile_path : item?.poster_path})` }} />
        <h3 id="search-result__card__title">{item?.media_type === "movie" ? item?.title : item?.name}</h3>
    </div>;
};

export default Container;
