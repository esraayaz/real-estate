import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets.js";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else if (screenWidth >= 768) {
        setCardsToShow(4);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, [projectsData.length]);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 pb-30 px-6 md:py-0 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
        <span> </span>
        Projects
      </h1>
      <p className="text-center text-gray-500 my-4 max-w-80 mx-auto">
        Explore our timeless and luxurious projects
      </p>

      {/* Slider Buttons */}

      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="cursor-pointer p-3 bg-sky-100 rounded mr-2 active:bg-sky-200"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="cursor-pointer p-3 bg-sky-100 rounded mr-2 active:bg-sky-200"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Project Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (108 / cardsToShow)}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="cursor-pointer"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span className="px-1"> | </span>{" "}
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
