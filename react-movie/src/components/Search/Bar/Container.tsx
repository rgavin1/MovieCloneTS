import React, { Dispatch, useState, useEffect } from "react";
import debounce from 'lodash/debounce';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSearch } from "../../../hooks/Services/Fetch/Search";
import { SearchResults } from "../../../utils/types";

const Container: React.FC<{
    setQuery: Dispatch<string>;
    setResults: Dispatch<SearchResults[]>;
}> = ({ setQuery, setResults }) => {
    const [input, setInput] = useState("");
    const [focus, setFocus] = useState(false);

    const { data } = useSearch(input);

    const handleChange = (term: string) => {
        setInput(term);
        setQuery(term);
    }
    const debounced = debounce(handleChange, 250);
    const handleOnFocus = () => setFocus((prev) => !prev);
    const handleInput = (e: any) => debounced(e.target.value)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { setResults(data) }, [input]);

    const isActive = focus ? "--active" : "";

    return (
        <div id="searchbar">
            <label className="searchbar__label" htmlFor="searchbox">
                <FontAwesomeIcon id="searchbar__label__icon" icon={faSearch} />
                <input
                    className="content"
                    name="searchbox"
                    id={`searchbar__label__input${isActive}`}
                    onBlur={handleOnFocus}
                    onFocus={handleOnFocus}
                    onChange={handleInput}
                    placeholder="Search for movie, tv show, person....."
                    value={input}
                />
            </label>
        </div>
    );
};

export default Container;
