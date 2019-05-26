const PAGES = {
    HOME: '#home',
    CATALOG: '#catalogo',
    PROMOTIONS: '#promociones',
    CONTACT: '#contacto',
    PRICES: '#precios',
    CART: '#carrito'
}

const products = [
    {
        name: 'Anteojos Fedra Modelo 2020',
        description: 'Antireflex, los mejores anteojos de la line premium Fedra 2019',
        type: 'LIBRE',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: 'red, blue, yellow',
        caliber: 'TBD',
        price: '412',
        strikethorughPrice: '456',
        image: 'img/items/g9.jpeg',
        model: '1549-001',
        brand: 'Route 66',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: true
    },
    {
        name: 'Producto 2',
        description: 'Product 2 Description',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'PLASTIC',
        colors: 'red',
        caliber: 'TBD',
        price: '323',
        strikethorughPrice: '456',
        image: 'img/banner/banner-img.png',
        model: '1549-00223',
        brand: 'Ray Van',
        isPromotion: false,
        category: 'RECETADOS',
        isPromoted: true
    },
    {
        name: 'Producto SOL',
        description: 'Descripcion Producto SOL',
        type: 'LIBRE',
        ring: 'PLASTICO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: 'yellow, pink',
        caliber: 'TBD',
        price: '567',
        strikethorughPrice: '456',
        image: 'img/items/g8.jpeg',
        model: '12345-332',
        brand: 'Anteojos Burma',
        isPromotion: false,
        category: 'SOL',
        isPromoted: false
    }
]

const headerSection = {
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
                    title: 'recetados'
                },
                {
                    title: 'sol'
                }
            ]
        },
        {
            title: 'promociones',
            href: '#promociones',
        },
        {
            title: 'contacto',
            href: '#contacto',
        },
        {
            title: 'politica de precios',
            href: '#precios',
        },
        {
            title: 'carrito',
            href: '#carrito',
        }
    ]
}


const bannerSection = {
    items : products
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

const footerSection = {
    aboutUsTitle: 'ABOUT_US_ADD',
    aboutUsDescription: 'DESCRIPTION_ADD',
    corporateTitle: 'CORPORATE_TITLE_ADD',
    corporateDescription: 'CORPORATE_DESCRIPTION_ADD',
    instagramTitle: 'INSTAGRAM_TITLE_ADD',
    instagramItems: [
        {
            imageUrl: 'img/i1.jpg',
            instagramUrl: 'https://www.instagram.com/'
        },
        {
            imageUrl: 'img/i2.jpg',
            instagramUrl: 'https://www.instagram.com/'
        },
        {
            imageUrl: 'img/i3.jpg',
            instagramUrl: 'https://www.instagram.com/'
        },
        {
            imageUrl: 'img/i4.jpg',
            instagramUrl: 'https://www.instagram.com/'
        },
        {
            imageUrl: 'img/i5.jpg',
            instagramUrl: 'https://www.instagram.com/'
        },
        {
            imageUrl: 'img/i6.jpg',
            instagramUrl: 'https://www.instagram.com/'
        },
        {
            imageUrl: 'img/i7.jpg',
            instagramUrl: 'https://www.instagram.com/'
        },
        {
            imageUrl: 'img/i8.jpg',
            instagramUrl: 'https://www.instagram.com/'
        }
    ],
    letUsBeSocialTitle: 'LET_US_BE_SOCIAL_ADD',
    followUsTitle: 'FOLLOW_US_ADD',
    facebookUrl: 'https://www.google.com',
    twitterUrl: 'https://www.google.com',
    dribbleUrl: 'https://www.google.com',
    behanceUrl: 'https://www.google.com'
}


const home = {
    headerSection,
    bannerSection,
    featuresSection,
    footerSection
}

const catalog = {
    headerSection,
    footerSection
}

const contact = {
    headerSection,
    featuresSection,
    footerSection
}

const cart = {
    headerSection,
    footerSection
}

export default {
    PAGES,
    home,
    catalog,
    contact,
    cart,
    footerSection,
    products
}