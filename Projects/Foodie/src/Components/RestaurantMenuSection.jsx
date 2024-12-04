import { useEffect, useState } from "react";
import RestaurantMenuCard from "./RestaurantMenuCard";

function RestaurantMenuSection() {
  const [restaurant, setRestaurant] = useState("");
  //constant url=https://media-assets.swiggy.com/swiggy/image/upload/
  // ImageId =FOOD_CATALOG/IMAGES/CMS/2024/8/3/d9d8bcd5-7f62-4f1b-8a12-30f41cd4088e_7b0bb350-b4e5-42c7-b504-4089e0d8f276.jpg

  // path : json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[i]
  //card : path.card.card.itemCards[i].card.info.
  useEffect(() => {
    getRestaurantMenu();
  }, []);
  async function getRestaurantMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59080&lng=85.13480&restaurantId=977437&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    // console.log(json);
    setRestaurant(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    // console.log(
    //   json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    //     .itemCards[0].card.info
    // );
  }
  // useEffect(() => {
  //   // if(restaurant)
  //   restaurant?.map((item) => {
  //     item?.card?.info;
  //   });
  // }, []);
  console.log(restaurant);
  return (
    <div className="menu-section">
      <div className="menu-heading">Fresh Kettle Popcorns (5)</div>
      <RestaurantMenuCard />
      <RestaurantMenuCard />
      <RestaurantMenuCard />
      <RestaurantMenuCard />
      <RestaurantMenuCard />
      <RestaurantMenuCard />
    </div>
  );
}
export default RestaurantMenuSection;
