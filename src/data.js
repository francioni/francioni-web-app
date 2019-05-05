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
                    title: 'catalogo 1s2'
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