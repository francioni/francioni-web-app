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
import CuitModal from '../components/CuitModal';

export default class HomePage extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <Fragment>
                <CuitModal />
                <HeaderSection data={data.headerSection} />
                <BannerSection data={data.bannerSection} />
                <FeaturesSection data={data.featuresSection} />
                <ProductsSection data={data.products} />
                <FooterSection data={data.footerSection} />
            </Fragment>
        );
    }
}