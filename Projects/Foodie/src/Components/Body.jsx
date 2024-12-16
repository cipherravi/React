import "./css/Body.css";
import Header from "./Header";
import CardSection from "./CardSection";
import { useState, useEffect } from "react";
import useRestaurants from "../utils/Hooks/useRestaurants";

function Body() {
  const [allRestaurant, setAllRestaurant] = useState(undefined);
  const [filteredRestaurant, setFilteredRestaurant] = useState(allRestaurant);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e?.target?.value);
  };
  const { getRestaurants } = useRestaurants(setAllRestaurant);

  // Filter restaurant list based on search input
  useEffect(() => {
    const filteredData = allRestaurant?.filter((restaurant) => {
      const restaurantName = restaurant?.info?.name
        ?.toLowerCase()
        ?.replace(/\s+/g, "");
      const searchTerm = searchInput?.toLowerCase()?.replace(/\s+/g, "");
      return restaurantName?.includes(searchTerm);
    });

    return setFilteredRestaurant(filteredData);
  }, [allRestaurant, searchInput]);

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <Header searchInput={searchInput} handleSearch={handleSearch} />
      <CardSection
        filteredRestaurant={filteredRestaurant}
        allRestaurant={allRestaurant}
      />
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
