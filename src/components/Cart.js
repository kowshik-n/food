import { useSelector } from "react-redux";
import cartSlice, { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  let ItemTotal = 0;
  cartItems.filter((item) => {
    item.card.info.price
      ? (ItemTotal = ItemTotal + item.card.info.price / 100)
      : (ItemTotal = ItemTotal + item.card.info.defaultPrice / 100);
  });
  const deliveryCharges = 15;
  let taxTotal = (ItemTotal * 5) / 100;
  let grandTotal = ItemTotal + taxTotal + deliveryCharges;

  return (
    <div className="text-center m-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <button
          className="p-2 mb-4 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 ? (
          <div>
            <img
              className="w-48 mx-auto mt-4"
              src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
              alt="Empty Cart"
            />
            <h1 className="text-lg mt-4">
              Cart is empty. Add items to the cart.
            </h1>
          </div>
        ) : (
          <div>
            <ItemList items={cartItems} />
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-6 border-t-2 pt-4">
            <h1 className="font-semibold text-lg text-center py-2">
              Bill Details
            </h1>
            <div className="space-y-2 text-left">
              <p className="flex justify-between">
                <span>Total Items:</span>
                <span>${ItemTotal.toFixed(2)}</span>
              </p>
              <div className="border-t border-gray-300"></div>
              <p className="flex justify-between">
                <span>GST (5%):</span>
                <span>${taxTotal.toFixed(2)}</span>
              </p>
              <div className="border-t border-gray-300"></div>
              <p className="flex justify-between">
                <span>Delivery Charges:</span>
                <span>${deliveryCharges.toFixed(2)}</span>
              </p>
              <div className="border-t-2 border-black mt-4 pt-2 font-bold text-xl flex justify-between">
                <span>Total:</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
        <button className="p-2 mt-6 font-bold bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          <Link to="/">Continue Ordering</Link>
        </button>
      </div>
    </div>
  );
};
export default Cart;
