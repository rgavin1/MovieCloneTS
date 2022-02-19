import React from 'react';

const Header: React.FC<{ query: string }> = ({ query }) => {
    return <h1 className='heading-one'>{query || "Trending"}</h1>;
};

export default Header;
