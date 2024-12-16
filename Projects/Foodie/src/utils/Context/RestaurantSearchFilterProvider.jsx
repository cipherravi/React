import Header from "../../Components/Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import useRestaurants from "../Hooks/useRestaurants";
import useRestaurantFilteredData from "../Hooks/useRestaurantFilteredData";

// Create a context
const RestaurantSearchFilter = createContext();

function RestaurantSearchFilterProvider() {
  const [allRestaurant, setAllRestaurant] = useState(undefined);
  const [filteredRestaurant, setFilteredRestaurant] = useState(allRestaurant);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e?.target?.value);
  };

  const { getRestaurants } = useRestaurants();

  // Filter restaurant list based on search input
  useEffect(() => {
    const { filteredData } = useRestaurantFilteredData(
      allRestaurant,
      searchInput
    );

    return setFilteredRestaurant(filteredData);
  }, [allRestaurant, searchInput]);

  useEffect(() => {
    getRestaurants(setAllRestaurant);
  }, []);

  return (
    <RestaurantSearchFilter.Provider
      value={{
        allRestaurant,
        setAllRestaurant,
        filteredRestaurant,
        setFilteredRestaurant,
        searchInput,
        setSearchInput,
        handleSearch,
      }}
    >
      <Header />
      <Outlet />
    </RestaurantSearchFilter.Provider>
  );
}
export default RestaurantSearchFilterProvider;
export { RestaurantSearchFilter };
