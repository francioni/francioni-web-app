import React from 'react';
import data from '../data';
const addItemToCart = require('../utils').addItemToCart;
const isItemAlreadyOnCart = require('../utils').isItemAlreadyOnCart;
const getCart = require('../utils').getCart;

export default class ProductsSection extends React.Component {
    render() {
        const { products } = data;
        return (
            <section className="owl-carousel active-product-area section_gap">
                <div className="single-product-slider">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <div className="section-title">
                                    <h1>Recetados</h1>
                                    <p>DESCRIPCION PRODUCTOS RECETADOS</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                products.filter(product => product.category === 'RECETADOS').map((product, index) => {
                                    return (
                                        <div key={index} className="col-lg-3 col-md-6">
                                            <div className="single-product">
                                                <img className="img-fluid" src={product.image} alt="" />
                                                <div className="product-details">
                                                    <h6>{product.name}</h6>
                                                    <div className="price">
                                                        <h6>${product.price}</h6>
                                                        <h6 className="l-through">${product.strikethorughPrice}</h6>
                                                    </div>
                                                    <div className="prd-bottom">
                                                        {
                                                            isItemAlreadyOnCart(product, getCart()) ?
                                                            <div style={{'width': '80px'}} href="" className="social-info">
                                                                <p>Agregado</p>
                                                            </div>
                                                                :
                                                            <div style={{'width': '120px'}} href="" className="social-info">
                                                                <span onClick={() => addItemToCart(product, 1)} className="ti-bag" style={{'cursor':'pointer'}}></span>
                                                                <p className="hover-text">Agregar</p>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="single-product-slider">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <div className="section-title">
                                    <h1>SOL</h1>
                                    <p>DESCRIPCION PRODUCTOS SOL</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                products.filter(product => product.category === 'SOL').map((product, index) => {
                                    return (
                                        <div key={index} className="col-lg-3 col-md-6">
                                            <div className="single-product">
                                                <img className="img-fluid" src={product.image} alt="" />
                                                <div className="product-details">
                                                    <h6>{product.name}</h6>
                                                    <div className="price">
                                                        <h6>{product.price}</h6>
                                                        <h6 className="l-through">${product.strikethorughPrice}</h6>
                                                    </div>
                                                    <div className="prd-bottom">
                                                        {
                                                            isItemAlreadyOnCart(product, getCart()) ?
                                                            <div style={{'width': '80px'}} href="" className="social-info">
                                                                <p>Agregado</p>
                                                            </div>
                                                                :
                                                            <div style={{'width': '80px'}} href="" className="social-info">
                                                                <span onClick={() => addItemToCart(product, 1)} className="ti-bag" style={{'cursor':'pointer'}}></span>
                                                                <p >Agregar</p>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}