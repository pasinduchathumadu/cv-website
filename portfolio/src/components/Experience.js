import React from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import javascript from "../assets/experience/javascript.png";
import reactImage from "../assets/experience/react.png";
import mongo from "../assets/experience/mongodb.png";
import NODE from "../assets/experience/NODEJS.png";
import github from "../assets/experience/github.png";
import PHP from "../assets/experience/PHP.png";
import MUI from "../assets/experience/MUI.png";
import Mysql from "../assets/experience/MYSQL.png"
import express from "../assets/experience/express.png"
import C from '../assets/experience/c.png'
import cl from "../assets/experience/c++.png"
import py from "../assets/experience/pic.webp"
import postman from "../assets/experience/postman.png"
const Experience = () => {
    
        const techs = [
          {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
          },
          {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
          },
          {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
          },
          {
            id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
          },
          {
            id: 5,
            src: mongo,
            title: "MongoDB",
            style: "shadow-white",
          },
          {
            id: 6,
            src: PHP,
            title: "PHP",
            style: "shadow-sky-400",
          },
          {
            id: 7,
            src: NODE,
            title: "NODE JS",
            style: "shadow-pink-400",
          },
          {
            id: 8,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
          },
          {
            id: 9,
            src: MUI,
            title: "Meterial UI",
            style: "shadow-gray-400",
          },
          {
            id: 10,
            src: Mysql,
            title: "MySQL",
            style: "shadow-gray-400",
          },
          {
            id: 11,
            src: express,
            title: "Express js",
            style: "shadow-gray-400",
          },
          {
            id: 12,
            src: C,
            title: "C",
            style: "shadow-gray-400",
          },
          {
            id: 13,
            src: cl,
            title: "C++",
            style: "shadow-gray-400",
          },
          {
            id: 14,
            src: py,
            title: "Spring Boot",
            style: "shadow-gray-400",
          },
          {
            id: 15,
            src: postman,
            title: "Postman",
            style: "shadow-gray-400",
          },
        ];
    return(
      <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {/* The grid will now display 1 column for xs, 2 columns for sm, and 3 columns for md and larger */}
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;