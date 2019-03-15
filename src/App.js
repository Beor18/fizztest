import React, { Component } from 'react';
import { Row, Col, Container } from 'react-grid-system';
import Header from './components/Header/Header';
import Menu from './components/MenuPrincipal/Menu';
import Slider from './components/Slider/Slider';
import Marcas from './components/Marcas/Marcas';
import Footer from './components/Footer/Footer';
import Filtros from './components/Filtros/Filtros';

class App extends Component {
  render() {
    return (
      <Container fluid style={{paddingLeft: 0, paddingRight: 0}}>
        <Container fluid>
          <Header />
        </Container>
          <Menu />
          <Slider />
          <Marcas />
          <Filtros />
          <Footer />
      </Container>
    );
  }
}

export default App;
