import React from 'react';

export default class FeaturesSection extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <section className="features-area section_gap">
                <div className="container">
                    <div className="row features-inner">
                        {
                            data.items.map((item, index) => {
                                return (
                                    <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="single-features">
                                            <div className="f-icon">
                                                <img src="img/features/f-icon1.png" alt="" />
                                            </div>
                                            <h6>{item.title}</h6>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}