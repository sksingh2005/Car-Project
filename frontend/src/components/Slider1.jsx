// CarouselComponent.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing arrow icons
import Navbar from "./Navbar";

const images = [
  "/MS.jpg", // Use your image paths
  "/forward.jpg",
  "/Backward.jpg",
  "/Right.jpg",
  "/South.jpg",
  "/Box.jpg",
  "/Inside.jpg",
  "/Speedometer.jpg",
  "/Back.jpg"
];

// Custom arrow components for navigation
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowRight className="text-3xl text-gray-700 hover:text-black" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowLeft className="text-3xl text-gray-700 hover:text-black" />
    </div>
  );
};

export const CarouselComponent = () => {
  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />, // Using custom arrow
    prevArrow: <PrevArrow />, // Using custom arrow
  };

  return (
    <div className="relative h-[100vh] overflow-hidden"> {/* Full screen height container */}
      <div className="absolute top-0 left-0 right-0 z-20"> {/* Navbar fixed at top */}
        <div className="p-2">
            <Navbar />
        </div>
        
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <div
              className="w-full h-[100vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              {/* The image is now a background */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
