import "./Body.css";
import Header from "./Header";
import CardSection from "./CardSection";
import { useState, useEffect } from "react";

function Body() {
  const [allRestaurant, setAllRestaurant] = useState(undefined);
  const [filteredRestaurant, setFilteredRestaurant] = useState(allRestaurant);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e?.target?.value);
  };

  //****Fix this later ****/
  //   // Save search input to localStorage
  //   useEffect(() => {
  //     if (searchInput !== "") {
  //       sessionStorage.setItem("searchInput", searchInput);
  //     } else {
  //       sessionStorage.removeItem("searchInput"); // Remove it when search input is cleared
  //     }
  //   }, [searchInput]);

  //   // Get search input from localStorage if available
  //   useEffect(() => {
  //     const savedSearchInput = sessionStorage.getItem("searchInput");
  //     if (savedSearchInput) {
  //       setSearchInput(savedSearchInput);
  //     }
  //   }, []);

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

  async function getRestaurants() {
    try {
      const fetchedData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      // Check if fetch was successful
      if (fetchedData.ok) {
        const json = await fetchedData.json();

        const apiDataPath =
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        // Store data in state and localStorage
        setAllRestaurant(apiDataPath);
        sessionStorage.setItem("allRestaurant", JSON.stringify(apiDataPath)); // Stringify before saving
      } else {
        throw new Error("Failed to Fetch Restaurants");
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }
  // Check if the restaurants are already saved in localStorage, if so, retrieve from there
  useEffect(() => {
    const savedAllRestaurant = sessionStorage.getItem("allRestaurant");
    if (savedAllRestaurant) {
      setAllRestaurant(JSON.parse(savedAllRestaurant)); // Parse the JSON string back into an array
    } else {
      getRestaurants(); // Fetch data if not found in localStorage
    }

    // Set up an interval to refresh data every 60 seconds (1 minute)
    const intervalId = setInterval(() => {
      getRestaurants();
    }, 60000);
    // Cleanup interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures this effect runs only once (on mount)

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
