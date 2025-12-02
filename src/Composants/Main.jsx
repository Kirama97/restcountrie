import React from 'react'
import { useCountrieContext } from '../Hook/CountrieContext'
import AllCountrie from './All_Countries/AllCountries.jsx/AllCountrie';
import SelectContinent from './SelectContinent';



const Main = () => {
  const {compteur} = useCountrieContext()
    

  return (
    <main className=' py-20 px-[10%] text-neutral-100'>
        <div className="flex items-center justify-between mb-20">
            <h1 className='text-2xl font-bold '>Les pays du continent  <span className='text-2xl text-red-700'>({compteur})</span></h1>
             <form className="flex items-center  gap-3">
                <p>Choisir un continent : </p>
                 <SelectContinent/>
             </form>
            
        </div>
        <AllCountrie/>
    </main>
  )
}

export default Main
