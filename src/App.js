import React from 'react';
import data from './data';
import './App.css';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ContactPage from './pages/ContactPage';
import { getCurrentPage } from './utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { PAGES, home, catalog, contact } = data;
    const { HOME, CATALOG, CONTACT } = PAGES;
    const cuit = localStorage.getItem('cuit');
    switch (getCurrentPage()) {
      case HOME: return <HomePage data={home} currentPage={PAGES.HOME} />
      case CATALOG: return <CatalogPage data={catalog} currentPage={PAGES.CATALOG} />
      case CONTACT: return <ContactPage data={contact} currentPage={PAGES.CONTACT} />
      default: return <HomePage data={home} currentPage={PAGES.HOME} />
    }
  }
}
