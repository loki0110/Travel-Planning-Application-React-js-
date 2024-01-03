import React from "react";

const Discover = () => {
  return (
    <div className="w-4/5 m-auto cursor-default">
      <h1 className="text-4xl font-bold text-center">Discover</h1>
      <div className="w-full m-auto flex flex-col md:flex-row space-y-10 md:space-x-10 justify-between items-center py-10">
        <div className="w-full space-y-5">
          <img
            className="w-full drop-shadow-2xl rounded-lg border-8 border-stones-700 cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/md.jpeg"
            alt=""
          />
          <div>
            <h2 className="text-2xl font-bold">Desired Locations</h2>
            <h1 className="text-2xl font-bold">Good Vibes</h1>
          </div>
          <p className="text-2xl">
          They're in their times, those who reveal error born this architect distinction is invented by just who escape pain that says freedom non greater, selected, and as? And the things of the mind, toilsome!
          </p>
          <p className="text-sm">
           
          </p>
        </div>
        <div className="w-full space-y-4 text-left">
          <h2 className="text-2xl font-bold">Exploration Brings Relief And Happiness</h2>
          <h1 className="font-bold text-2xl">Explore Until Death.</h1>
          <p className="text-sm">
            
          </p>
          <img
            className="drop-shadow-2xl border-8 border-stones-700 rounded-lg cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/ep.jpeg"
            alt=""
          />
        </div>
      </div>

      <div className="w-full h-[400px] my-10 relative">
        <img
          className="w-full h-full object-cover cursor-pointer"
          src="images/sydney.webp"
          alt=""
        />
        <div className="w-full h-full absolute top-0 flex justify-center items-center">
          <h1 className="text-4xl text-white font-bold px-5 py-2 border cursor-pointer hover:bg-white hover:text-gray-500 hover:duration-300">
            View Details
          </h1>
        </div>
      </div>

      <div className="my-20 flex justify-between items-center xl:h-[500px]">
        <div className="xl:w-[500px] w-1/3 lg:block hidden">
          <img
            className="w-full h-full object-cover cursor-pointer"
            src="images/mar1.jpg"
            alt=""
          />
        </div>
        <div className="xl:w-[500px] p-5 text-center space-y-5 sm:space-y-2">
          <h1 className="md:text-xl sm:text-xl">Explore Hapiness out of the Matrix</h1>
          <h2 className="md:text-4xl sm:text-base">
            We are Born To Explore.
          </h2>
          <p className="md:text-base xl:text-2xl">
          We need the tonic of wildness...At the same time that we are earnest to explore and learn all things, we require that all things be mysterious and unexplorable, that land and sea be indefinitely wild, unsurveyed and unfathomed by us because unfathomable. We can never have enough of nature.
          </p>
          <button className="mt-5 px-5 py-2 border border-black hover:bg-gray-400 hover:duration-300">
            Book Now
          </button>
        </div>
        <div className="xl:w-[500px] w-1/3 lg:block hidden">
          <img
            className="w-full h-full object-cover cursor-pointer"
            src="images/image-33.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
