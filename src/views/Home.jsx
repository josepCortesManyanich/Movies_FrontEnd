import React from 'react'
import Login from './auth/Login'
import Signup from './auth/Signup'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Movies from './Movies';

export default function Home() {

  const handleSign = (() => {
    <Link to ='/Signup' elem={Signup}/>
  })

  return (
    <>
     <><Navbar/></>
    <div className='contenedor-home'>
     
       
      <div className='bienvenida'>
        <h3> BIENVENIDO A BADAL MEDIA</h3>
      </div>
          
      <div className='bienvenida1'>
          <h2 >Tus peliculas y series favoritas en un click</h2>
      </div>
        
     <div className='seccion-login'> 
        <Login></Login>
      </div>

      <div className='seccion-signup'>
        <p>¿Aún no estas registrado?</p>
        <button onClick={handleSign}>REGISTRO</button>
       
      </div>
    
      


    </div>
    </>
  )
}
