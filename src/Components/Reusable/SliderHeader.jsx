import React, { useState, useEffect } from 'react';
import Header1 from '../../Assets/Img/read.png';
import Header2 from '../../Assets/Img/lady.png';
import Header3 from '../../Assets/Img/woman.png';
import item from "../../Assets/Img/item.png";
import styles from "../../Assets/Styles/SliderHeader.module.css";

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
        <div className={styles.slidercontainer} style={{ position: 'relative'}}>
            {images.map((image, index) => (
                <div key={index} className={`ease-linear ${index === currentSlide ? '' : 'hidden'}`} data-carousel-item={index === currentSlide ? 'active' : ''}>
                    <div className="relative w-full h-full">
                        <img src={image} className="object-cover w-full h-full" alt={`Slide ${index + 1}`} />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5"></div>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center lg:items-center lg:text-center lg:w-full sm:mx-auto  ">
                        <div className="text-white">
                            <h1 className="text-2xl lg:text-5xl sm:text-sm font-extrabold overflow-hidden py-12">
                                Become the Modern Agent
                            </h1>
                        </div>
                    </div>
                    <img
                        className="absolute z-10 right-80 mr-[10rem] -mt-[22.5rem] invisible md:visible "
                        src={item}
                        alt="Property"
                    />
                    <button
                        type="button"
                        style={{ position: 'absolute', bottom: '20px', right: '10px', zIndex: '40', padding: '10px' }}
                        data-carousel-prev
                        onClick={goToPrevSlide}
                    >
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px' }}>
                            <svg className="w-12 h-12 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                        </span>
                    </button>
                    <button
                        type="button"
                        style={{ position: 'absolute', bottom: '20px', right: '60px', zIndex: '40', padding: '10px' }}
                        data-carousel-next
                        onClick={goToNextSlide}
                    >
                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px' }}>
                            <svg className="w-12 h-12 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                            </svg>
                        </span>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Sliderheader;
















