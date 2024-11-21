import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import MovieRow from "./MovieRow";

const MovieListContainer = () => {
  const videos = useSelector((store) => store.movies?.mostPopularVideos);
//   console.log(videos);

  return (
    videos && (
      <Box sx={{ backgroundColor: "black" }}>
        <Box
          sx={{
            position: "relative",
            zIndex: 10,
            marginTop: { xs: "-12px", sm: "-24px", xl: "-60px" },
          }}
        >
          <MovieRow title={"Now Playing"} videos={videos} />
          <MovieRow title={"Popular Videos"} videos={videos} />
        </Box>
        <MovieRow title={"Trending Videos"} videos={videos} />
        <MovieRow title={"Upcoming Videos"} videos={videos} />
        <MovieRow title={"Educational Videos"} videos={videos} />
        <MovieRow title={"All Types"} videos={videos} />
      </Box>
    )
  );
};

export default MovieListContainer;
