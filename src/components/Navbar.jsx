import React, { useContext } from 'react';
import { NavLink} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export default function Navbar() {
  const { logOutUser } = useContext(AuthContext);

  
  return (
    <div className='header'>
      <header className='menu'>
      <ul> 
    
          <div className='navbar'>
          <li><button className='navbar-button'><NavLink activeClassName="selected" to="/perfil">PERFIL</NavLink></button></li>
          <li><button className='navbar-button'><NavLink activeClassName="selected" to="/peliculas">PELICULAS</NavLink></button></li>
          <li><button className='navbar-button'><NavLink activeClassName="selected" to="/series">SERIES</NavLink></button></li>
          <li> <button className='navbar-button' ><NavLink exact activeClassName="selected" to="/" onClick={() => logOutUser()}>LOG OUT</NavLink></button></li>
          </div>
        
        
      </ul>
      </header>
    </div>
  )
}

