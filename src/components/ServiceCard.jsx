import React from "react";

const ServiceCard = ({service}) => {
  return (
    <div className="group px-9 py-8 bg-gray-200 dark:bg-dark-fourth-color flex flex-col justify-center gap-5 rounded-md hover:shadow-md dark:hover:shadow-sm  hover:duration-100 hover:ease-in-out  ">
      <div className="flex flex-col gap-5">
        <span className="group-hover:text-blue-500 icon_style">{service.icon}</span>
        <h2 className="text-xl font-semibold group-hover:bg-gradient-to-r from-blue-500 to-blue-300 group-hover:bg-clip-text group-hover:text-transparent">{service.title}</h2>
      </div>
      <div>
        <p className="text-justify">{service.desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
