import { useContext } from "react";
import MoviesContext from "../Contexts/MovieContext";

export default function Main() {
  const { moviesData } = useContext(MoviesContext);

  if (moviesData.length == 0)
    return <h1 className="m-5">Effettua una ricerca </h1>;

  return (
    <div className="m-5">
      {moviesData.map((movie) => {
        let flag = movie.original_language;
        if (flag == "en") flag = "gb";
        if (flag == "ja") flag = "jp";
        if (flag == "ko") flag = "kr";

        return (
          <ul key={movie.id} className="card p-3 m-3">
            <li className="ms-3">{movie.title}</li>
            <li className="ms-3">{movie.original_title}</li>
            <li className="ms-3">
              <img src={`https://flagcdn.com/16x12/${flag}.png`} alt="" />
            </li>
            <li className="ms-3">{movie.vote_average}</li>
          </ul>
        );
      })}
    </div>
  );
}
