import React, { useEffect } from "react";

const Header = ({ img, Titulo, Subtitulo, Descripcion, Buton }) => {
  useEffect(() => {
    console.log(img);
  }, []);

  const sectionImage = `relative bg-cover bg-center bg-no-repeat ${img}`;
  return (
    <section className={sectionImage}>
      <div className="absolute inset-0 bg-black opacity-35"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="text-white max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <img src={Titulo} className="" alt="Section Image"/> 
          <h1 className="text-lg text-left sm:text-xl md:text-2xl font-bold">
            {Subtitulo}
          </h1>
          <br />
          <strong className="block font-extrabold text-white text-left"></strong>
          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-left">
            {Descripcion}
          </p>
          {Buton ?? (
            <div className="mt-8 flex flex-wrap gap-4 lg:items-center text-center">
              <a
                href="#"
                className="block rounded-full bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-gray-200 focus:outline-none focus:bg-gray-200 sm:w-auto"
                style={{ borderRadius: "999px" }}
              >
                Learn More
              </a>
            </div>
            
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
