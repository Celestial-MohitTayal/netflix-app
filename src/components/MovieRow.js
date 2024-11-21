import MovieCard from "./MovieCard";
import { Box, Typography } from "@mui/material";

const MovieRow = ({ title, videos }) => {
  return (
    <Box sx={{ paddingX: 6, paddingY: 1 }}>
      <Typography
        variant="h4"
        sx={{
          color: "rgba(243, 244, 246, 0.7)", 
          paddingY: 4,
        }}
      >
        {title}
      </Typography>
      <Box sx={{ display: "flex", overflowX: "auto" }}>
        <Box sx={{ display: "flex" }}>
          {videos?.map((video) => (
            <MovieCard
              key={video.id}
              videoURL={video.snippet.thumbnails.medium.url}
              videoALT={video.snippet.title}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MovieRow;
