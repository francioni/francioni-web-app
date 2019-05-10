import React, { Fragment } from 'react';
import BannerSection from '../components/BannerSection';
import FeaturesSection from '../components/FeaturesSection';
import CategoriesSection from '../components/CategoriesSection';
import ExclusiveDealsSection from '../components/ExclusiveDealsSection';
import ProductsSection from '../components/ProductsSection';
import BrandSection from '../components/BrandSection';
import RelatedProducts from '../components/RelatedProducts';
import HeaderSection from '../components/HeaderSection';
import FooterSection from '../components/FooterSection';

export default class CatalogPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data } = this.props;
        return (
            <Fragment>
                <HeaderSection data={data.headerSection} />
                <ProductsSection />
                <FooterSection data={data.footerSection} />
            </Fragment>
        );
    }
}