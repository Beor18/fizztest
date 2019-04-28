import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import Header from './components/Header/Header';
import Menu from './components/MenuPrincipal/Menu';
import Slider from './components/Slider/Slider';
import Marcas from './components/Marcas/Marcas';
import Footer from './components/Footer/Footer';
import Contenido from './components/Contenido/Contenido';

class App extends Component {
  render() {
    return (
      <Container fluid style={{paddingLeft: 0, paddingRight: 0}}>
          <Header />
          <Menu />
          <Slider />
          <Marcas />
          <Contenido />
          <Footer />
      </Container>
    );
  }
}

export default App;
