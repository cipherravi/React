import { useParams } from "react-router-dom";

const useResturantsMenu = (setDataForHeader, setDataForMenu) => {
  const { id } = useParams();
  console.log(id);
  async function getRestaurantsMenu() {
    try {
      const fetchedData = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.626227&lng=85.0974179&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      // `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.626227&lng=85.0974179&restaurantId=659704&catalog_qa=undefined&submitAction=ENTER`;
      // Check if fetch was successful
      if (fetchedData.ok) {
        const json = await fetchedData.json();

        const apiDataForHeader = json?.data?.cards[2]?.card?.card?.info;
        const apiDataForMenu =
          json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        // Store data in state

        setDataForHeader(apiDataForHeader);
        setDataForMenu(apiDataForMenu);
      } else {
        throw new Error("Failed to Fetch Restaurant Menu Data");
      }
    } catch (error) {
      console.error("Error fetching Restaurant Menu Data:", error.message);
    }
  }
  return { getRestaurantsMenu };
};

export default useResturantsMenu;
