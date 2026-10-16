import React from 'react'
import { BiMessageDetail } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { GoHomeFill } from 'react-icons/go'
import { IoSearchOutline } from 'react-icons/io5'
import { LuSquarePlay } from 'react-icons/lu'
import { TbLocation } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className='fixed w-full bottom-0 border-t border-t-zinc-700 flex justify-between py-3 px-6'>
        <Link to={'/'} className='text-[1.75rem]'><GoHomeFill /></Link>
        <Link to={'/search'} className='text-[1.75rem]'><IoSearchOutline /></Link>
        <Link to={'/explore'} className='text-[1.75rem]'><LuSquarePlay /></Link>
        <Link to={'/messages'} className='text-[1.75rem]'><TbLocation /></Link>
        <Link to={'/profile'} className='text-[1.75rem]'><CgProfile /></Link>
    </div>
  )
}

export default NavigationBar