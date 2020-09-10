
import React, { Component } from 'react';
import DatosUsuario from '../../context/DatosUsuario'
import {Link, Route} from 'react-router-dom';

class VerPelicula extends Component {

    constructor(props){
        super(props);
        console.log(props.match);
    }
    render() {
        return (
            <div>
                <i>El apellido de la persona es : {this.context.lastName}</i>
            </div>
        );
    }
}

VerPelicula.contextType = DatosUsuario

export default VerPelicula;