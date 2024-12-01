import "./CardSection.css";
import RestaurantCard from "./RestaurantCard";

function CardSection({ restaurantData }) {
  return (
    <>
      <div className="empty"></div>
      <h1 className="heading">
        Restaurants with online food delivery in Patna
      </h1>
      <div className="cards-section">
        {restaurantData?.length > 0 ? (
          restaurantData?.map((restaurant) => (
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
