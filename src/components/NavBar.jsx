import React from 'react'
import { FaHamburger, FaHome, FaInfoCircle, FaLaptopCode } from 'react-icons/fa'
import { IoMdContacts } from 'react-icons/io'
import ToggleDark from './ToggleDark'
import { RxHamburgerMenu } from 'react-icons/rx'
import {useState} from "react"


const NavBar = () => {

    const [isOpen, setIsOpen] =  useState(false);

    const toggleMenu = ()=>{
        setIsOpen(!isOpen);

    }


const NavItems = [
    {
     title:"Home",
     icon:<FaHome />,
    },
    {
     title:"About",
     icon: <FaInfoCircle />,
    },
    {
     title:"Projects",
     icon:<FaLaptopCode />,
    },
    {
     title:"Contact",
     icon:<IoMdContacts />,
    },
]
    
    

  return (
    <>

    <nav className = "w-full bg-primary-color shadow-md fixed">

        <div className = "flex flex-row justify-start md:justify-between  space-x-9 px-4 py-3 max-w-7xl mx-auto items-center">

        
    
            <div className = "md:hidden">
                <RxHamburgerMenu onClick = {toggleMenu} className = "  text-3xl"/>
            </div>

            <div>
                <span className = "text-3xl">Bibek Pandit</span>

            </div>

            <div className = "max-md:hidden flex flex-row space-x-4 items-center justify-center">

                {
                    NavItems.map((item,index)=>(
                        <div key={index} className = " px-3 flex rounded-md py-2 space-x-2 ">
                            <span className = "text-3xl">{item.icon}</span>
                            <h3 className = "text-xl text-black">{item.title}</h3>
                        </div>
 
                    ))
                }


            </div>

            <div className = "max-md:hidden ">
                <span>
                    <ToggleDark/>
                </span>

            </div>
 
        </div>



    </nav>


    

    <section className = {`md:hidden absolute z-40 top-15 h-[calc(100vh-60px)] w-26 bg-white border-1 border-black flex flex-col gap-40 transform ${isOpen ? "translate-x-0": "-translate-x-full"} duration-100 ease-in-out `}>
        
        <div className ="flex flex-col  ">
            {NavItems.map((item)=>(
                <div className = "flex flex-col gap-2 px-2 py-4 items-center ">
                    <span className = "text-2xl">{item.icon}</span>
                    <h3 className = "text-xl">{item.title}</h3>
                </div>
            ))}

        </div>


         {/* w-fit so that it doesn't take the width of section */}
        <div className = "w-fit mx-auto">   
            <ToggleDark/>
        </div>

       
    </section>



  

    

    </>
    
  )
}

export default NavBar