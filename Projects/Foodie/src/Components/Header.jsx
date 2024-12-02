import "./Header.css";
import { useNavigate } from "react-router-dom";
function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img src="/foodie-logo.png" alt="logo" />
      </a>
    </div>
  );
}

function NavLinks({ searchInput, handleSearch }) {
  const navigate = useNavigate();
  const handleOffers = () => {
    navigate("/offers");
  };
  const handleHelp = () => {
    navigate("/help");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleCart = () => {
    navigate("/cart");
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
          />
        </li>
        <li onClick={handleOffers}>
          <span>
            <i className="fa-solid fa-tags"></i>
          </span>
          Offers
        </li>
        <li onClick={handleHelp}>
          <span>
            <i className="fa-solid fa-circle-h"></i>
          </span>
          Help
        </li>
        <li onClick={handleLogin}>
          <span>
            <i className="fa-regular fa-user"></i>
          </span>
          Sign In
        </li>
        <li onClick={handleCart}>
          <span>
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          Cart
        </li>
      </ul>
    </>
  );
}

function Header({ searchInput, handleSearch }) {
  return (
    <div className="header">
      <Logo />
      <NavLinks searchInput={searchInput} handleSearch={handleSearch} />
    </div>
  );
}
export default Header;
