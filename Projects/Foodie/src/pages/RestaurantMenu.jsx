import "./RestaurantMenu.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import RestaurantMenuSection from "../Components/RestaurantMenuSection";
import RestaurantMenuHeader from "../Components/RestaurantMenuHeader";
import ShimmerMenu from "../Components/ShimmerMenu";

function RestaurantMenu() {
  const [dataForHeader, setDataForHeader] = useState([]);
  const [dataForMenu, setDataForMenu] = useState([]);
  const { id } = useParams();
  const [savedApiDataForMenu, setSavedApiDataForMenu] = useState("");
  const [savedApiDataForHeader, setSavedApiDataForHeader] = useState("");
  const [flag, setFlag] = useState(false);
  flag == true ? sessionStorage.clear() : null;

  async function getRestaurants() {
    try {
      const fetchedData = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59080&lng=85.13480&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );

      // Check if fetch was successful
      if (fetchedData.ok) {
        const json = await fetchedData.json();

        const apiDataForHeader = json?.data?.cards[2]?.card?.card?.info;
        const apiDataForMenu =
          json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        // Store data in state
        setDataForHeader(apiDataForHeader);
        setDataForMenu(apiDataForMenu);
        sessionStorage.setItem(
          "apiDataForHeader",
          JSON.stringify(apiDataForHeader)
        ); // Stringify before saving
        sessionStorage.setItem(
          "apiDataForMenu",
          JSON.stringify(apiDataForMenu)
        ); // Stringify before saving
      } else {
        throw new Error("Failed to Fetch Restaurant Menu Data");
        t;
      }
    } catch (error) {
      console.error("Error fetching Restaurant Menu Data:", error);
    }
  }
  // Check if the restaurants are already saved in localStorage, if so, retrieve from there
  useEffect(() => {
    // savedApiDataForHeader = sessionStorage.getItem("apiDataForHeader");
    setSavedApiDataForHeader(sessionStorage.getItem("apiDataForHeader"));
    setSavedApiDataForMenu(sessionStorage.getItem("apiDataForMenu"));
    if (savedApiDataForMenu && savedApiDataForHeader) {
      setDataForHeader(JSON.parse(savedApiDataForHeader)); // Parse the JSON string back into an array
      setDataForMenu(JSON.parse(savedApiDataForMenu)); // Parse the JSON string back into an array
      setFlag(true);
    } else {
      getRestaurants(); // Fetch data if not found in localStorage
    }
  }, [flag]); // Empty dependency array ensures this effect runs only once (on mount)

  return dataForHeader.length == 0 ? (
    <ShimmerMenu />
  ) : (
    <>
      <Header />
      <div className="empty"></div>
      <div className="container">
        <div className="box">
          <RestaurantMenuHeader dataForHeader={dataForHeader} />
          <div className="menu">
            <span>-Menu-</span>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search for dishes" />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="horizontal-rule"></div>
          <RestaurantMenuSection dataForMenu={dataForMenu} />
        </div>
      </div>
    </>
  );
}
export default RestaurantMenu;
