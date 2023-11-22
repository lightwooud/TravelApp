'use client'
import {useEffect, useState } from 'react';
import supabase from '../../api/auth/lib/supabase'
import Swal from 'sweetalert2';

const Perfil = () => {



    const [session, setSession] = useState(null)
    const [user, setUser] = useState(null);
    const [editedCelular, setEditedCelular] = useState('');

    useEffect(() => {

      const fetchUserDataFromDatabase = async (email) => {
        try {
          const { data, error } = await supabase
            .from('usuarios')
            .select('nombre, apellido, fecha_nacimiento, nickName, celular')
            .eq('correo', email)
            .single();
      
          if (error) {
            console.error('Error al consultar la base de datos:', error);
            return;
          }
      
          setUser(data);
        } catch (error) {
          console.error('Error en la consulta de la base de datos:', error);
        }
      };

      const session = supabase.auth.getSession();
      setSession(session);
    
      const onAuthStateChanged = (event, session) => {
        console.log(event, session);
        setSession(session);
        if (session) {
          fetchUserDataFromDatabase(session.user.email);
        }
      };
  
      const { data: authListener } = supabase.auth.onAuthStateChange(onAuthStateChanged);
  
     
    }, []);

    const handleSaveChanges = async () => {
      try {
        const { data, error } = await supabase
          .from('usuarios')
          .update({ celular: editedCelular })
          .eq('correo', session.user.email);
  
        if (error) {
          alert(e.message)
          Swal.fire({
            icon: 'failed',
            title: 'Actualizacion fallida',
            timer: 1000,
            showConfirmButton: false,
        }).then(() => {
            setTimeout(() => {
            window.location.href = '/Perfil'; 
            }, 1000); 
        });
        }else{
          setUser({ ...user, celular: editedCelular });
          setEditedCelular(''); 
          Swal.fire({
            icon: 'success',
            title: 'Actualizacion Exitosa',
            timer: 1000, 
            showConfirmButton: false,
        }).then(() => {
            setTimeout(() => {
            window.location.href = '/'; 
            }, 1000); 
        });

        }
      } catch (error) {
        console.error('Error en la actualización de la base de datos:', error);
      }
    };
    
  
     
    return (
      <div className="min-h-screen flex items-center justify-center ">
        {session ? (
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg text-gray-700">
            <label htmlFor="perfil" className="block  text-lg  text-center font-bold text-gray-700 pb-5">PERFIL</label>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
              <input id="email" type="text" value={session.user.email} disabled className="w-full p-2 border rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="usuario" className="block text-sm font-bold text-gray-700">Usuario</label>
              <input id="usuario" type="text" value={user?.nickName  || 'N/A'} disabled className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label htmlFor="celular" className="block text-sm font-bold text-gray-700">
                Celular
              </label>
              <input
                id="celular"
                type="text"
                value={editedCelular || (user ? user.celular : 'N/A')}
                onChange={(e) => setEditedCelular(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
            
            {/* Mostrar otros datos del usuario obtenidos de la base de datos */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-bold text-gray-700">Nombre</label>
              <input id="nombre" type="text" value={user?.nombre || 'N/A'} disabled className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label htmlFor="apellido" className="block text-sm font-bold text-gray-700">Apellido</label>
              <input id="apellido" type="text" value={user?.apellido || 'N/A'} disabled className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label htmlFor="fechaNacimiento" className="block text-sm font-bold text-gray-700 ">Fecha de Nacimiento</label>
              <input id="fechaNacimiento" type="text" value={user?.fecha_nacimiento.split('T')[0]   || 'N/A'} disabled className=" w-full p-2 border rounded-md" />
            </div>
            <div className='pt-5 flex items-center justify-center'>
              <button onClick={handleSaveChanges} className=' bg-blue-200'>Guardar</button>
            </div>
          </div>
          
        ) : (
          <p className="text-red-500 text-2xl">NO HAY DATOS QUE MOSTRAR</p>
        )}

      </div>
    );
    

}


export default Perfil