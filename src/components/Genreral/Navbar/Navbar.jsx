import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="flex justify-center mb-10">
      <div className="navbar-text w-280 ">
        <ul className="flex flex-row justify-center items-center gap-8">
          <li className="hover-up hover-opacity ">
            <Link>Home</Link>
          </li>
          <li className="hover-up hover-opacity ">
            <Link>Products</Link>
          </li>
          <li className="hover-up hover-opacity ">
            <Link to={"https://www.instagram.com/p/C7DFtLmvtBk/"} target="_blank">Introduce</Link>
          </li>
          <li className="hover-up hover-opacity ">
            <Link>Progress</Link>
          </li>
          <li className="hover-up hover-opacity ">
            <Link>News</Link>
          </li>
          <li className="hover-up hover-opacity ">
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
