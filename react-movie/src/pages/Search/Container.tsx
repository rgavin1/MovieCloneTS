import React, { useState, useEffect } from "react";
import { Searchbar, SearchResults, SearchHeader } from '../../components';
import { SearchResults as Results } from "../../utils/types";
import { fetching } from '../../hooks/Services';



const Search: React.FC = () => {
  const { data } = fetching.useMovieTrends();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Results[]>([]);

  useEffect(() => setResults(data), [data]);


  return <div id="search">
    <Searchbar setQuery={setQuery} setResults={setResults} />
    {/* <div>
      <div>Trending | Popular Movies | Popular Tv Shows | Discover Tv | Discover Movies | Upcoming Movies | Upcoming Tv Shows</div>
    </div> */}
    <SearchHeader query={query} />
    <SearchResults results={Boolean(query) ? results : data} />
  </div>
};

export default Search;
