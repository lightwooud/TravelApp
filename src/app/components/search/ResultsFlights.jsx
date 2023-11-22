  const ResultsFlights = ({ data }) => {
    return (

    
        <table className="items-center align-middle  top-0 left-0  w-full flex flex-col justify-center flightOfferss-center pb-5 ">
          
        <tbody>
          {data.length > 0 && (
            data.map((flightOffers) => (
              <tr key={flightOffers.token} className="flight-card items-center flex  justify-center border-separate  border-spacing-5 bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100  text-black  font-semibold  ">
                
                    
                    
                    {flightOffers.segments.map((segments, segIndex) => (
                      <tr key={segIndex}>

                      <td>
                            <p >
                              Hora salida: {segments.departureTime}
                            </p>
                        </td>
                        <td>
                        
                          <p>
                            Hora llegada: {segments.arrivalTime}
                          </p>
                        </td>
                        <td></td>
                        {segments.legs.map((legs, legIndex) =>(
                          <tr key={legIndex} >
                                <td>
                                  <p >
                                  Ciudad origen: {legs.departureAirport.name}
                                  </p>
                                  <p >Numero de vuelo: {legs.flightInfo.carrierInfo.operatingCarrier}{legs.flightInfo.flightNumber}</p>
                                </td>
                                <td>
                                  <p >
                                    Ciudad Destino: {legs.arrivalAirport.name}  
                                  </p>
                                  <p >Clase: {legs.cabinClass}</p>
                                </td>
                          </tr>
                        ))}
                        {segments.legs.map((legs, LegssIndex)=>(
                            <tr key={LegssIndex} >
                          
                                {legs.carriersData.map((carriersData, carryIndex)=>(
                                  <td key={carryIndex} className=" grid-cols-2">
                                        
                                          <p >Aerolinea: {carriersData.name}</p>
                                          <img src={carriersData.logo}></img>
                                          
                                          
                                    </td>
                                    
                                  ))}
                                    
                              </tr>
                            
                              
                            ))}
                            
                      
                    </tr>
                    
                  ))}
                                  
                    <td>
                        <p className=" pb-5 pr-5  text-center">Precio total: {new Intl.NumberFormat('es-us', { style: 'currency', currency: 'COP' }).format(flightOffers.priceBreakdown.totalRounded.units)}</p>
                        <button className="px-4 py-3 mb-2 leading-loose text-md text-center text-white font-semibold bg-gray-600 hover:bg-blue-700 rounded-xl hidden md:flex">Reservar</button>
                    </td>
                
                  </tr>
                        
            ))
            )}
            </tbody>
            </table>
      
    )
  }

  export default ResultsFlights