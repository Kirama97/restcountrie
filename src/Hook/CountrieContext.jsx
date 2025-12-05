import React, { createContext, useContext, useState, useEffect } from 'react'
import { apiURL } from './../Composants/Util/api';

const countrieContext = createContext()

const CountrieContext = ({ children }) => {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectContinent, setSelectContinent] = useState('Africa');

  const [compteur, setCompteur] = useState(0);

  const [lePays, setLePays] = useState("");       
  const [paysData, setPaysData] = useState(null);  



  const fetchApi = async (continent = "Africa") => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${apiURL}/${continent}`);

      if (!response.ok) throw new Error('Erreur du fetch');

      const data = await response.json();

      setCountries(data);
      setSelectContinent(continent)
      setCompteur(data.length);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

 

  const fetchPays = async () => {
    if (!lePays) return;

    setLoading(true);
    setError(null);
    setPaysData(null);

    

    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${lePays}`);

      if (!response.ok) throw new Error('Erreur du fetch');

      const data = await response.json();

      setPaysData(data);

    } catch (err) {
      setError(err.message);
      setPaysData(null)
    } finally {
      setLoading(false);
    }
  };

 


  useEffect(() => {
    
    fetchApi("Africa");

  }, []);


  useEffect(() => {
    if (lePays) {
    
          fetchPays();
   
    }
  }, [lePays]);


  


  const contextValue = {
    countries,
    setCountries,
    compteur,
    loading,
    error,
    fetchApi,
    lePays,
    setLePays,    
    fetchPays,
    paysData,
    selectContinent,
  };

  return (
    <countrieContext.Provider value={contextValue}>
      {children}
    </countrieContext.Provider>
  );
};

export const useCountrieContext = () => useContext(countrieContext);

export default CountrieContext;
