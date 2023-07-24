import React from "react";
import arrayDestruct from "../assets/portfolio/first.png";
import installNode from "../assets/portfolio/second.png";
import navbar from "../assets/portfolio/third.png"
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";


const Portfolio = () => {
    const portfolios = [
        {
          id: 1,
          src: arrayDestruct,
        },
        {
            id: 2,
            src:navbar,
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
    return(
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white ">
            <div className="max-w-screen p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 ml-14">Portfolio</p>
                    <p className="py-6 ml-14">Check Out some of my work right here</p>
                </div>
                <div  className="grid sm:grid-cols-3 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {portfolios.map(({id,src})=>(
                   
                   <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                       <img src={src} alt="" className=" h-64 w-full object-cover rounded-md duration-300 hover:scale-105"/>
                     
                   </div>
              
                ))}
                 </div>
                    
                
            </div>

        </div>
    )
}

export default Portfolio