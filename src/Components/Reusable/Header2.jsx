import React from "react";
import Ring2 from "../../Assets/Img/Ring2.png";
import Ball from "../../Assets/Img/bolac.png";

const Header2 = () => {
    return (
        <section className="bg-[#E6E6E6] py-12 h-[75svh]">
                <img
                  className="absolute z-10 left-0 -ml-44 -mt-32  invisible md:visible "
                  src={Ring2}
                  alt="Property"
                />
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 lg:mt-52">ATTEND ANY OF OUR TRAINING CLASSES, 
          <br />
            WORKSHOPS, AND EVENTS!</h2>
            <button
            className="bg-[#0A182E] rounded-4xl text-white font-bold py-2 px-4 rounded-full"
            >
            VIEW OUR CALENDER
            </button>

        </div>
        <img
                  className="absolute z-10 right-0  -mt-16 invisible md:visible "
                  src={Ball}
                  alt="Property"
                />
      </section>
    );
}
export default Header2;