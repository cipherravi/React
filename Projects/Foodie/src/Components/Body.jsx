import React, { useState } from "react";
import Header from "./Header";
import CardSection from "./CardSection";
import { data } from "./Constant";

function Body() {
  const [restaurantData, setRestaurantData] = useState(data);

  return (
    <div>
      <Header onSearch={handleSearch} />
      <CardSection restaurantData={restaurantData} />
    </div>
  );
}
export default Body;

// function Body() {
//   //   const prefix = data[0]?.card?.restaurants;
//   const [restaurantData, setRestaurantData] = useState(data);

//   const filterData = (searchInput, restaurantData) => {
//     return restaurantData.filter((restaurant) => {
//       return restaurant?.card?.restaurants?.name
//         ?.toLowerCase()
//         ?.includes(searchInput?.toLowerCase());
//     });
//   };
//   const handleSearch = (searchInput) => {
//     const filteredData = filterData(searchInput, data);
//     setRestaurantData(filteredData);
//   };
//   return (
//     <div>
//       <Header onSearch={handleSearch} />
//       <CardSection restaurantData={restaurantData} />
//     </div>
//   );
// }
