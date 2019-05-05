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
                    title: 'catalogo 12'
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
        }
    ]
}


const bannerSection = {
    items : [
        {
            title: "Producto1",
            description: "Descripcion de producto en banner 1",
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


const home = {
    header,
    bannerSection
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