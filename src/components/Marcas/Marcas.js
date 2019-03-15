import React, { Component } from 'react';
import { Row, Col, Container } from 'react-grid-system';
import './../Marcas/Marcas.css';
import './../Marcas/MarcasResponsive.css';
const axios = require('axios');

class Marcas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clickMarca: true,
            mensaje: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            clickMarca: !state.clickMarca
        }));
    }

    componentDidMount() {
        axios.get('http://remote.fizzmod.com/ajax.php')
        .then(response => {
            this.mensaje = response.data;
            console.log(this.mensaje);
            
            this.setState({
                mensaje: this.mensaje
            });
        })
        .catch(error => console.error(error.response));
    }

    render(){
        const mensaje = this.state.mensaje;
        return (
            <Container className="contenedor-marcas">
                <Row className="row-marcas">
                    <Col sm={12}>
                        <div onClick={this.handleClick}> 
                            {this.state.clickMarca ? 
                            <img className="marcas" src="http://remote.fizzmod.com/TyQVKjcj4SXjSEWv/frontend/images/marcas.jpg" alt="" /> : 
                            <p className="mensaje">{mensaje}</p>
                            } 
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default  Marcas;