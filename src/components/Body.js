import RestaurentCard from "./ResturentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurent, setFilterRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSorting, setIsSorting] = useState(false);
  const [menuTab, setMenuTab] = useState("Top rated Restaurant");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D11.01420%26lng%3D76.99410%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const restaurants =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurent(restaurants);
    setFilterRestaurent(restaurants);
    setIsLoading(false);
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurent.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurent(filteredList);
  };

  const handleSort = (sortFunction, tabName) => {
    setIsSorting(true);
    const sortedList = [...listOfRestaurent].sort(sortFunction);
    setFilterRestaurent(sortedList);
    setMenuTab(tabName);
    setIsSorting(false);
  };

  const sortByRating = (a, b) => b.info.avgRating - a.info.avgRating;
  const sortByDistance = (a, b) =>
    a.info.sla.lastMileTravel - b.info.sla.lastMileTravel;
  const sortByCostHighToLow = (a, b) =>
    Number(b.info.costForTwo.substr(1)) - Number(a.info.costForTwo.substr(1));
  const sortByDeliveryTime = (a, b) =>
    a.info.sla.lastMileTravel - b.info.sla.lastMileTravel;

  if (isLoading) {
    return <Shimmer />;
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <section className="header-banner h-96 w-full bg-yellow-50">
                <div className="flex flex-col items-center justify-center h-full">
                  <h1 className="text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-gray-700">
                    Best food waiting for your belly
                  </h1>

                  <div className="rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center">
                    <input
                      type="text"
                      className="rounded-full px-4 focus:outline-none w-full bg-transparent"
                      placeholder="Enter your restaurant"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                    <button
                      className="bg-red-500 text-sm bg-primary py-3 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform"
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </section>
            </div>

            <div className="my-12 max-w-screen-xl mx-auto px-6">
              <div className="flex items-center justify-center space-x-6">
                <p
                  className={
                    menuTab === "Top rated Restaurant"
                      ? "active_menu_tab poppins bg-primary"
                      : "menu_tab poppins"
                  }
                  onClick={() =>
                    handleSort(sortByRating, "Top rated Restaurant")
                  }
                >
                  Top rated Restaurant
                </p>
                <p
                  className={
                    menuTab === "Nearest Restaurant"
                      ? "active_menu_tab poppins bg-primary"
                      : "menu_tab poppins"
                  }
                  onClick={() =>
                    handleSort(sortByDistance, "Nearest Restaurant")
                  }
                >
                  Nearest Restaurant
                </p>
                <p
                  className={
                    menuTab === "Cost:High to Low"
                      ? "active_menu_tab poppins bg-primary"
                      : "menu_tab poppins"
                  }
                  onClick={() =>
                    handleSort(sortByCostHighToLow, "Cost:High to Low")
                  }
                >
                  Cost:High to Low
                </p>
                <p
                  className={
                    menuTab === "Delivery Time"
                      ? "active_menu_tab poppins bg-primary"
                      : "menu_tab poppins"
                  }
                  onClick={() =>
                    handleSort(sortByDeliveryTime, "Delivery Time")
                  }
                >
                  Delivery Time
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          {isSorting ? (
            <Shimmer />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredRestaurent.map((restaurant) => (
                <Link
                  key={restaurant.info.id}
                  to={"/restaurant/" + restaurant.info.id}
                >
                  <RestaurentCard resData={restaurant} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Body;
