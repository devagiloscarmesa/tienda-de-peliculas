import React from 'react'

const InsertarPelicula = () => {
    return (
        <form>
            <div>
                <label htmlFor="title">Titulo</label>
                <input type="text" name="title" id="title"/>
            </div>
            <div>
                <label htmlFor="year">Año</label>
                <input type="number" name="year" id="year"  placeholder="YYYY" min="2010" max="2020"/>
            </div>
            <div>
                <label htmlFor="cover">Caratula</label>
                <input type="url" name="cover" id="cover"  placeholder="Caratula de la portada"/>
            </div>
            <div>
                <label htmlFor="description">Descripción</label>
                <textarea name="description" id="description"  placeholder="Descripción de la pelicula"/>
            </div>
            <div>
                <label htmlFor="duration">Duración</label>
                <input type="number" name="duration" id="duration"  placeholder="YYYY" min="30" max="300"/>
            </div>
            <div>
                <label htmlFor="contentRating">Clasificación</label>
                <select id="contentRating" name="contentRating">
                    <option value="R">Restringido</option>
                    <option value="G">General</option>
                    <option value="PG">En compañia de un adulto</option>
                    <option value="PG-13">En compañia de un adulto y publico mayor a 13</option>
                    <option value="NC-17">Publico mayor a 17</option>
                </select>
            </div>
            <div>
                <label htmlFor="source">Fuente</label>
                <input type="url" name="source" id="source"/>
            </div>
            <div>
                <label htmlFor="tags">Tags</label>
                <input type="text" name="tags" id="tags" placeholder="Cada tag debe ir con una ,"/>
            </div>
        </form>
    )
}

export default InsertarPelicula
