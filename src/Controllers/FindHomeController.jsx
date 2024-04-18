import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { TbBrandWindows } from "react-icons/tb";
import ImageCard from "../Assets/Img/image15.png";
import LikeBotton from "../Assets/Img/likebotton.png"

const FindHomeController = ({ arrayCard }) => {
  return (
    <div className=" mx-auto bg-[#002867] flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-center text-white py-8 mx-1 lg:mt-12">
        Explore Our Communities
      </h2>
      <div className="flex flex-col lg:flex-row items-start justify-center  sm:mx-auto w-full">
        {/* Cards a la izquierda */}
        <div className="max-w-8xl lg:w-1/2 xl:w-1/7 flex flex-col items-center justify-center mx-auto lg:mx-8 lg:mb-52">
        {arrayCard.map((item, index) => (
          <div key={index} className="rounded overflow-hidden shadow-lg bg-white mt-10 border-8 border-white grid grid-cols-1 lg:grid-cols-2 " style={{ borderRadius: "5px" }}>
          {/* Image */}
          <img
            className="col-span-1 lg:col-span-1 w-full h-92 "
            src={ImageCard}
            alt="Property"
          />
          {/* Content */}
          <div className="col-span-1 lg:col-span-1 px-6 py-4 flex flex-col ">
            <div className=" text-3xl font-semibold mb-2 text-black flex lg:flex items-center">
              Shady Canyon
              <img
                className="ml-auto mb-1 cursor-pointer"
                src={LikeBotton}
                alt="Property"
              />
            </div>
            <p className="text-[#808080] text-base font-Poppins mt-2 lg:mt-0 lg:ml-0">
              ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            {/* Details */}
            <div className="py-7 mt-8 lg:px-4">  
            <div className="grid grid-cols-2 gap-x-4 lg:grid-cols-3 gap-y-4">  
            <div className="items-center flex flex-col">
                <p className="font-Poppins text-xs text-[#808080] ">Average Value</p>
                <p className="text-xs mr-0 sm:mr-12 font-black">$7.5M</p>
              </div>
              <div className="items-center flex flex-col">
                <p className="font-Poppins mr-0 sm:mr-10 text-xs text-[#808080]">List Price</p>
                <p className="text-xs font-black">$6.1 M - 24.5M</p>
              </div>
              <div className="items-center flex flex-col">
                <p className="font-Poppins text-xs  text-[#808080]">Home for Sale</p>
                <p className="text-xs mr-0 sm:mr-6 font-black">8 Listings</p>
              </div>
            </div>
          </div>
          </div>
        </div>

          ))}
        </div>
        {/* Mapa a la derecha */}
        <div className=" w-full lg:w-1/2 xl:w-2/1  px-8 py-4 mx-auto flex lg:justify-end" >
          <div className="relative w-full h-[400px] lg:h-[1700px] " >
            <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" style={{ borderRadius: "5px" }}></iframe>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FindHomeController;







