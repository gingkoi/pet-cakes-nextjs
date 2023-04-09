import React, { useState } from "react";
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";

const ImageSlider = ({ slides }: { slides: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
        className="absolute left-0 top-[50%] cursor-pointer z-1"
        onClick={goToPrevious}
      >
        <MdArrowCircleLeft size={60} className="text-white" />
      </div>
      <div
        className="absolute right-0 top-[50%] cursor-pointer z-1"
        onClick={goToNext}
      >
        <MdArrowCircleRight size={60} className="text-white" />
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="bg-cover w-full h-full bg-center"
      ></div>
    </div>
  );
};

export default ImageSlider;
