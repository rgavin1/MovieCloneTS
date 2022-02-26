import React from 'react';
import { SkeletonDescription } from '../../layouts';
import { Hero } from '../../utils/types';

const Content: React.FC<Hero> = ({ results, isLoading }) => {
    return <p id="feature-description" className="content">
        {isLoading && <SkeletonDescription />}
        {!isLoading && results?.overview}
    </p>;
};

export default Content;
