import React from "react";
const getCart = require('../utils').getCart;
const getCartTotalPrice = require('../utils').getCartTotalPrice;
const getCartItemTotalPrice = require('../utils').getCartItemTotalPrice;
const incrementItemQuantityInCartByOne = require('../utils').incrementItemQuantityInCartByOne;
const decrementItemQuantityInCartByOne = require('../utils').decrementItemQuantityInCartByOne;
const incrementItemQuantityManually = require('../utils').incrementItemQuantityManually;
const setCurrentlyEditedCartItemModel = require('../utils').setCurrentlyEditedCartItemModel;
const getCurrentlyEditedCartItemModel = require('../utils').getCurrentlyEditedCartItemModel;
const removeItemFromCart = require('../utils').removeItemFromCart;
const generateCartOrder = require('../utils').generateCartOrder;

export default class ShoppingCart extends React.Component {
  render() {
    const cart = getCart();
    return (
      <section className="cart_area">
        <div className="container">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio Unitario</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Total</th>
                    <th scope="col">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cart.map(cartItem => {
                      return (
                        <tr key={cartItem.item.model}>
                          <td>
                            <div className="media">
                              <div className="d-flex">
                                <img style={{ 'max-height': '100px', 'height': '70%', 'width': 'auto' }} src={cartItem.item.image} alt="" />
                              </div>
                              <div className="media-body">
                                <p>{cartItem.item.name} - {cartItem.item.description}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h5>${cartItem.item.price}</h5>
                          </td>
                          <td>
                            <div className="product_count">
                              <input
                                type="text"
                                name="qty"
                                id="sst"
                                maxlength="99999"
                                value={cartItem.quantity}
                                title="Cantidad:"
                                className="input-text qty"
                                onChange={(event) => { setCurrentlyEditedCartItemModel(cartItem.item.model); incrementItemQuantityManually(event) }}
                              />
                              <button
                                onClick={() => incrementItemQuantityInCartByOne(cartItem.item)}
                                className="increase items-count"
                                type="button"
                              >
                                <i className="lnr lnr-chevron-up" />
                              </button>
                              <button
                                onClick={() => decrementItemQuantityInCartByOne(cartItem.item)}
                                className="reduced items-count"
                                type="button"
                              >
                                <i className="lnr lnr-chevron-down" />
                              </button>
                            </div>
                          </td>
                          <td>
                            <h5>${getCartItemTotalPrice(cartItem.item, cartItem.quantity)}</h5>
                          </td>
                          <td>
                            <div className="cupon_text d-flex align-items-center" onClick={() => removeItemFromCart(cartItem.item)}>
                              <a className="primary-btn" href="#">
                                eliminar
                              </a>
                            </div>
                          </td>
                        </tr>
                      )
                    })
                  }
                  <tr>
                    <td />
                    <td />
                    <td>
                      <h5>Subtotal</h5>
                    </td>
                    <td>
                      <h5>${getCartTotalPrice()}</h5>
                    </td>
                  </tr>
                  <tr>
                    <div>OPCIONES DE PAGO</div>
                  </tr>
                  <tr>
                    <td>
                      <div className="cupon_text d-flex align-items-center">
                        <a className="primary-btn" href={generateCartOrder()}>
                          Generar Pedido Por MercadoPago</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <hr />
                  </tr>
                  <tr>
                    <div>Formulario para inicio de pago a través de banco</div>
                    <br />
                    <div className="col-lg-9">
                      <form className="row contact_form"
                        action="https://formcarry.com/s/GuJmRSlc6xm"
                        method="POST"
                        id="contactForm"
                        accept-charset="UTF-8">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              placeholder="Ingresar Correo Electronico" />
                          </div>
                          <div className="form-group">
                            <input type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              placeholder="Ingresar Nombre y Apellido" />
                          </div>
                          <div className="form-group">
                            <input type="text"
                              className="form-control"
                              id="tel"
                              name="tel"
                              placeholder="Ingresar Telefono" />
                          </div>
                          <div className="form-group">
                            <input type="text"
                              className="form-control"
                              id="cuit"
                              name="cuit"
                              placeholder="Ingresar CUIT" />
                          </div>
                          <div className="form-group">
                            <input type="hidden"
                              className="form-control"
                              id="userdata"
                              name="userdata"
                              value={JSON.stringify(getCart())} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <textarea className="form-control"
                              name="message"
                              id="message"
                              rows="1"
                              placeholder="Ingresar comentarios adicionales"></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" value="submit" className="primary-btn">Enviar Pedido</button>
                        </div>
                      </form>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
