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
const deliverCharges=15;
  let taxTotal = (ItemTotal * 5) / 100;
  let grandTotal = ItemTotal + taxTotal +deliverCharges;

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold text-center">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg "
          onClick={handleClearCart}
        >
          clearCart
        </button>

        {cartItems.length === 0 && (
          <div>
            <img
              className="w-[350] m-auto mt-2"
              src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
            />
            <h1>Cart is empty.Add items to the cart</h1>
          </div>
        )}
        <div>
          <ItemList items={cartItems} />
        </div>
        {/* border justify */}


            <div className="">
          <h1 className="font-semibold text-lg text-center py-2">
            Bill Details
          </h1>
          <div className="  ">
            <p className=" mr-[600]  ">
              Total Item : {" " + ItemTotal}
            </p>
            <div className="border border-gray-300"></div>
            <p className="mr-[630] mt-1 ">
              GST : {" " + taxTotal.toFixed(2)}
            </p> 
            <div className="border border-gray-300"></div>
            <p className="mr-[570] mt-1 ">
              DeliveryCharges : {deliverCharges}
            </p>
            <div className="border border-gray-300"></div>
            <h1 className="border-t-2 border-black mt-8 font-bold text-xl">
              Total: {" " + grandTotal.toFixed(2)}
            </h1>
          </div>



        {/* border justify */}
        </div>
        <button className="p-2 m-2 font-bold bg-black text-white rounded-lg hover:bg-green-300 hover:text-black">
          <Link to="/">Continue Ordering</Link>
        </button>
      </div>
    </div>
  );
};
export default Cart;
