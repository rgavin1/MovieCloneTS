import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { requestMovieTrailers, RawTrailerInfo } from "../api/API";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: "100%",
      maxWidth: "80%",
      height: "80vh",
      maxHeight: "100vh",
      backgroundColor: '#000',
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
    },
  })
);

const SimpleModal: React.FC<{ id: string | undefined }> = ({ id = "100" }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>();

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    requestMovieTrailers(id)
      .then((data) => data.json())
      .then((res: any) => {
        const list: RawTrailerInfo[] = res.results;
        // eslint-disable-next-line array-callback-return
        list.forEach(
          (trailer: {
            site: string;
            key: React.SetStateAction<string | null | undefined>;
          }) => {
            if (trailer.site === "YouTube") {
              setTrailerKey(trailer.key);
            } else {
              setTrailerKey(null);
            }
          }
        );
      });
  }, [id]);

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className={classes.paper}
    >
      {
        <ReactPlayer
          width="100%"
          height="100%"
          playing={true}
          url={`https://www.youtube.com/embed/${trailerKey}`}
        />
      }
    </div>
  );

  return (
    <div>
      <Button
        onClick={handleOpen}
        title="Watch Trailer"
        variant="contained"
        color="primary"
        endIcon={<PlayArrowIcon />}
      >
        Watch Trailer
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default SimpleModal;
