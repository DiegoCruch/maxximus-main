import React from "react";
import Footer from "../Components/Common/Fotter";
import Home from "../Assets/Img/Vector.png";
import FindHomeController from "../Controllers/FindHomeController";
import Ring from "../Assets/Img/anillop.png";
import { RiHome2Line } from 'react-icons/ri';
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { AiOutlineSearch } from 'react-icons/ai';
import { RiSendPlaneLine } from "react-icons/ri";
import item from "../Assets/Img/item.png";
import Styles from "../Assets/Styles/SeccionHeader.module.css"






const FindHome = () => {
  const arrayCard = [1, 2, 3, 4];

  return (
    <>
      <div className=" relative">
        <section className="bg-[url(./Assets/Img/HeaderFindHome.png)]  h-screen bg-cover  flex flex-col items-center justify-center opacity-40 ">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl font-bold">Find a Home</h1>

          </div>
          <div className="w-full text-white relative">
            <form className="flex flex-col sm:flex-row items-center justify-center">
              <div className="bg-[#14253E] opacity-65 rounded-md flex items-center outline-none select select-bordered w-5/6 max-w-sm pl-4 py-4 sm:py-8 rounded-md text-center focus:outline-none mb-4 sm:mb-0 sm:rounded-s-4xl border-r-2 sm:border-white">
                <RiHome2Line className="text-gray-400 ml-12 w-32 h-8" />
                <select className="outline-none select select-bordered w-5/6 max-w-sm  rounded-md text-center focus:outline-none bg-transparent opacity-65">
                  <option disabled selected>
                    Type of house
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div className="bg-[#14253E] opacity-65 rounded-md flex items-center outline-none select select-bordered w-5/6 max-w-sm pl-4 py-4 sm:py-8 rounded-md text-center focus:outline-none mb-4 sm:mb-0 border-r-2 sm:border-white">
                <RiMoneyDollarBoxLine className="text-gray-400 ml-12 w-32 h-8" />
                <select className="outline-none select select-bordered w-5/6 max-w-sm  rounded-md text-center focus:outline-none bg-transparent opacity-65">
                  <option disabled selected>
                    Type of house
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>

              <div className="bg-[#14253E] opacity-65 rounded-md flex items-center outline-none select select-bordered w-5/6 max-w-sm pl-4 py-4 sm:py-8  sm:rounded-r-4xl text-center focus:outline-none mb-4 sm:mb-0">
                <RiSendPlaneLine className="text-gray-400 w-32 h-8" />
                <input type="search" name="search" placeholder="City, Neighborhood, ZIP, Address" className="bg-[#14253E] opacity-65 w-5/6 sm:w-full sm:rounded-r-4xl focus:outline-none mb-4 sm:mb-0 rounded-full mt-4 sm:mt-0" />
              </div>
              <button type="submit" className="w-5/6 sm:w-auto px-16 py-4 sm:py-8 rounded-l-none sm:rounded-l-4xl rounded-4xl sm:rounded-4xl bg-[#0A182E] text-white">
                Search
              </button>
            </form>
          </div>
          ]
        </section>
        <img
          className="absolute  z-10 right-0  -mt-44 invisible md:visible "
          src={Ring}
          alt="Property"
        />
      </div>
      <FindHomeController arrayCard={arrayCard} />


      <Footer />
    </>
  );
};
export default FindHome;
