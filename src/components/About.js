import about from "../Items/img/about.jpg";
const About = () => {
  return (
    <div className="bg-gray-200  absolute t-1">
      <div className=" mx-3 my-6 h-[1000px] w-auto  rounded-xl bg-gray-200 shadow-slate-300 ">
        <div className=" relative top-5  p-6 m-auto w-[90%] border  rounded-2xl   shadow-2xl bg-teal-200 hover:shadow-purple-300  cursor-pointer transition ease-in-out delay-50 hover:scale-105 duration-100">
          <h1 className="font-bold text-3xl ">
            Hey there! Welcome to Swiggy 2.0 – the place where yummy food meets
            your doorstep!
          </h1>
        </div>

        {/* ----------2nd component-------- */}
        <div className="relative top-14 flex p-6 mx-16 w-[80%] border border-gray-300 rounded-2xl   shadow-2xl bg-red hover:shadow-amber-500  cursor-pointer transition ease-in-out delay-50 hover:scale-105 duration-100">
          <div className="pl-28 w-[80%]">
            <h2 className=" text-2xl m-8  font-bold w-[650px]  ">
              We really love food and we want to make it super easy for you to
              enjoy delicious meals without any hassle.
            </h2>
            <p className="text-[20px] m-4 pb-[30px]  w-[650px]">
              Our goal is simple: we want to make ordering food and getting it
              delivered to you as easy as pie! We work with lots of local
              restaurants to make sure you get the tastiest options delivered
              right to your door.
            </p>
          </div>
          <div className=" w-80">
            <img
              className="p-2 w-[440px] h-[300px]  rounded-2xl "
              src={about}
              alt="food-imahe"
            />
          </div>
        </div>
        {/* 3------------------rd */}
        <div className=" relative top-20  p-6 ml-52 w-[80%] border  rounded-2xl   shadow-2xl bg-red-100 shadow-red-2xl  hover:shadow-red-500  cursor-pointer transition ease-in-out delay-50 hover:scale-105 duration-100">
          <h2 className="font-bold text-[20px]">
            What makes us special is that we care about you and our community.
            We believe in supporting local businesses and making sure you have a
            great experience every time you use our app.
          </h2>
        </div>
        <h2 className=" relative top-48 pt-8 ml-52 h-[90px]  w-[80%] border  rounded-2xl   shadow-2xl font-bold m-6 pl-10 bg-yellow-200 cursor-pointer hover:text-white hover:bg-red-300">
          Join us and let's make enjoying food together super simple and fun!
        </h2>
      </div>
    </div>
  );
};
export default About;
