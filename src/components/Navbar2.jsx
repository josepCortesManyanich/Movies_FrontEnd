import React from 'react'
import { NavLink } from 'react-router-dom'


 export default function Navbar2() {
  return (
    <div>
      <ol>
        <li><NavLink to='/'>Inicio</NavLink></li>
        <li><NavLink to='/peliculas'>Peliculas</NavLink></li>
        <li><NavLink to='/series'>Series</NavLink></li>
      </ol>
    </div>
  )
}

