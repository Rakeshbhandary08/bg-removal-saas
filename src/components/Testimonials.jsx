import React from "react";
import { testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="mt-20 relative">
      {/* Title */}
      <div className="absolute inset-0 w-[500px] h-[bg--bg500px] left-1/2 -translate-x-1/2 bg-[radial-gradient(circle,_rgb(124_58_237/0.2)_0%,_rgb(217_70_239/0.3)_40%,_transparent_70%)] blur-3xl top-10"></div>
      <h1
        className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mt-4 bg-gradient-to-r from-gray-900
       to-gray-400 text-transparent bg-clip-text mb-12 sm:mb-12 "
      >
        Customer Testimonials
      </h1>

      {/* Title */}
      <div className=" grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-10 px-4 py-8">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-700"
          >
            <p className="text-4xl text-gray-500">"</p>
            <p className="text-md text-gray-600">{item.text}</p>
            <div className="flex items-center gap-3 mt-5">
              <img src={item.image} className="w-9 rounded-full"></img>
              <div>
                <p className="text-black font-medium">{item.author}</p>
                <p className="text-sm text-gray-600">{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
