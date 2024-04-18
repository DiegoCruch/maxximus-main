import React from "react";
import Credentials from "./Credentials";
import maps from "../../Assets/Img/Screenshot.png";
import RectanguleCard  from "../../Assets/Img/RectanguleCard.png";
import RectanguleCard2 from "../../Assets/Img/RectanguleCard2.png";
import RectanguleCard3 from "../../Assets/Img/RectanguleCard3.png";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapsKey}`;

const Map = (props) => {
    return (
        <div className="space-y-4 bg-[#002867] h-full flex flex-col mb-16">
            <div className="max-w-xl  md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 py-20 ">
            <h2 className="max-w-lg  font-sans text-3xl font-bold leading-none tracking-tight text-white text-center sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                    <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"></svg>
                    <span className="relative font-semibold text-4xl">Join the Family</span>
                </span>
            </h2>
            </div>
            <div className="flex flex-col md:flex-row  justify-center mx-auto w-full max-w-4lg  space-x-4 sm:space-y-8">
            <div class="flex flex-col flex-grow overflow-hidden bg-[#FFFFFF] rounded-4xl shadow-lg mt-8 mx-4 max-w-sm">
			<div class="flex flex-col items-center p-10 bg-[#0A182E]">
				<div class="flex items-center py-16">
                <img
                  className="h-68 w-68 absolute -ml-32 -mt-16"
                  src={RectanguleCard}
                  alt="Property"
                />
				</div>
			</div>
			<div class="p-10">
				<ul>
                <li class="flex items-center justify-center">
                    <span class="text-center text-[#0A182E] font-bold">Traditional Real Estate Company
                    <br/>80 / 20</span>
                </li>
					<li class="flex items-center justify-center">
                    <span class="text-center text-[#0A182E]">Sliding Commission Split
                    </span>
					</li>
					<li class="flex items-center justify-center mt-3">
                    <span class="text-center text-[#0A182E]">Focus on brand rather than  the 
                    <br/>professional
                    </span>
					</li>
                    <li class="flex items-center justify-center mt-3">
                    <span class="text-center text-[#0A182E]">Less support
                    </span>
					</li>
				</ul>
			</div>
		</div>	
        <div class="flex flex-col flex-grow overflow-hidden bg-[#FFFFFF] rounded-4xl shadow-lg mt-8 mx-4 max-w-sm">
			<div class="flex flex-col items-center p-10 bg-[#0A182E]">

				<div class="flex items-center py-16">
                <img
                  className="h-68 w-68 absolute -ml-32 -mt-16"
                  src={RectanguleCard2}
                  alt="Property"
                />
				</div>
			</div>
			<div class="p-10">
				<ul>
                <li class="flex items-center justify-center">
                    <span class="text-center text-[#0A182E] font-bold">Max Out 100% Program
                    <br/>100%</span>
                </li>
					<li class="flex items-center justify-center">
                    <span class="text-center text-[#0A182E]">Commission
                    </span>
					</li>
					<li class="flex items-center justify-center">
                    <span class="text-center text-[#0A182E]">Broker & Brand support
                    </span>
					</li>
                    <li class="flex items-center justify-center">
                    <span class="text-center text-[#0A182E] font-bold">FREE
                    </span>
					</li>
                    <li class="flex items-center justify-center">
                    <span class="text-center text-[#0A182E]">Business Tools
                    </span>
					</li>
                    <li class="flex items-center justify-center">
                    <span class="text-center text-[#0A182E]">Marketing Assets
                    </span>
					</li>
				</ul>
			</div>
		</div>
        <div class="flex flex-col flex-grow overflow-hidden bg-[#FFFFFF] rounded-4xl shadow-lg mt-8 mx-4 max-w-sm">
			<div class="flex flex-col items-center p-10 bg-[#0A182E]">
				<div class="flex items-center py-16">
                <img
                  className="h-68 w-68 absolute -ml-32  -mt-16"
                  src={RectanguleCard3}
                  alt="Property"
                />
				</div>
			</div>
			<div class="p-10">
				<ul>
                <li class="flex items-center justify-center">
                    <span class="text-center text-[#0A182E] font-bold">Non-Traditional Real 
                    <br/>State Company</span>
                </li>
					<li class="flex items-center justify-center">
                    <span class="text-center text-[#0A182E] font-bold mt-8">High Cap
                    </span>
					</li>
					<li class="flex items-center justify-center ">
                    <span class="text-center text-[#0A182E]">Monthly  Fee Structure
                    </span>
					</li>
                    <li class="flex items-center justify-center">
                    <span class="text-center text-[#0A182E] mt-2">Continual broker or royalty fee
                    </span>
					</li>
                    <li class="flex items-center justify-center">
                    <span class="text-center text-[#0A182E] mt-2">Limited support
                    </span>
					</li>
				</ul>
			</div>
		</div>
	</div>
        </div>
    );
}

export default Map;





