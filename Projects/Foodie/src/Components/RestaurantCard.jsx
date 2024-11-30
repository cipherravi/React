import "./RestaurantCard.css";
import { url } from "./Constant";

function RestrauntCards({
  cloudinaryImageId,
  name,
  avgRating,
  sla,
  cuisines,
  areaName,
  aggregatedDiscountInfoV3,
}) {
  const hasDiscountInfo =
    aggregatedDiscountInfoV3?.header && aggregatedDiscountInfoV3?.subHeader;
  return (
    <>
      <div className="card">
        <div className="banner">
          <img src={url + cloudinaryImageId} alt="" />
          <div className="offer-textbox">
            {hasDiscountInfo ? (
              <span className="offer">
                {`${aggregatedDiscountInfoV3?.header}  
              ${aggregatedDiscountInfoV3?.subHeader}`}
              </span>
            ) : (
              <span className="offer"></span>
            )}
          </div>
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
