import React from 'react';
import Cards1 from "../../Assets/Img/Desiree1.png";
import Cards2 from "../../Assets/Img/max1.png";
import AgentCard from "../../Assets/Img/AgentCard.png";
import AgentCard2 from "../../Assets/Img/AgentCard2.png";
import AgentCard3 from "../../Assets/Img/AgentCrad3.png";
import AgentCard1 from "../../Assets/Img/AgentCard1.png";
import AgentCard4 from "../../Assets/Img/AgentCard4.png";
import AgentCard5 from "../../Assets/Img/AgentCard5.png";

const Cards = () => { 
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-[#002867]">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white text-center sm:text-4xl md:mx-auto">
    <span className="relative inline-block">
        <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"></svg>
        <span className="relative">Expert Team</span>
    </span>
</h2>

            </div>
            <div className="grid grid-cols-1  sm:grid-cols-3 gap-8 p-2 0">
            <div className=" bg-white overflow-hidden relative rounded-lg ml-" style={{ borderRadius: "5px" }}>
                    <div className="flex items-center">
                        <div className="w-36 sm:w-52 flex items-center justify-center">
                            <img src={Cards2} className="h-full w-full object-cover mr-8 " style={{ borderRadius: "5px" }} alt="Imagen de perfil" />
                        </div>
                        <div className="w-2/3 sm:w-3/4 p-2 mt-8">
                            <p className="text-base mb-1">+1(714) 272-2229</p>
                            <p className="text-base mb-1">max@maxximumrealty.com</p>
                            <p className="text-base mb-1">License ID: 01523101</p>

                        </div>
                    </div>
                    <div className="absolute top-5 left-48 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="text-center bg-[#0A182E] text-white px-1 py-0"style={{ borderRadius: "5px" }} >Max Sandoval-Broker</p>
                    </div>
                </div>

                <div className=" bg-white overflow-hidden relative rounded-lg " style={{ borderRadius: "5px" }}>
                    <div className="flex items-center">
                        <div className="w-36 sm:w-52 flex items-center justify-center">
                            <img src={AgentCard5} className="h-full w-full object-cover mr-8 " style={{ borderRadius: "5px" }} alt="Imagen de perfil" />
                        </div>
                        <div className="w-2/3 sm:w-3/4 p-2 mt-8">
                            <p className="text-base mb-1">+1(760) 529-6511</p>
                            <p className="text-base mb-1">mikalamons@gmail.com</p>
                            <p className="text-base mb-1">License ID: 02078194</p>

                        </div>
                    </div>
                    <div className="absolute top-5 left-48 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="text-center bg-[#0A182E] text-white px-1 py-0"style={{ borderRadius: "5px" }} >Mika Lamons - Agent</p>
                    </div>
                </div>
                <div className=" bg-white overflow-hidden relative rounded-lg " style={{ borderRadius: "5px" }}>
                    <div className="flex items-center">
                        <div className="w-36 sm:w-52 flex items-center justify-center">
                            <img src={AgentCard1} className="h-full w-full object-cover mr-8 " style={{ borderRadius: "5px" }} alt="Imagen de perfil" />
                        </div>
                        <div className="w-2/3 sm:w-3/4 p-2 mt-8">
                            <p className="text-base mb-1">+1(619) 977-5076</p>
                            <p className="text-base mb-1">hillarymbrown86@gmail.com</p>
                            <p className="text-base mb-1">License ID: 02151669</p>

                        </div>
                    </div>
                    <div className="absolute top-5 left-48 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="text-center bg-[#0A182E] text-white px-1 py-0"style={{ borderRadius: "5px" }} >Hillary Brown - Agent</p>
                    </div>
                </div>
                <div className=" bg-white overflow-hidden relative rounded-lg " style={{ borderRadius: "5px" }}>
                    <div className="flex items-center">
                        <div className="w-36 sm:w-52 flex items-center justify-center">
                            <img src={Cards1} className="h-full w-full object-cover mr-8 " style={{ borderRadius: "5px" }} alt="Imagen de perfil" />
                        </div>
                        <div className="w-2/3 sm:w-3/4 p-2 mt-8">
                            <p className="text-base mb-1">+1(951) 609-5534</p>
                            <p className="text-base mb-1">desiree.sukhov@gmail.com</p>
                            <p className="text-base mb-1">License ID: 02195580
                            </p>

                        </div>
                    </div>
                    <div className="absolute top-5 left-48 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="text-center bg-[#0A182E] text-white px-1 py-0"style={{ borderRadius: "5px" }} >Desiree Sukhov - Agent</p>
                    </div>
                </div>
                <div className="bg-white overflow-hidden relative rounded-lg" style={{ borderRadius: "5px" }}>
                <div className="flex items-center h-full justify-end"> {/* Added h-full for vertical expansion */}
                <div className="relative h-full w-48 sm:w-64"> {/* Relative container for image */}
                <img src={AgentCard4} className="h-full object-cover" style={{ top: 0, borderRadius: "5px" }} alt="Imagen de perfil" /> {/* Adjusted image for height */}
                </div>
                    <div className="flex flex-col justify-start p-4 mt-8 pl-4">
                    <p className="text-base mb-1">+1(951) 467-8144</p>
                    <p className="text-4xs mb-1">courtneyclarkhomes@gmail.com</p>
                    <p className="text-base mb-1">License ID: 01523101</p>
                    </div>
                </div>
                    <div className="absolute top-5 left-48 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="text-center bg-[#0A182E] text-white w-52 px-1 py-0"style={{ borderRadius: "5px" }} >CourtneyLee Clark - Agent</p>
                    </div>
                </div>
                <div className=" bg-white overflow-hidden relative rounded-lg " style={{ borderRadius: "5px" }}>
                    <div className="flex items-center">
                        <div className="w-36 sm:w-52 flex items-center justify-center">
                            <img src={AgentCard2} className="h-full w-full object-cover mr-8 " style={{ borderRadius: "5px" }} alt="Imagen de perfil" />
                        </div>
                        <div className="w-2/3 sm:w-3/4 p-2 mt-8">
                            <p className="text-base mb-1">+1(310) 800-1326</p>
                            <p className="text-base mb-1">smontalvo562@gmail.com</p>
                            <p className="text-base mb-1">License ID: 02127783</p>

                        </div>
                    </div>
                    <div className="absolute top-5 left-48 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="text-center bg-[#0A182E] text-white w-52 px-1 py-0"style={{ borderRadius: "5px" }} >Salvador Montalvo - Agent</p>
                    </div>
                </div>
                <div className=" bg-white overflow-hidden relative rounded-lg " style={{ borderRadius: "5px" }}>
                    <div className="flex items-center">
                        <div className="w-36 sm:w-52 flex items-center justify-center">
                            <img src={AgentCard} className="h-full w-full object-cover mr-8 " style={{ borderRadius: "5px" }} alt="Imagen de perfil" />
                        </div>
                        <div className="w-2/3 sm:w-3/4 p-2 mt-8">
                            <p className="text-base mb-1">+1(310) 910-5572</p>
                            <p className="text-base mb-1">ferndoesdeals@gmail.com</p>
                            <p className="text-base mb-1">License ID: 02125942</p>

                        </div>
                    </div>
                    <div className="absolute top-5 left-52 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="text-center bg-[#0A182E] text-white w-64 px-1 py-0"style={{ borderRadius: "5px" }} >Fernando Hernández - Agent</p>
                    </div>
                </div>
                <div className=" bg-white overflow-hidden relative rounded-lg " style={{ borderRadius: "5px" }}>
                    <div className="flex items-center">
                        <div className="w-36 sm:w-52 flex items-center justify-center">
                            <img src={AgentCard3} className="h-full w-full object-cover mr-8 " style={{ borderRadius: "5px" }} alt="Imagen de perfil" />
                        </div>
                        <div className="w-2/3 sm:w-3/4 p-2 mt-8 ">
                            <p className="text-base mb-1">+1(714)904-0526</p>
                            <p className="text-base mb-1">pattybeltran0226@gmail.com</p>
                            <p className="text-base mb-1">License ID: 01431971</p>

                        </div>
                    </div>
                    <div className="absolute top-5 left-48 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="text-center bg-[#0A182E] text-white px-1 py-0"style={{ borderRadius: "5px" }} >Patricia Beltrán - Agent</p>
                    </div>
                </div>
                <div className=" bg-white overflow-hidden relative rounded-lg " style={{ borderRadius: "5px" }}>
                    <div className="flex items-center">
                        <div className="w-36 sm:w-52 flex items-center justify-center">
                            <img src={AgentCard1} className="h-full w-full object-cover mr-8 " style={{ borderRadius: "5px" }} alt="Imagen de perfil" />
                        </div>
                        <div className="w-2/3 sm:w-3/4 p-2 mt-8 mr-5">
                            <p className="text-base mb-1">+1(310) 800-1326</p>
                            <p className="text-base mb-1">smontalvo562@gmail.com</p>
                            <p className="text-base mb-1">License ID: 02127783</p>

                        </div>
                    </div>
                    <div className="absolute top-5 left-48 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="text-center bg-[#0A182E] text-white w-52 px-1 py-0"style={{ borderRadius: "5px" }} >Salvador Montalvo - Agent</p>
                    </div>
                </div>
            </div>
        </div>
    );
}   

export default Cards;
