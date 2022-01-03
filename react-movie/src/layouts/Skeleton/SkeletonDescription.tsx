import React from 'react';

const SkeletonDescription: React.FC = () => {
    return (
        <ul>
            {[1, 2, 3, 4, 5].map((row) => {
                return <li className="shimmer description" key={row}>{row}</li>
            })}
        </ul>
    )
}

export default SkeletonDescription
