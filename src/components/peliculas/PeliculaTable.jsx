import React from 'react'

export default function PeliculaTable(props) {
    const {
        id,
        title,
        year,
        cover,
        description,
        duration,
        contentRating,
        source,
        tags
    } = props
    return (
        <Table striped bordered hover>
                <thead>
                    <tr><td>Datos de la Película</td></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>{id}</td>
                    </tr>
                    <tr>
                        <td>Titulo</td>
                        <td>{title}</td>
                    </tr>
                    <tr>
                        <td>Año</td>
                        <td>{year}</td>
                    </tr>
                    <tr>
                        <td>Carátula</td>
                        <td>{cover}</td>
                    </tr>
                    <tr>
                        <td>Descripción</td>
                        <td>{description}</td>
                    </tr>
                    <tr>
                        <td>Duración</td>
                        <td>{duration}</td>
                    </tr>
                    <tr>
                        <td>Clasificación</td>
                        <td>{contentRating}</td>
                    </tr>
                    <tr>
                        <td>Recurso</td>
                        <td>{source}</td>
                    </tr>
                    <tr>
                        <td>Tags</td>
                        <td>
                            <ul>
                                {tags.map(tag => <li>{tag}</li>)}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </Table>
    )
}
