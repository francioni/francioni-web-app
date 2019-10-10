import React from 'react';
const addItemToCart = require('../utils').addItemToCart;
const getCart = require('../utils').getCart;
const isItemAlreadyOnCart = require('../utils').isItemAlreadyOnCart;
const removeItemFromCart = require('../utils').removeItemFromCart;

export default class BannerSection extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <section className="banner-area">
                <div className="container">
                    <div className="row fullscreen align-items-center justify-content-start">
                        <div className="col-lg-12">
                            <div className="active-banner-slider owl-carousel">
                                {
                                    data.items.filter(item => item.isPromoted).map((item, index) => {
                                        return (
                                            <div key={index} className="row single-slide">
                                                <div className="col-lg-5">
                                                    <div className="banner-content">
                                                        <h1>{item.title}</h1>
                                                        <div className="add-bag d-flex align-items-center">
                                                            <a className={`${isItemAlreadyOnCart(item, getCart()) ? 'add-btn' : 'add-btn'}`}
                                                                onClick={() => { isItemAlreadyOnCart(item, getCart()) ? removeItemFromCart(item) : addItemToCart(item, 1) }}
                                                                style={{ 'cursor': 'pointer' }}>
                                                                <span className={`${isItemAlreadyOnCart(item, getCart()) ? '' : 'lnr lnr-cross'}`}
                                                                    style={isItemAlreadyOnCart(item, getCart()) ? { 'fontSize': '25px', 'paddingBottom': '5px', 'marginTop': '-2px' } : {}}>{isItemAlreadyOnCart(item, getCart()) ? '+' : ''}</span></a>
                                                            {
                                                                isItemAlreadyOnCart(item, getCart()) ?
                                                                    <span onClick={() => removeItemFromCart(item)} className="add-text text-uppercase" style={{ 'cursor': 'pointer' }}>Eliminar del carrito</span>
                                                                    :
                                                                    <span className="add-text text-uppercase" onClick={() => addItemToCart(item, 1)} style={{ 'cursor': 'pointer' }}>Agregar al carrito</span>
                                                            }
                                                        </div>
                                                        <br />
                                                        <p style={{ 'fontWeight': 'bold', 'fontSize': '30px', 'paddingBottom': '20px' }}>{item.name}</p>
                                                        <p><span style={{ 'fontWeight': 'bold' }}>Precio: ${item.price}</span>($<span style={{ 'textDecoration': 'line-through' }}>{item.strikethorughPrice}</span>)</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7">
                                                    <div className="banner-img">
                                                        <img className="img-fluid custom-banner-section-img" src={item.image} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};