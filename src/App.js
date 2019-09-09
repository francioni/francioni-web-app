import React from 'react';
import data from './data';
import './App.css';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ContactPage from './pages/ContactPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
const utils = require('./utils');

const resolveCatalogLinks = () => {
  const { PAGES } = data;
  const currentPage = utils.getCurrentPage();
  if (!currentPage.includes('recetados') && !currentPage.includes('sol')) return 'catalogo';
  if (currentPage.includes('recetados')) return 'RECETADOS';
  return 'SOL';
};

export default class App extends React.Component {
  render() {
    const { PAGES, home, catalog, contact, cart } = data;
    const { HOME, CATALOG, CONTACT, CART, CATALOG_RECIPES, CATALOG_SUN } = PAGES;
    switch (utils.getCurrentPage()) {
      case HOME: return <HomePage data={home} currentPage={HOME} />
      case CATALOG:
      case CATALOG_RECIPES:
      case CATALOG_SUN:
        return <CatalogPage data={catalog} currentPage={resolveCatalogLinks()} />
      case CONTACT: return <ContactPage data={contact} currentPage={CONTACT} />
      case CART: return <ShoppingCartPage data={cart} currentPage={CART} />
      default: return <HomePage data={home} currentPage={HOME} />
    }
  }
}
