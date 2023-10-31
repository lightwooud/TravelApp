'use client'
// components/Paquetes.js
import React, { useEffect, useState } from 'react';
import getApiAlojamientos from '@/app/api/getApiAlojamientos';

export default function Paquetes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await getApiAlojamientos();
        setData(apiData.result);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="hotel-grid absolute  top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center border-black bg-emerald-100">

      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => (
          <div className='hotel-card  ' key={item.id}>
            <div className='card bg-white border-spacing-9 items-center p-4 text-black'  style={{ height: '200px' }}>
              <img src={item.main_photo_url} alt='Hotel' />
              <p className='font-semibold'>{item.hotel_name}</p>
              <p>Precio {item.price_breakdown.all_inclusive_price}{item.currency}</p>
              <p>Pais {item.country_trans} Ciudad {item.city}</p>
              <a href={item.url} className='text-blue-600 underline font-bold'>
                Reservar
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
