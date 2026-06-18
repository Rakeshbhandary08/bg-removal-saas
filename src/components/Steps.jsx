import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40 relative overflow-hidden">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mt-4 bg-gradient-to-r from-gray-900 to-gray-400 text-transparent bg-clip-text">
        Steps to remove background <br className="hidden md:block"  /> image in seconds
      </h1>
      <div className="absolute top-10 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgb(124_58_237/0.2)_0%,_rgb(217_70_239/0.3)_40%,_transparent_70%)] blur-3xl"></div>
      <div className="flex items-start flex-wrap gap-4 justify-center mt-16 xl:mt-24">
        <div className="flex items-start bg-white border-currentColor drop-shadow-md gap-4 p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.upload_icon}></img>
          <div>
            <p className="text-xl font-medium">Upload image</p>
            <p className="text-sm text-neutral-500 mt-1">
              Upload your image and let <br className="hidden md:block"/>
              AI do the magic in seconds.
            </p>
          </div>
        </div>
        <div className="flex items-start bg-white border-currentColor drop-shadow-md gap-4 p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.remove_bg_icon}></img>
          <div>
            <p className="text-xl font-medium">Remove Background</p>
            <p className="text-sm text-neutral-500 mt-1">
              AI-powered background removal <br className="hidden md:block"/> clean, fast, and completely free.
            </p>
          </div>
        </div>
        <div className="flex items-start bg-white border-currentColor drop-shadow-md gap-4 p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.download_icon}></img>
          <div>
            <p className="text-xl font-medium">Download Image</p>
            <p className="text-sm text-neutral-500 mt-1"> Download your perfectly edited <br className="hidden md:block"/>  image in seconds.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
