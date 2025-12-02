import React from 'react'
import { NavLink } from 'react-router-dom'

const Countrie = ({pays , index}) => {
    
  return (
    
            <NavLink to={`pays/${pays.name.common}`} key={index} className=" hover:bg-neutral-700 bg-black h-[40vh] overflow-hidden rounded-md">
                <img src={pays.flags.svg} className='h-[45%] bg-no-repeat-repeat  object-cover w-full' alt="" srcset="" />
                <div className="  px-5 py-3">
                    <h3 className='text-center text-sm md:text-md lg:text-xl font-bold mb-3'>{pays.name.common}</h3>
                    <p className='mb-2'> <strong>capital</strong> : {pays.capital}</p>
                    <p className='text-sm text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non alias officiis do</p>

                </div>
            </NavLink>
  )
}

export default Countrie
