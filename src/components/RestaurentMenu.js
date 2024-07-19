import { resolvePath, useParams } from "react-router-dom";
import useRestrauentMenu from "./CustomHook/useRestrauentMenu";
// import { MENU_API } from "../utils/constents";
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
  // const [ResInfo,setResInfo]=useState(null);
  //useParams gives you to resId
  // console.log(useParams());
  // console.log(id);
  // console.log("thfioso",ResInfo );

  const { id } = useParams();
  const ResInfo = useRestrauentMenu(id);
  const [ShowIndex, setShowIndex] = useState(null);

  //fetch data custome hooks me lekr chale gye

  if (ResInfo === null)
    return (
      <>
        <div className="w-full flex justify-center items-center min-h-screen">
          <img
            className="w-full max-w-xs object-contain"
            alt="loading"
            src="https://res.cloudinary.com/cloudimagestore-/image/upload/v1719550274/Assets/delivery_boy_j0u0qo.gif"
          />
        </div>
      </>
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
    lastMileTravelString,
  } =
    ResInfo?.cards[0]?.card?.card?.info || ResInfo?.cards[2]?.card?.card?.info;

  // const {itemCards}=ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards,"kdfhgh");
  // console.log(ResInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards)

  const categories =
    ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    ResInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const items = categories.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(categories);

  // cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards

  return (
    <div className="border border-t-black  w-full text-center pt-5 ">
      <div className="  text-black  xl:flex min-h-[120] flex items-center justify-center ">
        <div className=" flex-col">
          {/* <h1 className="font-bold my-6 text-2xl">{name}</h1> */}
          {/* //this code is done bt me */}
          <h1 className="font-bold  text-2xl  mt-2">{name}</h1>
          <h2 className=" flex mt-4 font-bold  text-lg ">
            <IoFastFoodOutline className="mt-1 ml-3 mr-1 " />
            {cuisines.join(" , ")}-{costForTwoMessage}
          </h2>
          <h2 className="flex mb-2">
            <FaLocationCrosshairs className="mt-1 ml-[10] mr-1" />
            {locality + ",     "}
            {areaName}, {city} -{" " + sla?.lastMileTravelString}
          </h2>
          <h3 className="font-bold text-lg mt-[5] text-black-300 flex pl-2 border-b-2 pb-1 border-black">
            {" "}
            <TiStarHalfOutline className="mr-1 mt-1 text-green-300" />
            {avgRating}{" "}
          </h3>
          <h3 className="ml-[665px]  mb-1 flex ">
            {" "}
            <FaHandPointRight className="text-2xl text-red-700 m-2" />
            {totalRatingsString}
          </h3>
          <div className=" ">
            <h2 className=" flex ">
              <MdOutlineDeliveryDining className="mt-[6] mr-[8px]" />
              {sla?.deliveryTime} mins{" "}
            </h2>
            <h3 className=" flex font-bold text-lg    ">
              <HiCurrencyRupee className="mt-[6] h-[14] mr-[6]" />
              {costForTwo / 100} {" for Two"}
            </h3>
          </div>
          {/* total rating */}
        </div>
      </div>
      {/* <div className="hidden  text-black  xl:flex justify-between mt-7 ml-[350px] w-[780]">
     
      </div> */}

      {/* <ul>
                {categories&&categories.map((item) => {
                    return <>
                        <li key={item.card.info.id}>
                            {item.card.info.name}-{"RS"}-{item.card.info.price / 100}
                        </li>
                    </>
                })}
            </ul> */}

      {items &&
        items.map((category, index) => (
          <RestaurentCategory
            key={category?.card?.card.id}
            data={category?.card?.card}
            showItem={index === ShowIndex ? true : false}
            setShowIndex={(index) => {
              setShowIndex(index);
            }}
            index={index}
          />
        ))}
    </div>
  );
};
export default RestaurentMenu;
