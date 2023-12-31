const getApiAlojamientos = async () => {
  const headers = {
    'X-RapidAPI-Key': 'f857b81827msh560bb78e1b6f5ccp1bb8dfjsn6a2c5fea18f4',
    'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com',
  };

  try {
    const response = await fetch(`https://apidojo-booking-v1.p.rapidapi.com/properties/list?arrival_date=2023-11-09&departure_date=2023-11-20&dest_ids=-578472`, {
      method: 'GET',
      headers: headers,
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error en la respuesta de la API');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default getApiAlojamientos;
