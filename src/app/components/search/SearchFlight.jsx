'use client'
import React, { useState, useEffect } from 'react';
import supabase from '../../api/auth/lib/supabase'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const SearchFlight = () => {

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [data, setData] = useState([]);

  
  useEffect(() => {
    async function fetchCountries() {
      const { data, error } = await supabase.from('countries').select('name');
      if (data) {
        setCountries(data.map((row) => row.name));
      }
      if (error) {
        console.error('Error fetching countries:', error);
      }
    }

    async function fetchCities() {
      const { data, error } = await supabase.from('ciudad').select('ciudadnombre');
      if (data) {
        setCities(data.map((row) => row.ciudadnombre));
      }
      if (error) {
        console.error('Error fetching cities:', error);
      }
    }

 
    fetchCountries();
    fetchCities();
  }, []);

   
    return (

<>
        <form onSubmit={handleFormSubmit}>

              <div className=" absolute top-0 left-0  w-full flex flex-col justify-center results-cente  h-96 ">
                <div className=" flex results-center justify-center   ">
                    
                <div className="w-auto pt-2 pl-20 pb-2  bg-white border rounded-md shadow-md custom-width">
                
                    <div className="grid grid-cols-6  gap-4 text-black">
                        <div className="row-span-1 col-span-1">
                            <label className="inline-flex results-center text-black">CIUDAD ORIGEN:</label>
                            <select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="block w-full py-2 px-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                            >
                            <option value="">CIUDAD DE DESTINO</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>
                                {city}
                                </option>
                            ))}
                            </select>
                        </div>

                        <div className="row-span-1 col-span-1">
                            <label className="inline-flex results-center text-black">CIUDAD DESTINO:</label>
                            <select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="block w-full py-2 px-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                            >
                            <option value="">CIUDAD DE DESTINO</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>
                                {city}
                                </option>
                            ))}
                            </select>
                        </div>
        
                        <div className="row-span-1 col-span-1">
                            <label className="inline-flex results-center text-black">FECHA DE SALIDA:</label>
                            <input type="date"
                            value={searchParams.checkInDate}
                            onChange={(e) =>setSearchParams({ ...searchParams, checkInDate: e.target.value })}
                            className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
                        </div>

                        <div className="row-span-1 col-span-1">
                            <label className="inline-flex results-center text-black">FECHA DE REGRESO:</label>
                            <input type="date" value={searchParams.checkOutDate}
                            onChange={(e) =>setSearchParams({ ...searchParams, checkOutDate: e.target.value })} className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
                        </div>
                        <div className="row-span-1 col-span-1">
                            <label className="inline-flex results-center text-black">¿CUANTOS?:</label>
                            <input type="number"
                            value={searchParams.numPersons}
                            onChange={(e) =>setSearchParams({ ...searchParams, numPersons: e.target.value })} className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
                            
                        </div>  

                        <div className=" inline-flex results-center pt-5 row-span-1 col-span-1">
                            <button  type="submit" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Buscar
                            </button>
                        </div>
                    </div>
                </div>
                </div>

          
                </div>
            
          
          </form>
</>
        
);

       

                     
              
        
    
}







export default SearchFlight

