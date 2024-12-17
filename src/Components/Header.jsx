import Filters from "./Filters";

export default function Header({ children }) {
  return (
    <>
      <div className=" text-bg-dark  p-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h1>Boolflix</h1>
          <Filters />
        </div>
      </div>
    </>
  );
}
