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
                    title: 'catalogo 22'
                },
                {
                    title: 'catalogo 2'
                },
                {
                    title: 'catalogo 3'
                },
                {
                    title: 'catalogo 4'
                },
                {
                    title: 'catalogo 5'
                }
            ]
        },
        {
            title: 'contacto',
            href: '#contacto',
        },
        {
            title: 'carrito',
            href: '#carrito',
        }
    ]
}


const bannerSection = {
    items : [
        {
            title: "Anteojos Fedra Modelo 2019",
            description: "Antireflex, los mejores anteojos de la line premium Fedra 2019",
            price: "$412",
            image: "img/items/g9.jpeg"
        },
        {
            title: "Producto2",
            description: "Descripcion de producto en banner 1",
            price: "$412",
            image: "img/banner/banner-img.png"
        }
    ]
}

const featuresSection = {
    items: [
        {
            title: 'Delivery gratuito',
            description: 'Free Shipping on all order',
            image: 'img/features/f-icon1.png'
        },
        {
            title: 'Return Policy',
            description: 'Free Shipping on all order',
            image: 'img/features/f-icon2.png'
        },
        {
            title: '24/7 Support',
            description: 'Free Shipping on all order',
            image: 'img/features/f-icon3.png'
        },
        {
            title: 'Secure Payment',
            description: 'Free Shipping on all order',
            image: 'img/features/f-icon4.png'
        }
    ]
}


const home = {
    header,
    bannerSection,
    featuresSection
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