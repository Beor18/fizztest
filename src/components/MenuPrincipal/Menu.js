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
                    <ul id="nav">
                    <li><a href="http://#">Hombre</a>
                        <span id="s1"></span>
                        <ul class="subs">
                            <li className="primer-col-submenu"><h5 className="titulo-sub">CALZADO</h5>
                                <ul>
                                    <li><a href="http://#">Botines</a></li>
                                    <li><a href="http://#">Zapatillas</a></li>
                                    <li><a href="http://#">Botines con tapones</a></li>
                                    <li><a href="http://#">Ojotas / chinelas </a></li>
                                    <li><a href="http://#">Sandalia</a></li>
                                </ul>
                            </li>
                            <li>
                                <div className="producto-submenu producto ejemplo">
                                    <img src="http://remote.fizzmod.com/TyQVKjcj4SXjSEWv/frontend/images/004632000F88356_1.jpg" className="producto-imagen" alt=""/>
                                    <div className="sin-oferta"></div>
                                    <div className="margin-producto">CAMISETA DE FUTBOL ADIDAS RIVER PLATE AWAY</div>
                                    <p className="precio-producto margin-producto">$ 300</p>
                                    <p className="categoria-producto">Futbol</p>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li><a href="http://#">Mujer</a></li>
                    <li><a href="http://#">Niños</a></li>
                 </ul>
                    </Col>
                    <Col xs={12} md={6} className="col-menu-principal-derecha">
                        <li className="item-menu-principal-derecha precio-menu">0 $ 0,00</li>
                        <li className="item-menu-principal-derecha">
                            <span className="itemCarrito"></span>
                        </li>
                        <li className="item-menu-principal-derecha">Carrito</li>
                    </Col>
                </Row>
                </Container>
            </Container>
        )
    }
}

export default  Menu;