import React from 'react'
import { NavLink } from 'react-router-dom'


 export default function Navbar2() {
  return (
    <div className='header-1'>
      <header className='menu-1'>
      <ul>
        <div className='navbar-1'>
          <li><button className='navbar-button'><NavLink to='/'>Inicio</NavLink></button></li>
          <li><button className='navbar-button'><NavLink to='/peliculas'>Peliculas</NavLink></button></li>
          <li><button className='navbar-button'><NavLink to='/series'>Series</NavLink></button></li>
        </div>
      </ul>

      </header>
    </div>
  )
}

