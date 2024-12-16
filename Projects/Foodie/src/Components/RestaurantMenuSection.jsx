import "./css/RestaurantMenuSection.css";
import { useEffect, useState } from "react";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { useParams } from "react-router-dom";

function RestaurantMenuSection({ dataForMenu }) {
  console.log("menu", dataForMenu);
  const { id } = useParams();

  const [restaurantMenuData, setRestaurantMenuData] = useState("");

  // path : json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[i]
  //card : path.card.card.itemCards[i].card.info.

  useEffect(() => {
    setRestaurantMenuData(dataForMenu);
  }, []);

  // State to manage the height of the div
  const [isCollapsed, setIsCollapsed] = useState(false);

  // State to track whether the arrow is rotated
  const [isRotated, setIsRotated] = useState(false);

  // Function to toggle the height when clicked
  // Toggle the rotation state on click
  const handleClick = () => {
    setIsRotated(!isRotated);
    setIsCollapsed(!isCollapsed); // Toggle state between true/false
  };

  return !restaurantMenuData || restaurantMenuData.length === 0 ? null : (
    <>
      <div className="menu-heading">
        <span>Choose Your Favourite </span>{" "}
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
        {restaurantMenuData?.map((item, index) => {
          const itemCards = item?.card?.card?.itemCards;
          // console.log(itemCards); // Log the itemCards to check structure
          return itemCards?.map((itemCard, index) => (
            <RestaurantMenuCard
              key={itemCard?.card?.info?.id || index} // Use `index` as fallback if `id` is undefined
              {...itemCard?.card?.info} // Ensure `info` exists
            />
          ));
        })}
      </div>
    </>
  );
}
export default RestaurantMenuSection;
