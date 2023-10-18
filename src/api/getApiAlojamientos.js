const getApiAlojamientos = async (DEST_ID, hotel_id) => {
  const headers = {
    'X-RapidAPI-Key': '08a1fb6c23msh19f4b2060d6ee5ep11ee63jsne1f03cd3d1ee',
    'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com',
  };

  try {
    const response = await fetch(`https://apidojo-booking-v1.p.rapidapi.com/properties/list?arrival_date=2023-10-16&departure_date=2023-10-20&dest_ids=-578472`, {
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
