import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PeliculaTable from './PeliculaTable';

export default function HVerPelicula() {
    const [pelicula, setPelicula] = useState({
        id: "",
        title: "",
        year: "",
        cover: "",
        description: "",
        duration: "",
        contentRating: "",
        source: "",
        tags: []
    })

    useEffect(() => {
        let {id} = useParams(); 
        let respuesta = axios.get(`https://api-movies-users.vercel.app/movies/${id}`)
        respusta.then( (pelicula) => setPelicula({...pelicula}) )
    }, [])
    return (
        <PeliculaTable {...pelicula} />
    )
}
