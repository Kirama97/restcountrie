import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCountrieContext } from "../Hook/CountrieContext";

const InfoRow = ({ label, children }) => (
  <div className="flex flex-col mb-3">
    <span className="text-sm font-semibold text-gray-500">{label}</span>
    <span className="text-lg font-medium text-gray-800">{children}</span>
  </div>
);

function DetailPays() {
  const { name } = useParams();
  const { setLePays, paysData, loading, error } = useCountrieContext();


  useEffect(() => {
    setLePays(name);
  }, [name]);


  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin h-16 w-16 border-4 border-green-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

    if (loading || !paysData) {
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

  if (!paysData || !paysData[0]) {
    return (
      <p className="text-center text-red-600 text-xl mt-10">
        Pays introuvable…
      </p>
    );
  }

  const pays = paysData[0];

  return (
    <div className="max-w-5xl mx-auto py-10 px-5">

      {/* Drapeau */}
      <div className="flex flex-col items-center mb-10">
        <img
          src={pays.flags?.png}
          srcSet={pays.flags?.svg}
          alt={pays.name?.common}
          className="w-40 h-28 object-cover rounded shadow"
        />

        <h1 className="text-4xl text-neutral-50 font-bold mt-6">{pays.name.common}</h1>
        <p className="text-gray-500 italic">{pays.name.official}</p>
      </div>

      {/* Infos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-lg">
        <InfoRow label="Capitale">{pays.capital?.join(", ")}</InfoRow>
        <InfoRow label="Continent">{pays.region}</InfoRow>
        <InfoRow label="Population">
          {pays.population.toLocaleString("fr-FR")}
        </InfoRow>
        <InfoRow label="Langues">
          {Object.values(pays.languages || {}).join(", ")}
        </InfoRow>
      </div>
    </div>
  );
}

export default DetailPays;











// import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { useCountrieContext } from '../Hook/CountrieContext'



// const DetailPays = () => {
//    const {name} = useParams()
//   const {setLePays, paysData ,loading ,error} = useCountrieContext()

//    useEffect(() => {
//     setLePays(name);
//   }, [name]);

 

//   console.log(paysData);

  
//   if (loading) return <p>Chargement...</p>;

//   if (!paysData) return <p>Pays non trouvé</p>;

 
   
//   return (

//      <div>

//         { loading &&  
//         <div className="fixed inset-0 flex flex-col gap-5 justify-center items-center z-50">
//             <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
//             <p className="text-gray-600 text-md">Chargement...</p>
//         </div>
//         }

//         {error && <p className="text-red-500">Une erreur est survenue.</p>}
            
//             <div className='w-screen h-screen'>
//             <h1>{paysData[0].name.common}</h1>
//             <img src={paysData[0].flags.png} alt="" />
//             </div>
//      </div>

     
//   )
// }

// export default DetailPays
