import React from 'react'
import { useCountrieContext } from '../Hook/CountrieContext'
import AllCountrie from './All_Countries/AllCountries.jsx/AllCountrie';
import SelectContinent from './SelectContinent';



const Main = () => {
  const {compteur} = useCountrieContext()
    

  return (
    <main className=' py-10 md:py-20 px-[6%] md:px-[10%] text-neutral-100'>
        <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-10 items-center justify-between mb-10 md:mb-20">
            <h1 className='text-2xl font-bold '>Les pays du continent  <span className='text-2xl text-red-700'>({compteur})</span></h1>
             <form className="flex flex-col md:flex-row items-center  gap-3">
                <p>Choisir un continent : </p>
                 <SelectContinent/>
             </form>
            
        </div>
        <AllCountrie/>
    </main>
  )
}

export default Main
