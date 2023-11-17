'use client'
import React, { useState, useEffect } from 'react';
import supabase from '../../api/auth/lib/supabase'
import {searchDestination, searchFlights} from "../../api/getApiFlights"
import ResultsFlights from './ResultsFlights';


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
    type: "AIRPORT" 
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
        searchParams.numberOfPeople
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

              <div className=" absolute top-0 left-0  w-full flex flex-col justify-center flightOfferss-cente   h-60 ">
                <div className=" flex flightOfferss-center justify-center   ">
                    
                <div className="w-auto pt-2 pl-20 pb-2  bg-white border rounded-md shadow-md custom-width">
                
                    <div className="grid grid-cols-6  gap-4 text-black">
                        <div className="row-span-1 col-span-1">
                            <label className="inline-flex flightOfferss-center text-black">CIUDAD ORIGEN:</label>
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
                            <label className="inline-flex flightOfferss-center text-black">CIUDAD DESTINO:</label>
                            <select
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.target.value)}
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
                            <label className="inline-flex flightOfferss-center text-black">FECHA DE SALIDA:</label>
                            <input type="date"
                           value={searchParams.departureDate}
                           onChange={(e) =>setSearchParams({ ...searchParams, departureDate: e.target.value })}
                            
                            className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
                        </div>

                        <div className="row-span-1 col-span-1">
                            <label className="inline-flex flightOfferss-center text-black">FECHA DE REGRESO:</label>
                            <input type="date" 
                            value={searchParams.returnDate}
                            onChange={(e) =>setSearchParams({ ...searchParams, returnDate: e.target.value })}
                             className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
                        </div>
                        <div className="row-span-1 col-span-1">
                            <label className="inline-flex flightOfferss-center text-black">¿CUANTOS?:</label>
                            <input type="number"
                            value={searchParams.numberOfPeople}
                            onChange={(e) =>setSearchParams({ ...searchParams, numberOfPeople: e.target.value })}
                             className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
                            
                        </div>  

                        <div className=" inline-flex flightOfferss-center pt-5 row-span-1 col-span-1">
                            <button  type="submit" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Buscar
                            </button>
                        </div>
                    </div>
                </div>
                </div>

          
                </div>
            
          
          </form>


         
    
         
            <ResultsFlights data={data} />
   
                              


</>
        
);      
    
}

export default SearchFlight
