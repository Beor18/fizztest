import React, { Component } from 'react';
import { Row, Col, Container } from 'react-grid-system';
import './../Footer/Footer.css';
import './../Footer/FooterResponsive.css';

class Footer extends Component {

    render(){
        return (
            <Container fluid className="ContenedorFooterPrincipal">
                
                <Row>
                    <Col md={10} xs={12} className="col-footer-izquierda">
                       
                    </Col>
                    <Col md={2} xs={12} className="col-footer-derecha">
                        <span className="itemSprite-footer-vtex"/>
                        <span className="itemSprite-footer-fizzmod"/>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default  Footer;