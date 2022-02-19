import React, { useState, useEffect } from "react";
import { Searchbar, SearchResults, SearchHeader } from '../../components';
import { SearchResults as Results } from "../../utils/types";
import { search } from "./mocks/search";



const Search: React.FC = () => {
  const [results, setResults] = useState<Results[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => setResults(search.results as Results[]), []);

  return <div id="search">
    <Searchbar setQuery={setQuery} />
    {/* <div>
      <div>Trending | Popular Movies | Popular Tv Shows | Discover Tv | Discover Movies | Upcoming Movies | Upcoming Tv Shows</div>
    </div> */}
    <SearchHeader query={query} />
    <SearchResults results={results} />
  </div>
};

export default Search;
