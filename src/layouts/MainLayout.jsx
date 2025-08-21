import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import WidthWrapper from '../components/WidthWrapper'
import Footer from "../components/Footer"

const MainLayout = () => {

  return (

<main>

    <NavBar/>

    <section>
        <WidthWrapper>
             <Outlet/>
        </WidthWrapper>
       
     </section>
     <Footer/>


</main>


   
  )
}

export default MainLayout