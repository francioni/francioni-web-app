const PAGES = {
    HOME: '#home',
    CATALOG: '#catalogo',
    CONTACT: '#contacto'
}

const header = {
    items: [
        {
            title: 'home',
            href: '#home'
        },
        {
            title: 'catalogo',
            href: '#catalogo',
            options: [
                {
                    title: 'Sos trolo'
                },
                {
                    title: 'Product Details'
                },
                {
                    title: 'Product Checkout'
                },
                {
                    title: 'Shopping Cart'
                },
                {
                    title: 'Confirmation'
                }
            ]
        },
        {
            title: 'contacto',
            href: '#contacto',
        }
    ]
}

const home = {
    header
}

const catalog = {
    header
}

const contact = {
    header
}

export default {
    PAGES,
    home,
    catalog,
    contact,
    header
}