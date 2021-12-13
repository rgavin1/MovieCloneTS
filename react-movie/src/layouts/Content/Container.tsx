import React from 'react'

const Container: React.FC = () => {
    return (
        <div className="contentContainer">
            {/* Mock Hero */}
            <div className="mockHero" style={{
                width: "100%",
                padding: "31%",
                background: "pink"
            }}></div>
            Content
        </div>
    )
}

export default Container;
