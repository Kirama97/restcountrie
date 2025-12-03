import React from 'react'

const RecherchePays = () => {

  
    


  return (
    <form  className='flex items-center gap-5 justify-between bg-neutral-50 overflow-hidden   rounded-lg' >
         <svg className=' ' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
        <input type="text"   className='text-neutral-800 border-none py-3 outline-none ' placeholder='Recherche pays....' />
        <button
        className='text-white bg-green-700 px-4 py-3 '

        >
            Recherche
        </button>
         
    </form>
  )
}

export default RecherchePays
