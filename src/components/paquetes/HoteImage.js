import React from 'react'
import Image from 'next/image'


const HotelDetails = ({ hotelData }) => {
 
  const hotelName = hotelData.summary.name;
  const tagline = hotelData.tagline;
  const starRating = hotelData.summary.propertyRating.rating;
  const hotelImages = hotelData.images;

  return (
    <div>
      <h2>{hotelName}</h2>
      <p>{tagline}</p>
      <p>{`Clasificación: ${starRating} estrellas`}</p>
      <div>
        <h2>Imágenes del Hotel</h2>
        {hotelImages.map((image, index) => (
          <div key={index}>
            <Image src={image.image.url} alt={image.image.description} />
            <p>{image.image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelDetails;
