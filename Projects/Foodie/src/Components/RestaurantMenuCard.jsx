import { url } from "./Constant";
import "./RestaurantMenuCard.css";
function RestaurantMenuCard({
  id,
  category,
  isVeg,
  name,
  price,
  description,
  imageId,
  inStock,
  addons,
}) {
  return (
    <>
      <div className="item-card">
        <div className="item-info">
          <h3 className="item-name">{name}</h3>
          <h3 className="item-price">₹{price / 100}</h3>
          <p className="item-desc">{description}</p>
        </div>
        <div className="item-image">
          <img src={url + imageId} alt="" />
          <button className="add-item">ADD</button>
        </div>
      </div>
      <div className="horizontal-rule"></div>
    </>
  );
}
export default RestaurantMenuCard;
