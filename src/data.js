const PAGES = {
    HOME: '#home',
    CATALOG: '#catalogo',
    CATALOG_RECIPES: '#catalogo-recetados',
    CATALOG_SUN: '#catalogo-sol',
    //PROMOTIONS: '#promociones',
    CONTACT: '#contacto',
    //PRICES: '#precios',
    CART: '#carrito'
}

const products = [
    {
        name: 'ALESSIO 2562-002',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/alessio-2562-002-frente.jpg',
        imageLateral: 'img/items/alessio-2562-002-lado.jpg',
        model: 'ALESSIO 2562-002',
        brand: 'ALESSIO',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'ALESSIO 2577-002',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/alessio-2577-002-frente.jpg',
        imageLateral: 'img/items/alessio-2577-002-lado.jpg',
        model: 'ALESSIO 2577-002',
        brand: 'ALESSIO',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'ALESSIO 2667-001',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/alessio-2667-001-frente.jpg',
        imageLateral: 'img/items/alessio-2667-001-lado.jpg',
        model: 'ALESSIO 2667-001',
        brand: 'ALESSIO',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'ALESSIO 2691-001 ',
        description: 'TBD',
        type: 'RECETA',
        ring: 'TANZA',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/alessio-2691-001-frente.jpg',
        imageLateral: 'img/items/alessio-2691-001-lado.jpg',
        model: 'ALESSIO 2691-001',
        brand: 'ALESSIO',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'ALESSIO DARIO',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'ZILO',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/alessio-dario-frente.jpg',
        imageLateral: 'img/items/alessio-dario-lado.jpg',
        model: 'ALESSIO DARIO',
        brand: 'ALESSIO',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: true
    },
    {
        name: 'FEDRA 0802-002',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-0802-002-frente.jpg',
        imageLateral: 'img/items/fedra-0802-002-lado.jpg',
        model: 'FEDRA 0802-002',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA 0815-001',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-0815-001-frente.jpg',
        imageLateral: 'img/items/fedra-0815-001-lado.jpg',
        model: 'FEDRA 0815-001',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA 0841-001',
        description: 'Product 2 Description',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-0841-001-frente.jpg',
        imageLateral: 'img/items/fedra-0841-001-lado.jpg',
        model: 'FEDRA 0841-001',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA 1053-001',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-1053-001-frente.jpg',
        imageLateral: 'img/items/fedra-1053-001-lado.jpg',
        model: 'FEDRA 1053-001',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA 1073-001',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-1073-001-frente.jpg',
        imageLateral: 'img/items/fedra-1073-001-lado.jpg',
        model: 'FEDRA 1073-001',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA BIANCA',
        description: 'Product 2 Description',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'ACETATO',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-bianca-frente.jpg',
        imageLateral: 'img/items/fedra-bianca-lado.jpg',
        model: 'FEDRA BIANCA',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: true
    },
    {
        name: 'FEDRA DELFINA',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'ACETATO',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-delfina-frente.jpg',
        imageLateral: 'img/items/fedra-delfina-lado.jpg',
        model: 'FEDRA DELFINA',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: true
    },
    {
        name: 'FEDRA E 105',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-e105-frente.jpg',
        imageLateral: 'img/items/fedra-e105-lado.jpg',
        model: 'FEDRA E 105',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: true
    },
    {
        name: 'FEDRA E15007',
        description: 'TBD',
        type: 'RECETA',
        ring: 'TANZA',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-e15007-frente.jpg',
        imageLateral: 'img/items/fedra-e15007-lado.jpg',
        model: 'FEDRA E15007',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA E15019',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-e15019-frente.jpg',
        imageLateral: 'img/items/fedra-e15019-lado.jpg',
        model: 'FEDRA E15019',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA 15020',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-e15020-frente.jpg',
        imageLateral: 'img/items/fedra-e15020-lado.jpg',
        model: 'FEDRA 15020',
        brand: 'FEDRA' ,
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA E15030',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-e15030-frente.jpg',
        imageLateral: 'img/items/fedra-e15030-lado.jpg',
        model: 'FEDRA E15030',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA E15031',
        description: 'TBD',
        type: 'RECETA',
        ring: 'TANZA',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-e15031-frente.jpg',
        imageLateral: 'img/items/fedra-e15031-lado.jpg',
        model: 'FEDRA E15031',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA E15037',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-e15037-frente.jpg',
        imageLateral: 'img/items/fedra-e15037-lado.jpg',
        model: 'FEDRA E15037',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA E15039',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-e15039-frente.jpg',
        imageLateral: 'img/items/fedra-e15039-lado.jpg',
        model: 'FEDRA E15039',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA E15040',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-e15040-frente.jpg',
        imageLateral: 'img/items/fedra-e15040-lado.jpg',
        model: 'FEDRA E15040',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA E15048',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-e15048-frente.jpg',
        imageLateral: 'img/items/fedra-e15048-lado.jpg',
        model: 'FEDRA E15048',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA LIVIA',
        description: 'Product 2 Description',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'ACETATO',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-livia-frente.jpg',
        imageLateral: 'img/items/fedra-livia-lado.jpg',
        model: 'FEDRA LIVIA',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA MARGOT',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'ACETATO',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-margot-frente.jpg',
        imageLateral: 'img/items/fedra-margot-lado.jpg',
        model: 'FEDRA MARGOT',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: true
    },
    {
        name: 'FEDRA MARINA',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'ACETATO',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-marina-frente.jpg',
        imageLateral: 'img/items/fedra-marina-lado.jpg',
        model: 'FEDRA MARINA',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA SARA',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'ACETATO',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-sara-frente.jpg',
        imageLateral: 'img/items/fedra-sara-lado.jpg',
        model: 'FEDRA SARA',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA VALERIA',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'ACETATO',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-valeria-frente.jpg',
        imageLateral: 'img/items/fedra-valeria-lado.jpg',
        model: 'FEDRA VALERIA',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FEDRA 5411-001',
        description: 'TBD',
        type: 'SOL',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-5411-001-frente.jpg',
        imageLateral: 'img/items/fedra-5411-001-lado.jpg',
        model: 'FEDRA 5411-001',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'SOL',
        isPromoted: false
    },
    {
        name: 'FEDRA ANDREA',
        description: 'TBD',
        type: 'SOL',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-andrea-frente.jpg',
        imageLateral: 'img/items/fedra-andrea-lado.jpg',
        model: 'FEDRA ANDREA',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'SOL',
        isPromoted: true
    },
    {
        name: 'FEDRA ESTELA',
        description: 'TBD',
        type: 'SOL',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-estela-frente.jpg',
        imageLateral: 'img/items/fedra-estela-lado.jpg',
        model: 'FEDRA ESTELA',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'SOL',
        isPromoted: false
    },
    {
        name: 'FEDRA JULIANA',
        description: 'TBD',
        type: 'SOL',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-juliana-frente.jpg',
        imageLateral: 'img/items/fedra-juliana-lado.jpg',
        model: 'FEDRA JULIANA',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'SOL',
        isPromoted: false
    },
    {
        name: 'FEDRA LORENA',
        description: 'TBD',
        type: 'SOL',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-lorena-frente.jpg',
        imageLateral: 'img/items/fedra-lorena-lado.jpg',
        model: 'FEDRA LORENA',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'SOL',
        isPromoted: false
    },
    {
        name: 'FEDRA MAGA',
        description: 'TBD',
        type: 'SOL',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-maga-frente.jpg',
        imageLateral: 'img/items/fedra-maga-lado.jpg',
        model: 'FEDRA MAGA',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'SOL',
        isPromoted: false
    },
    {
        name: 'FEDRA MARCIA',
        description: 'TBD',
        type: 'SOL',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-marcia-frente.jpg',
        imageLateral: 'img/items/fedra-marcia-lado.jpg',
        model: 'FEDRA MARCIA',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'SOL',
        isPromoted: false
    },
    {
        name: 'FEDRA MARTINA',
        description: 'TBD',
        type: 'SOL',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-martina-frente.jpg',
        imageLateral: 'img/items/fedra-martina-lado.jpg',
        model: 'FEDRA MARTINA',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'SOL',
        isPromoted: false
    },
    {
        name: 'FEDRA MOREZ',
        description: 'TBD',
        type: 'SOL',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-morez-frente.jpg',
        imageLateral: 'img/items/fedra-morez-lado.jpg',
        model: 'FEDRA MOREZ',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'SOL',
        isPromoted: false
    },
    {
        name: 'FEDRA PAULINA',
        description: 'TBD',
        type: 'SOL',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-paulina-frente.jpg',
        imageLateral: 'img/items/fedra-paulina-lado.jpg',
        model: 'FEDRA PAULINA',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'SOL',
        isPromoted: false
    },
    {
        name: 'FEDRA SILVANA',
        description: 'TBD',
        type: 'SOL',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/fedra-silvana-frente.jpg',
        imageLateral: 'img/items/fedra-silvana-lado.jpg',
        model: 'FEDRA SILVANA',
        brand: 'FEDRA',
        isPromotion: true,
        category: 'SOL',
        isPromoted: false
    },
    {
        name: 'FRANCIONI 0003-002',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/francioni-0003-002-frente.jpg',
        imageLateral: 'img/items/francioni-0003-002-lado.jpg',
        model: 'FRANCIONI 0003-002',
        brand: 'FRANCIONI',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FRANCIONI 0101-001 ',
        description: 'TBD',
        type: 'RECETA',
        ring: 'TANZA',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/francioni-0101-001-frente.jpg',
        imageLateral: 'img/items/francioni-0101-001-lado.jpg',
        model: 'FRANCIONI 0101-001',
        brand: 'FRANCIONI',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FRANCIONI 0177-001',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/francioni-0177-001-frente.jpg',
        imageLateral: 'img/items/francioni-0177-001-lado.jpg',
        model: 'FRANCIONI 0177-001',
        brand: 'FRANCIONI',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FRANCIONI F20018',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/francioni-f20018-frente.jpg',
        imageLateral: 'img/items/francioni-f20018-lado.jpg',
        model: 'FRANCIONI F20018',
        brand: 'FRANCIONI',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FRANCIONI F20024',
        description: 'TBD',
        type: 'RECETA',
        ring: 'TANZA',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/francioni-f20024-frente.jpg',
        imageLateral: 'img/items/francioni-f20024-lado.jpg',
        model: 'FRANCIONI F20024',
        brand: 'FRANCIONI',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: true
    },
    {
        name: 'FRANCIONI LF17704',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/francioni-lf17704-frente.jpg',
        imageLateral: 'img/items/francioni-lf17704-lado.jpg',
        model: 'FRANCIONI LF17704',
        brand: 'FRANCIONI',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'FRANCIONI FS048',
        description: 'TBD',
        type: 'SOL',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/francioni-fs048-frente.jpg',
        imageLateral: 'img/items/francioni-fs048-lado.jpg',
        model: 'FRANCIONI FS048',
        brand: 'FRANCIONI',
        isPromotion: true,
        category: 'SOL',
        isPromoted: false
    },
    {
        name: 'FRANCIONI FS049',
        description: 'TBD',
        type: 'SOL',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/francioni-FS049-frente.jpg',
        imageLateral: 'img/items/francioni-fs049-lado.jpg',
        model: 'FRANCIONI FS048',
        brand: 'FRANCIONI',
        isPromotion: true,
        category: 'SOL',
        isPromoted: false
    },
    {
        name: 'ROUTE 66 1549-001',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/route66-1549-001-frente.jpg',
        imageLateral: 'img/items/route66-1549-001-lado.jpg',
        model: 'ROUTE 66 1549-001 ',
        brand: 'ROUTE 66',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'ROUTE 66 1553-001',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO ',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/route66-1553-001-frente.jpg',
        imageLateral: 'img/items/route66-1553-001-lado.jpg',
        model: 'ROUTE 66 1553-001',
        brand: 'ROUTE 66',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'ROUTE 66 1558-001',
        description: 'TBD',
        type: 'RECETA',
        ring: 'TANZA',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/route66-1558-001-frente.jpg',
        imageLateral: 'img/items/route66-1558-001-lado.jpg',
        model: 'ROUTE 66 1558-001',
        brand: 'ROUTE 66',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'ROUTE 66 6033-001',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/route66-6033-001-frente.jpg',
        imageLateral: 'img/items/route66-6033-001-lado.jpg',
        model: 'ROUTE 66 6033-001',
        brand: 'ROUTE 66',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: true
    },
    {
        name: 'ROUTE 66 CLEOPATRA',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'DAMA',
        material: 'ACETATO',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/route66-cleopatra-frente.jpg',
        imageLateral: 'img/items/route66-cleopatra-lado.jpg',
        model: 'ROUTE 66 6033-001',
        brand: 'ROUTE 66',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'ROUTE 66 JULIAN',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'ACETATO',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/route66-julian-frente.jpg',
        imageLateral: 'img/items/route66-juian-lado.jpg',
        model: 'ROUTE 66 JULIAN',
        brand: 'ROUTE 66',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'ROUTE 66 R4000',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/route66-r4000-frente.jpg',
        imageLateral: 'img/items/route66-r4000-lado.jpg',
        model: 'ROUTE 66 R4000',
        brand: 'ROUTE 66',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'ROUTE 66 R4010',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/route66-r4010-frente.jpg',
        imageLateral: 'img/items/route66-r4010-lado.jpg',
        model: 'ROUTE 66 R4010',
        brand: 'ROUTE 66',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'ROUTE 66 6078-002',
        description: 'TBD',
        type: 'SOL',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/route66-6078-002-frente.jpg',
        imageLateral: 'img/items/route66-6078-002-lado.jpg',
        model: 'ROUTE 66 6078-002 ',
        brand: 'ROUTE 66',
        isPromotion: true,
        category: 'SOL',
        isPromoted: false
    },
    {
        name: 'ROUTE 66 JERRY',
        description: 'TBD',
        type: 'SOL',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'ACETATO',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/route66-jerry-frente.jpg',
        imageLateral: 'img/items/route66-jerry-lado.jpg',
        model: 'ROUTE 66 6078-002 ',
        brand: 'ROUTE 66',
        isPromotion: true,
        category: 'SOL',
        isPromoted: false
    },
    {
        name: 'SYMBOL MATIAS',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'ACETATO',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/symbol-matias-frente.jpg',
        imageLateral: 'img/items/symbol-matias-lado.jpg',
        model: 'SYMBOL 6078-002',
        brand: 'SYMBOL',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: true
    },
    {
        name: 'SYMBOL Y43',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/symbol-y43-frente.jpg',
        imageLateral: 'img/items/symbol-y43-lado.jpg',
        model: 'SYMBOL Y43',
        brand: 'SYMBOL',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'SYMBOL Y5004',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/symbol-y5004-frente.jpg',
        imageLateral: 'img/items/symbol-y5004-lado.jpg',
        model: 'SYMBOL Y5004',
        brand: 'SYMBOL',
        isPromotion: true,
        category: 'RECETADOS',
        isPromoted: false
    },
    {
        name: 'SYMBOL Y5009',
        description: 'TBD',
        type: 'RECETA',
        ring: 'ENTERO',
        segment: 'CABALLERO',
        material: 'METAL',
        colors: '',
        caliber: '',
        price: '500',
        strikethorughPrice: '650',
        image: 'img/items/symbol-y5009-frente.jpg',
        imageLateral: 'img/items/symbol-y5009-lado.jpg',
        model: 'SYMBOL Y5009',
        brand: 'SYMBOL',
        isPromotion: true,
        category: 'RECETADOS',
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
                    title: 'recetados',
                    href: '#catalogo-recetados'
                },
                {
                    title: 'sol',
                    href: '#catalogo-sol'
                }
            ]
        },
        // {
        //     title: 'promociones',
        //     href: '#promociones',
        // },
        {
            title: 'contacto',
            href: '#contacto',
        },
        // {
        //     title: 'politica de precios',
        //     href: '#precios',
        // },
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
            image: 'img/items/img/features/f-icon1.png'
        },
        {
            title: 'Return Policy',
            description: 'Free Shipping on all order',
            image: 'img/items/img/features/f-icon2.png'
        },
        {
            title: '24/7 Support',
            description: 'Free Shipping on all order',
            image: 'img/items/img/features/f-icon3.png'
        },
        {
            title: 'Secure Payment',
            description: 'Free Shipping on all order',
            image: 'img/items/img/features/f-icon4.png'
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