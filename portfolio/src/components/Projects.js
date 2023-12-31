import React from "react";
import arrayDestruct from "../assets/portfolio/first.png";
import installNode from "../assets/portfolio/second.png";
import navbar from "../assets/portfolio/third.png";
import resturant from "../assets/portfolio/pic3.png";
import reactSmooth from "../assets/portfolio/pic4.png";
import reactWeather from "../assets/portfolio/pic.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: navbar,
    },
    {
      id: 3,
      src: resturant,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
    name="projects"
    className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Projects
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src }) => (
          <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
          
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default Projects;
