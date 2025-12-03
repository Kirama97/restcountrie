import React, { useEffect } from "react";
import { useParams ,NavLink  } from "react-router-dom";
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

// 
  const pays = paysData[0];

  return (
    <div className="max-w-5xl mx-auto py-10 px-5">

        <NavLink to="/" className="bg-green-600 border-none text-white w-[100px] absolute bottom-10 right-5 flex gap-3 items-center p-3 rounded-full outline-none " >
        <svg className="bg-transparent text-neutral-600"  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-left-dash-icon lucide-arrow-big-left-dash"><path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"/><path d="M20 9v6"/></svg>
         Retour
         
         </NavLink>

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










