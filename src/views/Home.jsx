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
    <div>
      <ul>
        
        
       <Navbar/>
        <h3> BIENVENIDO A BADAL MEDIA</h3>
        <h2>Tus peliculas y series favoritas en un click</h2>

     <div> 
        <Login></Login>
      </div>

      <div>
        <p>¿Aún no estas registrado?</p>
        <button onClick={handleSign}>REGISTRO</button>
       
      </div>
      </ul>
      


    </div>
  )
}
