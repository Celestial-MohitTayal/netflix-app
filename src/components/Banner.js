import { useSelector } from "react-redux";
import store from "../redux/store";
import VideoBg from "./videoBg";
import VideoTitle from "./videoTitle";

const Banner = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  const mainMovieId = movies[0].id;
  const mainMovie = movies[0].snippet;
  const { title, description } = mainMovie;

  return (
    <div>
      <VideoTitle title={title} description={description} />
      <VideoBg movieid={mainMovieId} />
    </div>
  );
};

export default Banner;
