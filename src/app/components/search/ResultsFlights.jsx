import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const ResultsFlights = ({ data }) => {
  return (
    <div className="flex items-center justify-center flex-col h-[1550px]  z-0 ">
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

        {data.length > 0 && (
          data.map((flightOffers) => (
            <SwiperSlide key={flightOffers.token} className="flight-card  flex  justify-center">
                   <p className="text-black">----------------------------------------</p>
                    <label className="text-black">IDA</label>
                {flightOffers.segments.map((segments, segIndex) => (
                  
               
                
      
                  <li key={segIndex}>

                   
                    <p className="text-black">
                       Hora salida: {segments.departureTime}
                    </p>
                    <p className="text-black">
                      Hora llegada: {segments.arrivalTime}
                       
                    </p>
                    {segments.legs.map((legs, legIndex) =>(
                        <li key={legIndex}>
                          <p className="text-black">
                            Ciudad origen: {legs.departureAirport.name}
                          </p>
                          <p className="text-black">
                            Ciudad Destino: {legs.arrivalAirport.name}  
                          </p>
                          <p className="text-black">Numero de vuelo: {legs.flightInfo.carrierInfo.operatingCarrier}{legs.flightInfo.flightNumber}</p>
                          <p className="text-black">Clase: {legs.cabinClass}</p>
                      
                          {legs.carriersData.map((carriersData, carryIndex)=>(
                            <li key={carryIndex} className=" grid-cols-2">
                                  <p className="text-black">Aerolinea: {carriersData.name}</p>
                                  <img src={carriersData.logo}></img>
                                 
                                  
                            </li>
                           
                            
                          ))}
                          
                          <p className="text-black">----------------------------------------</p>
                              <label className="text-black">REGRESO
                              </label>
                        </li>
                    ))}
                    
                  </li>
                ))}
  
                  <p className="text-black">Precio total: {flightOffers.priceBreakdown.totalRounded.units} {flightOffers.priceBreakdown.totalRounded.currencyCode}</p>
                 
                
                    </SwiperSlide>
           ))
          )}
          </Swiper>
        </div>
  )
}

export default ResultsFlights