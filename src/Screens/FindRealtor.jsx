import React from "react";
import SectionForm from "../Components/Common/SectionForm";
import Cards from "../Components/Cards";
import Footer from "../Components/Common/Fotter";
import Map from "../Components/Map";
import SectionForm2 from "../Components/Common/SectionForm2";

const FindRealtor = () => {
  return (
    <>
      <SectionForm2
      Titulo={"Become the modern agent with us"}
      SubTitulo={"Grow Your Business With Maxximun"}
      Descripcion={"At Maxximum Realty, we understand that a great agent makes all the difference. Join us to leverage tailored strategies for the digital age, unlocking more leads, boosting sales, and earning higher commissions. Experience the future of real estate with Maxximum Realty—we're here to help you thrive."}
      />
      <Map/>
      <Cards />
      <Footer />
    </>
  );
};
export default FindRealtor;
