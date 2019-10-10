import React from 'react';

export default class FeaturesSection extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <section className="features-area section_gap">
                <div className="container">
                    <div className="row features-inner" style={{'paddingTop': '60px'}}>
                        {
                            data.items.map((item, index) => {
                                return (
                                    <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="single-features">
                                            <div className="f-icon">
                                                <img src={item.image} alt="" style={{'max-height': '80px'}}/>
                                            </div>
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