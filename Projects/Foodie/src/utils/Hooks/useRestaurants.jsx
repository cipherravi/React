import { RESTAURANTS_URL } from "../../Components/Constant";

const useRestaurants = (setAllRestaurant) => {
  async function getRestaurants() {
    try {
      const fetchedData = await fetch(RESTAURANTS_URL);

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
