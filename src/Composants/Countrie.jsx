import React from 'react'
import { NavLink } from 'react-router-dom'

const Countrie = ({pays , index}) => {
    
  return (
    
            <NavLink to={`pays/${pays.name.common}`} key={index} className=" hover:bg-neutral-700 bg-black h-[20vh]  md:h-[25vh] lg:h-[30vh] overflow-hidden rounded-md">
                <img src={pays.flags.svg} srcSet=""  className='h-[40%] md:h-[50%] lg:h-[60%] bg-no-repeat-repeat  object-cover w-full'  />
                <div className="  px-5 py-3">
                    <h3 className='text-center text-md lg:text-xl font-bold mb-3'>{pays.name.common}</h3>
                    <p className='mb-2 max-md:text-center text-sm md:text-lg'> <strong>capital</strong> : {pays.capital}</p>
                  

                </div>
            </NavLink>
  )
}

export default Countrie
