import React, { Fragment } from 'react';
import HeaderSection from '../components/HeaderSection';
import FeaturesSection from '../components/FeaturesSection';
import FooterSection from '../components/FooterSection';

export default class ContactPage extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <Fragment>
                <HeaderSection data={data.headerSection} />
                <section class="cart_area">
                    <div class="container">
                        <div class="cart_inner">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Dirección</th>
                                            <th scope="col">ADD_ADDRESS</th>
                                        </tr>
                                        <tr>
                                            <th scope="col">Telefono</th>
                                            <th scope="col">ADD_PHONE</th>
                                        </tr>
                                        <tr>
                                            <th scope="col">Email</th>
                                            <th scope="col">espaciooptica@gmail.com</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                <FeaturesSection data={data.featuresSection} />
                <FooterSection data={data.footerSection} />
            </Fragment>
        );
    }
}