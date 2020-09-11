
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import DatosUsuario from '../../context/DatosUsuario'
import { Link, Route } from 'react-router-dom';
import PeliculaTable from './PeliculaTable';

class VerPelicula extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: "",
            title: "",
            year: "",
            cover: "",
            description: "",
            duration: "",
            contentRating: "",
            source: "",
            tags: []
        }
    }

    async componentDidMount() {
        if (this.props.match !== undefined) {
            let id = this.props.match.params.id
            let respuesta = await fetch(`https://api-movies-users.vercel.app/movies/${id}`)
            let pelicula = await respuesta.json()
            this.setState({ ...pelicula })
        }
    }

    render() {
        //console.log(this.props.match.params.id)
        return (
            <PeliculaTable {...this.state}/>
        );
    }
}

VerPelicula.contextType = DatosUsuario

export default VerPelicula;