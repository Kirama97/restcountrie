import React from 'react'
import { useState } from "react";
import { useCountrieContext } from '../Hook/CountrieContext';


const SelectContinent = () => {

   const [isOpen , setIsOpen] = useState(false) 
   const [selected , setSelected] = useState('Africa')
   const options = ["Africa","Europe", "Asia","America" ,"oceania"];
   
   const {  fetchApi ,  } = useCountrieContext();



return (

    <div className="relative w-60">
        <button onClick={ e =>{ (e.preventDefault());  setIsOpen(!isOpen)} }
            
            className="w-full bg-white border border-gray-300 px-4 py-2 rounded-lg flex justify-between items-center text-gray-700">
          <span> {selected}</span>
         <svg
          className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
        </button>
        
        {
            isOpen && (
                <ul className='absolute bg-white left-0 right-0 border border-gray-300 mt-1 rounded-lg shadow-lg z-20'>
                    {  options.map((item , index) => (

                        <li key={index} onClick={ () => {
                            setSelected(item)
                            setIsOpen(false);
                            fetchApi(item);
                        }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700" >
                             {item}

                        </li>
                    ))}
             </ul>
            )
        }   
    </div>
  );
}; 

export default SelectContinent
