'use client'
import {signIn, } from "next-auth/react"

function  Login() {
  return (
    <div className='card'>
        <button onClick={()=> signIn()}>Iniciar sesion con google</button>
    </div>      
  )
}

export default Login