import { useState } from "react";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantMenuCategory = ({ dataForMenu }) => {
  return dataForMenu.map((item, index) => {
    const itemCards = item?.card?.card.itemCards;
    // console.log(itemCards);
    const title = item?.card?.card?.title;
    // console.log(title);
    const [isRotated, setIsRotated] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const handleClick = () => {
      setIsRotated(!isRotated);
      setIsCollapsed(!isCollapsed); // Toggle state between true/false
    };
    return title == undefined ? null : (
      <>
        <div className="menu-heading">
          <span>{title} </span>
          <span
            className="dropdown"
            onClick={handleClick}
            style={{
              display: "inline-block", // Necessary for applying transform
              transition: "transform 0.2s ease", // Smooth rotation transition
              transform: isRotated ? "rotate(90deg)" : "rotate(-90deg)", // Rotate by 180 degrees when clicked
            }}
          >
            {">"}
          </span>
        </div>
        <div
          className="menu-section"
          style={{
            height: isCollapsed ? "0" : "", // Set height to 0 or 200px based on the state
            overflow: "hidden", // Hide content when the height is 0
            transition: "height 0.3s ease", // Smooth transition effect for height change
          }}
        >
          {itemCards != undefined
            ? itemCards.map((item, index) => {
                console.log(item);
                return (
                  <RestaurantMenuCard
                    key={item?.card?.info?.id || index}
                    {...item?.card?.info}
                  />
                );
              })
            : null}
        </div>
      </>
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
