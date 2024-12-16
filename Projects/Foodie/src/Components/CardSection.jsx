import "./css/CardSection.css";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function CardSection({ allRestaurant, filteredRestaurant }) {
  return (
    <>
      <div className="empty"></div>
      <h1 className="heading">
        Restaurants with online food delivery in Patna
      </h1>
      <div className="section-wrapper">
        <div className="cards-section">
          {allRestaurant == undefined ? (
            <div className="shimmer-loader">
              {Array(8)
                .fill("")
                .map((_, index) => {
                  return <Shimmer key={index} />;
                })}
            </div>
          ) : filteredRestaurant?.length > 0 ? (
            filteredRestaurant?.map((restaurant) => (
              <RestaurantCard
                key={restaurant?.info?.id}
                {...restaurant?.info}
              />
            ))
          ) : (
            <p>No restaurants found matching your search.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default CardSection;
