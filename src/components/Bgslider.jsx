import React from "react";
import { useState } from "react";
import { assets } from "../assets/assets";
import "../index.css"

const Bgslider = () => {
  const [sliderPosition, setSliderPosition] = useState(20); //itna visible hoga

  //create a function 
  function handleSliderChange(e){
    setSliderPosition(e.target.value)
  }

  return (
    <div className="pb-10 md:py-20 mx-2 relative" >
      <div className="absolute top-10 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgb(124_58_237/0.2)_0%,_rgb(217_70_239/0.3)_40%,_transparent_70%)] blur-3xl"></div>
      {/* Heading*/}
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold  mt-4 bg-gradient-to-r from-gray-900
       to-gray-400 text-transparent bg-clip-text  mb-12 sm:mb-20">Remove Background With High
        <br className="hidden md:block"/> Quality and Accuracy</h1>

      {/* title */}
      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl ">
         {/* Background Image */}
        <img src={assets.image_w_bg} style={{clipPath:`inset(0 ${100 - sliderPosition}% 0 0)`}}></img>

        {/* Background Image */}
        <img className="absolute top-0 left-0 " src={assets.image_wo_bg} style={{clipPath:`inset(0 0 0 ${sliderPosition}%)`}}></img>

        <input className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider" type="range" min={0} max={100} value={sliderPosition} onChange={handleSliderChange}/>
      </div>
    </div>
  );
};

export default Bgslider;
