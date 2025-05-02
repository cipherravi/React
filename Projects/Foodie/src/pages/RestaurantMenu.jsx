import "./css/RestaurantMenu.css";
import { useEffect, useState } from "react";

import ShimmerMenu from "../Components/ShimmerMenu";
import useResturantsMenu from "../utils/Hooks/useResturantsMenu";
import RestaurantMenuHeader from "../Components/RestaurantMenuHeader";
import RestaurantMenuSection from "../Components/RestaurantMenuSection";
import useAllCards from "../utils/Hooks/useAllCards";

function RestaurantMenu() {
  const [dataForHeader, setDataForHeader] = useState([]);
  const [dataForMenu, setDataForMenu] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const { getRestaurantsMenu } = useResturantsMenu(
    setDataForHeader,
    setDataForMenu
  );
  const { finalData } = useAllCards({ dataForMenu });

  useEffect(() => {
    getRestaurantsMenu();
  }, []);

  return dataForHeader.length === 0 ? ( // If data is not fetched, show shimmer
    <ShimmerMenu />
  ) : (
    <>
      <div className="mainContainer pt-4 w-full min-h-full flex justify-center  ">
        <div className="box w-[85%] mt-5 pt-14 //responsive **start //area lg:w-[55%]  //mar-pad lg:mt-5 lg:pt-14 end**">
          <RestaurantMenuHeader dataForHeader={dataForHeader} />
          <div className="menu mt-7 mb-5 w-full text-center">
            <span className="//visuals font-gilroy-medium text-xs lg:text-base">
              -Menu-
            </span>
          </div>
          <div className="search-bar w-full relative">
            <input
              className="w-full h-12 border-transparent rounded-xl outline-none bg-[#f2f2f3] text-base font-gilroy-medium text-center cursor-pointer"
              type="text"
              placeholder={"Search for dishes"}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div className="search-icon absolute top-3.5 right-5 text-[#6d7073]">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="horizontal-rule"></div>
          <div>
            <RestaurantMenuSection dataForMenu={dataForMenu} />
          </div>
        </div>
      </div>
    </>
  );
}
export default RestaurantMenu;
