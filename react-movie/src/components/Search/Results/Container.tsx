import React, { useState, useEffect } from 'react';
import { SearchResults } from '../../../utils/types';
import Card from './Card/Container';


const Container: React.FC<{ results: SearchResults[] }> = ({ results }) => {
    const [list, setList] = useState<SearchResults[]>([]);

    useEffect(() => setList(results), [results]);

    return <div id="search-results" >
        {
            list.map((detail, i) => (<Card key={i} detail={detail} />))
        }
    </div>;
};

export default Container;
