import "./RestaurantMenuCard.css";
function RestaurantMenuCard() {
  return (
    <>
      <div className="item-card">
        <div className="item-info">
          <h3 className="item-name">Regular Popcorn Cheese</h3>
          <h3 className="item-price">₹149</h3>
          <p className="item-desc">
            Freshly popped corn with the flavour of cheese for a truly delicious
            experience in each bite
          </p>
        </div>
        <div className="item-image">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/3/d9d8bcd5-7f62-4f1b-8a12-30f41cd4088e_7b0bb350-b4e5-42c7-b504-4089e0d8f276.jpg"
            alt=""
          />
          <button className="add-item">ADD</button>
        </div>
      </div>
      <div className="horizontal-rule"></div>
    </>
  );
}
export default RestaurantMenuCard;
