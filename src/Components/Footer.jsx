import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img className="w-32" src={assets.logo_dark} alt="footer-logo" />
          <p className="text-gray-300 mt-4">
            Guided by the principles of excellence, customer satisfaction, and
            sustainable value creation, we are with you every step of the way.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About Us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The lateset news, articles, and resources, sent to your inbox
            weekly.
          </p>
          <div className="flex gap-2">
            <input
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
              type="email"
              placebolder="Enter your e-mail"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2025 &copy; E-Estate Agency. All Right Reserved.
      </div>
      <div className="border-gray-700 pb-6 text-center text-gray-500">
        <p className="text-green-700">
          Coded by
          <a
            href="https://www.linkedin.com/in/esraayaz/"
            target="_blank"
            className="text-green-600 hover:text-green-400"
          >
            {" "}
            Esra Ayaz
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
