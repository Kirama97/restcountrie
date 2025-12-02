import React from 'react'
import RecherchePays from './RecherchePays';

const Header = () => {
  return (
    <header className='h-20 bg-black text-neutral-50 flex items-center justify-between px-[10%]'>
       <h1 className='text-xl'>logo</h1>
       <RecherchePays/>
    </header>
  )
}

export default Header
