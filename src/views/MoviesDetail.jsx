import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'

 export default function MoviesDetail({match}) {
    const{id} = useParams();
  const [movieDetail, setDetail] = useState(null)

  useEffect (() =>{
    const data =  async () =>{
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`,{
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
        
         {movieDetail && 
                <li key={movieDetail.id} className='item1'>
                    <div  className='contenido1'>
                    <img   src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} alt="" /> 
                      <p>{movieDetail.title}</p>
                    </div>
                    <div className='contenido2'>
                        <p> Año de estreno:{movieDetail.release_date}</p>
                        <p>Descripción:{movieDetail.overview}</p>
                        {movieDetail.genres && (
                            <div className='contenido2'>
                                <p> Generos:</p>
                                <ul className='lista-genero'>
                                    {movieDetail.genres.map(elemento => (
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



