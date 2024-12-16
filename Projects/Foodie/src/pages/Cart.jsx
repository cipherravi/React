import "./css/Cart.css";
// import "../index.css";
import Header from "../Components/Header";

function Cart() {
  return (
    <>
      <Header />
      <div className="empty"></div>

      <div className="cart-wrapper ">
        <h1>Cart 🛒</h1>
        <h2>Nothing in your Cart 🙁</h2>
      </div>
    </>
  );
}

export default Cart;
