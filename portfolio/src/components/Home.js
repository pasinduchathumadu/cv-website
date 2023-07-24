import React, { useState, useEffect } from "react";
import pic1 from '../assets/profile.jpeg'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from "react-scroll";

const Home = () => {
  const sentences = [
    "Hi,I'm Pasindu",
    "I am Full-Stack Developer",
    "Computer Science Undergraduate",
    
   
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [sentences.length]);

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center  h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:w-1/2 order-2 md:order-1">
          <h2 className="text-4xl sm:text-6xl font-bold text-white"> {sentences[currentSentenceIndex]}</h2>
          <p className="py-4 text-gray-500 max-w-md text-sm md:text-base">
          I have 3 years of experience building and designing software.,
    Currently, I love to work on web applications using technologies like React, Material UI, Node.js, and Express.js,
    I enjoy solving complex problems and building user-friendly interfaces.
           
          </p>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'inline' }}>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <AiOutlineArrowRight className="ml-1" />
                </span>
              </Link>
            </div>
            <div style={{ display: 'inline', marginLeft: '7%' }}>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-14 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-slate-700 to-blue-500 cursor-pointer"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:order-2 ml-auto">
          {/* Updated image properties */}
          <img src={pic1} alt="My Profile" className="rounded-full mx-auto w-80 h-80 md:w-96 md:h-96 border-4 border-black-500" />
        </div>
      </div>
    </div>
  );
}

export default Home;












