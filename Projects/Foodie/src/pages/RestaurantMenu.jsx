import "./css/RestaurantMenu.css";
import { useEffect, useState } from "react";

import ShimmerMenu from "../Components/ShimmerMenu";
import useResturantsMenu from "../utils/Hooks/useResturantsMenu";
import RestaurantMenuHeader from "../Components/RestaurantMenuHeader";
import RestaurantMenuSection from "../Components/RestaurantMenuSection";

function RestaurantMenu() {
  const [dataForHeader, setDataForHeader] = useState([]);
  const [dataForMenu, setDataForMenu] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const { getRestaurantsMenu } = useResturantsMenu(
    setDataForHeader,
    setDataForMenu
  );

  useEffect(() => {
    getRestaurantsMenu();
  }, []);

  return dataForHeader.length != undefined ? (
    <ShimmerMenu />
  ) : (
    <>
      <div className="container pt-4 min-w-full flex justify-center items-start">
        <div className="box">
          <RestaurantMenuHeader dataForHeader={dataForHeader} />
          <div className="menu">
            <span>-Menu-</span>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder={"Search for dishes"}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
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
