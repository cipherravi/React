import "./css/CardSection.css";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RestaurantSearchFilter } from "../utils/Context/RestaurantSearchFilterProvider";
import { useContext } from "react";

function CardSection() {
  const { allRestaurant = [], filteredRestaurant = [] } = useContext(
    RestaurantSearchFilter
  );
  sessionStorage.setItem("allRestaurant", JSON.stringify(allRestaurant));
  const storedAllRestaurant = JSON.parse(
    sessionStorage.getItem("allRestaurant")
  );

  return (
    <div className="pt-20 min-w-full min-h-[calc(100vh-5rem)]">
      <h1 className="font-gilroy-bold my-4 pl-16 text-2xl leading-7 tracking-[-0.4px] text-wrap text-[rgba(2,6,12,0.92)] sm:pl-16 md:pl-28 lg:pl-36 xl:pl-44 2xl:pl-48">
        Restaurants with online food delivery in Patna
      </h1>
      <div className=" flex justify-center items-start ">
        {/* Centering wrapper */}
        <div className="cards-section min-h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {/* Grid layout for cards */}
          {allRestaurant.length < 1 ? (
            Array(8)
              .fill("")
              .map((_, index) => {
                return <Shimmer key={index} />;
              })
          ) : filteredRestaurant?.length > 0 ? (
            filteredRestaurant?.map((restaurant) => (
              <RestaurantCard
                key={restaurant?.info?.id}
                {...restaurant?.info}
              />
            ))
          ) : (
            <p className="absolute top-[calc(50vh-50px)] left-1/2 transform -translate-x-1/2 text-xl font-proxima-nova-regular">
              No restaurants found matching your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardSection;
