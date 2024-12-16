import { useState } from "react";
import MovieContext from "./Contexts/MovieContext";

export const MoviesDataProvider = ({ children }) => {
  // fetch to get the list of movies (using the query)
  const [moviesData, setMoviesData] = useState([]);

  const movieFetch = (titleSearch) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${titleSearch}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTk5MmU5YmI2MWRmZTk2NmIzZWQ4ZWMxZjYwMjlkMiIsIm5iZiI6MTczNDM1NDIwOS4wMzAwMDAyLCJzdWIiOiI2NzYwMjUyMTM0NDc1ZTEzNGM5MjdjODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rb_VV5EpQ_n3E6c9zkJsTsjZQBbGIdOjrWqnayvcyWE",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setMoviesData(data.results);
      })
      .catch((err) => console.error(err));
  };

  return (
    <MovieContext.Provider value={{ moviesData, movieFetch }}>
      {children}
    </MovieContext.Provider>
  );
};
