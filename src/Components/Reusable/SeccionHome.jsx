import React, { useEffect} from "react";
import styles from "../../Assets/Styles/ImageSeccion.module.css";
import Ball from "../../Assets/Img/ball.png";
import Ball2 from "../../Assets/Img/bolab.png";
import Ball3 from "../../Assets/Img/Ball2.png";

const SeccionHome = ({ Titulo, Blanco, Descripcion, Buton, img, sphere1, sphere2, sphere3, azul }) => {
  useEffect(() => {
    console.log(img);
  }, []);

  return (
    <section
      className={
        azul
          ? "flex flex-col items-start justify-center  bg-[#002867] bg-cover bg-center h-screen"
          :
        Blanco
          ? "flex flex-col items-start justify-center  bg-[#F2F2F3] bg-cover bg-center h-screen"
          : "flex flex-col items-start justify-center  bg-[#0A182E]  bg-cover bg-center h-screen"
      }
    >
      <div className="absolute inset-0  sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="max-w-screen-xl flex flex-col lg:flex-row lg:items-start">
      <div className=
      {Blanco ? 
      "max-w-3xl pl-0 md:pl-52 text-black sm:mx-auto sm:my-6" : 
      "max-w-3xl pl-0 md:pl-52 text-white sm:mx-auto sm:my-6"}>
        <img src={Titulo}  alt="Section Image"/>
        <p className={`mt-12 ${azul ? 'sm:text-2xl' : ''} sm:text-lg max-w-lg font-Poppins`}>{Descripcion}</p>
        {Buton && (
          <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
            <a href="our-history" className="underline">
              Learn More
            </a>
            <span className="">&gt;</span>
          </div>
        )}
      </div>


        <div className=" lg:mt-12 lg:ml-52 lg:absolute inset-x-0 right-0 mt-12 ">
          <img src={img} className={styles.imageShape} alt="Section Image" />
        </div>
      </div>
    </section> 
  );
};

export default SeccionHome;