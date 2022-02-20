import React, { useState, useEffect } from "react";
import { Searchbar, SearchResults, SearchHeader } from '../../components';
import { SearchResults as Results } from "../../utils/types";
import { search } from "./mocks/search";
import { fetching } from '../../hooks/Services';



const Search: React.FC = () => {
  const { data } = fetching.useMovieTrends();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Results[]>([]);

  useEffect(() => setResults(search.results as Results[]), []);


  return <div id="search">
    <Searchbar setQuery={setQuery} />
    {/* <div>
      <div>Trending | Popular Movies | Popular Tv Shows | Discover Tv | Discover Movies | Upcoming Movies | Upcoming Tv Shows</div>
    </div> */}
    <SearchHeader query={query} />
    <SearchResults results={query ? results : data} />
  </div>
};

export default Search;
