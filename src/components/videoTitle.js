import React from "react";
import { Box, Button, Typography } from "@mui/material";

const VideoTitle = ({ title, description }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        aspectRatio: "16/9",
        position: "absolute",
        background: "linear-gradient(to right, black, transparent)",
        zIndex: 10,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          pt: "20%",
          px: 10,
          fontWeight: "bold",
          color: "white",
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
        }}
      >
        {title.split("|")[0]}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          px: 10,
          py: 2,
          color: "white",
          fontSize: { xs: "0.875rem", xl: "1rem" },
          width: { xl: "50%" },
        }}
      >
        {description.split(".")[0]}
      </Typography>
      <Box
        sx={{
          px: 10,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "black",
            py: 1.5,
            px: 4,
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "bold",
            boxShadow: 3,
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              transform: "scale(1.05)",
            },
          }}
        >
          ▶️ Play
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4B4B4B",
            color: "white",
            py: 1.5,
            px: 2,
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "bold",
            boxShadow: 3,
            ml: 2,
            "&:hover": {
              backgroundColor: "#383838",
              transform: "scale(1.05)",
            },
          }}
        >
          ︕ More Info
        </Button>
      </Box>
    </Box>
  );
};

export default VideoTitle;
