import { useContext, useEffect, useState } from "react";
import MoviesContext from "../Contexts/MovieContext";

export default function Main() {
  const { moviesData } = useContext(MoviesContext);

  if (moviesData.length == 0) return <h1>Effettua una ricerca </h1>;

  return <h1 className="m-5">{moviesData[1].original_title}</h1>;
}
