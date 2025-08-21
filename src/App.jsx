import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'


const App = () => {

  return (

   <BrowserRouter>
   <Routes>

    <Route path = "/" element={<MainLayout/>}>

    <Route index element = {<HomePage/>}/>
    <Route path = "/about" element = {<AboutPage/>}/>
    <Route path = "/projects" element = {<ProjectPage/>}/>
    
    </Route>

   </Routes>
   </BrowserRouter>


  )
}

export default App