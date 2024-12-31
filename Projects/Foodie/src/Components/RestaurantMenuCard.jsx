import { url } from "./Constant";
import "./css/RestaurantMenuCard.css";
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
      <div className="item-card w-full min-h-[40] flex justify-between items-center p-5">
        <div className="item-info flex flex-col gap-1 w-[70%]">
          <h3 className="item-name font-gilroy-bold">{name}</h3>
          <h3 className="item-price font-gilroy-medium">
            ₹{price / 100 || defaultPrice / 100}
          </h3>
          <p className="item-desc font-gilroy-light mt-1 max-h-12 text-ellipsis overflow-hidden">
            {description}
          </p>
        </div>
        <div className="item-image w-40 max-h-36 relative">
          <img
            className="w-full h-full object-cover object-center rounded-2xl"
            style={{
              height: IMG_URL ? "" : "0px",
            }}
            src={IMG_URL}
            alt=""
          />
          <button className="add-item absolute left-[14%] bottom-[-15px] font-gilroy-bold  text-base w-[120px] h-[40px] px-10 py-2 outline-none rounded-md cursor-pointer uppercase border-2 border-[#d9dadb] bg-white text-[#4caf50] z-10">
            ADD
          </button>
        </div>
      </div>
      <div className=" horizontal-rule "></div>
    </>
  );
}
export default RestaurantMenuCard;
