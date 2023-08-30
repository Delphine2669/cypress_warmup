import { Link } from "react-router-dom";
function Navbar2() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/navbar">Navbar basique</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/button">basic button</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar2;
