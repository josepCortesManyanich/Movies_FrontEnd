import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
            setDetail(response.data.result)
        } catch (error) {
            console.error(error)
        }
    }
    data()
  },[id])
  
  
  
  return (
    <div>
      
    </div>
  )
}


