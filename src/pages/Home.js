import Banner from "../components/Banner";
import Header from "../components/Header";
import MovieListContainer from "../components/MovieListContainer";
import useFetchVideos from "../hooks/useFetchVideos";

const Home = () => {
  useFetchVideos();
  return (
    <div>
      <Header />
      <Banner />
      <MovieListContainer />
    </div>
  );
};

export default Home;
