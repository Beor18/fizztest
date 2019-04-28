import React, { Component } from 'react';
import { Row, Container } from 'react-grid-system';
import Filtros from '../Filtros/Filtros';
import ProductosContenedor from '../Productos/ProductosContenedor';
import './../Contenido/Contenido.css';

class Contenido extends Component {


    render(){
        return(
            <Container className="contenedor-contenido">
                <Row className="row-contenido">
                    <Filtros />
                    <ProductosContenedor />
                </Row>
            </Container>
        )
    }
}

export default Contenido;