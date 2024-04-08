import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Navbar2 from './Navbar2';

export default function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      {user && <p>Hello {user.username}</p> }
      <ul> 
        {!isLoggedIn&&<Navbar2/>}
        {isLoggedIn && 
          <div>
             <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="'/perfil'">Perfil</NavLink></li>
             <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/peliculas">Peliculas</NavLink></li>
             <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/series">Series</NavLink></li>
             <li><button onClick={() => logOutUser()}>Log out</button></li>
          </div>
        }
       
        <li><button onClick={() => navigate(-1)}>Go back</button></li>
        

      </ul>
    </div>
  )
}


