'use client'
import React, { useState, useEffect } from 'react';
import supabase from '../../api/auth/lib/supabase'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const SearchAlojamientos = () => {


  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [data, setData] = useState([]);

  const [searchParams, setSearchParams] = useState({
    checkInDate: '',
    checkOutDate: '',
    numPersons: 1,
  });

  const [destIds, setDestIds] = useState([]);




  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      'X-RapidAPI-Key': 'f857b81827msh560bb78e1b6f5ccp1bb8dfjsn6a2c5fea18f4',
      'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com',
    };

    try {

      const locationResponse = await fetch(
        `https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete?text=${selectedCountry}`,
        {
          method: 'GET',
          headers: headers,
        }

      );
      const locations = await locationResponse.json();
      setDestIds(locations);

      const destIdsList = locations.map((location) => location.dest_id).join(',');
      

      const response = await fetch(
        `https://apidojo-booking-v1.p.rapidapi.com/properties/list?dest_ids=${destIdsList}&arrival_date=${searchParams.checkInDate}&departure_date=${searchParams.checkOutDate}&guest_qty=${searchParams.numPersons}`,
        {
          method: 'GET',
          headers: headers,
        },
       )

       if(response.ok){
        const data = await response.json();
        console.log('datos de alojamiento',data)
        setData(data.result);
       
       }else {
        throw new Error('Error en la respuesta de la API');
      }


    }catch (error) {
      console.error('Error al hacer la solicitud API', error);

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
    
        

          <form onSubmit={handleFormSubmit}>

              <div className=" absolute top-0 left-0  w-full flex flex-col justify-center results-cente  h-96 ">
                <div className=" flex results-center justify-center   ">
                    
                <div className="w-auto pt-2 pl-20 pb-2  bg-white border rounded-md shadow-md custom-width">
                
                    <div className="grid grid-cols-6  gap-4 text-black">
                        <div className="row-span-1 col-span-1">
                            <label className="inline-flex results-center text-black">PAIS:</label>
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
            data.map((result) => (
              <SwiperSlide key={result.hotel_id}> 
                <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                  <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${result.main_photo_url})` }}
                    />
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                      <div className="relative flex flex-col gap-3">
                        <h1 className="text-xl lg:text-2xl">{result.hotel_name} </h1>
                        <p className="lg:text-[18px]">Precio {result.price_breakdown.all_inclusive_price}{result.currency} </p>
                        <p>Pais {result.country_trans}</p>
                        <p>Ciudad {result.city_trans}</p>
                        <a href={result.url} className='text-blue-600 underline font-bold'>
                        Reservar
                        </a>
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

export default SearchAlojamientos