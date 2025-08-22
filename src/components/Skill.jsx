import React from 'react'

const Skill = ({skill}) => {
  return (
    
        <div className = "group bg-gray-200 dark:bg-dark-fourth-color rounded-md py-6 flex flex-row items-center justify-center gap-5 hover:shadow-md transition-all duration-100 ease-in-out">

          <div className = "grayscale group-hover:grayscale-0 ">{skill.icon}</div>
          <h1 className = " font-semibold text-baseline md:text-md lg-xl group-hover:bg-gradient-to-r from-blue-500 via--white to-blue-400 group-hover:bg-clip-text group-hover:text-transparent">{skill.title}</h1>
        </div>
  )
}

export default Skill