import React from 'react';
import ProductSection from './ProductSection.js';

export default class ProductsSection extends React.Component {
    renderSectionHeader = (title, description) => {
        return (
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <div className="section-title">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        )
    };

    render() {
        let { page } = this.props;
        return (
            <section className="owl-carousel active-product-area section_gap">
                {(page === '#catalogo' || page === '#catalogo-recetados' || page === '#home') &&
                    <div className="single-product-slider">
                        <div className="container">
                            {this.renderSectionHeader('Recetados', 'DESCRIPCION PRODUCTOS RECETADOS')}
                            <ProductSection />
                        </div>
                    </div>
                }
                {(page === '#catalogo' || page === '#catalogo-sol' || page === '#home') &&
                    <div className="single-product-slider">
                        <div className="container">
                            {this.renderSectionHeader('SOL', 'DESCRIPCION PRODUCTOS SOL')}
                            <ProductSection />
                        </div>
                    </div>
                }
            </section>
        )
    }
}