import { CDN_URL } from "../utils/constents";



const RestaurentCard = (props) => {
    const { resData } = props;
    // console.log(props);
    const { info, cloudinaryImageId, name, cuisines, costForTwo, avgRating,sla,
        deliveryTime,
        lastMileTravelString } = resData?.info;

    return (
        <div className="m-4 p-4   h-[370px] w-[300px] shadow-xl
        text-rose-800  bg-white rounded-md hover:shadow-amber-500  cursor-pointer transition ease-in-out delay-50 hover:scale-105 duration-100">
            <img className="w-[270px] h-[170px] rounded-lg" src={CDN_URL + cloudinaryImageId} />

            <h3 className="font-bold pt-2 pb-1 text-xl line-clamp-1">{name}</h3>
            <h3 className="mb-4 tracking-wide truncate">{cuisines.join(" , ")}</h3>
            <div className="flex justify-between">
                <h3 style={
                    avgRating < 4
                    ? { backgroundColor: "#ad0000" }
                    : { backgroundColor: "#00ad0e" }
                }
                    className="p-2 mb-4 text-white font-bold rounded-md flex items-center gap-2"
                > {avgRating}</h3>
                <h4 className="mt-2 ml-5 font-bold">{sla.lastMileTravelString}</h4>
                <h3 className="mt-2 ml-5 font-bold">{sla.deliveryTime} <span>Min..</span> </h3>
            </div>    
            <h3 className="font-bold">{costForTwo}  </h3> 
           
        </div>
    );
};
export default RestaurentCard;