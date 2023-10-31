'use client'
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const SearchAlojamientos = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    // Crea una instancia del cliente Supabase con tus credenciales
    const supabase = createClient('https://qvyrvltfrijjzeddnbjk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2eXJ2bHRmcmlqanplZGRuYmprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NDQxOTMsImV4cCI6MjAxMjAyMDE5M30.W5yokzlUg3N6v0eljD6ARj_5IK0oPKsSJyF7Y9iwWIM');

    // Función para cargar los países desde la tabla de países
    async function fetchCountries() {
      const { data, error } = await supabase.from('countries').select('name');
      if (data) {
        setCountries(data.map((row) => row.name));
      }
      if (error) {
        console.error('Error fetching countries:', error);
      }
    }

    // Función para cargar las ciudades desde la tabla de ciudades
    async function fetchCities() {
      const { data, error } = await supabase.from('ciudad').select('ciudadnombre');
      if (data) {
        setCities(data.map((row) => row.ciudadnombre));
      }
      if (error) {
        console.error('Error fetching cities:', error);
      }
    }

    // Llamar a las funciones para cargar los datos
    fetchCountries();
    fetchCities();
  }, []);
  return (
    <>
        <div className="w-full">
        <video muted autoPlay loop src="/video.mp4" className="w-full"></video>
      </div>
    
        <div className=" absolute top-0 left-0  w-full flex flex-col justify-center items-center h-80 ">

          
            <div className="flex items-center justify-center   ">
                
            <div className="w-auto pt-2 pl-20 pb-2  bg-white border rounded-md shadow-md custom-width">
            
                <div className="grid grid-cols-6  gap-4 text-black">
                    <div className="row-span-1 col-span-1">
                        <label className="inline-flex items-center text-black">PAIS:</label>
                        <select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className="block w-full py-2 px-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                        >
                        <option value="">Seleccionar país</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>
                            {country}
                            </option>
                        ))}
                        </select>
                </div>

                <div className="row-span-1 col-span-1">
                    <label className="inline-flex items-center text-black">CIUDAD:</label>
                    <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="block w-full py-2 px-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                    >
                    <option value="">Seleccionar ciudad</option>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>
                        {city}
                        </option>
                    ))}
                    </select>
                </div>
    
                    <div className="row-span-1 col-span-1">
                        <label className="inline-flex items-center text-black">FECHA DE LLEGADA:</label>
                        <input type="date" className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
                    </div>

                    <div className="row-span-1 col-span-1">
                        <label className="inline-flex items-center text-black">FECHA DE SALIDA:</label>
                        <input type="date" className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
                    </div>
                    <div className="row-span-1 col-span-1">
                        <label className="inline-flex items-center text-black">¿CUANTOS?:</label>
                        <select className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500">
                        <option>Dropdown 2</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        </select>
                    </div>  

                    <div className=" inline-flex items-center pt-5 row-span-1 col-span-1">
                        <button className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Buscar
                        </button>
                    </div>
                </div>
            </div>
            </div>

      
            
          </div>
       

        </>

                     
              
  )
}

export default SearchAlojamientos