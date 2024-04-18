
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'








 export default function Movies() {
    const[series, setSeries] = useState([])
    const [busqueda, setBusqueda] = useState('')
    const [seriesEncontradas, setSeriesEncontradas] = useState([]);
    
   

  
  
useEffect(() =>{
    const data = async() =>{
        try {
            const response = await axios.get('http://localhost:7000/api/series')
            console.log(response.data)
            setSeries(response.data.data)
        } catch (error) {
            console.error(error)
        }
    }
    data()
},[])

const handleBuscador = ((e) =>{
    const valorBuscado = e.target.value.toLowerCase();
      setBusqueda(valorBuscado);
    
      let seriesEncontradas = [];
      
    
      if (series) {
          const seriesEncontradasSeries = series.filter(elem =>
              elem.apiTitle.toLowerCase().includes(valorBuscado)
          );
          seriesEncontradas = [...seriesEncontradas, ...seriesEncontradasSeries];
      }
    setSeriesEncontradas(seriesEncontradas)
})

const handleFavorito1 = async (serieId,apiTitle,apiImage ) => {
    const favoritoData = { apiTitle, apiImage};
    

    try {
        const storedToken = localStorage.getItem('authToken');
        const response = await axios.post(`http://localhost:7000/api/user/${serieId}/add`, favoritoData,{
            headers: {
                Authorization: `Bearer ${storedToken}`
            }
        });      
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

const handleVistas = async (serieId,apiTitle,apiImage ) => {
    const vistaData = { apiTitle, apiImage};
    

    try {
        const storedToken = localStorage.getItem('authToken');
        const response = await axios.post(`http://localhost:7000/api/user/${serieId}/vistas`, vistaData,{
            headers: {
                Authorization: `Bearer ${storedToken}`
            }
        });      
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}




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
        {seriesEncontradas.length > 0
            ? seriesEncontradas.map((elemento) =>  (
                <li key={elemento._id} className='item'>
                
                        <div className='contenido'>
                            <img src={elemento.apiImage} alt='' />;
                            <p>{elemento.apiTitle}</p> 
                       
                            <div className='buttons'>
                                <button className='buttonMg' onClick={() =>{
                                    console.log("ID de la serie:", elemento._id)
                                    handleFavorito1(elemento._id, elemento.apiId, elemento.apiTitle, elemento.apiImage)}}></button>
                                <button className='buttonVisto'
                                onClick={() =>{
                                    console.log("ID de la serie:", elemento._id)
                                    handleVistas(elemento._id, elemento.apiTitle, elemento.apiImage)}}></button>
                            </div>
                        </div>
                    
                </li>
            ))
            : series && series.map(elemento => {
            
            return (
                    <li key={elemento._id} className='item'>
                    
                            <div className='contenido'>
                          
                                <img src={elemento.apiImage} alt="" />
                                <p>{elemento.apiTitle}</p> 
                  
                                <div className='buttons'>
                                <button className='buttonMg' onClick={() =>{
                                    console.log("ID de la serie:", elemento._id,elemento.apiTitle,elemento.apiImage)
                                    handleFavorito1(elemento._id,  elemento.apiTitle, elemento.apiImage)}}></button>
                                <button className='buttonVisto' onClick={() =>{
                                    console.log("ID de la serie:", elemento._id)
                                    handleVistas(elemento._id, elemento.apiTitle, elemento.apiImage)}}></button>
                                </div>
                            </div>
                    
                    </li>
                )
            })
        }
            </ul>
            </div>
        )
        }
/*ANTERIOR CODIGO LLAMANDO AA API SIN USO DE BACKEND APENAS*/
/*
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
    */