import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">Who We Are</h1>
      <p className=" sm:mb-5 text-gray-600 max-w-120 text-center mb-20 mt-5 ">
        As a leading brand in the international real estate market, we offer our
        customers high-quality residential and investment options.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt="brand-img"
          className="hidden md:block md:mt-12 mr-10 max-w-lg"
          style={{
            width: "40%",
            height: "auto",
          }}
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-3xl font-medium text-grap-800">15+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-grap-800">7500+</p>
              <p>Satisfied Customers</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-grap-800">1000+</p>
              <p>Completed Projects</p>
            </div>
            <div>
              <p className="text-3xl font-medium text-grap-800">250+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            With our expert team and global network, we provide reliable,
            transparent, and innovative solutions to help you find your dream
            property. Guided by the principles of excellence, customer
            satisfaction, and sustainable value creation, we are with you every
            step of the way.
          </p>
          <button className="cursor-pointer bg-blue-800 hover:bg-blue-600 text-white px-8 py-2 rounded-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
