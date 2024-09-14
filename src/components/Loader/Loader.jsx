import { BounceLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.wrap}>
      <BounceLoader color="#d1f0e1" />
    </div>
  );
}
