
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'






 export default function Movies() {
    
    /* el use State es declarado null ya que va a recibir los datos de forma asíncrona*/ 
    const [movies , setMovies] = useState(null)

   /* este hook es para cargar las imagenes de la base de datos cuando nos ponemos en la vist */
   
   useEffect (() => {
        const data = async () => {
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDMyNTc0YTQzZTMyZTAwNGFmNWVhMmJjZDU5MjdlZiIsInN1YiI6IjY2MTFhYjgzMTEwOGE4MDE2NDhjN2VlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sVMODQOs97ekq4hGuXhLckNoM4_OM9Fj9yqomyzwcZ4'
                }
              };
            try {
                const response =  await axios(options)
                setMovies(response.data.results)
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        data()

    }, [])
    
 
    return (
    <div>
       
      <ul className='list'>
        {movies && movies.map( elemento => {
           return( 
              <li key={elemento.id} className='item'> 
                  <div className='contenido'>
                      <img   src={`https://image.tmdb.org/t/p/w500/${elemento.poster_path}`} alt="" /> 
                      <p>{elemento.title}</p>
                  </div>
                </li> )
        })}
      </ul>
    </div>
  )
}


