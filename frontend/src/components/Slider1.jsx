import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

export default function CarouselComponent({ images }) {
  const settings = {
    dots: false,
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
    <div className="relative h-[100vh] mx-auto overflow-hidden"> {/* Full-screen height and max width for a nice appearance */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <div
              className="w-full h-[100vh]  bg-center bg-cover" // Full-screen height for each image
              style={{ backgroundImage: `url(${image})` }}
            >
              {/* The image is set as a background */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
