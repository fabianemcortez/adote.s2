import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          {/*           <HeartIcon className="heart" /> */}
          <Link to="/">Adote.s2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
