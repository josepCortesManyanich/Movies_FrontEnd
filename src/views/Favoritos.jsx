import React from 'react'
import {useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'


function Favoritos() {
    const [favorite , setFavorite] = useState([])

    useEffect(() => {
        const data = async () =>{
            try {
                const response = await axios.get('http://localhost:7000/api/user/favoritas')
                console.log ( response.data.data)
                setFavorite(response.data.data)
            } catch (error) {
                console.error(error)
            }
        }
        data()
    },[])

  return (
    <div>
        <ul>
            {favorite.map((element)=>{
                return(
                <li key={element._id}>
                    <img
                            src={element.apiImage}
                            
                        />  
                        <p>{element.apiTitle}</p>

                </li>)
            })}
        
        </ul>
      
    </div>
  )
}

export default Favoritos
