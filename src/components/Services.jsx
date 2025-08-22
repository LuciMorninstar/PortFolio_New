import React from 'react'
import { FaCode, FaDatabase, FaLaptopCode, FaProjectDiagram, FaServer } from 'react-icons/fa'
import ServiceCard from './ServiceCard'

const Services = () => {

    const services =[
        {
            title:"Front End Development",
            icon:<FaCode/>,
            desc:"Building responsive, modern, and visually appealing websites using HTML, CSS, JavaScript, and Tailwind CSS for seamless user experiences."

        },
        {
            title:"Back End Development",
            icon:<FaServer/>,
            desc:"Developing secure and scalable server-side systems with Express.js and MongoDB to ensure smooth data handling and functionality.."

        },
        {
            title:"API Development",
            icon:<FaProjectDiagram/>,
            desc:"Designing and integrating RESTful APIs to enable efficient communication between applications and third-party services."

        },
        {
            title:"Full-Stack Development",
            icon:<FaLaptopCode/>,
            desc:"Providing complete end-to-end web solutions by combining front-end, back-end, and database integration for dynamic, fully functional websites."

        },
        {
            title:"DataBase Management",
            icon:<FaDatabase/>,
            desc:"Managing and designing efficient MongoDB databases for fast, secure, and reliable data storage and retrieval."

        },
        
    ]
  return (
 
    <section className = "w-full px-5 py-7 mt-3 md:px-15 bg-secondary-color dark:text-white dark_values flex flex-col gap-10 ">

        <div>
            <h1 className = "topic" >Services</h1>
        </div>
        
        <div className = "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-7 content-center">
            {
                services.map((service,index)=>(
                  <ServiceCard key={index} service = {service}/>
                ))
            }

        </div>
    </section>
  )
}

export default Services