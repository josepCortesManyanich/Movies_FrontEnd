import React from 'react'
import { NavLink } from 'react-router-dom'


 export default function Navbar1() {
  return (
    <div>
      <ol>
        <li><NavLink to='/perfil'>Perfil</NavLink></li>
        <li><NavLink to='/peliculas'>Peliculas</NavLink></li>
        <li><NavLink to='/series'>Series</NavLink></li>
      </ol>
    </div>
  )
}


