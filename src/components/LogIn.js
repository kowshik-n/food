const LogIn = () => {
  return (
    <div className="bg-red-100 h-[700px] justify-center flex items-center">
      <img
        src="https://www.entrepreneurshipinabox.com/wp-content/uploads/online-food-ordering-system.jpg"
        alt=""
        className="w-[480px] h-[540px]"
      ></img>
      <div className="flex">
        <div className="w-[350] bg-white flex flex-col items-center">
          <h1 className="text-xl text-black mt-12 tracking-wide font-serif font-semibold">
            {" "}
            Welcome to Swiggy 2.0?{" "}
          </h1>
          <h2 className="mt-10 text-sm mr-48 font-semibold">Email Address</h2>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=""
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className=" w-[280] bg-white text-slate-600  border-b-2 pb-1 outline-none "
          />
          <h2 className="mt-4  text-sm mr-56 font-semibold">Password</h2>
          <input
            type="password"
            name=""
            id=""
            className=" w-[280] bg-white  border-b-2 pb-1 outline-none "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <h2 className="text-xs text-slate-500 ml-44 mt-2 font-bold hover:cursor-pointer hover:border-b-2 hover:text-slate-300">
            Forgot Password?
          </h2>
          <button
            className=" text-white font-semibold py-2 bg-red-400 px-12  rounded-2xl mt-10  hover:bg-red-300"
            onClick={() => {
              setEmail("");
              setPassword("");
            }}
          >
            {" "}
            Sign In
          </button>
          <div class="relative flex py-5 items-center w-[150] mr-1">
            <div class="flex-grow border-t border-gray-400"></div>
            <span class="flex-shrink mx-2 text-gray-400 mb-1">or</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="flex font-sans hover:bg-red-100 hover:cursor-pointer py-2 px-5 rounded-3xl">
            <h1 className="text-xs ml-2 mt-[2] text-black font-semibold">
              Sign in with google
            </h1>
          </div>
          <div className="text-xs font-semibold mt-3 ml-1">
            New here?{" "}
            <span className="border-b-2 hover:cursor-pointer hover:text-gray-800">
              Create Account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
