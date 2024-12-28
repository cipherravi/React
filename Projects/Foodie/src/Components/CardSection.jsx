import "./css/CardSection.css";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RestaurantSearchFilter } from "../utils/Context/RestaurantSearchFilterProvider";
import { useContext } from "react";

function CardSection() {
  const { allRestaurant, filteredRestaurant } = useContext(
    RestaurantSearchFilter
  );

  // return (
  //   <div className="pt-20 w-full min-h-screen">
  //     <h1 className=" font-gilroy-bold my-4 ml-44 text-2xl leading-7 tracking-[-0.4px] text-[rgba(2,6,12,0.92)]">
  //       Restaurants with online food delivery in Patna
  //     </h1>
  //     <div className="section-wrapper flex justify-center items-center">
  //       <div className="cards-section flex flex-wrap justify-start items-start  ">
  //         {allRestaurant === undefined ? (
  //           <div className="shimmer-loader flex flex-wrap justify-start items-center gap-3">
  //             {Array(8)
  //               .fill("")
  //               .map((_, index) => {
  //                 return <Shimmer key={index} />;
  //               })}
  //           </div>
  //         ) : filteredRestaurant?.length > 0 ? (
  //           filteredRestaurant?.map((restaurant) => (
  //             <RestaurantCard
  //               key={restaurant?.info?.id}
  //               {...restaurant?.info}
  //             />
  //           ))
  //         ) : (
  //           <p className="absolute top-[calc(50vh-200px)] left-[38%] text-xl font-proxima-nova-regular">
  //             No restaurants found matching your search.
  //           </p>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="pt-20 min-w-full min-h-[calc(100vh-5rem)]">
      <h1 className="font-gilroy-bold my-4 pl-16 text-2xl leading-7 tracking-[-0.4px] text-wrap text-[rgba(2,6,12,0.92)] sm:pl-16 md:pl-28 lg:pl-36 xl:pl-44 2xl:pl-48">
        Restaurants with online food delivery in Patna
      </h1>
      <div className=" flex justify-center items-start ">
        {/* Centering wrapper */}
        <div className="cards-section min-h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {/* Grid layout for cards */}
          {allRestaurant === undefined ? (
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
            <p className="absolute top-[calc(50vh-50px)] left-[38%] text-xl font-proxima-nova-regular sm:top-[calc(50vh-50px)] md:top-[calc(50vh-50px)] lg:top-[calc(50vh-50px)] xl:top-[calc(50vh-50px)]">
              No restaurants found matching your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardSection;
