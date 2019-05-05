import React, { Fragment } from 'react';
import HeaderSection from '../components/HeaderSection';
import BannerSection from '../components/BannerSection';
import FeaturesSection from '../components/FeaturesSection';
import CategoriesSection from '../components/CategoriesSection';
import ExclusiveDealsSection from '../components/ExclusiveDealsSection';
import ProductsSection from '../components/ProductsSection';
import BrandSection from '../components/BrandSection';
import RelatedProducts from '../components/RelatedProducts';
import FooterSection from '../components/FooterSection';

export default class ContactPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data } = this.props;
        return (
            <Fragment>
                <HeaderSection data={data.header} />
                <FeaturesSection data={data.featuresSection} />
                <FooterSection />
            </Fragment>
        );
    }
}