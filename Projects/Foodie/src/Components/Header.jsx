import "./css/Header.css";
import { Link, useLocation } from "react-router-dom";
import { RestaurantSearchFilter } from "../utils/Context/RestaurantSearchFilterProvider";
import { useContext } from "react";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img className="w-14" src="/foodie-logo.png" alt="logo" />
      </Link>
    </div>
  );
}

function NavLinks() {
  const { searchInput, handleSearch } = useContext(RestaurantSearchFilter);
  const location = useLocation();

  const commonLi =
    "flex items-center justify-center gap-2 no-underline list-none font-proxima-nova-regular text-base leading-5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95 hover:text-[#b80000]";

  return (
    <ul className="nav-list hidden sm:flex h-7 justify-center items-center gap-14 lg:h-7 lg:gap-14">
      <li className={`${commonLi} search-box`}>
        <i className="fa-solid fa-magnifying-glass text-lg"></i>
        {location.pathname === "/" && (
          <input
            className="search-box rounded-md text-lg cursor-pointer w-32 border border-black transition-all duration-300 ease-in-out focus:w-52 focus:h-8 lg:w-32 lg:focus:w-52 lg:focus:h-8"
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={handleSearch}
          />
        )}
      </li>

      <li className={commonLi}>
        <Link to="/offers" className="flex items-center gap-2">
          <i className="fa-solid fa-tags lg:text-lg"></i> Offers
        </Link>
      </li>

      <li className={commonLi}>
        <Link to="/help" className="flex items-center gap-2">
          <i className="fa-solid fa-circle-h lg:text-lg"></i> Help
        </Link>
      </li>

      <li className={commonLi}>
        <Link to="/login" className="flex items-center gap-2">
          <i className="fa-regular fa-user lg:text-lg"></i> Sign In
        </Link>
      </li>

      <li className={commonLi}>
        <Link to="/cart" className="flex items-center gap-2">
          <i className="fa-solid fa-cart-shopping lg:text-lg"></i> Cart
        </Link>
      </li>
    </ul>
  );
}

function HamburgerMenu() {
  return (
    <div className="block sm:hidden">
      <button>
        <i className="fa-solid fa-bars text-2xl"></i>
      </button>
    </div>
  );
}

function Header() {
  return (
    <div className="header w-full min-h-20 fixed flex justify-between items-center px-6 sm:px-10 lg:px-24 z-[1000] bg-white shadow-md">
      <Logo />
      <NavLinks />
      <HamburgerMenu />
    </div>
  );
}

export default Header;
