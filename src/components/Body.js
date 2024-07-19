import RestaurentCard from "./ResturentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurent, setlistOfRestaurent] = useState([]);
  const [filteredRestaurent, setfilterRestaurent] = useState([]);
  const [searchText, setsearchText] = useState([]);
  // const handleScroll = () =>{
  //     scroller.scrollTo('res-list',{
  //       smooth:true,
  //       duration: 560,
  //       offset : -170
  //     })
  //   }

  // for fetching api
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D11.01420%26lng%3D76.99410%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );

    //   "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D11.01420%26lng%3D76.99410%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    const json = await data.json();
    console.log(json);
    setlistOfRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setfilterRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(filteredRestaurent);

  return listOfRestaurent?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="  mb-[200px] ">
        <div className="pt-[60] xl:mr-[68] border-b-2 border-b-slate-300 xl:pt-0  xl:ml-30 xl:pb-2">
          <div className="filter flex mb-5 ">
            <div className=" m-4 p-4">
              <input
                type="text"
                className="border border-solid ml-6 border-gray-400 py-2 pl-3 pr-16 rounded-2xl rounded-r-none bg-white sm:ml-[170] md:ml-[90]  lg:ml-[40] xl:ml-0"
                placeholder="Enter your restaurent"
                value={searchText}
                onChange={(e) => {
                  setsearchText(e.target.value);
                }}
              />

              <button
                className="border border-solid  border-gray-400 py-2 pl-3 pr-4 rounded-2xl rounded-l-none bg-white sm:ml-[170] md:ml-[90]  lg:ml-[40] xl:ml-0"
                onClick={() => {
                  console.log(searchText);

                  //for display on the ui we have to filtered the res...
                  const filteredRestaurant = listOfRestaurent.filter((res) =>
                    res?.info?.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setfilterRestaurent(filteredRestaurant);
                }}
              >
                search
              </button>
            </div>

            <div className="search  flex items-center">
              <button
                className="  px-4 py-2  mr-2 ml-[100px]  bg-orange-500 text-white xl:bg-white rounded-full xl:hover:bg-orange-500 xl:hover:text-white xl:text-black  md:mb-0 sm:ml-[222] md:ml-[60] lg:ml-[390] xl:ml-[2]"
                onClick={() => {
                  const filteredList = listOfRestaurent.filter(
                    (res) => res.info.avgRating > 4
                  );
                  // setlistOfRestaurent(filteredList);
                  setfilterRestaurent(filteredList);
                }}
              >
                Top rated Resturet
              </button>

              <button
                className=" hidden xl:block  px-4 py-2  mx-2 xl:ml-[40] xl:-mt-[5] bg-white rounded-full hover:bg-orange-500 hover:text-white"
                onClick={() => {
                  let sortedlist = [...listOfRestaurent];
                  listOfRestaurent.sort(
                    (a, b) =>
                      a.info.sla.lastMileTravel - b.info.sla.lastMileTravel
                  );
                  setfilterRestaurent(sortedlist);
                }}
              >
                Nearest Restaurent
              </button>
              <button
                className="   hidden xl:block px-4 py-2 mx-2 xl:ml-[80] xl:-mt-[10] bg-white rounded-full hover:bg-orange-500 hover:text-white"
                onClick={() => {
                  let sortedlist = [...listOfRestaurent];
                  listOfRestaurent.sort(
                    (a, b) =>
                      Number(b.info.costForTwo.substr(1, 3)) -
                      Number(a.info.costForTwo.substr(1, 3))
                  );
                  setfilterRestaurent(sortedlist);
                }}
              >
                Cost:High to Low
              </button>
              <button
                className="  hidden xl:block px-4 py-2 mx-2 xl:ml-[80px] xl:-mt-[09px] bg-white rounded-full hover:bg-orange-500 hover:text-white"
                onClick={() => {
                  let sortedlist = [...listOfRestaurent];
                  listOfRestaurent.sort(
                    (a, b) =>
                      a.info.sla.lastMileTravel - b.info.sla.lastMileTravel
                  );
                  setfilterRestaurent(sortedlist);
                }}
              >
                Delivery Time
              </button>
              {/* fksfsffkjs */}
            </div>
          </div>
        </div>
        {/* <div className=" absolute top-[195px] border-t border-gray-500 min-h-px w-[1330px]  "></div> */}
        {/* <div className="pt-[65] xl:mr-[98] border-b-2 border-b-slate-300 xl:pt-0  xl:ml-[99px] xl:pb-2"></div> */}
        <div className="gridui">
          {filteredRestaurent.map((restaurent) => (
            <Link
              key={restaurent.info.id}
              to={"/restaurant/" + restaurent.info.id}
            >
              <RestaurentCard resData={restaurent} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
