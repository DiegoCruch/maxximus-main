import React, { useState, useEffect } from 'react';
import Header1 from '../../Assets/Img/Carousel/slider1.png';
import Header2 from '../../Assets/Img/Carousel/slider2.png';
import Header3 from '../../Assets/Img/Carousel/slider3.png';
import item from "../../Assets/Img/item.png"

const Sliderheader = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [Header1, Header2, Header3];
  
    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };
  
    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };
  
    useEffect(() => {
        const intervalId = setInterval(() => {
            goToNextSlide();
        }, 5000);
      
        return () => clearInterval(intervalId); // Cleanup function
    }, []);

    return (
        <div className="sm:h-auto " style={{ position: 'relative'}}>
            {images.map((image, index) => (
                <div key={index} className={`ease-linear ${index === currentSlide ? '' : 'hidden'}`} data-carousel-item={index === currentSlide ? 'active' : ''}>
                    <div className="relative w-full">
                        <img src={image} className="object-cover w-full h-full" alt={`Slide ${index + 1}`} />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5"></div>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center lg:items-center lg:text-center lg:w-full sm:mx-auto">
                        <div className="text-white">
                            <h1 className="text-2xl lg:text-5xl sm:text-sm font-extrabold overflow-hidden py-12">
                                Become the Modern Agent
                            </h1>
                        </div>
                        
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center">
                    <img
                        className="absolute z-10 bottom-0 mr-auto ml-auto md:ml-0 md:mr-0 invisible md:visible"
                        src={item}
                        alt="Property"
                    />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sliderheader;














