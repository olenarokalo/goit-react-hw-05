import { NavLink, Outlet } from "react-router-dom";

export default function AdditionalInfo() {
  return (
    <>
      <h3>Additional information</h3>
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </>
  );
}
