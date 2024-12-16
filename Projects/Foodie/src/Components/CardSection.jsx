import "./css/CardSection.css";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RestaurantSearchFilter } from "../utils/Context/RestaurantSearchFilterProvider";
import { useContext } from "react";

function CardSection() {
  const { allRestaurant, filteredRestaurant } = useContext(
    RestaurantSearchFilter
  );

  return (
    <div className="pt-20">
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
    </div>
  );
}

export default CardSection;
