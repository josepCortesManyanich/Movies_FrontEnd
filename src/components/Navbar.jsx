import React, { useContext } from 'react';
import { NavLink} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Navbar2 from './Navbar2';

export default function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  
  return (
    <div className='header'>
      <header className='menu'>
      {user && <p>Hello {user.username}</p> }
      <ul> 
        {!isLoggedIn&&<Navbar2/>}
        {isLoggedIn && 
          <>
             <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/perfil">Perfil</NavLink></li>
             <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/peliculas">Peliculas</NavLink></li>
             <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/series">Series</NavLink></li>
             <li><button className='navbar-button' onClick={() => logOutUser()}>Log out</button></li>
          </>
        }
        
      </ul>
      </header>
    </div>
  )
}


