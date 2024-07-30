import { CDN_URL } from "../utils/constents";

const RestaurentCard = (props) => {
  const { resData } = props;
  const {
    info,
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla,
  } = resData?.info;

  return (
    <div className="relative m-2 p-4 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img
        className="w-full h-40 object-cover rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="mt-4">
        <h3 className="font-bold text-xl text-rose-800 truncate">{name}</h3>
        <p className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</p>
        <div className="flex items-center justify-between mt-2">
          <span
            className={`p-2 text-white font-bold rounded-md ${
              avgRating < 4 ? "bg-red-600" : "bg-green-600"
            }`}
          >
            {avgRating}
          </span>
          <div className="text-sm text-gray-600">
            <p>{sla.lastMileTravelString}</p>
            <p>{sla.deliveryTime} min</p>
          </div>
        </div>
        <h4 className="font-bold text-lg text-gray-800 mt-2">{costForTwo}</h4>
      </div>
    </div>
  );
};
export default RestaurentCard;
