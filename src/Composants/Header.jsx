import React from 'react'
import RecherchePays from './RecherchePays';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-20 bg-black text-neutral-50 flex items-center justify-between px-[10%]'>
       <NavLink to="/" className='text-sm md:text-xl font-bold'>API COUNTRIE</NavLink>
       <RecherchePays/>
    </header>
  )
}

export default Header
