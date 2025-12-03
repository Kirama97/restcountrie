import React , {useState} from 'react'
import drapeau from '../Assets/drapeau.svg';
import { useCountrieContext } from '../Hook/CountrieContext';






const RecherchePays = () => {

    const {setCountries , countries ,fetchApi} = useCountrieContext()

    const [recherche , setRecherche] = useState("")

   
    const handleSearch = (e) =>{
        e.preventDefault();

        // if(recherche === "") return ;

        console.log(recherche);


         const filtrer = countries.filter( (countrie) => countrie.name.common.toLowerCase().includes(recherche.toLowerCase()) );
         setRecherche("");
         if(recherche.trim() === "") {
              fetchApi("Africa");
              return;
         }


    }

     const handleChange = (e) =>{
        e.preventDefault()
        let value = e.target.value;
        setRecherche(value);
        const filtrer = countries.filter( (countrie) => countrie.name.common.toLowerCase().includes(value.toLowerCase()) );
        setCountries(filtrer);
         if(value.trim() === "") {
              fetchApi("Africa");
              return;
         }


     }
  
    


  return (
    <form onSubmit={handleSearch}  className='flex items-center gap-5 justify-between bg-neutral-50 overflow-hidden   rounded-lg' >
        <img src={drapeau} alt="" className='ml-4' />
        <input type="text"   className='text-neutral-800 border-none py-3 outline-none ' placeholder='Recherche pays....' 
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
  )
}

export default RecherchePays
