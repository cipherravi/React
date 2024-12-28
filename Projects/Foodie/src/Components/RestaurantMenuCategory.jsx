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
    const itemCards = item?.card?.card.itemCards;

    const title = item?.card?.card?.title;

    return title == undefined || title == "Top Picks" ? null : (
      <div key={index}>
        <div className="menu-heading">
          <span>
            {title}
            {itemCards != undefined ? `(${itemCards.length})` : null}
          </span>
          <span
            className="dropdown "
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
          className="menu-section"
          style={{
            height: collapsedIndexes[index] ? "0" : "", // Set height to 0 or 200px based on the state
            overflow: "hidden", // Hide content when the height is 0
            transition: "height 0.3s ease", // Smooth transition effect for height change
          }}
        >
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
    );
  });
};

export default RestaurantMenuCategory;

/* 
      {itemCards.map((item, index) => {
        return (
          <RestaurantMenuCard
            key={item?.card?.info?.id || index}
            {...item?.card?.info}
          />
        );
      })} */
