import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
   <div className = " h-[calc(100vh-400px)] w-full flex flex-col gap-8 justify-center items-center">
    <FaExclamationTriangle className = "text-7xl max-md:text-5xl text-red-500"/>
    <span className = "text-9xl max-md:text-7xl">404</span>
    <h1 className = "topic">Page Not Found!</h1>

   </div>
  )
}

export default NotFoundPage