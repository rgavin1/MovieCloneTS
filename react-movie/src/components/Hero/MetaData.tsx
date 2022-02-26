import React from 'react';
import { SkeletonSentence } from '../../layouts';
import { getYearFromDate } from '../../utils';
import { Hero } from '../../utils/types';

const MetaData: React.FC<Hero> = ({ results, isLoading }) => {
    return <ul id="feature-data">
        {isLoading && <SkeletonSentence />}
        {!isLoading && (
            <>
                <li>{results?.vote_average} Rating</li>
                <li>{getYearFromDate((results?.media_type === "tv" ? results?.first_air_date : results?.release_date) as string)}</li>
                <li style={{ display: "none" }}>2 Seasons</li>
                <li>4k ultra HD</li>
                <li>5:1</li>
            </>
        )}
    </ul>
};

export default MetaData;
