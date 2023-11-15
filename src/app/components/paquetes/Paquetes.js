'use client'
// components/Paquetes.js
import React, { useEffect, useState } from 'react';
import getApiAlojamientos from '../../api/getApiAlojamientos';

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








/*import React, { useState } from 'react';

const MyPage = () => {
  const [searchParams, setSearchParams] = useState({
    destination: '',
    checkInDate: '',
    checkOutDate: '',
    numPersons: 1,
  });
  const [destIds, setDestIds] = useState([]);
  const [hotels, setHotels] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Paso 1: Obtener "dest_ids" usando la API de autocompletar ubicaciones.
    try {
      const locationResponse = await fetch(
        `https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete?text=${searchParams.destination}`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'TU_API_KEY',
          },
        }
      );
      const locations = await locationResponse.json();
      setDestIds(locations);

      // Paso 2: Obtener hoteles usando los "dest_ids".
      const destIdsList = locations.map((location) => location.dest_id).join(',');
      const propertyResponse = await fetch(
        `https://apidojo-booking-v1.p.rapidapi.com/properties/list?dest_ids=${destIdsList}&checkin=${searchParams.checkInDate}&checkout=${searchParams.checkOutDate}&adults=${searchParams.numPersons}`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'TU_API_KEY',
          },
        }
      );
      const availableHotels = await propertyResponse.json();
      setHotels(availableHotels);
    } catch (error) {
      console.error('Error al hacer la solicitud API', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Destino"
          value={searchParams.destination}
          onChange={(e) =>
            setSearchParams({ ...searchParams, destination: e.target.value })
          }
        />
        <input
          type="date"
          placeholder="Fecha de Ida"
          value={searchParams.checkInDate}
          onChange={(e) =>
            setSearchParams({ ...searchParams, checkInDate: e.target.value })
          }
        />
        <input
          type="date"
          placeholder="Fecha de Regreso"
          value={searchParams.checkOutDate}
          onChange={(e) =>
            setSearchParams({ ...searchParams, checkOutDate: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Personas"
          value={searchParams.numPersons}
          onChange={(e) =>
            setSearchParams({ ...searchParams, numPersons: e.target.value })
          }
        />
        <button type="submit">Buscar Hoteles</button>
      </form>
      {destIds.length > 0 && (
        <div>
          <h2>Destino IDs:</h2>
          <ul>
            {destIds.map((location) => (
              <li key={location.dest_id}>{location.dest_id}</li>
            ))}
          </ul>
        </div>
      )}
      {hotels.length > 0 && (
        <div>
          <h2>Hoteles Disponibles:</h2>
          <ul>
            {hotels.map((hotel) => (
              <li key={hotel.hotel_id}>{hotel.hotel_name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MyPage;
 */