import React from 'react'
import { NavLink } from 'react-router-dom'


 export default function Navbar1() {
  return (
    <div>
      <ol>
        <li><NavLink to='/perfil'>Perfil</NavLink></li>
        <li><NavLink to='/peliculas'>Perfil</NavLink></li>
        <li><NavLink to='/series'>Perfil</NavLink></li>
      </ol>
    </div>
  )
}


