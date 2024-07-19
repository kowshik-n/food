import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Items/img/logo.png";
import UseOnlineStaus from "./CustomHook/UseOnlineSatus";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const Header = () => {
  const onlineStatus = UseOnlineStaus();

  //subscribing the cartitem with the help of useselctor
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex min-h-16 justify-between sticky top-0 z-50 shadow-xl  text-white text-lg bg-rose-400 sm:max-h-24  sm:w-full md:w-full ">
      <div className="logo-container">
        <img
          className=" ml-1 mt-1  w-[65px] xl:w-[65px] "
          src={
            "https://res.cloudinary.com/cloudimagestore-/image/upload/f_auto,q_auto/v1/Assets/n4ib35lo32o8p7hxizrm"
          }
        />
      </div>

      <div className="flex items-center">
        <ul className="flex m-4">
          <li className="m-2 px-6">online : {onlineStatus ? "✅" : "🔴"}</li>

          <li className="  px-6 hover:bg-yellow-200  pt-2 rounded-full hover:text-black hover:cursor-pointer hover:transition duration-300 ">
            <Link to="/">Home</Link>
          </li>

          <li className=" hidden xl:block px-6     hover:bg-yellow-200  pt-2 rounded-full hover:text-black hover:cursor-pointer  hover:transition duration-300">
            <Link to="/about">About Us</Link>
          </li>

          <li className=" hidden xl:block px-6  hover:text-black  hover:rounded-full h-10 pt-[6] hover:bg-yellow-200  hover:cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="  px-6  hover:text-black  hover:rounded-full h-10 pt-[6] hover:bg-yellow-200  hover:cursor-pointer">
            <Link to="/cart">Cart-{cartItems.length}</Link>{" "}
          </li>
        </ul>
      </div>
      <button
        className="hidden"
        //    px-8  sm:block sm:mr-4 md:mr-10 bg-red-900 my-7 py-1  rounded-md hover:bg-yellow-200  hover:text-black
      >
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};
export default Header;
