'use client'
import React, { useState, useEffect } from 'react';
import supabase from '../../api/auth/lib/supabase'
import {searchDestination, searchFlights} from "../../api/getApiFlights"
import ResultsFlights from './ResultsFlights';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const SearchFlight = () => {

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [data, setData] = useState([]);

  const [searchParams, setSearchParams] = useState({
    departureDate:'',
    returnDate:'',
    numberOfPeople: '',
    currency_code: "COP", 
    type: "AIRPORT",
    tripType:'', 
  });

  const performSearch = async () => {
    try {
      const destinationData = await searchDestination(selectedCity);
      const originData = await searchDestination(selectedCountry);
      const flightData = await searchFlights(
        destinationData,
        originData,
        searchParams.departureDate,
        searchParams.returnDate,
        searchParams.currency_code,
        searchParams.numberOfPeople,
        searchParams.tripType
      );
      
      setData(flightData);
    } catch (error) {
      console.error('Error performing search:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    performSearch();
  };

  {/*const searchDestination = async (cityName) =>{
    
    const headers = {
      'X-RapidAPI-Key': '8b7aa61bb9mshff93fad9a363e2ap102b86jsn8c63cc489812',
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    };
    try {
      const response = await fetch(`https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=${cityName}`,
      {
        method: 'GET',
        headers: headers,
      },
      )
      const destinoData = await response.json();

      const airportDestinations = destinoData.data.filter((dest) => dest.type === 'AIRPORT');
  
      console.log("Datos de los aeropuertos:", airportDestinations);
  
      const destinos = airportDestinations.map((dest) => dest.id).join(',');
  
      return destinos;

    }catch(error) {
      console.error('Error al hacer la solicitud API primera', error);
    }
  }

  const searchFlights = async (e) =>{
    e.preventDefault();
    const headers = {
      'X-RapidAPI-Key': '8b7aa61bb9mshff93fad9a363e2ap102b86jsn8c63cc489812',
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    };
   
      const destinationData = await searchDestination(selectedCity);
      const originData = await searchDestination(selectedCountry);
    try {
      const response = await fetch(`https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=${destinationData}&toId=${originData}&departDate=${searchParams.departureDate}&returnDate=${searchParams.returnDate}&currency_code=${searchParams.currency_code}`,
      {
        method: 'GET',
        headers: headers,
      },
      )

      if(response.ok){
        
        const responseData = await response.json();
        const flightOffers = responseData.data.flightOffers || [];
        console.log("Datos de vuelos:", flightOffers);
        setData(flightOffers);
      
      }else {
        throw new Error('Error en la respuesta de la API');
      }

    }catch (error){
      throw new Error('Error en la respuesta de la API');
    }
  }
*/}

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
    

     

      <form onSubmit={handleSearch}>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-lg h-96">
          {/* <div className=" flex flightOfferss-center justify-center   "> */}

          <div className="w-full bg-white rounded-2xl shadow-md mx-auto px-4 py-7">

            <div className="flex gap-4 text-black">
              <div className="w-full  sm:w-1/2 md:w-1/5">
                <label className="inline-flex items-center text-gray-900 text-sm font-medium mb-1">CIUDAD ORIGEN:</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="block w-full bg-white py-2 px-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                >
                  <option value="" className="text-gray-900 text-sm font-medium bg-white"
                    style={{ color: 'black' }}>Ciudad de origen</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/5">
                <label className="inline-flex items-center text-gray-900 text-sm font-medium mb-1">CIUDAD DESTINO:</label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="block w-full bg-white py-2 px-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                >
                  <option value="" className="text-gray-900 text-sm font-medium bg-white"
                    style={{ color: 'black' }}>Ciudad de destino</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/5">
                <label className="inline-flex items-center text-gray-900 text-sm font-medium mb-1">FECHA DE SALIDA:</label>
                <input type="date"
                  value={searchParams.departureDate}
                  onChange={(e) => setSearchParams({ ...searchParams, departureDate: e.target.value })}

                  className="w-full  border-0 border-gray-300  focus:outline-none focus:border-gray-500 inline-flex  justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" />
              </div>

              <div className="w-full sm:w-1/2 md:w-1/5">
                <label className="inline-flex items-center text-gray-900 text-sm font-medium mb-1">FECHA DE REGRESO:</label>
                <input type="date"
                  value={searchParams.returnDate}
                  onChange={(e) => setSearchParams({ ...searchParams, returnDate: e.target.value })}
                  className="w-full  border-0 border-gray-300  focus:outline-none focus:border-gray-500 inline-flex  justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" />
              </div>
              <div className="w-full sm:w-1/2 md:w-1/5">
                <label className="inline-flex items-center text-gray-900 text-sm font-medium mb-1">¿CUANTOS?:</label>
                <input type="number"
                  value={searchParams.numberOfPeople}
                  onChange={(e) => setSearchParams({ ...searchParams, numberOfPeople: e.target.value })}
                  className="w-full  border-0 border-gray-300  focus:outline-none focus:border-gray-500 inline-flex  justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" />

              </div>

              <div className="w-full sm:w-1/3 md:w-1/5 flex items-end justify-center">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold  w-72 py-2 px-2 h-10 rounded-lg  text-md">
                  Buscar
                </button>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </form>


 

    
             
              {data.length > 0 ? (
                 <ResultsFlights data={data} />
                ) :(
                  <div className="w-full h-screen">
                    <video muted autoPlay loop src="/video.mp4" className="w-full h-full object-cover"></video>
                  
                  </div>
                )}
                 
                 
                        


</>
        
);      
    
}

export default SearchFlight
