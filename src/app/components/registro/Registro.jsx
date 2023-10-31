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
            }, 2000); // Redirige después de 2 segundos (ajusta el tiempo según tus preferencias)
        });
      }
    }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="pt-6  pl-10 space-y-4 md:space-y-6 sm:p-8 ">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        CREA UNA CUENTA
                    </h1>
                    <form  onSubmit={handleRegister} className="space-y-4 md:space-y-6 justify-center items-center text-black">
                        <div>
                            <label for="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                        </div>
                        <div>
                            <label for="apellido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellidos</label>
                            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                        </div>
                        <div>
                            <label for="fecha_nacimiento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha Nacimiento</label>
                            <input type="date" value={fecha_nacimiento} onChange={(e) => setFecha_nacimiento(e.target.value)} />
                        </div>
                        <div>
                            <label for="nickName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                            <input type="text" value={nickName} onChange={(e) => setnickName(e.target.value)} />
                        </div>
                        <div>
                            <label for="celular" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Celular</label>
                            <input type="number"  value={celular} onChange={(e) => setCelular(e.target.value)} />
                        </div>
                        <div>
                            <label for="correo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="correo" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="flex items-start">
                            <div className="flex">
                                <input type="text" className="w-5 h-5"/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Crear cuenta</button>
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




