import React from 'react';
import { Hero } from '../../utils/types';
import { Title, MetaData, Content, GenreList } from "./index"
import { SkeletonSentence } from "../../layouts/";

const Description: React.FC<Hero> = ({ results, isLoading }) => {
    return <div id="featureDescription">
        <Title results={results} isLoading={isLoading} />
        <MetaData results={results} isLoading={isLoading} />
        <Content results={results} isLoading={isLoading} />
        <ul id="feature-credits" className="content">
            {isLoading && <SkeletonSentence />}
            {/* {!isLoading && cast?.map((member: Member, index: number) =>
            <li key={index}>{member}</li>
          )} */}
        </ul>
        <GenreList results={results} isLoading={isLoading} />
    </div>;
};

export default Description;
