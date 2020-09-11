import React, { useState } from 'react'
import DatosUsuario from '../../context/DatosUsuario';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from "yup";

const InsertarPelicula = () => {
    /* const [dataPelicula, setDataPelicula] = useState({
         title: "",
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
     })*/
    //const [validated, setValidated] = useState(false);
    // const schema = yum


    const schema = Yup.object().shape({
        title: Yup.string().required("Valor requerido"),
        year : Yup.number().min(2010, "El valor debe ser mayor o igual a 2010").max(2020, "El valor no debe ser mayor a 2020").required("El año es obligatorio")
    })

    // const contextType = <DatosUsuario/>
    //    console.log(contextType)
    return (

        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                title: "",
                year : ''
            }}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset
                } = props;
                return <Form noValidate onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="title">
                                <Form.Label>Titulo (*)</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    placeholder="Titulo"
                                    value={values.title}
                                    onChange={handleChange}
                                   // onBlur={handleBlur}
                                    isValid={touched.title && !errors.title}
                                    isInvalid={!!errors.title}
                                />
                                <Form.Control.Feedback>Campo valido!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>

                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="year">
                                <Form.Label>Año (*)</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    name="year" 
                                    placeholder="YYYY" 
                                    value={values.year} 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.year && !errors.year}
                                    isInvalid={!!errors.year}
                                />
                                <Form.Control.Feedback>Campo valido!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.year}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                    </Row>

                    <Button type="submit">Enviar</Button>
                </Form>
            }}
        </Formik>
    )
}

export default InsertarPelicula
