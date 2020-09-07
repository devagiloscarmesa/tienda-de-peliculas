import React, { useState } from 'react'
import { useEffect } from 'react'

export default function VisorPeliculas(props) {
    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        fetch('https://api-movies-users.vercel.app/movies')
            .then(r => r.json())
            .then(movies => {
                setPeliculas(movies)
            })
    }, [])

    const obtenerPeliculas = async() => {
        let respuesta = await fetch('https://api-movies-users.vercel.app/movies')
        let peliculas = await respuesta.json()
        return peliculas
    }

    let fintrarPeliculas = async(e) => {
        let peliculaServicio = await obtenerPeliculas()
        let filtro = document.querySelector("#filtro").value.toLowerCase()
        let resultado = peliculaServicio.filter(function(pelicula){
            let tituloMin = pelicula.title.toLowerCase()
            return tituloMin.indexOf(filtro) >= 0
        })
        setPeliculas(resultado)
    }

    return (
        <section>
            <input type="text" id="filtro" onKeyUp={fintrarPeliculas} placeholder="Filtrar por titulo"/>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Año</th>
                        <th>Cover</th>
                        <th>Descripción</th>
                        <th>Duración</th>
                        <th>Calificación</th>
                        <th>Fuente</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {peliculas.map((pelicula, i) => {
                        return <tr key={i}>
                            <td>{pelicula.id}</td>
                            <td>{pelicula.title}</td>
                            <td>{pelicula.year}</td>
                            <td><img src={pelicula.cover} alt={pelicula.title}/></td>
                            <td>{pelicula.description}</td>
                            <td>{pelicula.duration}</td>
                            <td>{pelicula.contentRating}</td>
                            <td><a href={pelicula.source}  rel="noopener noreferrer">enlace</a></td>
                            <td><ul>{pelicula.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </section>
    )
}
