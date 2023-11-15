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

  const [searchParams, setSearchParams] = useState({
    departureDate:'',
    returnDate:'',
    numberOfPeople: 1,
    currency_code: "COP",  
  });


  const searchDestination = async (cityName) =>{
    
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
        const destino = await response.json();
        console.log("Respuesta completa de la primera API:", destino);
        const destinos = destino.map((dest)=>dest.id).join(',')
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
      const response = await fetch(`https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=${destinationData}&toId=${originData}&departDate=${searchParams.departureDate}&returnDate=${searchParams.returnDate}`,
      {
        method: 'GET',
        headers: headers,
      },
      )

      if(response.ok){
        const data = await response.json();
        console.log("Datos de vuelos:", data);
        setData(data.flightOffers);
      
      }else {
        throw new Error('Error en la respuesta de la API');
      }
    }catch (error){
      throw new Error('Error en la respuesta de la API');
    }
  }
    

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
        <form onSubmit={searchFlights}>

              <div className=" absolute top-0 left-0  w-full flex flex-col justify-center flightOfferss-cente  h-96 ">
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

          <div className="flex items-center justify-center flex-col h-[1300px] ">

          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="max-w-[90%] lg:max-w-[80%] "
          >

          {data.length > 0 &&(
            data.map((flightOffers) => (
              <SwiperSlide key={flightOffers.token}> 
                <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                  <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${flightOffers.legs.carriersData.logo})` }}
                    />
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                      <div className="relative flex flex-col gap-3">
                        <h1 className="text-xl lg:text-2xl">Origen{flightOffers.segments.departureAirport.name} </h1><h1 className="text-xl lg:text-2xl">Destino{flightOffers.segments.arrivalAirport.name} </h1>
                        <p className="lg:text-[18px]">Hora de salida {flightOffers.segments.legs.departureTime}</p>
                        <p className="lg:text-[18px]">Hora de llegada {flightOffers.segments.legs.arrivalTime}</p>
                        <p className="lg:text-[18px]">Clase {flightOffers.segments.legs.cabinClass}{flightOffers.brandedFareInfo.fareName}</p>
                        <p>Numero de vuelo {flightOffers.segments.legs.flightInfo.carrierInfo.operatingCarrier}{flightOffers.segments.legs.flightInfo.flightNumber}</p>
                        <p>Aerolinea {flightOffers.segments.legs.carriersData.name}</p>
                        <p>Precio {flightOffers.priceBreakdown.totalRounded.units}{flightOffers.priceBreakdown.totalRounded.currencyCode}</p>
                      </div>
                      <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                    </div>
                  
                </SwiperSlide>
            )))}
            </Swiper>


          </div>

         
</>
        
);

       

                     
              
        
    
}







export default SearchFlight

