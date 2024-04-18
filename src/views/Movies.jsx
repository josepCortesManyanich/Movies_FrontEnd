
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'







 export default function Movies() {
    
    const [movies2, setMovies2] = useState(null)
    const [movies3, setMovies3] =useState(null)
    const [movies4, setMovies4] = useState(null)
    const[movies5,setMovies5] = useState(null)
    const[movies6, setMovies6] = useState(null)
    const[movies7, setMovies7] = useState(null)
    const[movies8, setMovies8] = useState(null)
    const[movies9, setMovies9] = useState(null)
    const[movies10, setMovies10] = useState(null)
    const[movies11, setMovies11] = useState(null)
    const [busqueda, setBusqueda] = useState('')
    const [peliculasEncontradas, setPeliculasEncontradas] = useState([]);
   

  
   /* Llamada a una api que no me pinta las imagenes, la paso a la base de datos y tampoco se me graba, no me es util para añadir la modalidad de favoritos ni de vistas
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
    */

  
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
      const searchTerm1= 'sky'; 
      const url1 = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm1)}`;
      const searchTerm2= 'drama'; 
      const url2 = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm2)}`;
      const searchTerm3= 'comedy'; 
      const url3 = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm3)}`;
      const searchTerm4= 'war'
      const url4=`http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm4)}`;
      const searchTerm5= 'marvel'
      const url5=`http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm5)}`;
      const searchTerm6= 'harry'
      const url6=`http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm6)}`;
      const searchTerm7= 'city'
      const url7=`http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm7)}`;
      const searchTerm8= 'lord'
      const url8=`http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm8)}`;
      

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
    const options4 ={
        method:'GET',
        url: url4
    }
    const options5 ={
        method:'GET',
        url: url5
    }
    const options6 ={
        method:'GET',
        url: url6
    }
    const options7 ={
        method:'GET',
        url: url7
    }
    const options8 ={
        method:'GET',
        url: url8
    }

    

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
          const response5 = await axios(options4)
          console.log(response5.data)
          setMovies7(response5.data.Search)
          const response6 = await axios(options5)
          console.log(response6.data)
          setMovies8(response6.data.Search)
          const response7 = await axios(options6)
          console.log(response7.data)
          setMovies9(response7.data.Search)
          const response8 = await axios(options7)
          console.log(response8.data)
          setMovies10(response8.data.Search)
          const response9 = await axios(options8)
          console.log(response9.data)
          setMovies11(response9.data.Search)

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
    
   /*
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
    } */

    if(movies2){
      const pelisEncontradasMovies2 = movies2.filter(elem =>
        elem.Title.toLowerCase().includes(valorBuscado)
       );
      pelisEncontradas = [...pelisEncontradas, ...pelisEncontradasMovies2];
    }
    if(movies3){
      const pelisEncontradasMovies3 = movies3.filter(elem =>
        elem.Title.toLowerCase().includes(valorBuscado)
       );
      pelisEncontradas = [...pelisEncontradas, ...pelisEncontradasMovies3];
    }
    if(movies4){
      const pelisEncontradasMovies4 = movies4.filter(elem =>
        elem.Title.toLowerCase().includes(valorBuscado)
       );
      pelisEncontradas = [...pelisEncontradas, ...pelisEncontradasMovies4];
    }
    if(movies5){
        const pelisEncontradasMovies5 = movies5.filter(elem =>
          elem.Title.toLowerCase().includes(valorBuscado)
         );
        pelisEncontradas = [...pelisEncontradas, ...pelisEncontradasMovies5];
      }
      if(movies6){
        const pelisEncontradasMovies6 = movies6.filter(elem =>
          elem.Title.toLowerCase().includes(valorBuscado)
         );
        pelisEncontradas = [...pelisEncontradas, ...pelisEncontradasMovies6];
      }  
    setPeliculasEncontradas(pelisEncontradas);
})

/* Funcion para hacer favorito a la API 1 
const handleFavorito = async (id, title, poster_path) => {
    const favoritoData = {
        apiId: id,
        apiTitle: title,
        apiImage: poster_path
    };

    try {
        const response = await axios.post('http://localhost:7000/api/user/favoritas', favoritoData);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
*/


const handleFavorito1 = async (imdbID, Title, Poster, ) => {
    const favoritoData = {
        apiId: imdbID,
        apiTitle: Title,
        apiImage: Poster
    };

    try {
        const storedToken = localStorage.getItem('authToken');
        const response = await axios.post('http://localhost:7000/api/user/favoritas', favoritoData,{
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
                placeholder='Busca tu pelicula'
                />
            </form>
            
        <ul className='list'>
        {peliculasEncontradas.length > 0
            ? peliculasEncontradas.map((elemento) =>  (
                <li key={elemento.imdbID} className='item'>
                
                        <div className='contenido'>
                            <Link to={`/peliculas/${elemento.imdbID}`}>
                            <img src={elemento.Poster} alt='' />
                            <p>{elemento.Title}</p> 
                            </Link>
                            <div className='buttons'>
                                <button className='buttonMg' onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                <button className='buttonVisto'></button>
                            </div>
                        </div>
                    
                </li>
            ))
            : movies2 && movies2.map(elemento => {
            
            return (
                    <li key={elemento.imdbID} className='item'>
                    
                            <div className='contenido'>
                                <Link to={`/peliculas/${elemento.imdbID}`}>
                                <img src={elemento.Poster} alt="" />
                                <p>{elemento.Title}</p> 
                                </Link>
                                <div className='buttons'>
                                    <button className='buttonMg'onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                    <button className='buttonVisto'></button>
                                </div>
                            </div>
                    
                    </li>
                )
            })
        }
        {peliculasEncontradas.length > 0
            ? peliculasEncontradas.map((elemento) => (
                <li key={elemento.imdbID} className='item'>
                
                        <div className='contenido'>
                            <Link to={`/peliculas/${elemento.imdbID}`}>
                            <img src={elemento.Poster} alt='' />
                            <p>{elemento.Title}</p> 
                            </Link>
                            <div className='buttons'>
                                <button className='buttonMg'onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                <button className='buttonVisto'></button>
                            </div>
                        </div>
                    
                </li>
            ))
            : movies3 && movies3.map(elemento => {
            
            return (
                    <li key={elemento.imdbID} className='item'>
                        
                            <div className='contenido'>
                                <Link to={`/peliculas/${elemento.imdbID}`}>
                                <img src={elemento.Poster} alt="" />
                                <p>{elemento.Title}</p> 
                                </Link>
                                <div className='buttons'>
                                    <button className='buttonMg'onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                    <button className='buttonVisto'></button>
                                </div>
                            </div>
                    
                    </li>
                )
            })
        }
        {peliculasEncontradas.length > 0
            ? peliculasEncontradas.map((elemento) => (
                <li key={elemento.imdbID} className='item'>
                        <div className='contenido'>
                        <Link to={`/peliculas/${elemento.imdbID}`}>
                            <img src={elemento.Poster} alt='' />
                            <p>{elemento.Title}</p> 
                            </Link>
                            <div className='buttons'>
                                <button className='buttonMg'onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                <button className='buttonVisto'></button>
                            </div>
                        </div>
                
                </li>
            ))
            : movies4 && movies4.map(elemento => {
            
            return (
                    <li key={elemento.imdbID} className='item'>
                            <div className='contenido'>
                            <Link to={`/peliculas/${elemento.imdbID}`}>
                                <img src={elemento.Poster} alt="" />
                                <p>{elemento.Title}</p> 
                                </Link>
                                <div className='buttons'>
                                    <button className='buttonMg'onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                    <button className='buttonVisto'></button>
                                </div>
                            </div>
                    
                    </li>
                )
            })
        }
        {peliculasEncontradas.length > 0
            ? peliculasEncontradas.map((elemento) => (
                <li key={elemento.imdbID} className='item'>
                
                        <div className='contenido'>
                        <Link to={`/peliculas/${elemento.imdbID}`}>
                            <img src={elemento.Poster} alt='' />
                            <p>{elemento.Title}</p> 
                            </Link>
                            <div className='buttons'>
                                <button className='buttonMg'onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                <button className='buttonVisto'></button>
                            </div>
                        </div>
                    
                </li>
            ))
            : movies5 && movies5.map(elemento => {
            
            return (
                    <li key={elemento.imdbID} className='item'>
                        
                            <div className='contenido'>
                            <Link to={`/peliculas/${elemento.imdbID}`}>
                                <img src={elemento.Poster} alt="" />
                                <p>{elemento.Title}</p> 
                                </Link>
                                <div className='buttons'>
                                    <button className='buttonMg'onClick={() => handleFavorito1(elemento.imdBID, elemento.Title, elemento.Poster)}></button>
                                    <button className='buttonVisto'></button>
                                </div>
                            </div>
                    
                    </li>
                )
            })
        }
        {peliculasEncontradas.length > 0
            ? peliculasEncontradas.map((elemento) => (
                <li key={elemento.imdbID} className='item'>
            
                        <div className='contenido'>
                        <Link to={`/peliculas/${elemento.imdbID}`}>
                            <img src={elemento.Poster} alt='' />
                            <p>{elemento.Title}</p> 
                            </Link>
                            <div className='buttons'>
                                <button className='buttonMg'onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                <button className='buttonVisto'></button>
                            </div>
                        </div>
                
                </li>
            ))
            : movies6 && movies6.map(elemento => {
            
            return (
                    <li key={elemento.imdbID} className='item'>
                    
                            <div className='contenido'>
                                <Link to={`/peliculas/${elemento.imdbID}`}>
                                <img src={elemento.Poster} alt="" />
                                <p>{elemento.Title}</p> 
                                </Link>
                                <div className='buttons'>
                                    <button className='buttonMg'onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                    <button className='buttonVisto'></button>
                                </div>
                            </div>
                    
                    </li>
                )
            })
        }
         {peliculasEncontradas.length > 0
            ? peliculasEncontradas.map((elemento) =>  (
                <li key={elemento.imdbID} className='item'>
                
                        <div className='contenido'>
                            <Link to={`/peliculas/${elemento.imdbID}`}>
                            <img src={elemento.Poster} alt='' />
                            <p>{elemento.Title}</p> 
                            </Link>
                            <div className='buttons'>
                                <button className='buttonMg' onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                <button className='buttonVisto'></button>
                            </div>
                        </div>
                    
                </li>
            ))
            : movies7 && movies7.map(elemento => {
            
            return (
                    <li key={elemento.imdbID} className='item'>
                    
                            <div className='contenido'>
                                <Link to={`/peliculas/${elemento.imdbID}`}>
                                <img src={elemento.Poster} alt="" />
                                <p>{elemento.Title}</p> 
                                </Link>
                                <div className='buttons'>
                                    <button className='buttonMg'onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                    <button className='buttonVisto'></button>
                                </div>
                            </div>
                    
                    </li>
                )
            })
        }
         {peliculasEncontradas.length > 0
            ? peliculasEncontradas.map((elemento) =>  (
                <li key={elemento.imdbID} className='item'>
                
                        <div className='contenido'>
                            <Link to={`/peliculas/${elemento.imdbID}`}>
                            <img src={elemento.Poster} alt='' />
                            <p>{elemento.Title}</p> 
                            </Link>
                            <div className='buttons'>
                                <button className='buttonMg' onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                <button className='buttonVisto'></button>
                            </div>
                        </div>
                    
                </li>
            ))
            : movies7 && movies7.map(elemento => {
            
            return (
                    <li key={elemento.imdbID} className='item'>
                    
                            <div className='contenido'>
                                <Link to={`/peliculas/${elemento.imdbID}`}>
                                <img src={elemento.Poster} alt="" />
                                <p>{elemento.Title}</p> 
                                </Link>
                                <div className='buttons'>
                                    <button className='buttonMg'onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                    <button className='buttonVisto'></button>
                                </div>
                            </div>
                    
                    </li>
                )
            })
        }
         {peliculasEncontradas.length > 0
            ? peliculasEncontradas.map((elemento) =>  (
                <li key={elemento.imdbID} className='item'>
                
                        <div className='contenido'>
                            <Link to={`/peliculas/${elemento.imdbID}`}>
                            <img src={elemento.Poster} alt='' />
                            <p>{elemento.Title}</p> 
                            </Link>
                            <div className='buttons'>
                                <button className='buttonMg' onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                <button className='buttonVisto'></button>
                            </div>
                        </div>
                    
                </li>
            ))
            : movies8 && movies8.map(elemento => {
            
            return (
                    <li key={elemento.imdbID} className='item'>
                    
                            <div className='contenido'>
                                <Link to={`/peliculas/${elemento.imdbID}`}>
                                <img src={elemento.Poster} alt="" />
                                <p>{elemento.Title}</p> 
                                </Link>
                                <div className='buttons'>
                                    <button className='buttonMg'onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                    <button className='buttonVisto'></button>
                                </div>
                            </div>
                    
                    </li>
                )
            })
        }
         {peliculasEncontradas.length > 0
            ? peliculasEncontradas.map((elemento) =>  (
                <li key={elemento.imdbID} className='item'>
                
                        <div className='contenido'>
                            <Link to={`/peliculas/${elemento.imdbID}`}>
                            <img src={elemento.Poster} alt='' />
                            <p>{elemento.Title}</p> 
                            </Link>
                            <div className='buttons'>
                                <button className='buttonMg' onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                <button className='buttonVisto'></button>
                            </div>
                        </div>
                    
                </li>
            ))
            : movies9 && movies9.map(elemento => {
            
            return (
                    <li key={elemento.imdbID} className='item'>
                    
                            <div className='contenido'>
                                <Link to={`/peliculas/${elemento.imdbID}`}>
                                <img src={elemento.Poster} alt="" />
                                <p>{elemento.Title}</p> 
                                </Link>
                                <div className='buttons'>
                                    <button className='buttonMg'onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                    <button className='buttonVisto'></button>
                                </div>
                            </div>
                    
                    </li>
                )
            })
        }
         {peliculasEncontradas.length > 0
            ? peliculasEncontradas.map((elemento) =>  (
                <li key={elemento.imdbID} className='item'>
                
                        <div className='contenido'>
                            <Link to={`/peliculas/${elemento.imdbID}`}>
                            <img src={elemento.Poster} alt='' />
                            <p>{elemento.Title}</p> 
                            </Link>
                            <div className='buttons'>
                                <button className='buttonMg' onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                <button className='buttonVisto'></button>
                            </div>
                        </div>
                    
                </li>
            ))
            : movies10 && movies10.map(elemento => {
            
            return (
                    <li key={elemento.imdbID} className='item'>
                    
                            <div className='contenido'>
                                <Link to={`/peliculas/${elemento.imdbID}`}>
                                <img src={elemento.Poster} alt="" />
                                <p>{elemento.Title}</p> 
                                </Link>
                                <div className='buttons'>
                                    <button className='buttonMg'onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                    <button className='buttonVisto'></button>
                                </div>
                            </div>
                    
                    </li>
                )
            })
        }
         {peliculasEncontradas.length > 0
            ? peliculasEncontradas.map((elemento) =>  (
                <li key={elemento.imdbID} className='item'>
                
                        <div className='contenido'>
                            <Link to={`/peliculas/${elemento.imdbID}`}>
                            <img src={elemento.Poster} alt='' />
                            <p>{elemento.Title}</p> 
                            </Link>
                            <div className='buttons'>
                                <button className='buttonMg' onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                <button className='buttonVisto'></button>
                            </div>
                        </div>
                    
                </li>
            ))
            : movies11 && movies11.map(elemento => {
            
            return (
                    <li key={elemento.imdbID} className='item'>
                    
                            <div className='contenido'>
                                <Link to={`/peliculas/${elemento.imdbID}`}>
                                <img src={elemento.Poster} alt="" />
                                <p>{elemento.Title}</p> 
                                </Link>
                                <div className='buttons'>
                                    <button className='buttonMg'onClick={() => handleFavorito1(elemento.imdbID, elemento.Title, elemento.Poster)}></button>
                                    <button className='buttonVisto'></button>
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


