import React, { useState } from "react";
import Header from "./Header";
import CardSection from "./CardSection";
import { data } from "./Constant";

function SearchFilter() {
  const [restaurantData, setRestaurantData] = useState(data);

  return (
    <div>
      <Header onSearch={handleSearch} />
      <CardSection restaurantData={restaurantData} />
    </div>
  );
}
export default SearchFilter;
