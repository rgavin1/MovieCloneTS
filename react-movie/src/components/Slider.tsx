// import React, { useEffect, useState, useContext } from "react";

// import { makeRequest } from "../../services/API";

import "./styles/Slider.css";

// FIXME: Please fix this 
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
// import ImageList from "@material-ui/core/ImageList";
// import ImageListItem from "@material-ui/core/ImageListItem";
// import ImageListItemBar from "@material-ui/core/ImageListItemBar";
// import IconButton from "@material-ui/core/IconButton";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
// import { SliderContext } from "../hooks/useContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: "transparent",
    },
    imageList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
  })
);

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
const itemData = [
  {
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    title: "some",
    author: "ok",
  },
  {
    img: "/static/images/image-list/burgers.jpg",
    title: "some",
    author: "ok",
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    title: "some",
    author: "ok",
  },
  {
    img: "/static/images/image-list/burgers.jpg",
    title: "some",
    author: "ok",
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    title: "some",
    author: "ok",
  },
  {
    img: "/static/images/image-list/burgers.jpg",
    title: "some",
    author: "ok",
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    title: "some",
    author: "ok",
  },
  {
    img: "/static/images/image-list/burgers.jpg",
    title: "some",
    author: "ok",
  },
];

export default function SingleLineImageList() {
//   const classes = useStyles();
//   const [list, setList] = useState<any>([]);
//   const sliderData = useContext(SliderContext);

//   useEffect(() => {
//     if (Boolean(sliderData)) {
//       makeRequest(sliderData.url as string)
//         .then((res) => res.json())
//         .then((data) => {
//           setList(data.results);
//         })
//         .catch((err) => {
//           console.warn(err);
//         });
//     }
//   }, []);

  return (
    <h1>Slider</h1>
  )
}
