/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import Magnifier from "react-magnifier";
import HeaderSection from '../components/HeaderSection';
import FooterSection from '../components/FooterSection';
const addItemToCart = require('../utils').addItemToCart;
const getCart = require('../utils').getCart;
const isItemAlreadyOnCart = require('../utils').isItemAlreadyOnCart;
const removeItemFromCart = require('../utils').removeItemFromCart;

export default class ProductDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showZoomedImage: false,
            currentZoomedImage: null
        };
    }
    render() {
        const _getProductById = (products, id) => {
            for (let i = 0; i < products.length; i++) {
                if (products[i].name === id) return products[i];
            };
        };
        const { products, productId, data } = this.props;
        const product = _getProductById(products, productId);
        return (
            <Fragment>
                <HeaderSection data={data.headerSection} />
                {
                    <div className="product_image_area">
                        <div className="container">
                            <div className="row s_product_inner">
                                <div className="col-lg-6">
                                    <div className="s_Product_carousel">
                                        <div className="single-prd-item">
                                            <Magnifier src={product.image} width={500} zoomFactor={1.50} mgWidth={250} mgHeight={250}/>
                                        </div>
                                        <div className="single-prd-item">
                                            <Magnifier src={product.imageLateral} width={500} zoomFactor={1.50} mgWidth={250} mgHeight={250}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 offset-lg-1">
                                    <div className="s_product_text">
                                        <h3>{product.name}</h3>
                                        <h2>${product.price}</h2>
                                        <ul className="list">
                                            <li><span>Marca</span><span style={{ 'padding-left': '48px' }}>{product.brand}</span></li>
                                            <li><span>Precio Lista</span><span style={{ 'padding-left': '13px' }}>{product.strikethorughPrice}</span></li>
                                            <li><span>Segmento</span><span style={{ 'padding-left': '23px' }}>{product.segment}</span></li>
                                            <li><a className="active" href={product.category === 'RECETADOS' ? '#catalogo-recetados' : '#catalogo-sol'}><span>Categoria</span>{product.category}</a></li>
                                            <li><span>Segmento</span><span style={{ 'padding-left': '24px' }}>{product.segment}</span></li>
                                        </ul>
                                        <p>{product.description}</p>
                                        <div className="card_area d-flex align-items-center">
                                            {
                                                isItemAlreadyOnCart(product, getCart()) ?
                                                    <span onClick={() => removeItemFromCart(product)} style={{ 'cursor': 'pointer', 'color': 'red' }}>Eliminar del carrito</span>
                                                    :
                                                    <a className="primary-btn" onClick={() => addItemToCart(product, 1)}>Agregar al carrito</a>
                                            }
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <FooterSection data={data.footerSection} />
            </Fragment>
        );
    }
}