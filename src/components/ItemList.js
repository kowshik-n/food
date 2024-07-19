// import { CDN_URL } from "../utils/constents";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constents";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="p-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span>
                - ₹{" "}
                {item.card.info.price / 100
                  ? item.card.info.price/100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="line-clamp-3">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-3">
            <div className="absolute ">
              <button
                className="p-2 bg-white shadow-lg m-auto border text-black rounded-md hover:bg-yellow-300  cursor-pointer"
                onClick={() => handAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
    

  );
};

export default ItemList;
