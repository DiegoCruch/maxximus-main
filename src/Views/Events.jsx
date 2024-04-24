import React, { useEffect, useRef, useState } from "react";
import Header from "../Components/Reusable/Header";
import Personas from "../Assets/Img/personas.png";
import Footer from "../Components/Common/Fotter";
import Carousel2 from "../Components/Reusable/Courosel2";
import Header2 from "../Components/Reusable/Header2";
import LogIn from "../Components/Common/LogIn";
import CreateAccount from "../Components/Common/CreateAccount";
import Sliderheader from "../Components/Reusable/SliderHeader";
import ImageUtils from "../Controllers/ImageUtils";
import Eventos from "../Assets/Img/Titles/Events.png"

const Events = () => {
  return (
    <div className="bg-[#E6E6E6]">
      <Header
        img={"bg-[url(./Assets/Img/bg-events.png)]"}
        Titulo={Eventos}
        Subtitulo={"Grow Your Business With Maxximun"}
        Descripcion={
          "At Maxximum Realty, we understand that a great agent makes all the difference. Join us to leverage tailored strategies for the digital age, unlocking more leads, boosting sales, and earning higher commissions. Experience the future of real estate with Maxximum Realty—we're here to help you thrive."
        }
        Buton={false}
      />
      {/* Línea blanca en el eje x a la izquierda */}
      <Carousel2 />
      <Header2 />
      <Footer />
    </div>
  );
};
export default Events;
