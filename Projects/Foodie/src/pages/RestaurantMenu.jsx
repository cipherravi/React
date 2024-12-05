import "./RestaurantMenu.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import RestaurantMenuSection from "../Components/RestaurantMenuSection";
import RestaurantMenuHeader from "../Components/RestaurantMenuHeader";
import Shimmer from "../Components/Shimmer";
import ShimmerMenu from "../Components/ShimmerMenu";

function RestaurantMenu() {
  const [dataForHeader, setDataForHeader] = useState([]);
  const [dataForMenu, setDataForMenu] = useState([]);
  const { id } = useParams();
  // console.log(allRestaurant);

  useEffect(() => {
    getRestaurants();
  }, []);
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
      } else {
        throw new Error("Failed to Fetch Restaurant Header Data");
      }
    } catch (error) {
      console.error("Error fetching Restaurant Header Data:", error);
    }
  }

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
