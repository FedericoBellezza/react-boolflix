import { createContext, useContext } from "react";

const MovieDatas = createContext();

export const useMovieDatas = () => useContext(MovieDatas);

export const MovieDatasProvider = ({ children }) => {
  const globalData = {
    title: "Titolo del film",
    overview: "Descrizione del film",
  };

  return (
    <MovieDatas.Provider value={globalData}>{children}</MovieDatas.Provider>
  );
};
