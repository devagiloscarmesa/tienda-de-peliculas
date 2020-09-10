import React, { useState } from 'react'
import DatosUsuario from '../../context/DatosUsuario';
import { Form, Button, Col, Row } from 'react-bootstrap';

const InsertarPelicula = () => {
    const [dataPelicula, setDataPelicula] = useState({
        title: "Test oscar",
        year: "2018",
        cover: "http://dummyimage.com/170x206.jpg/cc0000/ffffff",
        description: "Test descripción película",
        duration: "120",
        contentRating: "PG",
        source: "http://prnewswire.com/aliquam/erat.html",
        tags: [
            "test 1",
            "test 2"
        ]
    })

    let capturaDatosFormulario = (e) => {
        let pelicula = dataPelicula
        pelicula[e.target.name] = e.target.value
        setDataPelicula(pelicula)
    }

    let enviarPelicula = async (e) => {
        e.preventDefault();
        let respuesta = await fetch('https://api-movies-users.vercel.app/movies', { method: 'POST', body: JSON.stringify(dataPelicula), headers: { 'Content-Type': 'application/json' } })
        let pelicula = await respuesta.json()
        if (respuesta.status === 201) {
            alert(`Pelicula con ID ${pelicula.id} insertada`)
        }
    }

    // const contextType = <DatosUsuario/>
    //    console.log(contextType)
    return (
        <Form id="frm_insertar_pelicula" onSubmit={enviarPelicula}>
            <Row>
                <Col>
                    <Form.Group controlId="title">
                        <Form.Label>Titulo (*)</Form.Label>
                        <Form.Control type="text" name="title" placeholder="Titulo" defaultValue={dataPelicula.title} onChange={capturaDatosFormulario} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="year">
                        <Form.Label>Año (*)</Form.Label>
                        <Form.Control type="number" name="year" placeholder="YYYY" min="2010" max="2020" defaultValue={dataPelicula.year} onChange={capturaDatosFormulario} required />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="cover">
                        <Form.Label>Caratula (*)</Form.Label>
                        <Form.Control type="url" name="cover" placeholder="Caratula de la portada" defaultValue={dataPelicula.cover} onChange={capturaDatosFormulario} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="source">
                        <Form.Label>Fuente (*)</Form.Label>
                        <Form.Control type="url" name="source" placeholder="URL Fuente" defaultValue={dataPelicula.source} onChange={capturaDatosFormulario} required />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="duration">
                        <Form.Label>Año (*)</Form.Label>
                        <Form.Control type="number" name="duration" placeholder="Duración en minutos" min="30" max="300" defaultValue={dataPelicula.duration} onChange={capturaDatosFormulario} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="contentRating">
                        <Form.Label>Clasificación (*)</Form.Label>
                        <Form.Control as="select" name="contentRating" defaultValue={dataPelicula.contentRating} onChange={capturaDatosFormulario} required>
                            <option value="R">Restringido</option>
                            <option value="G">General</option>
                            <option value="PG">En compañia de un adulto</option>
                            <option value="PG-13">En compañia de un adulto y publico mayor a 13</option>
                            <option value="NC-17">Publico mayor a 17</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="tags">
                        <Form.Label>Tags (*)</Form.Label>
                        <Form.Control type="text" name="tags" placeholder="Cada tag debe ir con una ," defaultValue={dataPelicula.tags} onChange={capturaDatosFormulario} required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="description">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" rows="3" name="description" placeholder="Descripción de la pelicula" defaultValue={dataPelicula.description} onChange={capturaDatosFormulario} />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    )
}

export default InsertarPelicula
