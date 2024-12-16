import { useMovieDatas } from "../Contexts/GlobalContext";

export default function Header({ children }) {
  const globalData = useMovieDatas();

  return (
    <>
      <h1>{globalData.title}</h1>
      <h1>{globalData.overview}</h1>
    </>
  );
}
