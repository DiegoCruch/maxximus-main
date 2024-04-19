import React from 'react';
import Ring from '../../Assets/Img/anillop.png';

const SectionOur = ({ BG, Titulo, Descripcion, SubTitulo, SubDescripcion }) => {
    return (
      <div
        className={
          BG
            ? "flex flex-col items-center justify-center relative bg-white bg-cover bg-center my-8 h-90"
            : `flex flex-col items-center justify-center relative bg-cover bg-center w-full my-8 h-screen md:h-[70vh]` // Added media query for height on medium screens
        }
      >
        <div className="container mx-auto px-6 py-16 mt-1">
          <div className="lg:flex justify-between items-start"> {/* Maintains items-start */}
            <div className="lg:w-6/12 lg:p-0 p-7 text-center mx-auto">
              <img src={Titulo} className="mx-auto my-auto sm:mt-12" alt="Section Image" />
  
              <br />
              <p className="text-xl">{Descripcion}</p> {/* Removed media query for margin */}
  
              <h1 className="text-4xl font-bold leading-tight mb-3 capitalize">{SubTitulo}</h1> {/* Removed media query for margin */}
  
              <br />
              <p className="text-xl">{SubDescripcion}</p> {/* Removed media query for margin */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default SectionOur;





