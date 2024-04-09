import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'

 export default function SeriesDetail({match}) {
const{id} = useParams();
const [serieDetail, setDetail] = useState(null)

  useEffect (() =>{
    const data =  async () =>{
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}`,{
                params: {
                language: 'en-US',
                },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDMyNTc0YTQzZTMyZTAwNGFmNWVhMmJjZDU5MjdlZiIsInN1YiI6IjY2MTFhYjgzMTEwOGE4MDE2NDhjN2VlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sVMODQOs97ekq4hGuXhLckNoM4_OM9Fj9yqomyzwcZ4'
                },
            });
            console.log(response.data)
            setDetail(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    data()
  },[id])

  return (
    <div>
    <Navbar/>
    <div className='detalle'>
        
         {serieDetail && 
                <li key={serieDetail.id} className='item1'>
                    <div  className='contenido1'>
                    <img   src={`https://image.tmdb.org/t/p/w500/${serieDetail.poster_path}`} alt="" /> 
                      <p>{serieDetail.name}</p>
                    </div>
                    <div className='contenido2'>
                        <h4>Año de estreno: </h4> 
                        <p> {serieDetail.first_air_date}</p>
                        <h4>Descripción: </h4> 
                       <p>{serieDetail.overview}</p>
                        {serieDetail.genres && (
                            <div className='contenido2'>
                                <h4>Genero:</h4>
                                <ul className='lista-genero'>
                                    {serieDetail.genres.map(elemento => (
                                        <li key={elemento.id} className='item-genero'>{elemento.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        
                    
                        <div className='buttons1'>
                            <button className='buttonMg1'></button>
                            <button className='buttonVisto1'></button>
                         </div>
                    </div>
                </li>
            }
        
    </div>
    </div>
  )
}
