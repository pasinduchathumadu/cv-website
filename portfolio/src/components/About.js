import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
          <p className="text-xl mt-20">
            As an undergraduate at the University of Colombo School of Computing, I am Pasindu Chathumadu, driven by a passion for thinking out of the box. I excel in adapting quickly to newer technologies, effortlessly grasping their intricacies, and making sound technical decisions. My flexible nature and adept negotiation skills allow me to thrive in web and mobile application development. I eagerly anticipate the opportunity to be a collaborative team worker, efficient in time management, and contribute to meaningful projects.
          </p>
          <div className="mt-20 flex items-center">
            <div className="w-px h-full bg-gray-500 mx-8"></div>
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-4 h-px bg-gray-500 mr-4"></div>
                <span className="font-bold mr-4">FULL NAME</span>: Guruge Pasindu Chathumadu
              </div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-px bg-gray-500 mr-4"></div>
                <span className="font-bold mr-3">BIRTH DATE</span>: May 23, 1999
              </div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-px bg-gray-500 mx-4"></div>
                <span className="font-bold mr-14">JOB</span>: undergraduate at UCSC
              </div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-px bg-gray-500 mr-4"></div>
                <span className="font-bold mr-11">GITHUB</span>: pasinduchathumadu
              </div>
              <div className="flex items-center">
                <div className="w-4 h-px bg-gray-500 mr-4"></div>
                <span className="font-bold mr-14">EMAIL</span>: pasindugura123@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
