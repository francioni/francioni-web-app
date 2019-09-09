import React from 'react';
import data from '../data';
const addItemToCart = require('../utils').addItemToCart;
const removeItemFromCart = require('../utils').removeItemFromCart;
const isItemAlreadyOnCart = require('../utils').isItemAlreadyOnCart;
const getCart = require('../utils').getCart;

export default class ProductSection extends React.Component {
    render() {
        const { products } = data;
        const { productType } = this.props;
        return (
            <div className="row">
                {
                    products.filter(product => product.category === productType).map((product, index) => {
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
                                                    <span onClick={() => removeItemFromCart(product)} style={{ 'cursor': 'pointer', 'color': 'red' }}>Eliminar del carrito</span>
                                                    :
                                                    <div style={{ 'width': '120px' }} href="" className="social-info">
                                                        <span onClick={() => addItemToCart(product, 1)} className="ti-bag" style={{ 'cursor': 'pointer' }}></span>
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
        )
    }
}