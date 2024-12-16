import { createContext, useContext } from "react";

const MovieDatas = createContext();

export const useMovieDatas = () => useContext(MovieDatas);

// fetch to get the list of movies (using the query)
let globalData = [];
export const movieFetch = (titleSearch) => {
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
      globalData = data;
      console.log(globalData);
    })
    .catch((err) => console.error(err));
};

export const MovieDatasProvider = ({ children }) => {
  return (
    <MovieDatas.Provider value={globalData}>{children}</MovieDatas.Provider>
  );
};
