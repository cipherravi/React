import "./Body.css";
import Header from "./Header";
import CardSection from "./CardSection";
import { useState, useEffect } from "react";
import { data } from "./Constant";
//data[0].card.restaurants[i].info.name
//restaurantData= data[0]?.card?.restaurants
function Body() {
  const prefix = data[0]?.card?.restaurants;

  const [restaurantData, setRestaurantData] = useState(prefix);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e?.target?.value);
  };

  useEffect(() => {
    const filteredData = prefix?.filter((restaurant) => {
      return restaurant?.info?.name
        ?.toLowerCase()
        ?.includes(searchInput?.toLowerCase());
    });
    setRestaurantData(filteredData);
  }, [searchInput]);

  return (
    <>
      <Header searchInput={searchInput} handleSearch={handleSearch} />
      <CardSection prefix={prefix} restaurantData={restaurantData} />
    </>
  );
}
export default Body;

/*
----> Header (logo, location, Search, Offers, Help, Sign In, Cart)
----> Crousel (list of best food across country)
----> Food Menu ( options like chole bhature , chinese , pizza , etc...)
----> Restraunt Cards section (all restraunt list near you)
----> Footer (links of About us , Contact US , Social links )
*/
