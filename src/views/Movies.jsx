
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'






 export default function Movies() {
    
    /* el use State es declarado null ya que va a recibir los datos de forma asíncrona*/ 
    const [movies , setMovies] = useState(null)
    const [movies1, setMovies1] = useState(null)
    const [busqueda, setBusqueda] = useState('')
    const [peliculasEncontradas, setPeliculasEncontradas] = useState([]);
   

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
  /*Segunda llamada a la api para conseguir mas peliculas */
    useEffect (() => {
      const data1 = async () => {
          const options = {
              method: 'GET',
              url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDMyNTc0YTQzZTMyZTAwNGFmNWVhMmJjZDU5MjdlZiIsInN1YiI6IjY2MTFhYjgzMTEwOGE4MDE2NDhjN2VlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sVMODQOs97ekq4hGuXhLckNoM4_OM9Fj9yqomyzwcZ4'
              }
            };
          try {
              const response =  await axios(options)
              setMovies1(response.data.results)
              console.log(response.data)
          } catch (error) {
              console.error(error)
          }
      }
      data1()

  }, [])
  

  /*Barra de buscador*/
const handleBuscador = ((e) =>{
  const valorBuscado = e.target.value.toLowerCase();
    setBusqueda(valorBuscado);
  
    let pelisEncontradas = [];
    
   
    if (movies) {
        const pelisEncontradasMovies = movies.filter(elem =>
            elem.title.toLowerCase().includes(valorBuscado)
        );
        pelisEncontradas = [...pelisEncontradas, ...pelisEncontradasMovies];
    }
    

    if (movies1) {
        const pelisEncontradasMovies1 = movies1.filter(elem =>
            elem.title.toLowerCase().includes(valorBuscado)
        );
        pelisEncontradas = [...pelisEncontradas, ...pelisEncontradasMovies1];
    }

  
    setPeliculasEncontradas(pelisEncontradas);
})

    return (
    <div>
      <Navbar/>

      <form className='formulario1'>
        <input
        className='formulario1-input' 
        type='text'
        name='Buscar'
        autoComplete='off'
        value={busqueda}
        onChange={handleBuscador}
        placeholder='Busca tu pelicula'
        />
      </form>
       
      <ul className='list'>
      {peliculasEncontradas.length > 0
                ? peliculasEncontradas.map((elemento) => (
                      <li key={elemento.id} className='item'>
                          <div className='contenido'>
                              <img
                                  src={`https://image.tmdb.org/t/p/w500/${elemento.poster_path}`}
                                  alt=''
                              />
                              <p>{elemento.title}</p>
                              <div className='buttons'>
                                  <button className='buttonMg'></button>
                                  <button className='buttonVisto'></button>
                              </div>
                          </div>
                      </li>
                  ))
        : movies && movies.map( elemento => {
           return( 
              <li key={elemento.id} className='item'> 
                  <div className='contenido'>
                      <img   src={`https://image.tmdb.org/t/p/w500/${elemento.poster_path}`} alt="" /> 
                      <p>{elemento.title}</p>
                        <div className='buttons'>
                            <button className='buttonMg'></button>
                            <button className='buttonVisto'></button>
                         </div>
                  </div>
                </li> )
        })}

        {peliculasEncontradas.length > 0
                ? peliculasEncontradas.map((elemento) => (
                      <li key={elemento.id} className='item'>
                          <div className='contenido'>
                              <img
                                  src={`https://image.tmdb.org/t/p/w500/${elemento.poster_path}`}
                                  alt=''
                              />
                              <p>{elemento.title}</p>
                              <div className='buttons'>
                                  <button className='buttonMg'></button>
                                  <button className='buttonVisto'></button>
                              </div>
                          </div>
                      </li>
                  ))
        :movies1 && movies1.map( elemento => {
                  return( 
                      <li key={elemento.id} className='item'> 
                          <div className='contenido'>
                              <img   src={`https://image.tmdb.org/t/p/w500/${elemento.poster_path}`} alt="" /> 
                              <p>{elemento.title}</p>
                                <div className='buttons'>
                                  <button className='buttonMg'></button>
                                  <button className='buttonVisto'></button>
                                </div>
                          </div>
                        </li> )
                })}
      </ul>
    </div>
  )
}


