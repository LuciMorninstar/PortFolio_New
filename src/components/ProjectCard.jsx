import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full group rounded-md flex flex-row gap-8 md:gap-15 bg-gray-200 dark:bg-dark-fourth-color justify-center items-center px-4 py-8 md:py-5 hover:shadow-md">
      <div className>
        <span className="flex items-center justify-center rounded-full 
        dark:text-black bg-gray-200 shadow-md group-hover:bg-button-color group-hover:text-white w-10 h-10 group-hover:duration-100 group-hover:ease-in-out">
          {project.id}
        </span>
      </div>

      <div className="w-2/4 flex flex-col gap-4">
        <h3 className="text-xl font-semibold group-hover:bg-gradient-to-r from-blue-500 to-blue-300 group-hover:bg-clip-text group-hover:text-transparent">
          {project.title}
        </h3>
        <p className="text-justify text-sm">{project.desc}</p>
        <div className = "max-md:hidden  flex flex-row gap-3 ">
            <span className = "bg-gray-300 max-md:text-[10px] dark:bg-dark-tertiary-color px-5 py-2 rounded-md ">{project.technology[0]}</span>
            <span className = "bg-gray-300 max-md:text-[10px] dark:bg-dark-tertiary-color px-5 py-2 rounded-md ">{project.technology[1]}</span>
            <span className = "bg-gray-300 max-md:text-[10px] dark:bg-dark-tertiary-color px-5 py-2 rounded-md ">{project.technology[2]}</span>
            <span className = "bg-gray-300 max-md:text-[10px] dark:bg-dark-tertiary-color px-5 py-2 rounded-md ">{project.technology[3]}</span>
            {project.technology[4]&&(<span className = "bg-gray-300 max-md:text-[10px] dark:bg-dark-tertiary-color px-5 py-2 rounded-md ">{project.technology[4]}</span>)}
           
        </div>
      </div>

      <div className="w-40 h-40 rounded-full  md:w-70 md:h-70 flex flex-row items-center">
        <img className =" rounded-sm hover:scale-120 md:hover:scale-140 hover:duration-400 hover:ease-in" src={project.image} alt="image" />
      </div>
    </div>
  );
};

export default ProjectCard;
