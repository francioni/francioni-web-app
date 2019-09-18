import React from 'react';

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
                                                            <a className="add-btn" href=""><span className="lnr lnr-cross"></span></a>
                                                            <span className="add-text text-uppercase">Agregar al carrito</span>
                                                        </div>
                                                        <br />
                                                        <p>Marca: {item.brand}</p>
                                                        <div>{item.description} Lorem ipsum dolor sit amet consectetur adipiscing elit congue dictum mi, lobortis sagittis porttitor enim consequat taciti primis rhoncus nam, suspendisse risus habitasse interdum parturient</div>
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