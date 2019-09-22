import React from 'react';
import data from './data';
import './App.css';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ContactPage from './pages/ContactPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
const utils = require('./utils');

const resolveCatalogLinks = (PAGES) => {
  const currentPage = utils.getCurrentPage();
  if (!currentPage.includes('recetados') && !currentPage.includes('sol')) return 'catalogo';
  if (currentPage.includes('recetados')) return 'RECETADOS';
  return 'SOL';
};

export default class App extends React.Component {
  render() {
    const { PAGES, home, catalog, contact, cart, products } = data;
    const { HOME, CATALOG, CONTACT, CART, CATALOG_RECIPES, CATALOG_SUN, PRODUCT_DETAILS } = PAGES;
    const currentPage = utils.getCurrentPage();
    if(currentPage.startsWith(PRODUCT_DETAILS)) return <ProductDetailsPage products={products} productId={decodeURI(currentPage).split('___')[1]} data={home} />
    switch (currentPage) {
      case HOME: return <HomePage data={home} currentPage={HOME} />
      case CATALOG:
      case CATALOG_RECIPES:
      case CATALOG_SUN:
        return <CatalogPage data={catalog} currentPage={resolveCatalogLinks(PAGES)} />
      case CONTACT: return <ContactPage data={contact} currentPage={CONTACT} />
      case CART: return <ShoppingCartPage data={cart} currentPage={CART} />
      default: return <HomePage data={home} currentPage={HOME} />
    }
  }
}
