import { useEffect, useState } from "react";
import { getReviewsMovie } from "../../service/movieApi";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import MovieReviewsList from "../MovieReviewsList/MovieReviews";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [dataMovie, setDataMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchReviewsMovie = async () => {
      try {
        const data = await getReviewsMovie(movieId);
        setDataMovie(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchReviewsMovie();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />} {error && <p>{error}</p>}
      {dataMovie.length ? (
        <MovieReviewsList results={dataMovie} />
      ) : (
        <p>There are no reviews for this movie</p>
      )}
    </>
  );
}
