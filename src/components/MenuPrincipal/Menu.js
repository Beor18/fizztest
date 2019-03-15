import React, { Component } from 'react';
import { Row, Col, Container } from 'react-grid-system';
import './../MenuPrincipal/Menu.css';
import './../MenuPrincipal/MenuResponsive.css';

class Menu extends Component {

    render(){
        return (
            <Container fluid className="ContenedorMenuPrincipal">
                <Container className="contenedor-secundario-menu-principal">
                <Row>
                    <Col xs={12} md={6} className="col-menu-principal-izquierda">
                        <li className="item-menu-principal-izquierda">
                            <a href="http://#">HOMBRE</a>
                        </li>
                        <li className="item-menu-principal-izquierda">
                            <a href="http://#">MUJER</a>
                        </li>
                        <li className="item-menu-principal-izquierda">
                            <a href="http://#">NIÑOS</a>
                        </li>
                    </Col>
                    <Col xs={12} md={6} className="col-menu-principal-derecha">
                        <li className="item-menu-principal-derecha precio-menu">0 $ 0,00</li>
                        <li className="item-menu-principal-derecha">MENU</li>
                        <li className="item-menu-principal-derecha">Carrito</li>
                    </Col>
                </Row>
                </Container>
            </Container>
        )
    }
}

export default  Menu;