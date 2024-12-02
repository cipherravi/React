import "./CardSection.css";
import RestaurantCard from "./RestaurantCard";

function CardSection({ allRestaurant, filteredRestaurant }) {
  return (
    <>
      <div className="empty"></div>
      <h1 className="heading">
        Restaurants with online food delivery in Patna
      </h1>
      <div className="cards-section">
        {allRestaurant == undefined ? (
          <div className="shimmer-loader">
            <img src="/Shimmer.png" alt="Loading..." />
          </div>
        ) : filteredRestaurant?.length > 0 ? (
          filteredRestaurant?.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
          ))
        ) : (
          <p>No restaurants found matching your search.</p>
        )}
      </div>
    </>
  );
}

export default CardSection;
