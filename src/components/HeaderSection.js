import React from 'react';
import { redirect } from '../utils';

export default class HeaderSection extends React.Component {
    renderItemOption = (option, index) => (<li key={index} className="nav-item"><a className="nav-link" href="category.html">{option.title}</a></li>);

    renderItem = (item, index) => (
        <li key={index} className="nav-item submenu dropdown">
            <a onClick={() => { redirect(item.href) }}
                style={{ cursor: 'pointer' }}
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                aria-haspopup="true"
            >{item.title}</a>
            <ul className="dropdown-menu">
                {item.options && item.options.map((option, index) => this.renderItemOption(option, index))}
            </ul>
        </li>
    )

    renderItems = items => items.map((item, index) => this.renderItem(item, index));

    render() {
        const { data } = this.props;
        return (
            <header className="header_area sticky-header">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light main_box">
                        <div className="container">
                            <a className="navbar-brand logo_h" href="index.html"><img style={{ width: '200px', 'padding-top': '15px' }} src="img/logo.png" alt="" /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    {
                                        this.renderItems(data.items)
                                    }
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}