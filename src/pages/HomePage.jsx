import { useEffect, useState } from "react";
import { getTrendingMovies } from "../service/movieApi";
import Loader from "../components/Loader/Loader";
import MovieList from "../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {loader && <Loader />} {error && <p>{error}</p>}
      {movies && <MovieList movies={movies} />}
    </>
  );
}
