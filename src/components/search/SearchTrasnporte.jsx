'use client'
import React from 'react'

const SearchTrasnporte = () => {
  return (
    <>
        <div className="w-full">
        <video muted autoPlay loop src="/video.mp4" className="w-full"></video>
      </div>
    
        <div className=" absolute top-0 left-0  w-full flex flex-col justify-center items-center h-80 ">

          
            <div className="flex items-center justify-center   ">
                
            <div className="w-auto pt-2 pl-20 pb-2  bg-white border rounded-md shadow-md custom-width">
                
                    <div className="space-y-4">
                    <div className="text-black space-x-4">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox text-black" /> IDA Y REGRESO
                    </label>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox text-indigo-600" /> IDA
                    </label>
                    </div>
      
                <div className="grid grid-cols-5  gap-4 text-black">
                    <div className="row-span-1 col-span-1">
                        <label className="inline-flex items-center text-black">ORIGEN:</label>
                        <select className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500">
                        <option>Dropdown 1</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        </select>
                    </div>

                    <div className="row-span-1 col-span-1">
                        <label className="inline-flex items-center text-black">Regreso:</label>
                        <select className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500">
                        <option>Dropdown 2</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        </select>
                    </div>

                    <div className="row-span-1 col-span-1">
                        <label className="inline-flex items-center text-black">FECHA DE IDA:</label>
                        <input type="date" className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
                    </div>

                    <div className="row-span-1 col-span-1">
                        <label className="inline-flex items-center text-black">FECHA DE REGRESO:</label>
                        <input type="date" className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
                    </div>

                    <div className=" inline-flex items-center pt-5 row-span-1 col-span-1">
                        <button className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Buscar
                        </button>
                    </div>
                </div>
            </div>
            </div>

      
            
          </div>
        </div>

        </>

                     
              
  )
}

export default SearchTrasnporte