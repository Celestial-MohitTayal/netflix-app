import MovieCard from "./MovieCard";
import { Box, Typography } from "@mui/material";
// , searchWord = ''
const MovieRow = ({ title, videos }) => {
  // console.log(start, end);
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
          {videos?.map(
            (video, index) => (
              // console.log(index);
              // if (start <= index && index <= end)
              //   console.log(start, end);
              <MovieCard
                key={video.id}
                videoURL={video.snippet.thumbnails.medium.url}
                videoALT={video.snippet.title}
              />
            )
            // }
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MovieRow;
