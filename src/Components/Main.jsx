import { useState } from "react";
import { useMovieDatas } from "../Contexts/GlobalContext";

export default function Main() {
  const [globalData, setGlobalData] = useState(useMovieDatas());
  if (globalData) {
    return (
      <>
        <h1 className="m-5">ciao</h1>
      </>
    );
  }
  if (!globalData) {
    return (
      <>
        <h1 className="m-5">C'è</h1>
      </>
    );
  }
}
