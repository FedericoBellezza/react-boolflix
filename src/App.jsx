import { MovieDatasProvider } from "./Contexts/GlobalContext";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
    <>
      <MovieDatasProvider>
        <Header></Header>
        <Main></Main>
      </MovieDatasProvider>
    </>
  );
}

export default App;
