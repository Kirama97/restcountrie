import React, { createContext, useContext , useState ,useEffect } from 'react'
import { apiURL } from './../Composants/Util/api';

const countrieContext = createContext()

const CountrieContext = ({children}) => {

    const [countries , setCountries] = useState([])
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)


    const fetchAPi = (continent = "") => {


        setLoading(true);
        setError(null);

          fetch(`${apiURL}/${continent}`)
        //   fetch(`${apiURL}/${continent}`)
        .then( response  => {

            if(!response.ok){
                throw Error('erreur du fetch ')
            }
            return  response.json();

        })
        .then(data  => {
            setLoading(false)
            setCountries(data)
            console.log(data);

        })
        .catch(err => {
            setError(err.message);
            setLoading(false)
        })

        


     return { countries , error , loading}

    } 

     useEffect(() => {

        fetchAPi('africa')

    }, [])


    


    const contextValue = {
       
    countries,
    loading,
    error,
    fetchAPi,
        

    }

  return (
    <countrieContext.Provider value={contextValue}>
       {children}
    </countrieContext.Provider>
  )
}

export const useCountrieContext = () => useContext(countrieContext);

export default CountrieContext
