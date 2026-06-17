import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const Roots = () => {
  return (
    <div className='bg-[#F0F8FF]'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Roots
