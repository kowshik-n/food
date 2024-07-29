import about from "../Items/img/about.jpg";

const About = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="max-w-6xl mx-auto p-8 bg-white rounded-xl shadow-lg">
        <div className="bg-teal-200 p-6 rounded-2xl shadow-xl hover:shadow-purple-300 transition transform hover:scale-105 duration-300 mb-8">
          <h1 className="font-bold text-3xl text-center">
            Hey there! Welcome to Swiggy 2.0 – the place where yummy food meets
            your doorstep!
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-2xl shadow-xl hover:shadow-amber-500 transition transform hover:scale-105 duration-300 mb-8">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">
              We really love food and we want to make it super easy for you to
              enjoy delicious meals without any hassle.
            </h2>
            <p className="text-lg">
              Our goal is simple: we want to make ordering food and getting it
              delivered to you as easy as pie! We work with lots of local
              restaurants to make sure you get the tastiest options delivered
              right to your door.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              className="w-full h-auto rounded-2xl"
              src={about}
              alt="food-image"
            />
          </div>
        </div>

        <div className="bg-red-100 p-6 rounded-2xl shadow-xl hover:shadow-red-500 transition transform hover:scale-105 duration-300">
          <h2 className="font-bold text-2xl text-center">
            What makes us special is that we care about you and our community.
            We believe in supporting local businesses and making sure you have a
            great experience every time you use our app.
          </h2>
        </div>
      </div>
    </div>
  );
};
export default About;
