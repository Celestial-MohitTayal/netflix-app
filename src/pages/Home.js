import Banner from "../components/Banner";
import { Box } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MovieListContainer from "../components/MovieListContainer";
import useFetchVideos from "../hooks/useFetchVideos";

const Home = () => {
  useFetchVideos();
  return (
    <Box sx={{ backgroundColor: "black", minHeight: "100vh" }}>
      <Header />
      <Banner />
      <MovieListContainer />
      <Footer />
    </Box>
  );
};

export default Home;
