import React from "react";
import pic1 from '../assets/profile.jpeg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from "react-scroll";
const Home = ()=>{
    return(
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full ">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">I am Full Stack Developer</h2>
                    <p className="py-4 text-gray-500 max-w-md">
                        I have 3 years of experience building and designing software.
                        Currently,I love to work on web  on web application using technologies Like
                        React , Meterial UI Node Js Express Js
                    </p>
                    <div style={{display:'flex'}}>
                    <div style={{display:'inline'}}>
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
                    <div style={{display:'inline',marginLeft:'7%'}}>
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
                <div>
                    <img src={pic1} alt="my" className="rounded-2xl mx-auto w-auto md:w-64"/>
                </div>
            </div>

        </div>
    )
}
export default Home