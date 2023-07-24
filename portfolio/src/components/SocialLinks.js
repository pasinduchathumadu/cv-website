
import React from "react";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill}  from "react-icons/bs"
const SocialLinks = () => {
    return(
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]">
                    <a href="/home" className="flex items-center justify-between w-full text-white">
                    {""}
                    <>Linkedin<FaLinkedin size={30}/></>
                    </a></li>
                    <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]">
                    <a href="/home" className="flex items-center justify-between w-full text-white">
                    {""}
                    <>Github<FaGithub size={30}/></>
                    </a></li>
                    <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]">
                    <a href="/home" className="flex items-center justify-between w-full text-white">
                    {""}
                    <>Mail<HiOutlineMail size={30}/></>
                    </a></li>
                    <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]">
                    <a href="/resume.pdf" className="flex items-center justify-between w-full text-white" download='true' >
                    {""}
                    <>Resume<BsFillPersonLinesFill size={30}/></>
                    </a></li>
            </ul>

        </div>
    )
}

export default SocialLinks