import { useContext, useState } from "react";
import MoviesContext from "../Contexts/MovieContext";

export default function Filters() {
  const [titleSearch, setTitleSearch] = useState("");

  const { movieFetch } = useContext(MoviesContext);

  const titleSearchChange = (event) => {
    setTitleSearch(event.target.value);
  };

  return (
    <>
      <form onSubmit={() => movieFetch()}>
        <input
          onChange={titleSearchChange}
          type="text"
          value={titleSearch}
          className="me-1"
        ></input>
        <button
          onClick={() => movieFetch(titleSearch)}
          className="me-5 text-bg-danger"
        >
          Search
        </button>
      </form>
    </>
  );
}
