import React from 'react'
import NavvvDas from '../../components/hotelOwner/NavvvDas'
import SideBar from '../../components/hotelOwner/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex  h-screen'>
      <NavvvDas/>
      <div className='flex h-full'>
        <SideBar/>
      </div>
      <div className='flex-1 p-4 pt-10 h-full '>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
