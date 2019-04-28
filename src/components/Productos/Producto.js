import React, { Component } from 'react';
import './../Productos/Producto.css';


class Producto extends Component {

    products = () => {
        return [
            { 
                title: 'CAMISETA DE FUTBOL ADIDAS RIVER PLATE AWAY', 
                price: '849,00', 
                category: 'Futbol', 
                image: 'http://remote.fizzmod.com/TyQVKjcj4SXjSEWv/frontend/images/004632000F88356_1.jpg', 
                brand: 'adidas' 
            },
            { 
                title: 'Zapatillas', 
                price: 1120.00, 
                category: 'Calzado', 
                image: 'http://remote.fizzmod.com/TyQVKjcj4SXjSEWv/frontend/images/005030000D65804_1.jpg', 
                brand: 'puma' 
            },
            { 
                title: 'Short', 
                price: 320.44, 
                category: 'Vestimenta', 
                image: 'http://remote.fizzmod.com/TyQVKjcj4SXjSEWv/frontend/images/077652619598012_1.jpg', 
                brand: 'nike' 
            },
            { 
                title: 'Remera', 
                price: 360.44, 
                category: 'Futbol', 
                image: 'http://remote.fizzmod.com/TyQVKjcj4SXjSEWv/frontend/images/077632604336703_1.jpg', 
                brand: 'nike' 
            },
            { 
                title: 'Botín', 
                price: 800.44, 
                category: 'Botines',
                image: 'http://placehold.it/225x225', 
                brand: 'nike' 
            },
            { 
                title: 'Ojotas', 
                price: 300.99, 
                category: 'Ojotas', 
                image: 'http://placehold.it/225x225', 
                brand: 'adidas' 
            },
            { 
                title: 'Pantalón', 
                price: 360.44, 
                category: 'Natación', 
                image: 'http://placehold.it/225x225', 
                brand: 'nike' 
            },
            { 
                title: 'Pantalón', 
                price: 360.44, 
                category: 'Natación', 
                image: 'http://placehold.it/225x225', 
                brand: 'nike' 
            }			
        ]
    };

    listarProducts = () => {
        return this.products().map((lista, index) => {
            if(index % 2 === 0) {
                return( 
                    <div key={index} lista={lista} className="producto">
                        <img src={lista.image} className="producto-imagen" alt=""/>
                        <div className="sin-oferta"></div>
                        <div className="margin-producto">{lista.title}</div>
                        <p className="precio-producto margin-producto">$ {lista.price}</p>
                        <p className="categoria-producto">{lista.category}</p>
                    </div>
                )
            } else {
                return( 
                    <div key={index} lista={lista} className="producto">
                        <img src={lista.image} className="producto-imagen" alt=""/>
                        <div className="oferta">OFERTA</div>
                        <div className="margin-producto">{lista.title}</div>
                        <p className="precio-producto margin-producto">$ {lista.price}</p>
                        <p className="categoria-producto">{lista.category}</p>
                    </div>
                )
            }
        })
    }
    
    componentDidMount() {
        this.listarProducts();
    }

    render(){
        return(
            <div>
                {this.listarProducts()}
            </div>
        )
    }
}

export default Producto;