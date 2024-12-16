// import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import RestaurantSearchFilterProvider from "./utils/Context/RestaurantSearchFilterProvider";

function App() {
  return (
    <>
      <RestaurantSearchFilterProvider />
      <Footer />
    </>
  );
}

export default App;
