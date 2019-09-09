import React from 'react';

export default class FooterSection extends React.Component {
    render() {
        const { aboutUsTitle, aboutUsDescription, corporateTitle, corporateDescription, instagramTitle, instagramItems, facebookUrl, twitterUrl, dribbleUrl, behanceUrl, letUsBeSocialTitle, followUsTitle } = this.props.data;
        return (
            <footer className="footer-area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>{aboutUsTitle}</h6>
                                <p>
                                    {aboutUsDescription}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>{corporateTitle}</h6>
                                <p>{corporateDescription}</p>
                            </div>
                        </div>
                        <div className="col-lg-3  col-md-6 col-sm-6">
                            <div className="single-footer-widget mail-chimp">
                                <h6 className="mb-20">{instagramTitle}</h6>
                                <ul className="instafeed d-flex flex-wrap">
                                    {
                                        instagramItems.map(item => {
                                            return (
                                                <li><a href={item.instagramUrl}><img src={item.imageUrl} alt="" /></a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>{followUsTitle}</h6>
                                <p>{letUsBeSocialTitle}</p>
                                <div className="footer-social d-flex align-items-center">
                                    <a href={facebookUrl}><i className="fa fa-facebook"></i></a>
                                    <a href={twitterUrl}><i className="fa fa-twitter"></i></a>
                                    <a href={dribbleUrl}><i className="fa fa-dribbble"></i></a>
                                    <a href={behanceUrl}><i className="fa fa-behance"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}