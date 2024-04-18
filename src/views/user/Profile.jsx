import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


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
        
        <div>

            {vistas && vistas.data.vistas && (
                    <div>
                        <h4> Películas Vistas:</h4>
                    
                        <ul>
                            {vistas.data.vistas.map((elem) => (
                                <li key={elem._id}>
                                    <img src={elem.apiImage} alt="" />
                                    <p>{elem.apiTitle}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}



        </div>

        <div>
           
            {favorita && favorita.data.favoritas && (
                <div>
                    <h4>Mis Películas Favoritas:</h4>
                   
                    <ul>
                        {favorita.data.favoritas.map((elem) => (
                            <li key={elem._id}>
                                <img src={elem.apiImage} alt="" />
                                <p>{elem.apiTitle}</p>
                                </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
        </>
    );
}

export default Profile
