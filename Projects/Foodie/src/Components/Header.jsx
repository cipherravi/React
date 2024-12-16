import "./css/Header.css";
import { Link } from "react-router-dom";
import { RestaurantSearchFilter } from "../utils/Context/RestaurantSearchFilterProvider";
import { useContext } from "react";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src="/foodie-logo.png" alt="logo" />
      </Link>
    </div>
  );
}

function NavLinks() {
  const { searchInput, handleSearch } = useContext(RestaurantSearchFilter);

  return (
    <>
      <ul className="nav-list">
        <li className="search-box">
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            className="search-box"
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={handleSearch}
          />
        </li>

        <Link to="/offers">
          <li>
            <span>
              <i className="fa-solid fa-tags"></i>
            </span>
            Offers
          </li>
        </Link>

        <Link to="/help">
          <li>
            <span>
              <i className="fa-solid fa-circle-h"></i>
            </span>
            Help
          </li>
        </Link>

        <Link to="/login">
          <li>
            <span>
              <i className="fa-regular fa-user"></i>
            </span>
            Sign In
          </li>
        </Link>

        <Link to="/cart">
          <li>
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
            Cart
          </li>
        </Link>
      </ul>
    </>
  );
}

function Header() {
  return (
    <div className=" header">
      <Logo />
      <NavLinks />
    </div>
  );
}
export default Header;
