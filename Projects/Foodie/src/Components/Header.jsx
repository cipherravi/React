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

function NavLinks({ searchInput, onSearchInputChange }) {
  // const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    console.log("Search input changed to:", e.target.value); // Log the value of input
    onSearchInputChange(e.target.value); // Call the parent function to update searchInput state
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
            // onKeyDown={handleSearch}
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

function Header({ searchInput, onSearchInputChange }) {
  console.log("Header props:", { searchInput, onSearchInputChange });
  return (
    <div className="header">
      <Logo />
      <NavLinks
        searchInput={searchInput}
        onSearchInputChange={onSearchInputChange}
      />
    </div>
  );
}
export default Header;
