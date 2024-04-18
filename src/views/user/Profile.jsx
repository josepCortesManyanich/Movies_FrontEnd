import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'

function Profile() {
    const [favorita, setFavoritas] = useState(null)
    const [vistas, setVistas] = useState(null)

    useEffect(() => {
        const data = async () =>{
            try {
                const storedToken = localStorage.getItem('authToken');
                const response = await axios.get('http://localhost:7000/api/user/me', {
                    headers: {
                        Authorization: `Bearer ${storedToken}`
                    }
                })
                console.log(response.data)
                setFavoritas(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        data()
    },[])

    useEffect(() => {
        const data = async () =>{
            try {
                const storedToken = localStorage.getItem('authToken');
                const response = await axios.get('http://localhost:7000/api/user/me', {
                    headers: {
                        Authorization: `Bearer ${storedToken}`
                    }
                })
                console.log(response.data)
                setVistas(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        data()
    },[])

     return (
        <>
        <header className='header-profile'><Navbar/></header>
        
        <div className='profile'>
                
        
                <div className='vistas-favoritas'>
                        <div className='vistas'>

                            {vistas && vistas.data.vistas && (
                                    <div>
                                        <div className='titulo'> <h3> Películas Vistas</h3></div>
                                        
                                    
                                        <ul className='list'>
                                            {vistas.data.vistas.map((elem) => (
                                                <li key={elem._id} className='item'>
                                                    <div className='contenido'>
                                                        <img src={elem.apiImage} alt="" />
                                                        <p>{elem.apiTitle}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}



                        </div>

                        <div className='favoritas'>
                        
                            {favorita && favorita.data.favoritas && (
                                <div>
                                    <div className='titulo'> <h3> Películas Favoritas</h3></div>
                                
                                    <ul className='list'>
                                        {favorita.data.favoritas.map((elem) => (
                                            <li key={elem._id} className='item'>
                                                <div className='contenido'>
                                                    <img src={elem.apiImage} alt="" />
                                                    <p>{elem.apiTitle}</p>
                                                </div>
                                                
                                                </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                 <div className='contenedor-edit'>
                        
                        <form className='formulario-edit'>
                        <h4>{vistas && vistas.data.username}</h4>
                        <label className='formulario-edit-label'>Nombre de usuario:</label>
                            <input 
                            required type="text" 
                            name="username" 
                        />
                    
                        <label className='contenedor-inputImage'> Imagen:</label>
                            <input type="file" name="image"   />
                            <br/>
                            <br />
                        <label  className='formulario-edit-label'>Email:</label>
                        <input 
                        
                            required type="email" 
                            name="email" 
                            
                            />

                        <button type="submit">EDITA TU PERFIL</button>
                
                        </form>
                </div>
        
        </div>
        </>
    );
}

export default Profile
