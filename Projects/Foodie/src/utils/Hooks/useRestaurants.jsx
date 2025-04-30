import { RESTAURANTS_URL } from "../../Components/Constant";

const useRestaurants = () => {
  async function getRestaurants(setAllRestaurant) {
    try {
      const fetchedData = await fetch(
        "https://foodie-backend-so1x.onrender.com/api/restaurantdata"
      );

      // Check if fetch was successful
      if (fetchedData.ok) {
        const json = await fetchedData.json();

        const apiDataPath =
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        // Store data in state and localStorage
        setAllRestaurant(apiDataPath);
        // sessionStorage.setItem("allRestaurant", JSON.stringify(apiDataPath)); // Stringify before saving
      } else {
        throw new Error("Failed to Fetch Restaurants");
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }
  return { getRestaurants };
};

export default useRestaurants;
