import React from "react";
import hbs from "../assets/hbs.png";
import portfolio from "../assets/portfolio.png";
import { FaBuildingUser } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoArrowRedoOutline } from "react-icons/io5";

const ProjectSlide = () => {
  const projs = [
    {
      id: 1,
      icon: <FaBuildingUser />,
      title: "Hostel Booking System",
      desc: "ValleyStay allows students to easily find and book hostels in Kathmandu, manage profiles, and lets admins track and manage hostel and student details efficiently.",
      technology: ["HTML", "CSS", "JS", "PHP", "SQL"],
      image: hbs,
      features: [
        "Secure User Authentication using sessions for login and logout.",
        "Password Hashing to safely store user credentials.",
        "Hostel Listings with Detailed Information like images, descriptions, and contact details.",
        "Search Functionality to find hostels by name or address.",
        "Admin Panel for managing hostels with full CRUD operations.",
      ],
      github: "https://github.com/LuciMorninstar/complete-hbs",
    },
    {
      id: 2,
      icon: <FaBriefcase />,
      title: "PortFolio Website",
      desc: "A responsive portfolio website highlighting my web development skills, projs, and services, created with React and Tailwind CSS for a clean, modern look.",
      technology: ["React", "Tailwind Css", "GitHub", "React Router Dom"],
      image: portfolio,
      features: [
        "Secure User Authentication using sessions for login and logout.",
        "Password Hashing to safely store user credentials.",
        "Hostel Listings with Detailed Information like images, descriptions, and contact details.",
        "Search Functionality to find hostels by name or address.",
        "Admin Panel for managing hostels with full CRUD operations.",
      ],
      github: "https://github.com/LuciMorninstar/PortFolio_New",
    },
  ];
  return (
    <div className="w-full px-5 md:px-15  bg-secondary-color dark_values h- flex flex-col md:flex-row  justify-center ">
      <div className="flex flex-col gap-10 py-10">
        <div>
          <h1 className="topic">My Projects</h1>
        </div>

        <div className="flex flex-col gap-15">
          {projs.map((proj,i) => (
            <>
              <div key={i} className="w-full flex flex-col gap-7 py-10 rounded-md px-10 bg-lighter-color dark:bg-dark-fourth-color justify-center center ">
                <div className="flex flex-row gap-3  ">
                  {/* <span className="text-3xl text-black dark:text-white">
                    {proj.icon}
                  </span> */}
                  <h2 className="text-black text-2xl dark:text-white ">
                    {" "}
                    {proj.title}
                  </h2>
                </div>

                <div className="w-full flex flex-row justify-center items-center">
                  <img className="rounded-md w-[800px]" src={proj.image} alt="image" />
                </div>

                 {/* <SwiperUse send={proj.image}/> */}

                {/* after image section */}

                <div className="flex flex-col gap-7">
                  <div>
                    <p className="text-justify text-black dark:text-white">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="bg-gray-300 dark:bg-dark-tertiary-color px-10 py-7 rounded-sm flex flex-col gap-2">
                    <h3 className="text-xl text-black dark:text-white">
                      {" "}
                      Key Features
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {proj.features.map((feature,i) => (
                        <li key={i} className="relative before:absolute before:content-[''] before:w-4 before:h-4 before:bg-button-color max-md:text-sm before:top-1 before:-left-7 before:rounded-full">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="  flex flex-row gap-3 ">
                  <span className="bg-gray-300 max-md:text-[10px] dark:bg-dark-tertiary-color px-5 py-2 rounded-md ">
                    {proj.technology[0]}
                  </span>
                  <span className="bg-gray-300 max-md:text-[10px] dark:bg-dark-tertiary-color px-5 py-2 rounded-md ">
                    {proj.technology[1]}
                  </span>
                  <span className="bg-gray-300 max-md:text-[10px] dark:bg-dark-tertiary-color px-5 py-2 rounded-md ">
                    {proj.technology[2]}
                  </span>
                  <span className="bg-gray-300 max-md:text-[10px] dark:bg-dark-tertiary-color px-5 py-2 rounded-md ">
                    {proj.technology[3]}
                  </span>
                  {proj.technology[4] && (
                    <span className="bg-gray-300 max-md:text-[10px] dark:bg-dark-tertiary-color px-5 py-2 rounded-md ">
                      {proj.technology[4]}
                    </span>
                  )}
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <Link
                    className=" group font-semibold text-[20px] flex flex-row items-center gap-3 hover:bg-clip-text hover:bg-gradient-to-r hover:text-transparent hover:from-blue-500 hover:to-blue-200"
                    to={proj.github}
                  >
                    <span>View on Github</span>
                    <span className="text-black dark:text-white group-hover:text-blue-500">
                      <IoArrowRedoOutline />
                    </span>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
