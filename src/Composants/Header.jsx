import React from 'react'
import RecherchePays from './RecherchePays';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-[15vh] md:h-20 bg-black text-neutral-50 flex flex-col md:flex-row items-center gap-y-5 justify-center md:justify-between px-[10%]'>
       <NavLink to="/" className='text-md md:text-sm md:text-xl font-bold'>API COUNTRIE</NavLink>
       <RecherchePays/>
    </header>
  )
}

export default Header
