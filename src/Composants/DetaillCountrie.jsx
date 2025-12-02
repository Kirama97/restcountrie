import React from 'react'
import { useParams } from 'react-router-dom'
import { useCountrieContext } from '../Hook/CountrieContext'

const DetaillCountrie = () => {
   const {name} = useParams()
  const {lePays ,setLePays, fetchPays,paysData,} = useCountrieContext()

  fetchPays(name)
 
   
  return (
    <div className='w-screen h-screen bg-red-400'>
      <p className='text-xl text-green-600'> {lePays.capital}</p>
    </div>
  )
}

export default DetaillCountrie
