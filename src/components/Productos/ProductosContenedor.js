import React, { Component } from 'react';
import { Col } from 'react-grid-system';
import Producto from '../Productos/Producto';
import './../Productos/Producto.css';
// import './../Producto/ProductoResponsive.css'

class ProductosContenedor extends Component {


    render(){
        return(
            <Col sm={10} className="col-producto">
                <Producto />
            </Col>
             
        )
    }
}

export default ProductosContenedor;