import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'


export const RQSuperHeroespage = () => {

    const { isLoading, data, isError, error} = useQuery('super-heroes',() => {
        return axios.get('http://localhost:4000/superherous')
    })

    if(isLoading){
        return <h2>Loading....</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }


    return (
    <>
        {data?.data.map((a) => {
            <div>{a}</div>
        })}   
    </>
    )
}
