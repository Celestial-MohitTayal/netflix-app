import { useState, useEffect } from "react";
import { API_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideos } from "../redux/MovieSlice";

const useFetchVideos = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPopularVideos = async () => {
    try {
      const response = await fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=id&chart=mostPopular&regionCode=IN&maxResults=16&key=" +
          API_KEY
      );
      const json = await response.json();
      dispatch(addVideos(json.items));
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch videos");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularVideos();
  }, []);

  if (loading) {
    return <div>Loading popular videos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
};

export default useFetchVideos;
