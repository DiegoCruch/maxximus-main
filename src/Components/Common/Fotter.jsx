import React from "react";
import maxximu from "../../Assets/Img/Logo/maxximuml.png";
import Phone from "../../Assets/Img/phone.png";
import mail from "../../Assets/Img/mail-01.png";
import marker from "../../Assets/Img/marker-pin-01.png";
import User from "../../Assets/Img/image-user.png";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full bg-[#0A182E] ">
      <footer className="w-full text-gray-700 bg-[#0A182E] body-font">
        <div className="container flex flex-col flex-wrap px-5 py-8 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex justify-center items-center mb-4 sm:mb-0 sm:ml-8">
          <img src={maxximu} alt="Maxximum Logo" className="h-20  sm:h-32 w-auto mx-auto" />
        </div>
        <div className="w-full px-4 lg:w-1/4 md:w-1/2 text-left flex flex-col flex-grow h-full justify-center items-center sm:mr-32">
          <div className="mr-4 md:mb-6">
            <div className="text-white sm:text-center">
              <div className="flex items-start mb-2">
                <img src={Phone} alt="Phone" className="h-6 w-auto mr-2" />
                <a href="tel:+17142722229" className="h-6 hover:underline">
                  +1(714) 272-2229
                </a>
              </div>
            </div>
            <div className="text-white flex items-start mb-2">
              <img src={mail} alt="Mail" className="h-6 w-auto mr-2" />
              <a href="mailto:max@maxximumrealty.com" className="h-6 hover:underline">
                max@maxximumrealty.com
              </a>
            </div>
            <div className="text-white flex items-start mb-2">
              <img src={User} alt="Mail" className="h-6 w-auto mr-2" />
              <a href="mailto:max@maxximumrealty.com" className="h-6 hover:underline">
                License ID: 01523101
              </a>
            </div>
            <div className="text-white flex items-start">
              <img src={marker} alt="Marker" className="h-6 w-auto mr-2" />
              <a href="mailto:max@maxximumrealty.com" className="h-6 hover:underline">
                23330 Mill Creek Dr Ste 250, Laguna Hills, California,
                <br />
                92653, USA
              </a>
            </div>
          </div>
        </div>



            <div className="w-full px-4 lg:w-1/4 md:w-1/2 mt-24 sm:-mr-16"> {/* Agregado margen superior */}
              <div className="flex justify-between mb-4">
                <a href="#" className="text-white hover:underline">
                  Terms of Services
                </a>
                <a href="#" className="text-white hover:underline">
                  Privacy Policy
                </a>
              </div>
              <p className="mt-4  text-white text-center">&copy; Copyright All Right Reserved.</p>
            </div>
          </div>
      </footer>
    </div>
  );
};

export default Footer;








