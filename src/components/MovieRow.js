import MovieCard from "./MovieCard";
import { Box, Typography } from "@mui/material";
const MovieRow = ({ title, videos, searchWord = "", start, end }) => {
  const rowVideos = videos?.slice(start, end);
  const filteredVideos = rowVideos?.filter((video) =>
    video.snippet.title.toLowerCase().match(searchWord.toLowerCase())
  );
  return (
    <Box sx={{ paddingX: 6, paddingY: 1 }}>
      <Typography
        variant="h4"
        sx={{
          color: "#fff",
          paddingY: 4,
        }}
      >
        {title}
      </Typography>
      <Box sx={{ display: "flex", overflowX: "auto" }}>
        <Box sx={{ display: "flex" }}>
          {filteredVideos?.map((video, index) => (
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
