import React from 'react'
import WidthWrapper from './WidthWrapper'
import profile from "../assets/profile.jpg"
import cv from "../assets/cv.pdf"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (

   

       <div className = "w-full px-5 md:px-15 bg-secondary-color dark_values h-[calc(100vh-100px)] flex flex-col md:flex-row justify-center ">

            <div className=" w-full md:w-1/2 p-6 flex flex-col gap-5 justify-center    ">
            
                <div className = "flex flex-col gap-5">
                    <h1 className = "text-5xl md:text-7xl mix_colors">Hello, I'm <br/> Bibek Pandit</h1>
                    <p className = "text-justify"> I am a passionate front-end developer focused on building responsive, user-friendly websites and interfaces. Currently, I am actively looking for internship opportunities to apply my skills in real-world projects and grow as a developer.</p>

                </div>

                <div className = "flex flex-row gap-7">
                    <button className = "bg-button-color cursor-pointer px-7 text-white py-2 font-semibold rounded-sm"><Link to ="/projects">Projects</Link></button>
                    <button href={cv} target="_blank" className = "bg-button-color cursor-pointer px-7 text-white py-2 font-semibold  rounded-sm">View CV</button>
                </div>

            </div>

            <div className = "w-full md:w-1/2 md:p-3 flex justify-center items-center ">
                <div className = "w-full border-20 border-gray-200 dark:border-dark-fourth-color shadow-md rounded-sm">
                    <img src={profile} alt="image"/>
                </div>


            </div>
        

       </div>
       
  
    

  )
}

export default Hero