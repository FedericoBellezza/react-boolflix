import { MoviesDataProvider } from "./MoviesDataProvider";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
    <>
      <MoviesDataProvider>
        <Header></Header>
        <Main></Main>
      </MoviesDataProvider>
    </>
  );
}

export default App;
