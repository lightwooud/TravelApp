'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import axios from 'axios';

const Paquetes = () => {
  const [hotelData, setHotelData] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      const options = {
        method: 'GET',
        url: 'https://hotels-com-provider.p.rapidapi.com/v2/hotels/details',
        params: {
          domain: 'AE',
          hotel_id: '1105156',
          locale: 'en_GB'
        },
        headers: {
          'X-RapidAPI-Key': '08a1fb6c23msh19f4b2060d6ee5ep11ee63jsne1f03cd3d1ee',
          'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setHotelData(response.data); // Almacenar los datos en el estado
      } catch (error) {
        console.error(error);
      }
    };

    fetchHotelDetails();
  }, []);

  if (!hotelData) {
    return <div>Cargando...</div>;
  }

  // Renderizar los detalles y fotos del hotel
  return (
    <div>
      <h1>{hotelData.name}</h1>
      <p>{hotelData.description}</p>
      <div>
        {hotelData.images.map((image, index) => (
          <Image key={index} src={image.url} alt={`Imagen ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Paquetes;
