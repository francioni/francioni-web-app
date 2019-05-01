import React from 'react';

export default class BrandSection extends React.Component {
    render() {
        return (
            <section className="brand-area section_gap">
                <div className="container">
                    <div className="row">
                        <a className="col single-img" href="#">
                            <img className="img-fluid d-block mx-auto" src="img/brand/1.png" alt="" />
                        </a>
                        <a className="col single-img" href="#">
                            <img className="img-fluid d-block mx-auto" src="img/brand/2.png" alt="" />
                        </a>
                        <a className="col single-img" href="#">
                            <img className="img-fluid d-block mx-auto" src="img/brand/3.png" alt="" />
                        </a>
                        <a className="col single-img" href="#">
                            <img className="img-fluid d-block mx-auto" src="img/brand/4.png" alt="" />
                        </a>
                        <a className="col single-img" href="#">
                            <img className="img-fluid d-block mx-auto" src="img/brand/5.png" alt="" />
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}