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
      <section class="cart_area">
        <div class="container">
          <div class="cart_inner">
            <div class="table-responsive">
              <table class="table">
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
                            <div class="media">
                              <div class="d-flex">
                                <img style={{'max-height': '100px', 'height': '70%', 'width': 'auto'}} src={cartItem.item.image} alt="" />
                              </div>
                              <div class="media-body">
                                <p>{cartItem.item.description}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h5>${cartItem.item.price}</h5>
                          </td>
                          <td>
                            <div class="product_count">
                              <input
                                type="text"
                                name="qty"
                                id="sst"
                                maxlength="99999"
                                value={cartItem.quantity}
                                title="Cantidad:"
                                class="input-text qty"
                                onChange={(event) => { setCurrentlyEditedCartItemModel(cartItem.item.model); incrementItemQuantityManually(event) }}
                              />
                              <button
                                onClick={() => incrementItemQuantityInCartByOne(cartItem.item)}
                                class="increase items-count"
                                type="button"
                              >
                                <i class="lnr lnr-chevron-up" />
                              </button>
                              <button
                                onClick={() => decrementItemQuantityInCartByOne(cartItem.item)}
                                class="reduced items-count"
                                type="button"
                              >
                                <i class="lnr lnr-chevron-down" />
                              </button>
                            </div>
                          </td>
                          <td>
                            <h5>${getCartItemTotalPrice(cartItem.item, cartItem.quantity)}</h5>
                          </td>
                          <td>
                            <div class="cupon_text d-flex align-items-center" onClick={() => removeItemFromCart(cartItem.item)}>
                              <a class="primary-btn" href="#">
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
                    <td>
                      <div class="cupon_text d-flex align-items-center">
                        <a className="primary-btn" href={generateCartOrder()}>
                        Generar Pedido</a>
                      </div>
                    </td>
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
