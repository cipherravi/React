import "./RestaurantCard.css";
import { data, url } from "./Constant";

function RestrauntCards({
  cloudinaryImageId,
  name,
  avgRating,
  sla,
  cuisines,
  areaName,
}) {
  return (
    <>
      <div className="card">
        <div className="banner">
          <img src={url + cloudinaryImageId} alt="" />
          {/* <span className="offer">50% OFF UPTO ₹100</span> */}
        </div>
        <div className="info">
          <div className="name">
            <span>{name}</span>
          </div>
          <div className="rating-duration">
            <span>
              <i className="fa-regular fa-star"></i>
            </span>
            <span>{avgRating} • </span>
            <span>{sla?.slaString} </span>
          </div>

          <div className="cuisine">
            <span>{cuisines.join(", ")}</span>
          </div>
          <div className="location">
            <span>{areaName}</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default RestrauntCards;
