import React from 'react';
import { Genre } from '..';
import { SkeletonSentence } from '../../layouts';
import { Hero } from '../../utils/types';

const GenreList: React.FC<Hero> = ({ results, isLoading }) => {
    return <ul id="feature-genre" className="list-genre">
        {isLoading && <SkeletonSentence />}
        {!isLoading && <Genre genresCode={results?.genre_ids} />}
    </ul>;
};

export default GenreList;
