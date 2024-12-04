import "./RestaurantMenu.css";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import RestaurantMenuCard from "../Components/RestaurantMenuCard";
import RestaurantMenuSection from "../Components/RestaurantMenuSection";
function RestaurantMenu() {
  const param = useParams();

  return (
    <>
      <Header />
      <div className="empty"></div>
      <div className="container">
        <div className="box">
          <h1 className="restaurant-title">PVR Cafe </h1>
          <div className="gradient">
            <div className="restaurant-info">
              <div className="rating-price">
                <span>
                  <i className="fa-regular fa-star"></i>
                </span>
                <span className="rating">
                  5.0 (2 ratings) <span className="dot">•</span>
                </span>
                <span className="price-for-two">
                  <span className="rupees">₹</span>200 for two
                </span>
              </div>

              <div className="cuisine">
                <span>Snacks, Fast Food</span>
              </div>
              <div className="graphic-type-location">
                <div className="graphic">
                  <div className="circle"></div>
                  <div className="line"></div>
                  <div className="circle"></div>
                </div>
                <div className="info">
                  <div className="type-location">
                    <span className="restaurant-type">Outlet</span>
                    <span className="location">Budh marg</span>
                  </div>
                  <div className="duration">
                    <span>30-35 mins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="menu">
            <span>-Menu-</span>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search for dishes" />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="horizontal-rule"></div>
          <RestaurantMenuSection />
        </div>
      </div>
    </>
  );
}
export default RestaurantMenu;
