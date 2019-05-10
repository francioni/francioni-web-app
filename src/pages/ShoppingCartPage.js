import React, { Fragment } from 'react';
import HeaderSection from '../components/HeaderSection';
import FooterSection from '../components/FooterSection';
import ShoppingCart from '../components/ShoppingCart';

export default class ShoppingCartPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data } = this.props;
        return (
            <Fragment>
                <HeaderSection data={data.headerSection} />
                <ShoppingCart />
                <FooterSection data={data.footerSection} />
            </Fragment>
        );
    }
}