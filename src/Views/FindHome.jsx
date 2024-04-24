import React from "react";
import Footer from "../Components/Common/Fotter";
import FindHomeController from "../Controllers/FindHomeController";
import Ring from "../Assets/Img/anillop.png";
import item from "../Assets/Img/item.png";
import Styles from "../Assets/Styles/SeccionHeader.module.css"
import range from "../Assets/Img/Icon.png";
import home from "../Assets/Img/Vector.png"
import addres from "../Assets/Img/Icon2.png"






const FindHome = () => {
  const arrayCard = [1, 2, 3, 4];

  return (
    <>
      <div className=" relative  ">
      <section className="bg-[url(./Assets/Img/banner-9.png)] h-screen bg-cover  flex flex-col items-center justify-center bg-black ">
    <div className="absolute bg-black opacity-5 top-0 left-0 w-full h-full "></div>  
    <div className="text-center  mb-32">
      <h1 className="text-white font-Poppins text-5xl">Find a Home</h1>
    </div>
          <div className="w-full text-white relative ">
            <form className="flex flex-col sm:flex-row items-center justify-center ">
              <div className="bg-[#14253E] opacity-65 rounded-md flex items-center outline-none select select-bordered md:w-52 lg:w-60 w-[86vh] max-w-sm pl-4 py-4 sm:py-9 rounded-md text-center focus:outline-none mb-4 sm:mb-0 sm:rounded-s-4xl border-r-2 lg::border-white pr-4">
                <img src={home} className="text-white ml-12 w-4 h-4" />
                <select className="outline-none select select-bordered w-5/6 max-w-sm rounded-md text-center focus:outline-none bg-transparent opacity-65">
                  <option disabled selected>
                    Type of house
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div className="bg-[#14253E] opacity-65 rounded-md flex items-center outline-none select select-bordered lg:w-60 md:w-44 w-[86vh] max-w-sm pl-4 py-4 sm:py-9 rounded-md text-center focus:outline-none mb-4 sm:mb-0  border-r-2 sm:border-white pr-4">
                <img src={range} className="text-white ml-12 w-4 h-4" />
                <select className="outline-none select select-bordered w-5/6 max-w-sm rounded-md text-center focus:outline-none bg-transparent opacity-65">
                  <option disabled selected>
                    Range
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>

              <div class="relative w-full max-w-xs lg:max-w-lg flex items-center">
                <div className="relative w-full max-w-lg flex items-center bg-[#14253E] opacity-65  pl-4 py-4 sm:py-9 lg:rounded-r-4xl focus:outline-none">
                <img src={addres} className="text-gray-400 ml-8 w-4 h-4 mr-4" /> 
                <input type="search" name="search" placeholder="City, Neighborhood, ZIP, Address" class="bg-[#14253E] w-full focus:outline-none"/>
                </div>
                <button type="submit" class="absolute font-Poppins text-md lg:right-0 ml-44 top-0 px-16 py-4 sm:py-9  rounded-4xl bg-[#0A182E] text-white hidden sm:block" >
                  Search
                </button>
                <button type="submit" class="absolute font-Poppins text-md top-0 px-16 py-4 sm:py-9 mt-16 ml-20 rounded-4xl bg-[#0A182E] text-white sm:inline md:hidden lg:hidden">
  Search
</button>

              </div>
            </form>
          </div>
          <img
              className="absolute z-10 bottom-0 lg:h-[30vh] lg:w-[110vh] left-1/2 transform -translate-x-1/2 invisible md:visible"
              src={item}
              alt="Property"
            />
          
        </section>
      </div>
      <FindHomeController arrayCard={arrayCard} />


      <Footer />
    </>
  );
};
export default FindHome;
