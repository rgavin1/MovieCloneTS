import React from 'react';
import { SkeletonTitle } from '../../layouts';
import { Hero, Media } from '../../utils/types';

const Title: React.FC<Hero> = ({ results, isLoading }) => {
    return (<>
        {isLoading && <SkeletonTitle />}
        {!isLoading &&
            <h1 className="heading-one">
                {results?.media_type === Media.MOVIE
                    ? results?.title
                    : results?.name}
            </h1>
        }
    </>);
};

export default Title;
