import { useContext } from "react";
import MoviesContext from "../Contexts/MovieContext";
import Card from "./Card";
import Loader from "./Loader";

export default function Main() {
  const { moviesData, seriesData, isLoading } = useContext(MoviesContext);

  if (isLoading) {
    return <Loader />;
  }

  if (moviesData.length == 0)
    return <h1 className="m-5">Effettua una ricerca </h1>;

  return (
    <div className="container">
      <h1 className="mt-5">Movies</h1>
      <div className="row g-3">
        <Card data={moviesData} />
      </div>

      <h1 className="mt-5">Series TV</h1>
      <div className="row g-3">
        <Card data={seriesData} />
      </div>
    </div>
  );
}
