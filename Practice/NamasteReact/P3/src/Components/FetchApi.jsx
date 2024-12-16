import React, { useEffect } from "react";

const FetchApi = () => {
  useEffect(() => {
    fetchData();
  });
  async function fetchData() {
    const data1 = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData1 = await data1.json();
    const pageOffset = jsonData1.data.pageOffset.nextOffset;
    const data2 = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&pageOffset={nextOffset:${pageOffset}}`
    );
    console.log(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&pageOffset={nextOffset:${pageOffset}}`
    );
    const jsonData2 = await data2.json();
    console.log(jsonData1.data.pageOffset.nextOffset);
    console.log(jsonData1);
    console.log(
      jsonData1.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(jsonData2.data.pageOffset.nextOffset);
    console.log(jsonData2.data);
    console.log(
      jsonData2.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  }
  return <div>fetchApi</div>;
};

export default FetchApi;
