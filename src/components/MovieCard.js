import { Box } from "@mui/material";

const MovieCard = ({ videoURL, videoALT }) => {
  return (
    <Box
      sx={{
        width: "320px",
        paddingRight: 6,
      }}
    >
      <img
        src={videoURL}
        alt={videoALT}
        style={{
          borderRadius: "8px",
          cursor: "pointer",
          transition: "transform 0.15s ease",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      />
    </Box>
  );
};

export default MovieCard;
