export default function Filters() {
  return (
    <>
      <div>
        <select name="category" className="me-4" id="">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <input type="text" className="me-1"></input>
        <button className="me-5 text-bg-danger">Search</button>
      </div>
    </>
  );
}
