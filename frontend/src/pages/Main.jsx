import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './main-pages/Home'
import Explore from './main-pages/Explore'
import Search from './main-pages/Search'
import Messages from './main-pages/Messages'
import Profile from './main-pages/Profile'
import NavigationBar from '../components/main-components/NavigationBar'

const Main = () => {
  return (
    <div className='w-full h-screen bg-[#0C1014] text-[#F5F5F5] font-[segoe]'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/search' element={<Search />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
        <NavigationBar />
    </div>
  )
}

export default Main