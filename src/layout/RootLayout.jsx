import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { InteractionProvider } from '../context/InteractionContext'

const RootLayout = () => {
  return (
    <div>
      <InteractionProvider>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </InteractionProvider>
    </div>
  )
}

export default RootLayout