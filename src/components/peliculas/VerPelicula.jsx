
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import DatosUsuario from '../../context/DatosUsuario'
import { Link, Route } from 'react-router-dom';

class VerPelicula extends Component {

    constructor(props) {
        super(props)
        this.state = {
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
            console.log(id)
            let respuesta = await fetch(`https://api-movies-users.vercel.app/movies/${id}`)
            let pelicula = await respuesta.json()
            this.setState({...pelicula})
        }
    }

    render() {
        //console.log(this.props.match.params.id)
        console.log(this.state.pelicula)
        return (
            <Table striped bordered hover>
                <thead>
                    <tr><td>Datos de la Película</td></tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>{this.state.}</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

VerPelicula.contextType = DatosUsuario

export default VerPelicula;