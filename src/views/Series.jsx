import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

 export default function Series() {
    
    const[series, setSeries] = useState(null)
    const[series1, setSeries1] = useState(null)
    const[series2, setSeries2] = useState(null)
    const[series3, setSeries3] = useState(null)
    const[series4, setSeries4] = useState(null)
    const [busqueda, setBusqueda] = useState('')
    const [seriesEncontradas, setSeriesEncontradas] = useState([]);

    useEffect (() => {
        const data = async () => {
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDMyNTc0YTQzZTMyZTAwNGFmNWVhMmJjZDU5MjdlZiIsInN1YiI6IjY2MTFhYjgzMTEwOGE4MDE2NDhjN2VlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sVMODQOs97ekq4hGuXhLckNoM4_OM9Fj9yqomyzwcZ4'
                }
              };
            try {
             const response = await axios(options)
             setSeries(response.data.results)
             console.log(response)

            } catch (error) {
                console.error(error)
            }
        }
        data()
    },[])

    useEffect (() => {
        const data1 = async () => {
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDMyNTc0YTQzZTMyZTAwNGFmNWVhMmJjZDU5MjdlZiIsInN1YiI6IjY2MTFhYjgzMTEwOGE4MDE2NDhjN2VlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sVMODQOs97ekq4hGuXhLckNoM4_OM9Fj9yqomyzwcZ4'
                }
              };
            try {
             const response = await axios(options)
             setSeries1(response.data.results)
             console.log(response.data.results)

            } catch (error) {
                console.error(error)
            }
        }
        data1()
    },[])

    useEffect(() => {
        const data2 = async () => {
            const apiKey = 'ffdce154'; 
            const searchTerm = 'series'; 
            const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
            const searchTerm1 = 'serie'; 
            const url1 = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm1)}`;
            const searchTerm2 = 'tv-show'; 
            const url2 = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm2)}`;
    
            const options = {
                method: 'GET',
                url: url
            };
            const options1 = {
                method: 'GET',
                url: url1
            };
            const options2 = {
                method: 'GET',
                url: url2
            };
    
    
    
            try {
                const response = await axios(options);
                setSeries2(response.data.Search);
                console.log(response.data);
                const response1 = await axios(options1);
                setSeries3(response1.data.Search);
                console.log(response.data);
                const response2 = await axios(options2)
                setSeries4(response2.data.Search)
                console.log(response2.data)
            } catch (error) {
                console.error(error);
            }
        };
    
        data2();
    
    }, []);

    const handleBuscador = ((e) =>{
        const valorBuscado = e.target.value.toLowerCase();
          setBusqueda(valorBuscado);
        
          let seriesEncontradas = [];
          
         
          if (series) {
              const seriesEncontradasSeries = series.filter(elem =>
                  elem.name.toLowerCase().includes(valorBuscado)
              );
              seriesEncontradas = [...seriesEncontradas, ...seriesEncontradasSeries];
          }
          
      
          if (series1) {
              const seriesEncontradasSeries1 = series1.filter(elem =>
                  elem.name.toLowerCase().includes(valorBuscado)
              );
             seriesEncontradas = [...seriesEncontradas, ...seriesEncontradasSeries1];
          }
          if (series2) {
            const seriesEncontradasSeries1 = series2.filter(elem =>
                elem.name.toLowerCase().includes(valorBuscado)
            );
           seriesEncontradas = [...seriesEncontradas, ...seriesEncontradasSeries2];
        }
          if (series3) {
              const seriesEncontradasSeries3 = series3.filter(elem =>
                  elem.name.toLowerCase().includes(valorBuscado)
              );
             seriesEncontradas = [...seriesEncontradas, ...seriesEncontradasSeries3];
          }

          if(series4) {
            const seriesEncontradasSeries4 = series4.filter (elem =>
                elem.name.toLowerCase().includes(valorBuscado)
            );
            seriesEncontradas= [...seriesEncontradas, ...seriesEncontradasSeries4]
          }
      
          setSeriesEncontradas(seriesEncontradas);
          
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
            placeholder='Busca tu serie'
            />
        </form>

        <ul className='list'>
         {seriesEncontradas.length > 0 ? seriesEncontradas.map( elemento => {
           return( 
              <li key={elemento.id} className='item'> 
                    <Link to={`/series/${elemento.id}`}>
                        <div className='contenido'>
                            <img   src={`https://image.tmdb.org/t/p/w500/${elemento.poster_path}`} alt="" /> 
                            <p>{elemento.name}</p>
                                <div className='buttons'>
                                    <button className='buttonMg'></button>
                                    <button className='buttonVisto'></button>
                                </div>
                        </div>
                        </Link>
                </li> )}
        )  
        :series && series.map( elemento => {
           return( 
              <li key={elemento.id} className='item'> 
                    <Link to={`/series/${elemento.id}`}>
                        <div className='contenido'>
                            <img   src={`https://image.tmdb.org/t/p/w500/${elemento.poster_path}`} alt="" /> 
                            <p>{elemento.name}</p>
                                <div className='buttons'>
                                    <button className='buttonMg'></button>
                                    <button className='buttonVisto'></button>
                                </div>
                        </div>
                        </Link>   
                </li> )
        })}

        {seriesEncontradas.length > 0 ? seriesEncontradas.map( elemento => {
                return( 
                    <li key={elemento.id} className='item'> 
                        <Link to={`/series/${elemento.id}`}>
                            <div className='contenido'>
                                <img   src={`https://image.tmdb.org/t/p/w500/${elemento.poster_path}`} alt="" /> 
                                <p>{elemento.name}</p>
                                    <div className='buttons'>
                                        <button className='buttonMg'></button>
                                        <button className='buttonVisto'></button>
                                    </div>
                            </div>
                        </Link>   
                        </li> )}
                ) 
                :series1 && series1.map( elemento => {
                        return( 
                            <li key={elemento.id} className='item'> 
                                    <Link to={`/series/${elemento.id}`}>
                                        <div className='contenido'>
                                            <img   src={`https://image.tmdb.org/t/p/w500/${elemento.poster_path}`} alt="" /> 
                                            <p>{elemento.name}</p>
                                                <div className='buttons'>
                                                    <button className='buttonMg'></button>
                                                    <button className='buttonVisto'></button>
                                                </div>
                                        </div>
                                    </Link>    
                            </li> )
                })}

        {seriesEncontradas.length > 0
            ? seriesEncontradas.map((elemento) => (
                <li key={elemento.imdbID} className='item'>
                    <Link to={`/series/${elemento.imdbID}`}>
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
            : series2 && series2.map(elemento => {
            
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
            {seriesEncontradas.length > 0
            ? seriesEncontradas.map((elemento) => (
                <li key={elemento.imdbID} className='item'>
                    <Link to={`/series/${elemento.imdbID}`}>
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
            : series3 && series3.map(elemento => {
            
            return (
                    <li key={elemento.imdbID} className='item'>
                        <Link to={`/series/${elemento.imdbID}`}>
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
            {seriesEncontradas.length > 0
            ? seriesEncontradas.map((elemento) => (
                <li key={elemento.imdbID} className='item'>
                    <Link to={`/series/${elemento.imdbID}`}>
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
            : series4 && series4.map(elemento => {
            
            return (
                    <li key={elemento.imdbID} className='item'>
                        <Link to={`/series/${elemento.imdbID}`}>
                            <div className='contenido'>
                                <img src={elemento.Poster} alt="" /> ? 
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

