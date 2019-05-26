export const redirect = (target) => {
    window.location.href = target;
    window.location.reload()
}

export const getCurrentPage = () => window.location.href.split("/")[window.location.href.split("/").length - 1];

export const getCUIT = () => localStorage.getItem('cuit');

export const setCUIT = (cuitValue) => localStorage.setItem('cuit', cuitValue);

export const renderCuitModal = () => window.$("#cuitModal").modal({ show: true });

export const getCart = () => {
    if (localStorage.getItem('cart')) return JSON.parse(localStorage.getItem('cart'));
    return [];
}

export const getCartItemTotalPrice = (item, quantity) => parseInt(item.price) * parseInt(quantity);

export const incrementItemQuantityInCartByOne = item => {
    let cart = getCart();
    cart.forEach(cartItem => {
        if (cartItem.item.model === item.model) {
            cartItem.quantity = parseInt(cartItem.quantity) + 1;
        }
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
}

export const decrementItemQuantityInCartByOne = item => {
    let cart = getCart();
    cart.forEach(cartItem => {
        if (cartItem.item.model === item.model) {
            if (parseInt(cartItem.quantity) > 1) {
                cartItem.quantity = parseInt(cartItem.quantity) - 1;
            }
        }
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
}

export const getCartTotalPrice = () => {
    const cart = getCart();
    let totalPrice = 0;
    cart.forEach(cartItem => {
        totalPrice += totalPrice + (parseInt(cartItem.item.price) * parseInt(cartItem.quantity));
    });
    return totalPrice;
}

export const removeItemFromCart = item => {
    let cart = getCart();
    let updatedCart = [];
    cart.forEach(cartItem => {
        if (cartItem.item.model !== item.model) {
           updatedCart.push(cartItem);
        }
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.reload();
}

export const addItemToCart = (item, quantity) => {
    let cart = getCart();
    const _isAlreadyOnCart = (model, cart) => {
        let isInCart = false;
        cart.forEach(cartItem => {
            if (cartItem.item.model === model) isInCart = true;
        });
        return isInCart;
    }
    if (!_isAlreadyOnCart(item.model, cart)) {
        cart.push({ item, quantity });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}