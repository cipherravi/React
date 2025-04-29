function RestaurantMenuHeader({ dataForHeader }) {
  const {
    name,
    avgRating,
    avgRatingString,
    totalRatings,
    totalRatingsString,
    costForTwo,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
  } = dataForHeader;

  return (
    <>
      <h1 className="restaurant-title font-gilroy-bold text-2xl text-[#02060ceb] pl-2 mb-6">
        {name}{" "}
      </h1>
      <div className="gradient w-full">
        <div className="restaurant-info border border-[#d9dadb] bg-white shadow-md m-2.5 p-5 rounded-3xl">
          <div className="rating-price font-gilroy-bold text-[#02060ceb] text-base flex justify-start items-center gap-1">
            <span>
              <i className="fa-regular fa-star inline-flex items-center justify-center text-xs w-5 h-5 text-white bg-green-700 rounded-full mb-1.5"></i>
            </span>
            <span className="rating ">
              {avgRating} ({totalRatingsString}){" "}
              <span className="dot text-[#8c8f91] text-sm">•</span>
            </span>
            <div className="price-for-two">{costForTwoMessage}</div>
          </div>

          <div className="cuisin font-gilroy-bold text-sm text-[#b80000] underline p-1">
            <span>{cuisines.join(", ")}</span>
          </div>
          <div className="graphic-type-location w-full text-sm font-gilroy-medium flex justify-start items-center gap-2 mt-2">
            <div className="graphic flex flex-col justify-center items-center ">
              <div className="circle w-2 h-2 bg-[#c4c4c4] rounded-full"></div>
              <div className="line w-0.5 h-6 bg-[#c4c4c4]"></div>
              <div className="circle w-2 h-2 bg-[#c4c4c4] rounded-full"></div>
            </div>
            <div className="info flex flex-col gap-2.5">
              <div className="type-location">
                <span className="restaurant-type font-gilroy-bold text-sm pr-2.5">
                  Outlet
                </span>
                <span className="location text-sm">{areaName}</span>
              </div>
              <div className="duration font-gilroy-bold text-sm">
                <span>{sla?.slaString?.toLowerCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantMenuHeader;
