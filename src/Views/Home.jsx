import React from "react";
import Header from "../Components/Reusable/Header";
import Section from "../Components/Reusable/Section";
import Fotter from "../Components/Common/Fotter";
import Mask from "../Assets/Img/SeccionLine.png";
import Layout from "../Components/Common/Layout";
import Footer from "../Components/Common/Fotter";
import Carousel from "../Components/Reusable/Carousel";
import Banner from "../Assets/Img/technology.png";
import SectionForm from "../Components/Reusable/SectionForm";
import Sliderheader from "../Components/Reusable/SliderHeader";
import SeccionHome from  "../Components/Reusable/SeccionHome"
import TituloOur from "../Assets/Img/Titles/OurHistoryT.png"
import Techno from "../Assets/Img/Titles/TechnologyT.png"
import BecomeT from "../Assets/Img/Titles/BecomeT.png"

const Home = () => {
  return (
    <div className="text-Maxximun-Blanco">
      <Sliderheader/>    
      <Section 
       Blanco={false}
       Titulo={TituloOur}
       Descripcion={"At Maxximum Realty, we're pioneers in the real estate industry, harnessing the power of AI and the latest technologies to revolutionize the agent experience"}
       img={Mask} 
       Buton={true}
       />  
       <Layout/>

       <Carousel />
       <SeccionHome 
        Blanco={true}
        Titulo={Techno}
        Descripcion={"Recent years have seen a pivotal shift for salespeople with the surge in online and social media interaction, driven by technology. Embracing this change is positive but demands acquiring new methods and skills. At Maxximum Realty, we excel in adapting to innovative tools and business approaches, ensuring effective execution for success, much like Real Estate Agents in their field."}
        img={Banner}
        Buton={true}
        />
      <SectionForm
        
        Titulo={BecomeT}
        SubTitulo={"Grow Your Business With Maxximun"}
        Descripcion={"At Maxximum Realty, we understand that a great agent makes all the difference. Join us to leverage tailored strategies for the digital age, unlocking more leads, boosting sales, and earning higher commissions. Experience the future of real estate with Maxximum Realty—we're here to help you thrive."}
      />
       <Fotter/>             
    </div>
  );
}
export default Home;