import "./Body.css";
import Header from "./Header";
import CardSection from "./CardSection";
import { useState, useEffect } from "react";
import { data } from "./Constant";
//data[0].card.restaurants[i].info.name
//restaurantData= data[0]?.card?.restaurants
function Body() {
  const prefix = data[0]?.card?.restaurants;
  //   const apiData =
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const [restaurantData, setRestaurantData] = useState(prefix);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e?.target?.value);
  };

  useEffect(() => {
    const filteredData = restaurantData?.filter((restaurant) => {
      const restaurantName = restaurant?.info?.name
        ?.toLowerCase()
        ?.replace(/\s+/g, "");
      const searchTerm = searchInput?.toLowerCase()?.replace(/\s+/g, "");
      return restaurantName?.includes(searchTerm);
    });

    return setRestaurantData(filteredData);
  }, [searchInput]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const fetchedData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!fetchedData.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await fetchedData.json();
      console.log(json);
      const apiData =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurantData(apiData);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

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
