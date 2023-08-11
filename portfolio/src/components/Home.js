import React, { useState, useEffect } from "react";
import pic1 from '../assets/profile.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from "react-scroll";

const Home = () => {
  const sentences = [
    "Hi, I'm Pasindu",
    "I am Full-Stack Developer",
    "Backend Development Enthusiast",
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const words = sentences[currentSentenceIndex].split(" ");
    const timer = setInterval(() => {
      if (currentWordIndex === words.length) {
        setCurrentWordIndex(0);
        setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
      } else {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [currentWordIndex, currentSentenceIndex, sentences]);
  const resumeUrl = "//pasindu.pdf";

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:w-1/2 order-2 md:order-1">
          <h2 className="text-4xl sm:text-5xl md:text-4xl font-bold text-white">
            {sentences[currentSentenceIndex]
              .split(" ")
              .slice(0, currentWordIndex)
              .join(" ")}
          </h2>
          <p className="py-4 text-gray-500 max-w-md text-sm md:text-base">
            I have 3 years of experience building and designing software. Currently, I love to work on web applications using technologies like React, Material UI, Node.js, and Express.js. I enjoy solving complex problems and building user-friendly interfaces.
          </p>
          <div className="flex flex-col md:flex-row items-center">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer md:mr-4"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <AiOutlineArrowRight className="ml-1" />
              </span>
            </Link>
            <iframe
      src="https://pasindu.pdf"
      download="pasindu.pdf"
      className="group text-white w-fit px-14 py-3 my-2 flex items-center rounded-md bg-red-800 cursor-pointer"
    >
      Resume
    </iframe>
          </div>
        </div>
        <div className="md:w-1/2 md:order-3 mt-10 md:mt-0">
          {/* Updated image properties */}
          <img src={pic1} alt="My Profile" className="w-[300px] h-[290px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px] border rounded-full border-gray-600 dark:border-gray-200 relative md:mt-20 lg:mt-0 flex items-center justify-center" />
        </div>
      </div>
    </div>
  );
}

export default Home;
