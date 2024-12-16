import { createContext, useContext } from "react";

const MovieDatas = createContext();

export const useMovieDatas = () => useContext(MovieDatas);

export const MovieDatasProvider = ({ children }) => {
  const globalData = [
    {
      adult: false,
      backdrop_path: "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
      genre_ids: [12, 14],
      id: 671,
      original_language: "en",
      original_title: "Harry Potter and the Philosopher's Stone",
      overview:
        "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame.",
      popularity: 235.719,
      poster_path: "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
      release_date: "2001-11-16",
      title: "Harry Potter and the Philosopher's Stone",
      video: false,
      vote_average: 7.908,
      vote_count: 27495,
    },
  ];

  return (
    <MovieDatas.Provider value={globalData}>{children}</MovieDatas.Provider>
  );
};