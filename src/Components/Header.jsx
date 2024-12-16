import Filters from "./Filters";

export default function Header({ children }) {
  return (
    <>
      <div className="d-flex text-bg-dark justify-content-between align-items-center p-3">
        <h1>Boolflix</h1>
        <Filters />
      </div>
    </>
  );
}
