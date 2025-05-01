// import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import RestaurantSearchFilterProvider from "./utils/Context/RestaurantSearchFilterProvider";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default App;
