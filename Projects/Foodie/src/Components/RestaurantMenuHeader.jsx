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
      <h1 className="restaurant-title">{name} </h1>
      <div className="gradient">
        <div className="restaurant-info">
          <div className="rating-price">
            <span>
              <i className="fa-regular fa-star"></i>
            </span>
            <span className="rating">
              {avgRating} ({totalRatingsString}) <span className="dot">•</span>
            </span>
            <div className="price-for-two">{costForTwoMessage}</div>
          </div>

          <div className="cuisine">
            <span>{cuisines.join(", ")}</span>
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
                <span className="location">{areaName}</span>
              </div>
              <div className="duration">
                <span>{sla.slaString.toLowerCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantMenuHeader;
