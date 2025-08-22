import React from 'react'
import { IoArrowRedoCircleOutline, IoArrowRedoOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const WorkTogether = () => {
  return (
    <>
   <div className = "mt-6 flex flex-col gap-4  justify-center items-center px-10 py-10 bg-gray-400 dark:bg-dark-secondary-color">
    <h2 className =" topic text-black" >Want to Work Together?</h2>
   
   <p className = "flex flex-row gap-1 text-xl">Check out my <Link className="underline flex flex-row gap-2 items-center text-blue-800 hover:text-blue-700" to = "/contact"><IoArrowRedoOutline />Contact Page </Link></p>
   </div>
   </>
  )
}

export default WorkTogether