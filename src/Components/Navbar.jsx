import React from "react";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mt-5 mx-auto flex justify-between item-center py-4 px-6 md:px-20 lg:px-32 bg:transparent">
        <img src={assets.logo} alt="logo" className="w-30" />
        <ul className="mt-2 hidded md:flex gap-7 text-white">
          <a href="#Header" className="px-5 curor-pointer hover:text-black">
            Home
          </a>
          <a href="#About" className="px-5 curor-pointer hover:text-black">
            About
          </a>
          <a href="#Projects" className="px-5 curor-pointer hover:text-black">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="px-5 cursor-pointer hover:text-black"
          >
            Testimonials
          </a>
        </ul>
        <button className="cursor-pointer hidden md:block bg-white px-8 py-2 rounded-full">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
