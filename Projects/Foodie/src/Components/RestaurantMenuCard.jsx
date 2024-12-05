import { useState } from "react";
import { url } from "./Constant";
import "./RestaurantMenuCard.css";
function RestaurantMenuCard({
  id,
  category,
  isVeg,
  name,
  price,
  defaultPrice,
  description,
  imageId,
  inStock,
  addons,
}) {
  let IMG_URL;
  if (imageId !== undefined) {
    IMG_URL = url + imageId;
  } else {
    IMG_URL = null;
  }

  return (
    <>
      <div className="item-card">
        <div className="item-info">
          <h3 className="item-name">{name}</h3>
          <h3 className="item-price">₹{price / 100 || defaultPrice / 100}</h3>
          <p className="item-desc">{description}</p>
        </div>
        <div className="item-image">
          <img
            style={{
              height: IMG_URL ? "" : "0px",
            }}
            src={IMG_URL}
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
