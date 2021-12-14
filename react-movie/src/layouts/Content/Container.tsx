import React from 'react'

const Container: React.FC = () => {
    return (
        <div className="contentContainer">
            {/* Mock Hero */}
            <div className="mockHero" style={{
                width: "100%",
                padding: "34% 35%  3% 11%",
                backgroundImage: "url('https://www.desktopbackground.org/p/2013/04/20/563589_poster-movie-film-movies-posters-free-desktop-backgrounds-and_800x500_h.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left top",
                backgroundSize: "cover",
            }}>

                <div className="mockFeatureContent" style={{ background: "gray", height: "250px" }} ></div>
            </div>
            Content
            <div style={{
                color: "#000",
                width: "100%",
                background: "rgb(255 0 0)"
            }}>Footer</div>
        </div>
    )
}

export default Container;
