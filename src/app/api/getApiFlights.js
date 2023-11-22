
    const headers = {
        'X-RapidAPI-Key': '7bb41c4d80mshdc64fc54a15f67dp1545c4jsnb1a9092a3673',
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
    };
      
    export const searchDestination = async (cityName) =>{
        try {
          const response = await fetch(`https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=${cityName}`, {
            method: 'GET',
            headers: headers,
          });
          const destinoData = await response.json();
      
          const airportDestinations = destinoData.data.filter((dest) => dest.type === 'AIRPORT');
          const destinos = airportDestinations.map((dest) => dest.id).join(',');
      
          return destinos;

        } catch (error) {
          console.error('Error al hacer la solicitud API primera', error);
          throw error;
        }
    };

    export const searchFlights = async (destinationId, originId, departureDate, returnDate, currency_code, people, tripType) => {
        try {
            const response = await fetch(`https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=${destinationId}&toId=${originId}&departDate=${departureDate}&returnDate=${returnDate}&currency_code=${currency_code}&adults=${people}&tripType=${tripType}`, {
      method: 'GET',
      headers: headers,
    });

    if (response.ok) {

        const responseData = await response.json();
        const flightOffers = responseData.data.flightOffers || [];
        return flightOffers;

    } else {
      throw new Error('Error en la respuesta de la API');
    }
  } catch (error) {
    console.error('Error en la respuesta de la API', error);
    throw error;
  }
}


 


