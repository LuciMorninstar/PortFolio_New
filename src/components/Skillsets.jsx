import React from 'react'

import { SiExpress, SiMongodb, SiNodedotjs } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import Skill from "./Skill"
import WidthWrapper from './WidthWrapper';
import { TbBrandJavascript } from 'react-icons/tb';





const Skillsets = () => {

const techStack = [
  { icon: <FaHtml5 color="#e44d26" size={40} />, title: "HTML" },
  { icon: <FaCss3Alt color="#1572b6" size={40} />, title: "CSS" },
  { icon: <TbBrandJavascript color="#f7df1e" size={40} />, title: "JavaScript" },
  { icon: <FaReact color="#61dbfb" size={40} />, title: "React" },
  { icon: <FaPhp color="#777bb4" size={40} />, title: "PHP" },
  { icon: <SiTailwindcss color="#38bdf8" size={30} />, title: "Tailwind CSS" },
  { icon: <SiNodedotjs color="#339933" size={30} />, title: "Node.js" },
  { icon: <SiExpress color="#000000" size={30} />, title: "Express.js" },
  { icon: <SiMongodb color="#47A248" size={30} />, title: "MongoDB" },


];




  return (


      <section className = "mt-3 bg-secondary-color dark_values rounded-md">
    <WidthWrapper>
    <section className = " rounded-md mt-8 mb-10">
       
       <h6 className = "topic text-center mb-7"> Skillsets</h6>

       <div className = "grid grid-cols-2 gap-x-5 gap-y-7 md:grid-cols-3 lg:grid-cols-4 justify-center "> 

       {techStack.map((skill,index)=>(

        <Skill  key={index} skill={skill}/>

        

       ))}
       </div>
     
        </section>
        </WidthWrapper>
        </section>

  )
}

export default Skillsets