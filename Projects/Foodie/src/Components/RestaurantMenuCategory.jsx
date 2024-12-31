import { useState } from "react";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantMenuCategory = ({ dataForMenu }) => {
  const [rotatedIndexes, setRotatedIndexes] = useState({});
  const [collapsedIndexes, setCollapsedIndexes] = useState({});

  const handleClick = (index) => {
    setRotatedIndexes((prev) => ({ ...prev, [index]: !prev[index] }));
    setCollapsedIndexes((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return dataForMenu.map((item, index) => {
    const itemCards = item?.card?.card?.itemCards;
    const categories = item?.card?.card?.categories;

    const title = item?.card?.card?.title;
    const categoriesTitle = item?.card?.card?.categories;
    categoriesTitle?.map((category) => {
      // category.
    });

    return title == undefined || title == "Top Picks" ? null : (
      <>
        <div key={index}>
          <div className="menu-heading font-gilroy-bold text-lg text-[#151920] my-10  w-full flex justify-between items-center pr-7">
            <span>
              {title}
              {itemCards != undefined ? ` (${itemCards.length})` : null}
            </span>
            <span
              className="dropdown font-gilroy-medium select-none text-lg cursor-pointer"
              onClick={() => handleClick(index)}
              style={{
                display: "inline-block", // Necessary for applying transform
                transition: "transform 0.2s ease", // Smooth rotation transition
                transform: rotatedIndexes[index]
                  ? "rotate(0deg)"
                  : "rotate(180deg)", // Rotate by 180 degrees when clicked
              }}
            >
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </div>
          <div
            className="menu-section mt-10 w-full"
            style={{
              height: collapsedIndexes[index] ? "0" : "", // Set height to 0 or 200px based on the state
              overflow: "hidden", // Hide content when the height is 0
              transition: "height 0.3s ease", // Smooth transition effect for height change
            }}
          >
            {}
            {itemCards != undefined
              ? itemCards.map((item, index) => {
                  return (
                    <RestaurantMenuCard
                      key={item?.card?.info?.id || index}
                      {...item?.card?.info}
                    />
                  );
                })
              : null}
          </div>
        </div>
        <div className=" h-4 mr-3 my-auto bg-[#F2F2F3]"></div>
      </>
    );
  });
};

export default RestaurantMenuCategory;
