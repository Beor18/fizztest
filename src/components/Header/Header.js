import React, { Component } from 'react';
import { Row, Col, Container } from 'react-grid-system';
import './../Header/Header.css';
import './../Header/HeaderResponsive.css'

class Header extends Component {


    render(){
        return(
            <Container className="ContenedorPrincipal">
                <Row className="primerRow">
                    <Col sm={7}>
                    
                    </Col>
                    <Col sm={5} className="colMenu">
                        <div className="topMenu">
                            <li className="itemsMenu"><span className="itemSprite-sucursal"/>SUCURSALES</li>
                            <li className="itemsMenu"><span className="itemSprite-comprar"/>COMO COMPRAR</li>
                            <li className="itemsMenu-pedidos">MIS PEDIDOS</li>
                        </div>
                    </Col>
                </Row>

                <Row className="primerRow">
                    <Col sm={2} className="col-logo">
                    <img className="imagen-logo" src="http://remote.fizzmod.com/TyQVKjcj4SXjSEWv/frontend/images/logo.jpg" alt="" />
                    </Col>
                    <Col sm={7} className="col-buscador">
                        <form className="example">
                            <input type="text" placeholder="Buscar por productos, deportes o marcas..." />
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </Col>
                    <Col sm={3} className="col-oferta">
                        <img className="imagen-oferta" src="http://remote.fizzmod.com/TyQVKjcj4SXjSEWv/frontend/images/HeaderHomeAbril.gif" alt="" />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Header;