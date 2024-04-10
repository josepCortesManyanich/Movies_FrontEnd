
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'







 export default function Movies() {
    
   
    const [movies , setMovies] = useState(null)
    const [movies1, setMovies1] = useState(null)
    const [movies2, setMovies2] = useState(null)
    const [movies3, setMovies3] =useState(null)
    const [movies4, setMovies4] = useState(null)
    const[movies5,setMovies5] = useState(null)
    const[movies6, setMovies6] = useState(null)
    const [busqueda, setBusqueda] = useState('')
    const [peliculasEncontradas, setPeliculasEncontradas] = useState([]);
   

  
   
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
              const options1 = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDMyNTc0YTQzZTMyZTAwNGFmNWVhMmJjZDU5MjdlZiIsInN1YiI6IjY2MTFhYjgzMTEwOGE4MDE2NDhjN2VlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sVMODQOs97ekq4hGuXhLckNoM4_OM9Fj9yqomyzwcZ4'
                }
              };
            try {
                const response =  await axios(options)
                setMovies(response.data.results)
                console.log(response.data)
                const response1 =  await axios(options1)
                setMovies1(response1.data.results)
                console.log(response1.data)
            } catch (error) {
                console.error(error)
            }
        }
        data()

    }, [])

  
  useEffect(() => {
    const data2 = async () => {
        const apiKey = 'ffdce154'; 
        const searchTerm = 'Action'; 
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;

        const options = {
            method: 'GET',
            url: url
        };

        try {
            const response = await axios(options);
            setMovies2(response.data.Search);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    data2();

}, []);

useEffect(() => {
  const data3 = async () => {
      const apiKey = 'ffdce154'; 
      const searchTerm= 'movie'; 
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
      const searchTerm1= 'movies'; 
      const url1 = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm1)}`;
      const searchTerm2= 'drama'; 
      const url2 = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm2)}`;
      const searchTerm3= 'comedy'; 
      const url3 = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm3)}`;

      const options = {
          method: 'GET',
          url: url
      };
      const options1= {
        method: 'GET',
        url: url1
    };
    const options2= {
        method: 'GET',
        url: url2
    };
    const options3= {
        method: 'GET',
        url: url3
    };
    

      try {
          const response = await axios(options);
          setMovies3(response.data.Search);
          console.log(response.data);
          const response1 = await axios(options1)
          setMovies4(response1.data.Search)
          console.log(response.data)
          const response3 = await axios(options2)
          setMovies5(response3.data.Search)
          console.log(response3.data)
          const response4 = await axios(options3)
          
          setMovies6(response4.data.Search)
          console.log(response4.data)
      } 
      
      catch (error) {
          console.error(error);
      }
  };

  data3();

}, []);

  

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
    if(movies2){
      const pelisEncontradasMovies2 = movies2.filter(elem =>
        elem.title.toLowerCase().includes(valorBuscado)
       );
      pelisEncontradas = [...pelisEncontradas, ...pelisEncontradasMovies2];
    }
    if(movies3){
      const pelisEncontradasMovies3 = movies3.filter(elem =>
        elem.title.toLowerCase().includes(valorBuscado)
       );
      pelisEncontradas = [...pelisEncontradas, ...pelisEncontradasMovies3];
    }
    if(movies4){
      const pelisEncontradasMovies4 = movies4.filter(elem =>
        elem.title.toLowerCase().includes(valorBuscado)
       );
      pelisEncontradas = [...pelisEncontradas, ...pelisEncontradasMovies4];
    }
    if(movies5){
        const pelisEncontradasMovies5 = movies5.filter(elem =>
          elem.title.toLowerCase().includes(valorBuscado)
         );
        pelisEncontradas = [...pelisEncontradas, ...pelisEncontradasMovies5];
      }
      if(movies6){
        const pelisEncontradasMovies6 = movies6.filter(elem =>
          elem.title.toLowerCase().includes(valorBuscado)
         );
        pelisEncontradas = [...pelisEncontradas, ...pelisEncontradasMovies6];
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
          <Link to={`/peliculas/${elemento.id}`}>
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
            </Link>
          </li>
      ))
: movies && movies.map( elemento => {
return( 
  <li key={elemento.id} className='item'> 
    <Link to={`/peliculas/${elemento.id}`}>
      <div className='contenido'>
          <img   src={`https://image.tmdb.org/t/p/w500/${elemento.poster_path}`} alt="" /> 
          <p>{elemento.title}</p>
            <div className='buttons'>
                <button className='buttonMg'></button>
                <button className='buttonVisto'></button>
             </div>
      </div>
    </Link>
  </li> )
})}

{peliculasEncontradas.length > 0
    ? peliculasEncontradas.map((elemento) => (
          <li key={elemento.id} className='item'>
            <Link to={`/peliculas/${elemento.id}`}>
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
              </Link>
          </li>
      ))
:movies1 && movies1.map( elemento => {
      return( 
        <li key={elemento.id} className='item'> 
          <Link to={`/peliculas/${elemento.id}`}>
              <div className='contenido'>
                  <img   src={`https://image.tmdb.org/t/p/w500/${elemento.poster_path}`} alt="" /> 
                  <p>{elemento.title}</p>
                    <div className='buttons'>
                      <button className='buttonMg'></button>
                      <button className='buttonVisto'></button>
                    </div>
              </div>
            </Link>
          </li> )
    })}

{peliculasEncontradas.length > 0
    ? peliculasEncontradas.map((elemento) => (
        <li key={elemento.imdbID} className='item'>
            <Link to={`/peliculas/${elemento.imdbID}`}>
                <div className='contenido'>
                    <img src={elemento.Poster} alt='' />
                    <p>{elemento.Title}</p> 
                    <div className='buttons'>
                        <button className='buttonMg'></button>
                        <button className='buttonVisto'></button>
                    </div>
                </div>
            </Link>
        </li>
    ))
    : movies2 && movies2.map(elemento => {
     
      return (
            <li key={elemento.imdbID} className='item'>
                <Link to={`/peliculas/${elemento.imdbID}`}>
                    <div className='contenido'>
                        <img src={elemento.Poster} alt="" />
                        <p>{elemento.Title}</p> 
                        <div className='buttons'>
                            <button className='buttonMg'></button>
                            <button className='buttonVisto'></button>
                        </div>
                    </div>
                </Link>
            </li>
        )
    })
}
{peliculasEncontradas.length > 0
    ? peliculasEncontradas.map((elemento) => (
        <li key={elemento.imdbID} className='item'>
            <Link to={`/peliculas/${elemento.imdbID}`}>
                <div className='contenido'>
                    <img src={elemento.Poster} alt='' />
                    <p>{elemento.Title}</p> 
                    <div className='buttons'>
                        <button className='buttonMg'></button>
                        <button className='buttonVisto'></button>
                    </div>
                </div>
            </Link>
        </li>
    ))
    : movies3 && movies3.map(elemento => {
     
      return (
            <li key={elemento.imdbID} className='item'>
                <Link to={`/peliculas/${elemento.imdbID}`}>
                    <div className='contenido'>
                        <img src={elemento.Poster} alt="" />
                        <p>{elemento.Title}</p> 
                        <div className='buttons'>
                            <button className='buttonMg'></button>
                            <button className='buttonVisto'></button>
                        </div>
                    </div>
                </Link>
            </li>
        )
    })
}
{peliculasEncontradas.length > 0
    ? peliculasEncontradas.map((elemento) => (
        <li key={elemento.imdbID} className='item'>
            <Link to={`/peliculas/${elemento.imdbID}`}>
                <div className='contenido'>
                    <img src={elemento.Poster} alt='' />
                    <p>{elemento.Title}</p> 
                    <div className='buttons'>
                        <button className='buttonMg'></button>
                        <button className='buttonVisto'></button>
                    </div>
                </div>
            </Link>
        </li>
    ))
    : movies4 && movies4.map(elemento => {
     
      return (
            <li key={elemento.imdbID} className='item'>
                <Link to={`/peliculas/${elemento.imdbID}`}>
                    <div className='contenido'>
                        <img src={elemento.Poster} alt="" />
                        <p>{elemento.Title}</p> 
                        <div className='buttons'>
                            <button className='buttonMg'></button>
                            <button className='buttonVisto'></button>
                        </div>
                    </div>
                </Link>
            </li>
        )
    })
}
{peliculasEncontradas.length > 0
    ? peliculasEncontradas.map((elemento) => (
        <li key={elemento.imdbID} className='item'>
            <Link to={`/peliculas/${elemento.imdbID}`}>
                <div className='contenido'>
                    <img src={elemento.Poster} alt='' />
                    <p>{elemento.Title}</p> 
                    <div className='buttons'>
                        <button className='buttonMg'></button>
                        <button className='buttonVisto'></button>
                    </div>
                </div>
            </Link>
        </li>
    ))
    : movies5 && movies5.map(elemento => {
     
      return (
            <li key={elemento.imdbID} className='item'>
                <Link to={`/peliculas/${elemento.imdbID}`}>
                    <div className='contenido'>
                        <img src={elemento.Poster} alt="" />
                        <p>{elemento.Title}</p> 
                        <div className='buttons'>
                            <button className='buttonMg'></button>
                            <button className='buttonVisto'></button>
                        </div>
                    </div>
                </Link>
            </li>
        )
    })
}
{peliculasEncontradas.length > 0
    ? peliculasEncontradas.map((elemento) => (
        <li key={elemento.imdbID} className='item'>
            <Link to={`/peliculas/${elemento.imdbID}`}>
                <div className='contenido'>
                    <img src={elemento.Poster} alt='' />
                    <p>{elemento.Title}</p> 
                    <div className='buttons'>
                        <button className='buttonMg'></button>
                        <button className='buttonVisto'></button>
                    </div>
                </div>
            </Link>
        </li>
    ))
    : movies6 && movies6.map(elemento => {
     
      return (
            <li key={elemento.imdbID} className='item'>
                <Link to={`/peliculas/${elemento.imdbID}`}>
                    <div className='contenido'>
                        <img src={elemento.Poster} alt="" />
                        <p>{elemento.Title}</p> 
                        <div className='buttons'>
                            <button className='buttonMg'></button>
                            <button className='buttonVisto'></button>
                        </div>
                    </div>
                </Link>
            </li>
        )
    })
}
      </ul>
    </div>
  )
}


