'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import supabase from '../../api/auth/lib/supabase'



  
export default function Navbar() {

  
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
    const [session, setSession] = useState(null)

  
    useEffect(() => {
      setSession(supabase.auth.getSession())

      supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session)
        setSession(session)
      })


    },[])

    

  

    const handleNav = () => {
      setNav(!nav);
    };
  
    useEffect(() => {
      const changeColor = () => {
        if (window.scrollY >= 1) {
          setColor('#ffffff');
          setTextColor('#000000');
        } else {
          setColor('transparent');
          setTextColor('#ffffff');
        }
      };
      window.addEventListener('scroll', changeColor);
    }, []);

    

    const handleLogout = async () => {
      try{
        const { error } = await supabase.auth.signOut()

        if(error) throw error

      }catch(e){
        alert(e.message)
      }

      
    }

  

    return (
        <nav  style={{ backgroundColor: `${color}` }} className="fixed  left-0 right-0 px-4  m-auto  flex justify-between items-center  z-10">
       
        
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
         <div onClick={handleNav} className='block sm:hidden z-50 '>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-200%] right-0 bottom-10 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul  >
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href='/alojamientos'>Alojamientos</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href='/vuelos'>Vuelos</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href='/transportes'>Transportes</Link>
            </li>
          </ul>
        </div>
        
       
        {/* Enlaces de navegación */}

        <ul className="hidden md:flex items-center space-x-6 ">
            <li onClick={handleNav} className="text-lg text-black font-bold hover:text-blue-600">
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className="text-lg text-black font-bold hover:text-blue-600">
              <Link href='/alojamientos'>Alojamientos</Link>
            </li>
            <li onClick={handleNav}className="text-lg text-black font-bold hover:text-blue-600">
              <Link href='/vuelos'>Vuelos</Link>
            </li>
            <li onClick={handleNav} className="text-lg text-black font-bold hover:text-blue-600">
              <Link href='/transportes'>Transportes</Link>
            </li>
          </ul>

      
          {session != null ? (

             <div className="mt-2 md:flex items-center space-x-6 mr-5 text-black font-bold">
               
                   <Link className="px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-gray-700 rounded-xl hidden md:flex" href="/perfil">
                    Perfil
                  </Link>
              
                    <button onClick={handleLogout} className="px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-gray-600 hover:bg-blue-700 rounded-xl hidden md:flex">
                      LogOut
                    </button> 
               
           </div>
          
          ):(
          
          <div className="flex space-x-4">
            <Link className="px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-gray-700 rounded-xl hidden md:flex" href="/login">
              Sign In
            </Link>
            <Link className="px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover-bg-gray-700 rounded-xl hidden md:flex" href="/registro">
              Sign Up
            </Link>
          </div>
        )}
 
        
      </nav>
      
    );
  }



  