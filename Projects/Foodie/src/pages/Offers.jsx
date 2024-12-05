import "./Offers.css";
import Header from "../Components/Header";
function Offers() {
  return (
    <>
      <Header />
      <div className="empty"></div>
      <div className="offer-wrapper">
        <h1>Offers</h1>
        <h2>Currently no offers running... 🤭</h2>
      </div>
    </>
  );
}

export default Offers;
