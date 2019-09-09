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

export const getCartItemTotalPrice = (item, quantity) => {
    return parseInt(item.price) * parseInt(quantity);
}

export const getCartTotalPrice = () => {
    const cart = getCart();
    let totalPrice = 0;
    cart.forEach(cartItem => {
        totalPrice += parseInt(cartItem.item.price) * parseInt(cartItem.quantity);
    });
    return totalPrice;
}

export const isItemAlreadyOnCart = (item, cart) => {
    let isInCart = false;
    cart.forEach(cartItem => {
        if (cartItem.item.model === item.model) isInCart = true;
    });
    return isInCart;
}

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

export const setCurrentlyEditedCartItemModel = (id) => {
    localStorage.setItem('currentlyEditedCartItemModel', id);
};

export const getCurrentlyEditedCartItemModel = () => localStorage.getItem('currentlyEditedCartItemModel');

export const incrementItemQuantityManually = (event) => {
    const updatedItemQuantity = parseInt(event.target.value) ? parseInt(event.target.value) : 1;
    let cart = getCart();
    cart.forEach((cartItem, index) => {
        if(cartItem.item.model === getCurrentlyEditedCartItemModel()) cart[index].quantity = updatedItemQuantity;
    }) 
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
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
    if (!isItemAlreadyOnCart(item, cart)) {
        cart.push({ item, quantity });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    window.location.reload();
}

export const generateCartOrder = () => {
    let body = '';
    const cart = getCart();
    cart.forEach(cartItem => {
        body += cartItem.item.model + '|' + cartItem.item.name + '|' + cartItem.quantity;
        body += '%0D%0A'; 
    });
    const subject = localStorage.getItem('cuit');
    const to = 'leonardodpalumbo@gmail.com ';
    const cc = 'leonardodpalumbo@gmail.com ';
    const bcc = 'leonardodpalumbo@gmail.com ';

    return `mailto:${to}?cc=${cc}&bcc=${bcc}&subject=${subject}&body=${body}`;
}