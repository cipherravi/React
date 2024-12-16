// import "./App.css";
import { Outlet } from "react-router-dom";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import CardSection from "./Components/CardSection";

function App() {
  return (
    <>
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
