import React, { useState } from "react";
import { Link } from "react-router-dom";

// import { makeRequest } from "../../services/API";

// FIXME: Please fix this 
// import { SliderContext } from "../hooks/useContext";


/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export const itemData = {
  "page": 1,
  "results": [
    {
      "video": false,
      "vote_average": 8.7,
      "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      "release_date": "2021-12-15",
      "id": 634649,
      "adult": false,
      "backdrop_path": "/VlHt27nCqOuTnuX6bku8QZapzO.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "vote_count": 1637,
      "original_language": "en",
      "original_title": "Spider-Man: No Way Home",
      "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      "title": "Spider-Man: No Way Home",
      "popularity": 24733.256,
      "media_type": "movie"
    },
    {
      "poster_path": "/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
      "vote_average": 8.2,
      "overview": "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
      "first_air_date": "2019-12-20",
      "vote_count": 2853,
      "id": 71912,
      "name": "The Witcher",
      "backdrop_path": "/kxtvP3LFPKqgcfKXjWfWYcaTSjF.jpg",
      "original_name": "The Witcher",
      "origin_country": [
        "US"
      ],
      "genre_ids": [
        10765,
        18,
        10759
      ],
      "original_language": "en",
      "popularity": 2296.427,
      "media_type": "tv"
    },
    {
      "original_language": "en",
      "original_title": "Venom: Let There Be Carnage",
      "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
      "video": false,
      "id": 580489,
      "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
      "release_date": "2021-09-30",
      "vote_count": 4816,
      "adult": false,
      "backdrop_path": "/eENEf62tMXbhyVvdcXlnQz2wcuT.jpg",
      "vote_average": 7.2,
      "genre_ids": [
        878,
        28,
        12
      ],
      "title": "Venom: Let There Be Carnage",
      "popularity": 9170.269,
      "media_type": "movie"
    },
    {
      "genre_ids": [
        18,
        878
      ],
      "id": 765245,
      "original_language": "en",
      "original_title": "Swan Song",
      "poster_path": "/6eZFP2oVOwt9n46XI7RL3rZvgi4.jpg",
      "video": false,
      "vote_average": 7.4,
      "overview": "In the near future, Cameron Turner is diagnosed with a terminal illness. Presented with an experimental solution to shield his wife and son from grief, he grapples with altering their fate.",
      "release_date": "2021-12-17",
      "vote_count": 50,
      "title": "Swan Song",
      "adult": false,
      "backdrop_path": "/ibdmSDwCpDYNdIkGeu7prsMVzYZ.jpg",
      "popularity": 214.14,
      "media_type": "movie"
    },
    {
      "id": 624860,
      "title": "The Matrix Resurrections",
      "vote_average": 7.7,
      "overview": "Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
      "release_date": "2021-12-16",
      "vote_count": 45,
      "adult": false,
      "backdrop_path": "/3NiiRAKt2L5bUuAvSOkv6Yn7u6T.jpg",
      "video": false,
      "genre_ids": [
        878,
        28,
        12,
        53
      ],
      "poster_path": "/xLNtaLaHudIzOqdEZ7R3lcDLrQQ.jpg",
      "original_language": "en",
      "original_title": "The Matrix Resurrections",
      "popularity": 898.134,
      "media_type": "movie"
    },
    {
      "genre_ids": [
        12,
        28,
        53
      ],
      "original_language": "en",
      "original_title": "No Time to Die",
      "poster_path": "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
      "video": false,
      "vote_average": 7.5,
      "overview": "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
      "release_date": "2021-09-29",
      "title": "No Time to Die",
      "vote_count": 2645,
      "adult": false,
      "backdrop_path": "/r2GAjd4rNOHJh6i6Y0FntmYuPQW.jpg",
      "id": 370172,
      "popularity": 1456.678,
      "media_type": "movie"
    },
    {
      "backdrop_path": "/1l12HBWtjJOJgX4O6SeG3DDqp55.jpg",
      "first_air_date": "2021-12-19",
      "genre_ids": [
        37,
        18
      ],
      "id": 118357,
      "name": "1883",
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "1883",
      "overview": "Follow the Dutton family as they embark on a journey west through the Great Plains toward the last bastion of untamed America. A stark retelling of Western expansion, and an intense study of one family fleeing poverty to seek a better future in America’s promised land — Montana.",
      "poster_path": "/6kQe9fTlo6V239G7b3sG7oAn48k.jpg",
      "vote_average": 9,
      "vote_count": 7,
      "popularity": 90.737,
      "media_type": "tv"
    },
    {
      "adult": false,
      "backdrop_path": "/AmLpWYm9R3Ur2FLPgj5CH3wR8wp.jpg",
      "genre_ids": [
        878,
        53
      ],
      "id": 739413,
      "original_language": "en",
      "original_title": "Mother/Android",
      "overview": "Georgia and her boyfriend Sam go on a treacherous journey to escape their country, which is caught in an unexpected war with artificial intelligence. Days away from the arrival of their first child, the couple must face No Man’s Land—a stronghold of the android uprising—in hopes of reaching safety before giving birth.",
      "poster_path": "/rO3nV9d1wzHEWsC7xgwxotjZQpM.jpg",
      "release_date": "2021-12-17",
      "title": "Mother/Android",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 25,
      "popularity": 102.551,
      "media_type": "movie"
    },
    {
      "id": 542178,
      "adult": false,
      "backdrop_path": "/u4Vm8n0suBYimsUoarqMw5vxNU8.jpg",
      "genre_ids": [
        18,
        35,
        10749
      ],
      "original_language": "en",
      "original_title": "The French Dispatch",
      "poster_path": "/6JXR3KJH5roiBCjWFt09xfgxHZc.jpg",
      "video": false,
      "title": "The French Dispatch",
      "vote_count": 783,
      "overview": "The quirky staff of an American magazine based in 1970s France puts out its last issue, with stories featuring an artist sentenced to life imprisonment, student riots, and a kidnapping resolved by a chef.",
      "release_date": "2021-10-21",
      "vote_average": 7.4,
      "popularity": 479.608,
      "media_type": "movie"
    },
    {
      "overview": "A small-town Oregon teacher and her brother, the local sheriff, discover a young student is harbouring a dangerous secret that could have frightening consequences.",
      "release_date": "2021-10-28",
      "adult": false,
      "backdrop_path": "/9fzNf2QcsHVvdx5g5QUOgAWpADw.jpg",
      "id": 516329,
      "genre_ids": [
        27,
        9648,
        18
      ],
      "original_language": "en",
      "original_title": "Antlers",
      "poster_path": "/cMch3tiexw3FdOEeZxMWVel61Xg.jpg",
      "vote_count": 146,
      "video": false,
      "vote_average": 6.4,
      "title": "Antlers",
      "popularity": 671.272,
      "media_type": "movie"
    },
    {
      "original_language": "en",
      "poster_path": "/pqzjCxPVc9TkVgGRWeAoMmyqkZV.jpg",
      "first_air_date": "2021-11-24",
      "vote_average": 8.5,
      "overview": "Former Avenger Clint Barton has a seemingly simple mission: get back to his family for Christmas. Possible? Maybe with the help of Kate Bishop, a 22-year-old archer with dreams of becoming a superhero. The two are forced to work together when a presence from Barton’s past threatens to derail far more than the festive spirit.",
      "vote_count": 927,
      "name": "Hawkeye",
      "genre_ids": [
        10759,
        18
      ],
      "backdrop_path": "/1R68vl3d5s86JsS2NPjl8UoMqIS.jpg",
      "original_name": "Hawkeye",
      "origin_country": [
        "US"
      ],
      "id": 88329,
      "popularity": 3342.796,
      "media_type": "tv"
    },
    {
      "original_language": "en",
      "original_title": "Dune",
      "poster_path": "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
      "video": false,
      "vote_average": 7.9,
      "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
      "release_date": "2021-09-15",
      "vote_count": 4855,
      "adult": false,
      "backdrop_path": "/jtVl3nN5bJ4t7pgakLfGJmOrqZm.jpg",
      "title": "Dune",
      "genre_ids": [
        878,
        12
      ],
      "id": 438631,
      "popularity": 1055.891,
      "media_type": "movie"
    },
    {
      "id": 429617,
      "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
      "release_date": "2019-06-28",
      "adult": false,
      "backdrop_path": "/ng6SSB3JhbcpKTwbPDsRwUYK8Cq.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "vote_count": 11333,
      "original_language": "en",
      "original_title": "Spider-Man: Far From Home",
      "poster_path": "/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
      "vote_average": 7.5,
      "video": false,
      "title": "Spider-Man: Far From Home",
      "popularity": 2571.809,
      "media_type": "movie"
    },
    {
      "poster_path": "/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      "vote_average": 8.3,
      "overview": "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.",
      "first_air_date": "2017-05-02",
      "vote_count": 15641,
      "id": 71446,
      "name": "Money Heist",
      "backdrop_path": "/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg",
      "original_name": "La Casa de Papel",
      "origin_country": [
        "ES"
      ],
      "genre_ids": [
        80,
        18
      ],
      "original_language": "es",
      "popularity": 990.311,
      "media_type": "tv"
    },
    {
      "genre_ids": [
        28,
        12,
        14
      ],
      "original_language": "en",
      "original_title": "Shang-Chi and the Legend of the Ten Rings",
      "poster_path": "/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
      "video": false,
      "vote_average": 7.8,
      "overview": "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
      "release_date": "2021-09-01",
      "vote_count": 4400,
      "title": "Shang-Chi and the Legend of the Ten Rings",
      "adult": false,
      "backdrop_path": "/cinER0ESG0eJ49kXlExM0MEWGxW.jpg",
      "id": 566525,
      "popularity": 3514.015,
      "media_type": "movie"
    },
    {
      "poster_path": "/gSZyYEK5AfZuOFFjnVPUCLvdOD6.jpg",
      "title": "Spider-Man",
      "video": false,
      "vote_average": 7.2,
      "overview": "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
      "release_date": "2002-05-01",
      "adult": false,
      "backdrop_path": "/sWvxBXNtCOaGdtpKNLiOqmwb10N.jpg",
      "vote_count": 14681,
      "genre_ids": [
        14,
        28
      ],
      "id": 557,
      "original_language": "en",
      "original_title": "Spider-Man",
      "popularity": 2694.323,
      "media_type": "movie"
    },
    {
      "overview": "10 years after Dexter went missing in the eye of Hurricane Laura, we find him living under an assumed name in the small town of Iron Lake, New York.  Dexter may be embracing his new life, but in the wake of unexpected events in this close-knit community, his Dark Passenger beckons.",
      "original_name": "Dexter: New Blood",
      "origin_country": [
        "US"
      ],
      "backdrop_path": "/e6v08948EZVvLrx0sWpmglguY9e.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 131927,
      "original_language": "en",
      "name": "Dexter: New Blood",
      "poster_path": "/9EBKgrFIsCFSV1RZKWhYUdbtGiv.jpg",
      "first_air_date": "2021-11-07",
      "vote_count": 320,
      "vote_average": 8.5,
      "popularity": 711.956,
      "media_type": "tv"
    },
    {
      "first_air_date": "2019-04-06",
      "name": "Demon Slayer: Kimetsu no Yaiba",
      "backdrop_path": "/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg",
      "genre_ids": [
        16,
        10759,
        10765
      ],
      "original_name": "鬼滅の刃",
      "origin_country": [
        "JP"
      ],
      "poster_path": "/wrCVHdkBlBWdJUZPvnJWcBRuhSY.jpg",
      "id": 85937,
      "vote_count": 3106,
      "vote_average": 8.8,
      "original_language": "ja",
      "overview": "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
      "popularity": 224.721,
      "media_type": "tv"
    },
    {
      "first_air_date": "2021-12-18",
      "backdrop_path": "/4hXEVbqGLMQG1SL4882BnBKgqEr.jpg",
      "genre_ids": [
        18
      ],
      "vote_count": 6,
      "original_language": "ko",
      "id": 108291,
      "poster_path": "/xjpUY3OEDf2YBdNgedlew9Uj1z5.jpg",
      "name": "Snowdrop",
      "overview": "In 1987, when tear gas exploded like firecrackers, a bloody man jumped into a female college dormitory and a female student treats him thinking he's an activist student fighting for the generation. Based on the handwritten notes of a man who escaped from a political prison camp in North Korea.",
      "vote_average": 9.3,
      "original_name": "설강화",
      "origin_country": [
        "KR"
      ],
      "popularity": 177.489,
      "media_type": "tv"
    },
    {
      "vote_average": 8.4,
      "overview": "In a world where walking, talking, digitally connected bots have become children's best friends, an 11-year-old finds that his robot buddy doesn't quite work the same as the others do.",
      "release_date": "2021-10-15",
      "adult": false,
      "backdrop_path": "/gBEyQ56m92x0sbz3QXwjfsvLPBz.jpg",
      "vote_count": 436,
      "genre_ids": [
        16,
        878,
        10751,
        35
      ],
      "id": 482321,
      "original_language": "en",
      "original_title": "Ron's Gone Wrong",
      "poster_path": "/gA9QxSravC2EVEkEKgyEmDrfL0e.jpg",
      "title": "Ron's Gone Wrong",
      "video": false,
      "popularity": 1645.378,
      "media_type": "movie"
    }
  ],
  "total_pages": 1000,
  "total_results": 20000
}

const Container: React.FC<{ name?: string; }> = ({ name = "Select title name" }) => {
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
      <h2 className="heading-two">{name}</h2>
      <div className="carousel">
        <button className="carousel__button carousel__button--next" onClick={moveToNextSlide}>Next</button>
        <button className="carousel__button carousel__button--prev" onClick={moveToPrevSlide}>Prev</button>
        <ul id="carousel-container"  >
          {itemData.results.map((feature, index) => <li key={index} className="carousel__image" >
            <Link className="link" to={`/${feature.media_type}/${feature.id}`} >
              <img src={`https://image.tmdb.org/t/p/w185/${feature.poster_path}`} alt={feature.name ? feature.name : feature.title} />
              <p className="feature-title">{feature.name ? feature.name : feature.title}</p>
            </Link>
          </li>
          )}
        </ul>
      </div >
    </>
  )
}

export default Container;