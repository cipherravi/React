import "./CardSection.css";
import RestaurantCard from "./RestaurantCard";
import { data } from "./Constant";

function CardSection() {
  return (
    <>
      <div className="empty"></div>
      <h1 className="heading">
        Restaurants with online food delivery in Patna
      </h1>
      <div className="cards-section">
        {data[0]?.card?.restaurants.map((restaurant, index) => {
          const key = data[0]?.card?.restaurants[index]?.info?.id;

          return <RestaurantCard key={key} {...restaurant?.info} />;
        })}
      </div>
    </>
  );
}

export default CardSection;
