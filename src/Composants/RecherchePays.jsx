import React , {useState} from 'react'
import drapeau from '../Assets/drapeau.svg';
import { useCountrieContext } from '../Hook/CountrieContext';






const RecherchePays = () => {

    const {setCountries , countries ,fetchApi} = useCountrieContext()
    const [recherche , setRecherche] = useState("");
    const [notFound, setNotFound] = useState(false);

   
const handleSearch = (e) => {
    e.preventDefault();

    if (recherche.trim() === "") {
      fetchApi("Africa"); 
      setNotFound(false);
      return;
    }

    const filtrer = countries.filter((countrie) =>
      countrie.name.common.toLowerCase().includes(recherche.toLowerCase())
    );

    if (filtrer.length === 0) {
      setNotFound(true);
    } else {
      setCountries(filtrer);
      setNotFound(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setRecherche(value);

    if (value.trim() === "") {
      fetchApi("Africa");
      setNotFound(false);
      return;
    }

    const filtrer = countries.filter((countrie) =>
      countrie.name.common.toLowerCase().includes(value.toLowerCase())
    );

    if (filtrer.length === 0) {
      setNotFound(true);
      setCountries([]);
    } else {
      setCountries(filtrer);
      setNotFound(false);
    }
  };
  
    


  return (
     <div>
      <form
        onSubmit={handleSearch}
        className='flex items-center gap-5 justify-between bg-neutral-50 overflow-hidden rounded-lg'
      >
        <img src={drapeau} alt="" className='ml-4' />
        <input
          type="text"
          className='text-neutral-800 border-none py-3 outline-none flex-1'
          placeholder='Recherche pays....'
          value={recherche}
          onChange={handleChange}
        />
        <button
          type='submit'
          className='text-white bg-green-700 px-4 py-3 '
        >
          Recherche
        </button>
      </form>

      {notFound && (
        <p className="text-red-600 mt-2">Introuvable</p>
      )}
    </div>
  )
}

export default RecherchePays
