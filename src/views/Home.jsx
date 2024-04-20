import React, {useContext} from 'react'
import Login from './auth/Login'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Navbar2 from '../components/Navbar2';


export default function Home() {
  const { isLoggedIn } = useContext(AuthContext);



  return (
    <>
    
    {!isLoggedIn&&<Navbar2/>}
    {isLoggedIn && <Navbar/>}
    <div className='contenedor-home'>
    
       
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
