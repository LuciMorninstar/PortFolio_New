import React from 'react'
import { useState,useEffect } from 'react'
import { GiLightningFlame, GiMoonBats } from 'react-icons/gi';

const ToggleDark = () => {


     const [isDark, setIsDark] = useState(false);


  useEffect(()=>{
    if(isDark){
      document.documentElement.classList.add('dark');

    }
    else{
      document.documentElement.classList.remove('dark');
    }

  },[isDark])

  const toggleDarkMode = ()=>{
    setIsDark(prev => !prev)
  }


  return (
    <div id="toggleDark" onClick={toggleDarkMode} className = "bg-primary-color shadow-sm shadow-dark-primary-color dark:bg-dark-secondary-color dark:shadow-primary-color  px-1.5 py-1.5 text-white cursor-pointer rounded-full">
        {
          isDark?
          (<GiLightningFlame className = "big-icons " />):
           (<GiMoonBats className = "big-icons " />)
        }
         </div>
  )
}

export default ToggleDark