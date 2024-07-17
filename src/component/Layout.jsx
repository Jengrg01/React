import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
   <>
   {/* outlet bitra chai raakhnu milne hunxa, example homepage is inside the outlet wrapped by header and footer */}
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout