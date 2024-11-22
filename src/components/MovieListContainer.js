import { useSelector } from "react-redux";
import { Box, TextField } from "@mui/material";
import MovieRow from "./MovieRow";
import { useState } from "react";

const MovieListContainer = () => {
  const [searchText, setSearchText] = useState("");
  const videos = useSelector((store) => store.movies);

  const handleSearch = (input) => {
    setSearchText(input);
  };

  return (
    videos && (
      <Box
        sx={{
          backgroundColor: "black",
          position: "relative",
          zIndex: 10,
          marginTop: { xs: "44px", sm: "-12px", xl: "-60px" },
        }}
      >
        <TextField
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search..."
          value={searchText}
          variant="outlined"
          sx={{
            margin: { xl: "0 0 0 35%", sm: "0 0 0 24%", xs: "0 0 0 14%" },
            width: { xl: "500px", sm: "400px", xs: "300px" },
            backgroundColor: "rgba(0,0,0,0.8)",
            border: "1px solid white",
            borderRadius: "12px",
            input: {
              color: "white",
              padding: "12px 16px",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
          }}
        />
        <MovieRow
          title={"Now Playing"}
          videos={videos}
          searchWord={searchText}
          start={0}
          end={12}
        />
        <MovieRow
          title={"Popular Videos"}
          videos={videos}
          searchWord={searchText}
          start={13}
          end={24}
        />
        <MovieRow
          title={"Trending Videos"}
          videos={videos}
          searchWord={searchText}
          start={25}
          end={36}
        />
        <MovieRow
          title={"Upcoming Videos"}
          videos={videos}
          searchWord={searchText}
          start={37}
          end={48}
        />
      </Box>
    )
  );
};

export default MovieListContainer;
