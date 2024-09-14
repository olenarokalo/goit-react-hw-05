import { Link, useLocation } from "react-router-dom";

export default function MovieItem({ data }) {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${data.id}`} state={location}>
        {data.original_title}
      </Link>
    </li>
  );
}
