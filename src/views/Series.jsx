import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

 export default function Series() {
    
    const[series, setSeries] = useState(null)
    const[series1, setSeries1] = useState(null)

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
  
  
  
  
    return (
    <div>
        <ul className='list'>
        {series && series.map( elemento => {
           return( 
              <li key={elemento.id} className='item'> 
                  <div className='contenido'>
                      <img   src={`https://image.tmdb.org/t/p/w500/${elemento.poster_path}`} alt="" /> 
                      <p>{elemento.name}</p>
                        <div className='buttons'>
                            <button className='buttonMg'></button>
                            <button className='buttonVisto'></button>
                         </div>
                  </div>
                </li> )
        })}

        {series1 && series1.map( elemento => {
                return( 
                    <li key={elemento.id} className='item'> 
                        <div className='contenido'>
                            <img   src={`https://image.tmdb.org/t/p/w500/${elemento.poster_path}`} alt="" /> 
                            <p>{elemento.name}</p>
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

