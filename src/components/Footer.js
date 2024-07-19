import React from "react";
import { BiCopyright } from "react-icons/bi";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className=" bg-slate-900 h-48 pt-2 flex justify-between text-white border-t-2 border-gray-100">
        <div className="flex flex-col">
          <div className="mx-12 my-2 text-2xl text-yellow-500 font-bold">
            About us{" "}
          </div>
          <p className="w-60 ml-12">
            Delicious meals delivered to your door. Order now! Eat well,
            effortlessly.
          </p>
          <div className="flex ml-8 mt-1">
            <button className="mx-1">
              <a href="  https://github.com/kowshik-n" target="_blank">
                <img
                  src="https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg"
                  alt=""
                  className="rounded-full w-14 hover:brightness-200"
                />
              </a>
            </button>
            <button className="hover:shadow-white rounded-full  ">
              <a
                href="https://www.linkedin.com/in/kowshik-n-4b126a1aa/ "
                target="_blank"
              >
                <img
                  src="https://pageloot.com/elements/pgqr-generator/v1_2_0/assets/images/logos/linkedin-circle.svg"
                  alt=""
                  className="h-9 w-10 bg-black -ml-1 rounded-3xl hover:brightness-200"
                />
              </a>
            </button>
          </div>
        </div>
        <div className="hidden lg:flex list-none mt-16">
          <Link
            className="px-5 hover:text-orange-500 h-10 pt-[6]
          "
            to="/"
          >
            <li>Home</li>
          </Link>
          <Link
            className="px-5 hover:text-orange-500 h-10 pt-[6]
          "
            to="/about"
          >
            <li>About us</li>
          </Link>

          <Link
            className="px-5 hover:text-orange-500 h-10 pt-[6]
          "
            to="/cart"
          >
            <li data-testid="cart">Cart</li>
          </Link>
          <Link
            className="px-5 hover:text-orange-500 h-10 pt-[6]
          "
            to="/Login"
          >
            <li data-testid="cart">Login</li>
          </Link>
        </div>
        <div className="hidden sm:block mt-11 mr-11">
          <div className="mb-3 font-bold">
            Subscribe to newsletter for deal updates
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="p-2 bg-zinc-800  border border-gray-500 "
          />
          <button
            className="bg-white text-black py-2 px-6 rounded-lg  ml-2 hover:bg-green-500"
            onClick={() => setEmail("")}
          >
            {" "}
            Submit
          </button>
        </div>
      </div>
      <div className="hidden md:flex bg-zinc-900 h-15  text-zinc-500 justify-center max-w-full"></div>
    </>
  );
};

export default Footer;
