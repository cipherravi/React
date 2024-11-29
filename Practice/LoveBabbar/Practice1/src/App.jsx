import "./App.css";
import Product from "./assets/Components/Product";
import Card from "/src/assets/Components/Card.jsx";

function App(props) {
  const products = [
    {
      name: "Arial",
      month: "September",
      date: 10,
      year: 2023,
    },
    {
      name: "Surf Excel",
      month: "July",
      date: 21,
      year: 2020,
    },
    {
      name: "Active Wheel",
      month: "October",
      date: 28,
      year: 2007,
    },
    {
      name: "Ezee",
      month: "December",
      date: 25,
      year: 2004,
    },
  ];
  // console.log("props", props);
  return (
    <div className="container">
      <Product data={products}></Product>
      {/* <Card data={products}></Card>
      <Card data={products}></Card>
      <Card data={products}></Card> */}
    </div>
  );
}

export default App;
