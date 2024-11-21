import React from "react";
import { Box } from "@mui/material";

const VideoBg = ({ movieId }) => {
  return (
    <Box
      sx={{
        position: "relative",
        aspectRatio: "16/9",
        overflow: "hidden",
      }}
    >
      <iframe
        src={
          "https://www.youtube.com/embed/" +
          movieId +
          "?si=KAy9QAkVJSdr4XmP?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      ></iframe>
    </Box>
  );
};

export default VideoBg;
