import "./Header.css";

function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img
          src="https://i.pinimg.com/originals/85/f0/63/85f063360f15625e86fe4d64ad00535c.png"
          alt="logo"
        />
      </a>
    </div>
  );
}
function NavLinks() {
  return (
    <>
      <ul className="nav-list">
        <li className="search-box">
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input type="text" placeholder="Search" />
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
