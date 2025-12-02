import React from 'react'
import Countrie from './../../Countrie';
import { useCountrieContext } from '../../../Hook/CountrieContext';
import { apiURL } from './../../Util/api';



const AllCountrie = () => {
       const { countries, loading, error, fetchAPi } = useCountrieContext();

       

  return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-10">

            {/* UN PAYS */}

            { 
               countries &&  countries.map((pays , index)  => (
                       <Countrie pays={pays} index={index}   />
                ))
            }
         

         </div>
  )
}

export default AllCountrie
