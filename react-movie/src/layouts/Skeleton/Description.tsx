import React from 'react';

const Description: React.FC = () =>
    <ul>
        {[1, 2, 3, 4, 5].map((row) => {
            return <li className="shimmer description" key={row}>{row}</li>
        })}
    </ul>

export default Description
