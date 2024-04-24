import React, { useState,useEffect} from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Footer from './Components/Footer'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { Route, Routes } from 'react-router-dom'
import AllComp from './Components/AllComp'
import Partner from './Components/Partner'

import Home from './Components/Home'


function App() {

  return (
    <div className='bg-[#f8fafc]'>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home/*' element={<Home/>} />

      </Routes>
    
    </div>
  )
}

export default App

