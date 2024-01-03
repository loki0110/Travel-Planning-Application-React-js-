import React from "react";
import { AiFillStar } from "react-icons/ai";

const Places = () => {
  return (
    <div className="w-4/5 m-auto cursor-default">
      <div className="w-full xl:w-1/2 m-auto text-center my-10 space-y-5">
        <h1 className="text-4xl font-bold">Places not to be missed</h1>
        <p className="text-2xl font-bold">
          Exploring is the Basic Need For A Human to Discover Different Places And Explore Different Cultures in Different States and Meet Different People
        </p>
      </div>

      <div className="inline md:grid grid-rows-3 lg:grid-rows-2 grid-flow-col gap-4 w-full lg:h-[450px] pb-10 border-b space-y-6 md:space-y-0">
        <div className="row-span-1 col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/image-2.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/ac.jpeg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/desert.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-2 lg:col-span-1 md:col-span-2 md:row-span-1">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/city.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/image.jpg"
            alt=""
          />
        </div>
        <div className="lg:row-span-1 lg:col-span-1 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md cursor-pointer opacity-80 hover:opacity-100 duration-200"
            src="images/doha.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="my-10 text-center">
        <h1 className="text-4xl font-bold">Our Recomendation</h1>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-10 my-10 justify-items-center items-center pb-10 border-b">
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/bk.jpeg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-xl text-red-400">Place to Visit in Dubai</p>
                <p className="text-xl font-bold">$370</p>
              </div>
              <p className="text-xl font-semibold">
              Beyond the clouds, the world's tallest tower inspires guests to dream bigger and reach higher.
              The Majestic Burj Khalifa can provide any induvidual a Thrilling Experience about Heights
              </p>
              <div className="flex justify-between items-center">
                <h2>6 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/goc.jpeg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">The Great Wall Of China</p>
                <p className="text-xl font-bold">$1000</p>
              </div>
              <p className="text-xl font-semibold">
               The Great Wall Of China Can Provide a Unforgettable Experience About the Silence and The Views Any Induvidual gets from THe GWC. 
              </p>
              <div className="flex justify-between items-center">
                <h2>16 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.9</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/ig.jpeg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">The India Gate</p>
                <p className="text-xl font-bold">$240</p>
              </div>
              <p className="text-xl font-semibold">
                A Must Visit Spot in India to Take some Gorgeous Pics and Enjoy A MindBlowing Scenery.
              </p>
              <div className="flex justify-between items-center">
                <h2>5 day tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.7</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/ac.jpeg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">The Ajanta Caves</p>
                <p className="text-xl font-bold">$350</p>
              </div>
              <p className="text-xl font-semibold">
                A Historical Monument Which was Constructed A Long Time Ago and A Must Visit Place for All Tourists.
              </p>
              <div className="flex justify-between items-center">
                <h2>7 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.6</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/machupichu.jpeg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">The Machu Pichu Peak</p>
                <p className="text-xl font-bold">$600</p>
              </div>
              <p className="text-xl font-semibold">
                The Machu Pichu Peak Offers The Tourists A Great Scenic View Of The Mountains Surronded By The Greenish Valleys Around it. A Highly Recommended Place to Visit. 
              </p>
              <div className="flex justify-between items-center">
                <h2>9 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>5.0</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/vm.jpeg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">The Victoria Mahal</p>
                <p className="text-xl font-bold">$400</p>
              </div>
              <p className="text-xl font-semibold">
                The Victoria Mahal is a Typical Place to visit to Experience Some Peace and Silence.
              </p>
              <div className="flex justify-between items-center">
                <h2>6 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.5</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/qm.jpeg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">The Qutub Minar</p>
                <p className="text-xl font-bold">$600</p>
              </div>
              <p className="text-xl font-semibold">
              Qutub Minar is a minaret and “victory tower” that forms part of the Qutb complex, a UNESCO World Heritage Site in the Mehrauli area of South Delhi, India. It is one of the most visited tourist spots in the city, and also the venue of the annual Qutub Festival, where artists, musicians and dancers perform over three days
              </p>
              <div className="flex justify-between items-center">
                <h2>10 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.9</span>
                </p>
              </div>
            </div>
          </div>
          <div className="drop-shadow-2xl text-left rounded space-y-2 bg-white cursor-pointer opacity-80 hover:opacity-100 duration-200">
            <img
              className="w-full h-1/2 object-cover rounded-t-lg"
              src="images/tm.jpeg"
              alt=""
            />
            <div className="p-4 space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-red-400">The Mighty Taj Mahal</p>
                <p className="font-bold">$300</p>
              </div>
              <p className="text-xl font-semibold">
                It is One Of The Most Exciting Monuments In The World. It Was Built By ShahJhan For his Wife Mumtaj For the Love.Its Marbles are Some of the Craziest in The World.Highly Recommended For Couples.
              </p>
              <div className="flex justify-between items-center">
                <h2>11 days tour</h2>
                <p className="flex items-center space-x-2 text-orange-400">
                  <AiFillStar />
                  <span>4.9</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Places;
