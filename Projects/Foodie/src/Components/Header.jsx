import { useState } from "react";
import "./Header.css";

import { data } from "./Constant";

function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img src="/public/foodie-logo.png" alt="logo" />
      </a>
    </div>
  );
}

function NavLinks() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log("Enter clicked");
      // const filteredData = filterData(searchInput, data);
      // setRestaurantData(filteredData);
    }
  };
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
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleSearch}
          />
        </li>
        <li>
          <span>
            <i className="fa-solid fa-tags"></i>
          </span>
          Offers
        </li>
        <li>
          <span>
            <i className="fa-solid fa-circle-h"></i>
          </span>
          Help
        </li>
        <li>
          <span>
            <i className="fa-regular fa-user"></i>
          </span>
          Sign In
        </li>
        <li>
          <span>
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          Cart
        </li>
      </ul>
    </>
  );
}

function Header() {
  return (
    <div className="header">
      <Logo />
      <NavLinks />
    </div>
  );
}
export default Header;
