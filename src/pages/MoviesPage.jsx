import { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import { getSearchMovies } from "../service/movieApi";
import Loader from "../components/Loader/Loader";
import MovieList from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;
    setLoader(true);
    const fetchSearchMovies = async () => {
      try {
        const data = await getSearchMovies(query);
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchSearchMovies();
  }, [query]);

  const onSubmitForm = (query) => {
    setError(false);
    setMovies(null);
    searchParams.set("query", query);
    setSearchParams(searchParams);
  };

  return (
    <>
      {loader && <Loader />} {error && <p>{error}</p>}
      <SearchForm onSubmitForm={onSubmitForm} />
      {movies && <MovieList movies={movies} />}
    </>
  );
}
