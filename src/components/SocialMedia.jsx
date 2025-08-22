import React from 'react'
import { Link } from 'react-router-dom'


const SocialMedia = ({link}) => {
  return (
     <Link className ="flex flex-col justify-center gap-y-2 items-center " to={link.url} alt={link.title}>

        <div>{link.icon}</div>
        <h1 className = " hidden md:block lg:text-xl">{link.title}</h1>

                     

       </Link>
  )
}

export default SocialMedia