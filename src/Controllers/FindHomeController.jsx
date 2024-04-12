import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { TbBrandWindows } from "react-icons/tb";
import ImageCard from "../Assets/Img/image15.png";
import LikeBotton from "../Assets/Img/likebotton.png"

const FindHomeController = ({ arrayCard }) => {
  return (
    <div className=" mx-auto bg-[#002867] flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-center text-white py-20 mx-1">
        Explore Our Communities
      </h2>
      <div className="flex flex-col lg:flex-row items-start justify-center py-20 sm:mx-auto w-full">
        {/* Cards a la izquierda */}
        <div className="max-w-8xl lg:w-1/2 xl:w-1/7 flex flex-col items-center justify-center lg:mx-0 mx-3">
        {arrayCard.map((item, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg bg-white mt-10 border border-white grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Image */}
              <img
                className="col-span-1 lg:col-span-1 w-full"
                src={ImageCard}
                alt="Property"
              />
              {/* Content */}
              <div className="col-span-1 lg:col-span-2 px-6 py-4 flex flex-col">
                <div className="font-bold text-xl mb-2 text-black flex lg:flex items-center">
                  Shady Canyon
                  <img
                    className="ml-auto mb-1 cursor-pointer"
                    src={LikeBotton}
                    alt="Property"
                  />
                </div>
                <p className="text-gray-700 text-base mt-2 lg:mt-0 lg:ml-0">
                  ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                {/* Details */}
                <div className="py-7 mt-12 lg:px-4">
                  <div className="grid grid-cols-3 gap-x-4">
                    <div className="text-black items-center flex flex-col">
                      <p className="text-xs">Average Value</p>
                      <p className="text-xs font-black">$7.5M</p>
                    </div>
                    <div className="text-black items-center flex flex-col">
                      <p className="text-xs">Price Range</p>
                      <p className="text-xs font-black">$6.1 M - 24.5M</p>
                    </div>
                    <div className="text-black items-center flex flex-col">
                      <p className="text-xs">Price Range</p>
                      <p className="text-xs font-black">$6.1 M - 24.5M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Mapa a la derecha */}
        <div className=" w-full lg:w-1/2 xl:w-2/1  px-8 py-4 mx-auto">
          <div className="relative w-full h-[400px] lg:h-[1300px]">
            <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FindHomeController;







