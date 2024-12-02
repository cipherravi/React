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
        {allRestaurant == undefined ? ( // Shimmer loading image
          <div className="shimmer-loader">
            {/* Example shimmer effect, you can replace with actual shimmer component or animation */}
            <img src="/Shimmer.png" alt="Loading..." />
          </div>
        ) : allRestaurant?.length > 0 ? (
          filteredRestaurant?.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
          ))
        ) : (
          <p>No restaurants found matching your search.</p>
          // <img src="/foodie-logo.png" alt="" />
        )}
      </div>
    </>
  );
}

export default CardSection;
