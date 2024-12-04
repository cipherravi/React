import { useEffect, useState } from "react";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

function RestaurantMenuSection() {
  const { id } = useParams();

  const [restaurantCardData, setRestaurantCardData] = useState("");
  //   console.log(id);

  // path : json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[i]
  //card : path.card.card.itemCards[i].card.info.

  useEffect(() => {
    getRestaurantMenu();
  }, []);
  async function getRestaurantMenu() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59080&lng=85.13480&restaurantId=977437&catalog_qa=undefined&submitAction=ENTER"
      );
      if (data.ok) {
        const json = await data.json();
        setRestaurantCardData(
          json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        );
        console.log(json);
      }
    } catch {}

    // `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59080&lng=85.13480&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`

    console.log(restaurantCardData);
  }
  // useEffect(() => {
  //   // if(restaurant)
  //   restaurant?.map((item) => {
  //     item?.card?.info;
  //   });
  // }, []);

  return !restaurantCardData || restaurantCardData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="menu-section">
      <div className="menu-heading">Fresh Kettle Popcorns (5)</div>
      {restaurantCardData?.map((item, index) => {
        const itemCards = item?.card?.card?.itemCards;
        console.log(itemCards); // Log the itemCards to check structure
        return itemCards?.map((itemCard, index) => (
          <RestaurantMenuCard
            key={itemCard?.card?.info?.id || index} // Use `index` as fallback if `id` is undefined
            {...itemCard?.card?.info} // Ensure `info` exists
          />
        ));
      })}
    </div>
  );
}
export default RestaurantMenuSection;
