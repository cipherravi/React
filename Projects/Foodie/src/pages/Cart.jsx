import "./css/Cart.css";
import ShimmerMenu from "../Components/ShimmerMenu";
function Cart() {
  return (
    <>
      <ShimmerMenu></ShimmerMenu>
      <div className="cart-wrapper ">
        <h1>Cart 🛒</h1>
        <h2>Nothing in your Cart 🙁</h2>
      </div>
    </>
  );
}

export default Cart;
