import { useState } from "react";
import { MovieDatasProvider } from "./Contexts/GlobalContext";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <MovieDatasProvider>
        <Header></Header>
        <h1 className="card m-3 p-3 d-inline-block">Hello World</h1>
      </MovieDatasProvider>
    </>
  );
}

export default App;
