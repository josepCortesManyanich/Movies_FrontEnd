import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

 export default function Series() {
    
    const[series, setSeries] = useState(null)

    useEffect (() => {
        const data = async () => {
            try {
             const response = await axios.get('http://localhost:8000/api/v1/series')
             setSeries(response.data.results)
             console.log(response.data)

            } catch (error) {
                console.error(error)
            }
        }
        data()
    })
  
  
  
  
    return (
    <div>
      
    </div>
  )
}

