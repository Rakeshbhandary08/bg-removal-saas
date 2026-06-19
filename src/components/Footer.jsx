import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-violet-600 to-fuchsia-500">
    <div className="p-6 mx-4 lg:mx-44 flex justify-between ">
      <div className="flex items-center gap-10">
        <img className="w-32 sm:w-44" src={assets.logo}></img>
        <p className="hidden md:block text-lg text-white/60 font-medium  border-l border-gray-400 pl-4">
          Copyright @bg.removal | All right reserved.
        </p>
      </div>
      <div className="flex gap-1 opacity-80 cursor-pointer">
        <img src={assets.facebook_icon} width={40}></img>
        <img src={assets.twitter_icon} width={40}></img>
        <img src={assets.google_plus_icon} width={40}></img>
      </div>
    </div>
    </div>
  );
};

export default Footer;
