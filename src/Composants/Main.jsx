import React from 'react'
import { useCountrieContext } from '../Hook/CountrieContext'
import AllCountrie from './All_Countries/AllCountries.jsx/AllCountrie';
import SelectContinent from './SelectContinent';



const Main = () => {
    

  return (
    <main className=' py-20 px-[10%] text-neutral-100'>
        <div className="flex items-center justify-between mb-20">
            <h1 className='text-2xl font-bold mb-20'>LES PAYS de l'</h1>
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
