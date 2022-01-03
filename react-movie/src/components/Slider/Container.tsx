import React, { useState } from "react";
import { Link } from "react-router-dom";
import SkeletonTitle from "../../layouts/Skeleton/SkeletonTitle";
import { itemData } from "./mock/itemData";


const Container: React.FC<{ name?: string; isLoading: boolean; }> = ({ name = "Select title name", isLoading }) => {
  const [scrollPerClick, setScrollPerClick] = useState(1)
  const imageWidth = 200;


  const moveToNextSlide = () => {
    const slides = document.getElementById("carousel-container");

    slides?.scrollTo({
      top: 0,
      left: scrollPerClick * imageWidth,
      behavior: "smooth"
    })

    setScrollPerClick(p => p += 1)
  }

  const moveToPrevSlide = () => {
    // const slides = document.getElementById("carousel-container");

    // console.log("Before-- >> ", scrollAmount);
    // setScrollAmount(p => p -= 200)
    // console.log("After-- >> ", scrollAmount);

    // if (scrollAmount <= 400) {
    //   setScrollAmount(200)
    // }

    // slides?.scrollTo({
    //   top: 0,
    //   left: scrollAmount,
    //   behavior: "smooth"
    // })


  }

  return (
    <>
      {isLoading && <div style={{ maxWidth: "35%", marginLeft: "8%" }}><SkeletonTitle /></div>}
      {!isLoading && <h2 className="heading-two">{name}</h2>}
      <div className="carousel" style={{ marginTop: "10px" }}>
        <button className="carousel__button carousel__button--next" onClick={moveToNextSlide}>Next</button>
        <button className="carousel__button carousel__button--prev" onClick={moveToPrevSlide}>Prev</button>
        <ul id="carousel-container"  >
          {itemData.results.map((feature, index) => <li key={index} className="carousel__image" >
            <Link className="link" to={`/${feature.media_type}/${feature.id}`} >
              {isLoading && <SkeletonTitle />}
              {!isLoading &&
                <>
                <img src={`https://image.tmdb.org/t/p/w185/${feature.poster_path}`} alt={feature.name ? feature.name : feature.title} />
                <p className="feature-title">{feature.name ? feature.name : feature.title}</p>
                </>
              }
            </Link>
          </li>
          )}
        </ul>
      </div >
    </>
  )
}

export default Container;