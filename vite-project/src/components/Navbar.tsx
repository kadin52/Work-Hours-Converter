import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-custom-color">
      <div className="navbar-brand">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
        </div>
        Personal Hours Converter
      </div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/toText" className="nav-link">
            Img to Text
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/toCsv" className="nav-link">
            Img to CSV
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
