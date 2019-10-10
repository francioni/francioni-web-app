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
                <section class="cart_area" style={{'padding-bottom': '0'}}>
                    <div class="container">
                        <div class="cart_inner">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" style={{'fontSize': '25px'}}>Dirección</th>
                                            <th scope="col" style={{'fontSize': '25px'}}>Perú 247 4to H (CABA)</th>
                                        </tr>
                                        <tr>
                                            <th scope="col" style={{'fontSize': '25px'}}>Telefono</th>
                                            <th scope="col" style={{'fontSize': '25px'}}>15-3326-8984</th>
                                        </tr>
                                        <tr>
                                            <th scope="col" style={{'fontSize': '25px'}}>Email</th>
                                            <th scope="col" style={{'fontSize': '25px'}}>espaciooptica@gmail.com</th>
                                        </tr>
                                        <tr>
                                            <th scope="col" style={{'fontSize': '25px'}}>Facebook</th>
                                            <th scope="col" style={{'fontSize': '25px'}}><a href="https://www.facebook.com/espacioopticaa" style={{'fontSize': '25px'}}>espaciooptica</a></th>
                                        </tr>
                                        <tr>
                                            <th scope="col" style={{'fontSize': '25px'}}>Instagram</th>
                                            <th scope="col" style={{'fontSize': '25px'}}><a href="https://www.instagram.com/espaciooptica/" style={{'fontSize': '25px'}}>espaciooptica</a></th>
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