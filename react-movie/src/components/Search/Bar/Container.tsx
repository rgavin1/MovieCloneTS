import React, { Dispatch, SetStateAction, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Container: React.FC<{ setQuery: SetStateAction<Dispatch<string>> }> = ({ setQuery }) => {
    const [focus, setFocus] = useState(false);
    const [input, setInput] = useState("");

    const handleOnFocus = () => setFocus((prev) => !prev);
    const handleInput = (e: any) => { setInput(e.target.value); setQuery(e.target.value); };

    const isActive = focus ? "--active" : "";

    // TODO: Handle Search 

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
