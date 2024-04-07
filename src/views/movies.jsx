import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'







 export default function movies() {
    
    /* el use State es declarado null ya que va a recibir los datos de forma asíncrona*/ 
    const [movies , setMovies] = useState(null)

    useEffect (() => {
        const data = async () => {
            try {
                
            } catch (error) {
                console.error(error)
            }
        }

    })
 
 
 
 
 
 
 
 
 
    return (
    <div>
      
    </div>
  )
}


