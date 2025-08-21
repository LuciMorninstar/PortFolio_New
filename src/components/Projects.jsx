import React from 'react'
import { FaBuildingUser } from 'react-icons/fa6'
import hbs from "../assets/hbs.png"
import portfolio from "../assets/portfolio.png"
import { FaBriefcase } from 'react-icons/fa'
import ProjectCard from './ProjectCard'


const Projects = () => {

   const projects = [
    {
        id:1,
        icon:<FaBuildingUser />,
        title:"Hostel Booking System",
        desc:"ValleyStay allows students to easily find and book hostels in Kathmandu, manage profiles, and lets admins track and manage hostel and student details efficiently.",
        technology:[
                    "HTML",
                    "CSS",
                    "JS",
                    "PHP",
                    "SQL"
    ],
        image:hbs


    },
    {
        id:2,
        icon:<FaBriefcase/>,
        title:"PortFolio Website",
        desc:"A responsive portfolio website highlighting my web development skills, projects, and services, created with React and Tailwind CSS for a clean, modern look.",
        technology:[
                    "React",
                    "Tailwind Css",
                    "GitHub",
                    "React Router Dom",
                    
        ],
        image:portfolio

    }


   ] 
  return (


    
    <section className = "w-full px-5 py-7 mt-3 md:px-15 bg-secondary-color dark:text-white dark_values flex flex-col gap-10 ">

        <div>
            <h1 className = "topic" >Projects</h1>
        </div>
        
        <div className = "grid gird-cols-1 gap-x-7 gap-y-7 ">
            {
                projects.map((project)=>(

                    <ProjectCard key={project.id} project={project}/>

                   


                 
                ))
            }

        </div>
    </section>


  
  )
}

export default Projects