import React from 'react'

const SocialMedia = ({link}) => {
  return (
     <a className ="flex flex-col justify-center gap-y-2 items-center " href={link.url} alt={link.title}>

        <div>{link.icon}</div>
        <h1 className = " hidden md:block lg:text-xl">{link.title}</h1>

                     

       </a>
  )
}

export default SocialMedia