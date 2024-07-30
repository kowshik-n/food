import { useParams } from "react-router-dom";
import useRestrauentMenu from "./CustomHook/useRestrauentMenu";
import Shimmer from "./Shimmer";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { TiStarHalfOutline } from "react-icons/ti";
import { FaHandPointRight } from "react-icons/fa";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { HiCurrencyRupee } from "react-icons/hi2";

const RestaurentMenu = () => {
  const { id } = useParams();
  const ResInfo = useRestrauentMenu(id);
  const [showIndex, setShowIndex] = useState(null);

  if (ResInfo === null)
    return (
      <div className="w-full flex justify-center items-center min-h-screen">
        <img
          className="w-full max-w-xs object-contain"
          alt="loading"
          src="https://res.cloudinary.com/cloudimagestore-/image/upload/v1719550274/Assets/delivery_boy_j0u0qo.gif"
        />
      </div>
    );
  const {
    name,
    cuisines,
    costForTwoMessage,
    locality,
    areaName,
    city,
    sla,
    avgRating,
    costForTwo,
    totalRatingsString,
    deliveryTime,
  } =
    ResInfo?.cards[0]?.card?.card?.info || ResInfo?.cards[2]?.card?.card?.info;

  const categories =
    ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    ResInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const items =
    categories?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="border border-t-black w-full text-center pt-5 px-4 md:px-8 lg:px-16">
      <div className="text-black xl:flex xl:flex-col xl:items-center xl:justify-center">
        <div className="flex-col max-w-4xl mx-auto">
          <h1 className="font-bold text-2xl md:text-3xl mb-2">{name}</h1>
          <h2 className="flex items-center mb-2 font-semibold text-lg md:text-xl">
            <IoFastFoodOutline className="text-xl mr-2" />
            {cuisines.join(", ")} - {costForTwoMessage}
          </h2>
          <h2 className="flex items-center mb-2 text-sm md:text-base">
            <FaLocationCrosshairs className="text-xl mr-2" />
            {locality}, {areaName}, {city} - {sla?.lastMileTravelString}
          </h2>
          <h3 className="font-bold text-lg md:text-xl mb-2 flex items-center border-b-2 border-black pb-1">
            <TiStarHalfOutline className="text-xl mr-2 text-green-300" />
            {avgRating}
          </h3>
          <h3 className="font-semibold text-md md:text-lg mb-2 flex items-center justify-center">
            <FaHandPointRight className="text-xl text-red-700 mr-2" />
            {totalRatingsString}
          </h3>
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <h2 className="flex items-center mb-2 text-md md:text-lg">
              <MdOutlineDeliveryDining className="text-xl mr-2" />
              {deliveryTime} mins
            </h2>
            <h3 className="flex items-center text-md md:text-lg">
              <HiCurrencyRupee className="text-xl mr-2" />
              {costForTwo / 100} for Two
            </h3>
          </div>
        </div>
      </div>

      {items.map((category, index) => (
        <RestaurentCategory
          key={category?.card?.card.id}
          data={category?.card?.card}
          showItem={index === showIndex}
          setShowIndex={() => setShowIndex(index)}
          index={index}
        />
      ))}
    </div>
  );
};
export default RestaurentMenu;
