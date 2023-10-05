'use client'
import { useState } from 'react'
import Image from 'next/image'


function MobileNav({ open, setOpen }) {
    const closeMobileNav = () => {
      setTimeout(() => {
        setOpen(!open);
      }, 100);
    };
  
    return (
      <div
        className={`absolute top-0 left-0 h-screen w-screen transform  ${
          open ? "-translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out filter drop-shadow-md`}
      >
     
        
        <div className="flex flex-col ml-4 mt-40 items-center ">
            <a
                className="text-xl text-gray-600 font-bold hover:text-blue-400 my-2"
                href="/home"
                onClick={closeMobileNav}
                >
                Home
            </a>
          <a
            className="text-lg text-gray-600 font-bold hover:text-blue-400 my-2"
            href="/vuelos"
            onClick={closeMobileNav}
          >
            Vuelos
          </a>
          <a
            className="text-lg text-gray-600 font-bold hover:text-blue-400 my-2"
            href="/alojamientos"
            onClick={closeMobileNav}
          >
            Alojamientos
          </a>
          <a
            className="text-lg text-gray-600 font-bold hover:text-blue-400 my-2"
            href="/transportes"
            onClick={closeMobileNav}
          >
            Transportes
          </a>
        </div>
      </div>
    );
  }
  
  export default function Navbar() {
    const [open, setOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setOpen(!open);
    };
  
    return (
        <nav className="fixed top-0 left-0 right-0 px-4 py-2 flex justify-between items-center bg-white">
        {/* MobileNav */}
        <MobileNav open={open} setOpen={setOpen} />
        
        {/* Logo */}
        <div className="w-full ml-5 md:w-auto">
          <a href="/">
            <Image
              src="/travelapp.svg"
              alt="TravelApp Logo"
              width={120}
              height={20}
              priority
            />
          </a>
        </div>
        
        {/* Botón hamburguesa para pantallas móviles */}
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={toggleMobileMenu}
        >
          {/* Botón hamburguesa */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-3.5' : ''
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-3.5' : ''
            }`}
          />
        </div>
        
        {/* Enlaces de navegación */}
        <ul className="hidden md:flex items-center space-x-6">
          <li><a className="text-lg text-gray-600 font-bold hover:text-blue-400" href="#">Home</a></li>
          <li><a className="text-lg text-gray-600 font-bold hover:text-blue-400" href="#">Vuelos</a></li>
          <li><a className="text-lg text-gray-600 font-bold hover:text-blue-400" href="#">Transportes</a></li>
          <li><a className="text-lg text-gray-600 font-bold hover:text-blue-400" href="#">Alojamientos</a></li>
        </ul>
        
        {/* Enlaces de inicio de sesión y registro */}
        <div className="mt-2 md:flex items-center space-x-6 mr-5">
          <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-gray-600 hover:bg-blue-700 rounded-xl hidden md:flex">
            Sign in
          </a>
          <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-gray-700 rounded-xl hidden md:flex">
            Sign Up
          </a>
        </div>
      </nav>
      
    );
  }