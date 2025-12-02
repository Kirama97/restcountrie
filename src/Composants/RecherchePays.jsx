import React from 'react'

const RecherchePays = () => {
  return (
    <div  className='flex items-center gap-5 r bg-neutral-50 px-5 py-2 rounded-sm' >
         <svg className='text-black' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
        <input type="text"  className='text-neutral-800 border-none outline-none ' placeholder='Recherche pays....' />
         
    </div>
  )
}

export default RecherchePays
