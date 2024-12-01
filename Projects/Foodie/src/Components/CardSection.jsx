import "./CardSection.css";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { data } from "./Constant";

function CardSection() {
  const prefix = data[0]?.card?.restaurants;

  const [restaurantData, setRestaurantData] = useState(prefix);
  const filterData = (searchInput, restaurant) => {
    return restaurant.filter((restaurant) => {
      restaurant?.info?.name
        ?.toLowerCase()
        ?.includes(searchInput?.toLowerCase());
    });
  };
  return (
    <>
      <div className="empty"></div>
      <h1 className="heading">
        Restaurants with online food delivery in Patna
      </h1>
      <div className="cards-section">
        {restaurantData.map((restaurant, index) => {
          const key = prefix[index]?.info?.id;

          return <RestaurantCard key={key} {...restaurant?.info} />;
        })}
      </div>
    </>
  );
}

export default CardSection;
