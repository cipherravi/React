import "./css/RestaurantCard.css";
import { url } from "./Constant";
import { useNavigate } from "react-router-dom";

function RestrauntCards({
  id,
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

  const navigate = useNavigate();
  const handleMenu = () => {
    const joinedName = name.split(" ").join("-");
    const url = `/restaurant/${joinedName}/${id}/menu`;
    navigate(url);
  };
  return (
    <>
      <div
        className="card text-[#02060ceb] ml-5 mt-12 overflow-hidden h-64 w-60 flex flex-col items-start gap-1 cursor-pointer"
        onClick={handleMenu}
      >
        <div className="banner w-60 h-54 relative overflow-hidden rounded-2xl">
          <img
            src={url + cloudinaryImageId}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="offer-textbox absolute left-0 bottom-0 w-full h-2/5">
            {hasDiscountInfo ? (
              <span className="offer absolute left-0 bottom-0 text-start pt-0 pr-3 pb-2 pl-3 text-[rgba(255,255,255,0.92)]  text-xl leading-6 tracking-[-0.5px] font-extrabold  text-nowrap overflow-hidden text-ellipsis uppercase font-proxima-nova">
                {`${aggregatedDiscountInfoV3?.header}  
              ${aggregatedDiscountInfoV3?.subHeader}`}
              </span>
            ) : (
              <span className="offer absolute left-0 bottom-0 text-start pt-0 pr-3 pb-2 pl-3 text-[rgba(255,255,255,0.92)]  text-xl leading-6 tracking-[-0.5px] font-extrabold  text-nowrap overflow-hidden text-ellipsis uppercase font-proxima-nova">
                {aggregatedDiscountInfoV3?.header ?? ""}
              </span>
            )}
          </div>
        </div>
        <div className="info p-3">
          <div className="name ">
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
