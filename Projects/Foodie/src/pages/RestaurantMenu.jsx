import "./css/RestaurantMenu.css";
import { useEffect, useState } from "react";
import Header from "../Components/Header";
import RestaurantMenuSection from "../Components/RestaurantMenuSection";
import RestaurantMenuHeader from "../Components/RestaurantMenuHeader";
import ShimmerMenu from "../Components/ShimmerMenu";
import Shimmer from "../Components/Shimmer";
import useResturantsMenu from "../utils/Hooks/useResturantsMenu";

function RestaurantMenu() {
  const [dataForHeader, setDataForHeader] = useState([]);
  const [dataForMenu, setDataForMenu] = useState([]);
  const { getRestaurantsMenu } = useResturantsMenu(
    setDataForHeader,
    setDataForMenu
  );

  useEffect(() => {
    getRestaurantsMenu();
  }, []);

  //using shimmer for temporary finally will make ShimmerMenu for this
  const shimmer = Array(8)
    .fill("")
    .map((_, index) => {
      return <Shimmer key={index} />;
    });
  return dataForHeader.length == 0 ? (
    <div className="flex flex-wrap gap-4 pt-8 mx-20 pl-20">{shimmer}</div>
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
