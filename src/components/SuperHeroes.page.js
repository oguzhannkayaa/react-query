import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
export const Superhero = () => {

    const [ isLoading, setIsLoading]= useState(true);
    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/superherous').then((res) => {
            setData(res.data)
            setIsLoading(false);
        })

    },[])

    if(isLoading){
        return <h2>Loading...</h2>
    }

  return (
    <>
       <h2>super hero</h2>
       {data.map((hero) => {
           return <div key={hero.name}> {hero.name } </div>
       })}
    </>
  )
}
