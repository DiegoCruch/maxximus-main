import React from "react";

const Layout = () => {
  return (
    <div className="justify-center border-b-2 border-y-white pt-0 pb-0 bg-[#002867] text-white">
<div className="p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-center items-center">
  {/* Texto 1 */}
  <div className="mb-4 sm:mb-0">
    {/* Ajustamos el tamaño del texto para pantallas pequeñas */}
    <h2 className="text-3xl sm:text-3xl font-semibold italic text-center sm:text-left">
      Our most lucrative 100% commission plan
    </h2>
  </div>

  {/* Texto 2 */}
  <div className="mt-1 flex flex-wrap gap-4 ml-52 justify-end">
    {/* Ajustamos el tamaño del texto para pantallas pequeñas */}
    <a href="#" className="underline text-base sm:text-base">
      Learn More
    </a>
    <span> &gt;</span>
  </div>
</div>



    </div>
  );
};

export default Layout;






