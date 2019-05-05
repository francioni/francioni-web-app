import React from "react";

export default class ShoppingCart extends React.Component {
  render() {
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
                  <tr>
                    <td>
                      <div class="media">
                        <div class="d-flex">
                          <img src="img/cart.jpg" alt="" />
                        </div>
                        <div class="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                    <td>
                      <div class="product_count">
                        <input
                          type="text"
                          name="qty"
                          id="sst"
                          maxlength="12"
                          value="1"
                          title="Quantity:"
                          class="input-text qty"
                        />
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                          class="increase items-count"
                          type="button"
                        >
                          <i class="lnr lnr-chevron-up" />
                        </button>
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                          class="reduced items-count"
                          type="button"
                        >
                          <i class="lnr lnr-chevron-down" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <h5>$720.00</h5>
                    </td>
                    <td>
                      <div class="cupon_text d-flex align-items-center">
                        <a class="primary-btn" href="#">
                          eliminar
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="media">
                        <div class="d-flex">
                          <img src="img/cart.jpg" alt="" />
                        </div>
                        <div class="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                    <td>
                      <div class="product_count">
                        <input
                          type="text"
                          name="qty"
                          id="sst"
                          maxlength="12"
                          value="1"
                          title="Quantity:"
                          class="input-text qty"
                        />
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                          class="increase items-count"
                          type="button"
                        >
                          <i class="lnr lnr-chevron-up" />
                        </button>
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                          class="reduced items-count"
                          type="button"
                        >
                          <i class="lnr lnr-chevron-down" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <h5>$720.00</h5>
                    </td>
                    <td>
                      <div class="cupon_text d-flex align-items-center">
                        <a class="primary-btn" href="#">
                          eliminar
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="media">
                        <div class="d-flex">
                          <img src="img/cart.jpg" alt="" />
                        </div>
                        <div class="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                    <td>
                      <div class="product_count">
                        <input
                          type="text"
                          name="qty"
                          id="sst"
                          maxlength="12"
                          value="1"
                          title="Quantity:"
                          class="input-text qty"
                        />
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                          class="increase items-count"
                          type="button"
                        >
                          <i class="lnr lnr-chevron-up" />
                        </button>
                        <button
                          onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                          class="reduced items-count"
                          type="button"
                        >
                          <i class="lnr lnr-chevron-down" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <h5>$720.00</h5>
                    </td>
                    <td>
                      <div class="cupon_text d-flex align-items-center">
                        <a class="primary-btn" href="#">
                          eliminar
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td>
                      <h5>Subtotal</h5>
                    </td>
                    <td>
                      <h5>$2160.00</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="cupon_text d-flex align-items-center">
                        <a class="primary-btn" href="#">
                          Generar Pedido
                        </a>
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
