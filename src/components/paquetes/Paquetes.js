'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function Paquetes() {
  const [data, setData] = useState([]);

  

  useEffect(() => {

    const headers = {
      'X-RapidAPI-Key': '08a1fb6c23msh19f4b2060d6ee5ep11ee63jsne1f03cd3d1ee',
      'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com',
    };

    fetch('https://apidojo-booking-v1.p.rapidapi.com/properties/detail?hotel_id=1720410&departure_date=2023-10-20&arrival_date=2023-10-12', {  
    method: 'GET',
    headers: headers,})
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error:', error));
  }, []);

 

  return (
    
    <div>
    {data.map((item) => (
      <div className=' top-0 left-0  w-full flex flex-col justify-center items-center 80h- text-black' key={item.id}>
        <div className='card bg-white border-spacing-9 items-center p-4'>
          {item.rooms && item.rooms['172041005'] && item.rooms['172041005'].photos && (
            <img
              src={item.rooms['172041005'].photos[0].url_original} // Accedemos a la primera foto del arreglo
              alt="Foto del alojamiento"
              className='w-20 h-20 items-center align-middle'
            />
          )}
          <p className=' font-semibold'>{item.hotel_name}</p>
          <p>Pais {item.country_trans} Ciudad {item.city}</p>
          <p>Precio: {item.composite_price_breakdown.gross_amount_per_night.value} USD</p>
          <a href={item.url} className='text-blue-600 underline font-bold'>Reservar</a>
        </div>
      </div>
    ))}
  </div>
  );
}

export default Paquetes;
