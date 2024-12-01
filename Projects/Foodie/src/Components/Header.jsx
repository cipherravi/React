import "./Header.css";
import React from "react";
import { useState } from "react";
import { data } from "./Constant";

function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img src="/foodie-logo.png" alt="logo" />
      </a>
    </div>
  );
}

function NavLinks() {
  const [searchInput, setSearchInput] = useState("");

  const filterData = (e) => {
    if (e.key === "Enter") {
      console.log("searched");
    }
  };
  const handleSearch = (e) => {
    console.log("Search input changed to:", e.target.value);
    setSearchInput(e.target.value);
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
            onChange={handleSearch}
            onKeyDown={filterData}
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
