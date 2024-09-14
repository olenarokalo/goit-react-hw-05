import { useEffect, useState } from "react";
import { getCastMovie } from "../../service/movieApi";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import MovieCastList from "../MovieCastList/MovieCastList";

export default function MovieCast() {
  const { movieId } = useParams();
  const [dataMovie, setDataMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchCastMovie = async () => {
      try {
        const data = await getCastMovie(movieId);
        setDataMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchCastMovie();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />} {error && <p>{error}</p>}
      {dataMovie && <MovieCastList dataMovie={dataMovie} />}
    </>
  );
}
