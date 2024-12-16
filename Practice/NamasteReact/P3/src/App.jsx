import "./App.css";
// import FetchApi from "./Components/FetchApi";
import FetchApi from "./Components/fetchApi";
function App() {
  function Header() {
    return (
      <div className="nav">
        <div className="logo-container">
          <img
            className="nav-logo"
            src="https://images.unsplash.com/photo-1711394370771-817a30b06215?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Logo"
          />
        </div>
        <h1 className="brand-name">
          f
          <span>
            <img src="src/assets/pizza-bgr.png" alt="" />
          </span>
          <span>
            {" "}
            <img src="src/assets/pizza-bgr.png" alt="" />
          </span>
          die
        </h1>
        <ul className="nav-items">
          <li className="search">
            <i className="ri-search-line"> </i> Search
          </li>
          <li className="offers">
            <i className="fa fa-percent" aria-hidden="true"></i>
            Offers
          </li>
          <li className="help">
            <i className="ri-hand-heart-line"></i>Help
          </li>
          <li className="sign-in">
            <i className="ri-user-fill"></i>Sign In
          </li>
          <li className="cart">
            <i className="ri-shopping-cart-2-line"></i>Cart
          </li>
        </ul>
      </div>
    );
  }
  function Hero() {
    return (
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1730302791598-9b9d1b65f06d?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero img"
        />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <Hero />
      <FetchApi />
    </div>
  );
}

export default App;
