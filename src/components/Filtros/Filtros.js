import React, { Component } from 'react';
import { Row, Col, Container } from 'react-grid-system';
import Collapsible from 'react-collapsible';
import './../Filtros/Filtros.css';
// import './../Filtros/FiltrosResponsive.css'

class Filtros extends Component {


    render(){
        return(
            <Container className="dsf">
                <Row className="sdf">
                    <Col sm={4}>
                        <Collapsible trigger="Sexo">
                            <p>This is the collapsible content. It can be any element or React component you like.</p>
                            <p>It can even be another Collapsible component. Check out the next section!</p>
                        </Collapsible>
                        <Collapsible trigger="Deporte">
                            <p>This is the collapsible content. It can be any element or React component you like.</p>
                            <p>It can even be another Collapsible component. Check out the next section!</p>
                        </Collapsible>
                        <Collapsible trigger="Color">
                            <p>This is the collapsible content. It can be any element or React component you like.</p>
                            <p>It can even be another Collapsible component. Check out the next section!</p>
                        </Collapsible>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Filtros;