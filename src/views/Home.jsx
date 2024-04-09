import React from 'react'
import Login from './auth/Login'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';



export default function Home() {



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
        <Link to='/signup'>
        <button>REGISTRO</button>
        </Link>
      </div>
    
      


    </div>
    </>
  )
}
