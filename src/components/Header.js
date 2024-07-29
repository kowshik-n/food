import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Items/img/logo.png";
import UseOnlineStatus from "./CustomHook/UseOnlineSatus";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const Header = () => {
  const onlineStatus = UseOnlineStatus();

  // Subscribing to the cart items with useSelector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center sticky top-0 z-50 shadow-xl text-white text-lg bg-rose-400 p-4 h-[72px]">
      <div className="logo-container">
        <img
          className="w-16 xl:w-16"
          src={
            "https://res.cloudinary.com/cloudimagestore-/image/upload/f_auto,q_auto/v1/Assets/n4ib35lo32o8p7hxizrm"
          }
          alt="Logo"
        />
      </div>

      <div className="flex items-center">
        <ul className="flex space-x-6">
          <li className="m-2">Online: {onlineStatus ? "✅" : "🔴"}</li>

          <li className="hover:bg-yellow-200 px-4 py-2 rounded-full hover:text-black transition duration-300">
            <Link to="/">Home</Link>
          </li>

          <li className="hidden xl:block hover:bg-yellow-200 px-4 py-2 rounded-full hover:text-black transition duration-300">
            <Link to="/about">About Us</Link>
          </li>

          <li className="hidden xl:block hover:bg-yellow-200 px-4 py-2 rounded-full hover:text-black transition duration-300">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="hover:bg-yellow-200 px-4 py-2 rounded-full hover:text-black transition duration-300">
            <Link to="/cart">Cart-{cartItems.length}</Link>
          </li>
        </ul>
      </div>

      <button className="hidden sm:block bg-red-900 px-4 py-2 rounded-md hover:bg-yellow-200 hover:text-black transition duration-300">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};

export default Header;
