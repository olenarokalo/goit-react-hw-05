import MovieCastItem from "../MovieCastItem/MovieCastItem";

export default function MovieCastList({ dataMovie: { cast } }) {
  return (
    <ul>
      {cast.map((data) => (
        <MovieCastItem key={data.id} data={data} />
      ))}
    </ul>
  );
}
