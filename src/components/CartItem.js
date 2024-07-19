import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartItem = ({ name, imageId, description, price, props }) => {
  const dispatch = useDispatch();
  const handleDecreamentFoodItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div className="flex w-[790]">
      <div className="m-4 flex p-4 w-[500px] text-slate-950 rounded-lg hover:bg-red-950 hover:text-white">
        <img
          className="rounded-lg w-[200]"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            imageId
          }
          alt="logoRes"
        />
        <div className="flex flex-col ml-4">
          <h2 className="font-bold py-2 text-lg ">{name}</h2>
          <h2 className="font-bold py-2 text-lg  ">1 Piece</h2>
          <div className="bg-orange-500 px-5 w-[100] rounded-full mt-2">
            In Stock
          </div>
        </div>
      </div>
      <h4 className="py-1 text-black text-lg font-bold mt-20 ml-[52] w-[30]">
        {" "}
        ₹{price / 100}
      </h4>
      <button
        className="flex max-h-[40] mt-20 ml-12 rounded-full text-black p-3 bg-orange-500 hover:bg-red-950 hover:text-white"
        onClick={() => {
          handleDecreamentFoodItem(props?.info?.id);
        }}
      >
        {" "}
      </button>
    </div>
  );
};

export default CartItem;
