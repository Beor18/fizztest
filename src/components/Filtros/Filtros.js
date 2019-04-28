import React, { Component } from 'react';
import { Col } from 'react-grid-system';
import Collapsible from 'react-collapsible';
import './../Filtros/Filtros.css';

class Filtros extends Component {


    render(){
        return(
            <Col sm={2} className="col-filtros">
                <h6 className="titulo-filtro">FILTRO POR</h6>
                <Collapsible trigger="Sexo" triggerOpenedClassName="CustomTriggerCSS--open" Collapsible__trigger>
                    <div className="check"><input type="checkbox" className="check-align" /> Hombre</div>
                    <div className="check"><input type="checkbox" className="check-align" />Mujer</div>
                    <div className="check"><input type="checkbox" className="check-align" /> Niños</div>
                </Collapsible>
                <Collapsible trigger="Deporte" triggerOpenedClassName="CustomTriggerCSS--open">
                    <div className="check"><input type="checkbox" className="check-align" /> Hombre</div>
                    <div className="check"><input type="checkbox" className="check-align" />Mujer</div>
                    <div className="check"><input type="checkbox" className="check-align" /> Niños</div>
                </Collapsible>
                <Collapsible trigger="Color" triggerOpenedClassName="CustomTriggerCSS--open">
                    <div className="check"><input type="checkbox" className="check-align" /> Hombre</div>
                    <div className="check"><input type="checkbox" className="check-align" />Mujer</div>
                    <div className="check"><input type="checkbox" className="check-align" /> Niños</div>
                </Collapsible>
            </Col>
             
        )
    }
}

export default Filtros;