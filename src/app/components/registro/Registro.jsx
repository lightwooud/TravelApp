'use client'
import { useState } from 'react';
import Image from "next/image"
import supabase from '../../api/auth/lib/supabase'
import Swal from 'sweetalert2';



export default function Registro() {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fecha_nacimiento, setFecha_nacimiento] = useState('');
  const [nickName, setnickName] = useState('');
  const [celular, setCelular] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const signUpNewUser = async (e) =>{
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: correo,
      password: password,
      options: {
        redirectTo: 'http://localhost:3000/login'
      }
    })
  }

 
  
 
  const handleRegister = async (e) => {
    e.preventDefault();
      const { data, error: insertError } = await supabase
        .from('usuarios') // Reemplaza 'tu_tabla_personalizada' por el nombre de tu tabla
        .upsert([
          {
            nombre,
            apellido,
            fecha_nacimiento,
            nickName,
            celular,
            correo,
            password,
            // Otros campos de la tabla
          },
        ]);
  
      if (insertError) {
        console.error('Error al insertar datos en la tabla personalizada:', insertError.message);
      } else {
        // Utiliza SweetAlert para mostrar un mensaje de éxito
        Swal.fire({
            icon: 'success',
            title: 'Usuario creado con éxito',
            timer: 2000, // Muestra el mensaje durante 2 segundos (ajusta según tus preferencias)
            showConfirmButton: false,
        }).then(() => {
          // Redirige al usuario a la página de inicio de sesión (/login) después de un breve retraso
          setTimeout(() => {
          window.location.href = '/login'; // Cambia "/login" por la URL de tu página de inicio de sesión
          }, 1000); // Redirige después de 2 segundos (ajusta el tiempo según tus preferencias)
      });
      }
    }

  return (
    <section className="overflow-hidden style-login ">
      <div className='w-full p-6 bg-white rounded-xl shadow-md lg:max-w-lg'>
        <div className="w-full ml-5 md:w-auto items-center justify-center">
          <div className="pt-6  pl-10 space-y-1 md:space-y-6 sm:p-8 ">
            <h5 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              CREA UNA CUENTA
            </h5>
            <form onSubmit={(e) => {
              e.preventDefault();
              signUpNewUser(e);
              handleRegister(e);
            }} className="space-y-4 md:space-y-4 justify-center items-center text-black">

              <div>

                <label for="nombre" className='block text-md font-semibold text-gray-800'>Nombre</label>
                <input type="text" value={nombre} placeholder='Ingresa tu nombre' onChange={(e) => setNombre(e.target.value)} className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40' />
              </div>
              <div>
                <label for="apellido"  className="block text-md font-semibold text-gray-800">Apellidos</label>
                <input type="text" placeholder='Ingresa tus apellidos' value={apellido} onChange={(e) => setApellido(e.target.value)} className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40' />
              </div>
              <div>
                <label for="fecha_nacimiento" className="block text-md font-semibold text-gray-800">Fecha Nacimiento</label>
                <input type="date" value={fecha_nacimiento} onChange={(e) => setFecha_nacimiento(e.target.value)}  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'/>
              </div>
              <div>
                <label for="nickName" className="block text-md font-semibold text-gray-800">Nombre de usuario</label>
                <input type="text" value={nickName} placeholder='Ingresa un nombre de usuario' onChange={(e) => setnickName(e.target.value)}  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'/>
              </div>
              <div>
                <label for="celular" className="block text-md font-semibold text-gray-800">Celular</label>
                <input type="number" value={celular} placeholder='Ingresa tu numero de telefono' onChange={(e) => setCelular(e.target.value)} className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'/>
              </div>
              <div>
                <label for="correo" className="block text-md font-semibold text-gray-800">Correo Electrónico</label>
                <input type="correo" value={correo} placeholder='Ingresa un correo electrónico' onChange={(e) => setCorreo(e.target.value)}  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'/>
              </div>
              <div>
                <label for="password" className="block text-md font-semibold text-gray-800">Contraseña</label>
                <input type="password" value={password} placeholder='Ingresa una contraseña' onChange={(e) => setPassword(e.target.value)} className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40'/>
              </div>
              {/* <div className="flex items-start">
                <div className="flex">
                  <input type="text" className="w-5 h-5" />
                </div>
                <div className="ml-3 text-sm">
                  <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
              </div> */}
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold   py-2 mt-2 px-2 h-10 rounded-lg  text-md">Crear cuenta</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Ya tienes una cuenta? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Inicia sesion</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}




