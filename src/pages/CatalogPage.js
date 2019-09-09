import React from 'react';
import ProductSection from '../components/ProductSection';
import HeaderSection from '../components/HeaderSection';
import FooterSection from '../components/FooterSection';
import { getCurrentPage } from '../utils';

export default class CatalogPage extends React.Component {
    render() {
        const { data, currentPage } = this.props;
        console.log('currentPage => ', currentPage);
        return (
            <div style={{ 'padding-top': '196px', 'padding-left': '40px', 'padding-right': '40px' }}>
                <HeaderSection data={data.headerSection} />
                {(currentPage === 'RECETADOS' || currentPage === 'catalogo') &&
                    <>
                        <div>CATALOGO DE RECETADOS</div>
                        <ProductSection productType='RECETADOS' />
                    </>
                }
                {(currentPage === 'SOL' || currentPage === 'catalogo') &&
                    <>
                        <div>CATALOGO ANTEOJOS DE SOL</div>
                        <ProductSection productType='SOL' />
                    </>
                }
                <FooterSection data={data.footerSection} />
            </div>
        );
    }
}