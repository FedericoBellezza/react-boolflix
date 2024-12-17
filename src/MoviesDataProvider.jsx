import { useState } from "react";
import MovieContext from "./Contexts/MovieContext";

export const MoviesDataProvider = ({ children }) => {
  // fetch to get the list of movies (using the query)
  const [moviesData, setMoviesData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const movieFetch = (titleSearch) => {
    setIsLoading(true);
    event.preventDefault();
    const movieUrl = `https://api.themoviedb.org/3/search/movie?query=${titleSearch}`;
    const serieUrl = `https://api.themoviedb.org/3/search/tv?query=${titleSearch}`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTk5MmU5YmI2MWRmZTk2NmIzZWQ4ZWMxZjYwMjlkMiIsIm5iZiI6MTczNDM1NDIwOS4wMzAwMDAyLCJzdWIiOiI2NzYwMjUyMTM0NDc1ZTEzNGM5MjdjODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rb_VV5EpQ_n3E6c9zkJsTsjZQBbGIdOjrWqnayvcyWE",
      },
    };

    //-  movie fetch
    fetch(movieUrl, options)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        const NormalizeData = data.results.map((movie) => {
          const {
            id,
            title,
            original_title,
            original_language,
            vote_average,
            backdrop_path,
            overview,
          } = movie;
          return {
            id,
            title,
            original_title,
            lang: original_language,
            vote: vote_average,
            img: backdrop_path,
            overview,
          };
        });
        setMoviesData(NormalizeData);
        console.log("Movies:", NormalizeData);
      })
      .catch((err) => console.error(err));

    // - serie TV fetch
    fetch(serieUrl, options)
      .then((res) => res.json())
      .then((data) => {
        const NormalizeData = data.results.map((movie) => {
          const {
            id,
            name,
            original_name,
            original_language,
            vote_average,
            backdrop_path,
            overview,
          } = movie;
          return {
            id,
            title: name,
            original_title: original_name,
            lang: original_language,
            vote: vote_average,
            img: backdrop_path,
            overview,
          };
        });
        setSeriesData(NormalizeData);
        console.log("Series:", NormalizeData);
      })
      .catch((err) => console.error(err));
  };

  return (
    <MovieContext.Provider
      value={{ moviesData, movieFetch, seriesData, isLoading }}
    >
      {children}
    </MovieContext.Provider>
  );
};
