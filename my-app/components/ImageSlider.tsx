import React, { useState } from "react";
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";

const ImageSlider = () => {
  const slides = [
    { url: "/hero/hero.png", title: "Pet Cakes" },
    { url: "/hero/hero2.png", title: "Cupcake Set" },
    { url: "/hero/hero3.png", title: "Paw-fect Pet Cakes" },
    { url: "/hero/hero4.png", title: "Pawntastic Celebration" },
    { url: "/hero/hero3.png", title: "3D Figurine Pet Cakes" },
  ];

  const [currentIndex, setCurrentIndex] = useState(3);

  const goToPrevious = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="w-full h-full relative">
      <div
        className="absolute left-[2%] top-[50%] cursor-pointer z-1 rounded-full bg-primary duration-300 hover:bg-white hover:text-primary text-white"
        onClick={goToPrevious}
      >
        <MdArrowCircleLeft size={60} />
      </div>
      <div
        className="absolute right-[2%] top-[50%] cursor-pointer z-1 rounded-full bg-primary duration-300 hover:bg-white hover:text-primary text-white"
        onClick={goToNext}
      >
        <MdArrowCircleRight size={60} />
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="bg-cover w-full h-full bg-center duration-300 cursor-pointer"
      ></div>
    </div>
  );
};

export default ImageSlider;
