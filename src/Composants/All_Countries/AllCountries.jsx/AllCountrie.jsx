import React from 'react'
import Countrie from './../../Countrie';
import { useCountrieContext } from '../../../Hook/CountrieContext';
import { apiURL } from './../../Util/api';



const AllCountrie = () => {
       const { countries, loading, error, fetchAPi } = useCountrieContext();

       
  
    if (loading) {
      return (
        <div className="w-full h-screen flex items-center justify-center">
          <div className="animate-spin h-16 w-16 border-4 border-green-500 border-t-transparent rounded-full"></div>
        </div>
      );
    }

    if (error) {
      return (
        <p className="text-center text-red-600 text-xl mt-10">
          Erreur lors du chargement
        </p>
      );
    }
       

  return (


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-10 ">

              {/* AFFICHAGE DES PAYS */}
              {!loading && !error && countries.length > 0 && (
                countries.map((pays, index) => (
                  <Countrie key={index} pays={pays} index={index} />
                ))
              )}

           
         </div>
  )
}

export default AllCountrie
