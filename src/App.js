import React from 'react';
import data from './data';
import './App.css';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ContactPage from './pages/ContactPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import { getCurrentPage } from './utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { PAGES, home, catalog, contact, cart } = data;
    const { HOME, CATALOG, CONTACT, CART } = PAGES;
    const cuit = localStorage.getItem('cuit');
    switch (getCurrentPage()) {
      case HOME: return <HomePage data={home} currentPage={HOME} />
      case CATALOG: return <CatalogPage data={catalog} currentPage={CATALOG} />
      case CONTACT: return <ContactPage data={contact} currentPage={CONTACT} />
      case CART: return <ShoppingCartPage data={cart} currentPage={CART} />
      default: return <HomePage data={home} currentPage={HOME} />
    }
  }
}
