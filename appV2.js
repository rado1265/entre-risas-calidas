// app.js - Entre Risas Cálidas - Interactive Catalog & Order Engine

const PRODUCTS_DATA = [
  {
    id: 'pack-margaritas',
    name: 'Pack Jardín de Flores',
    category: 'packs',
    categoryName: 'Packs',
    dimensions: '',
    description: 'Delicado pack de velas en forma de margarita, perfectas para regalar o decorar tus espacios con un toque floral y especial. Elige entre distintos tamaños, colores y aromas para crear una combinación única. 🌸',
    image: 'assets/v2/2 margaritas.webp',
    isCustomPhoto: false,
    excentoEmpaque: true,
    sizes: [
      { id: 'pack-2-margaritas', name: 'Pack 2 Margaritas', price: 2500/* 2400 */, image: 'assets/v2/2 margaritas.webp' },
      { id: 'pack-3-margaritas', name: 'Pack 3 Margaritas', price: 3800/* 3750 */, image: 'assets/v2/3 margaritas.webp' },
    ]
  },
  {
    id: 'hornillo-wax',
    name: 'Pack Aroma & Calidez',
    category: 'packs',
    categoryName: 'Packs',
    dimensions: '',
    description: 'Un rincón de aroma y calidez para disfrutar en cualquier momento. Incluye un hornillo decorativo de cemento y 25 gramos de wax melts de cera de soja, disponibles con aroma a elección. Ideal para perfumar tus espacios y crear un ambiente acogedor.',
    image: 'assets/v2/calentador de cera.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    sizes: [
      { id: 'hornillo-wax', name: 'Pack Aroma & Calidez', price: 9990/* 10990 */, image: 'assets/v2/calentador de cera.png' }
    ]
  }, {
    id: 'serenidad-entre-lavanda-y-loto',
    name: 'Pack Armonía Zen',
    category: 'packs',
    categoryName: 'Packs',
    dimensions: '',
    description: 'Bandeja de cemento + Buda de yeso + vela de loto de cera de soja. Personaliza el color y aroma de tu vela y crea un rincón lleno de calma y armonía.',
    image: 'assets/v2/serenidad loto.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    sizes: [
      { id: 'serenidad-entre-lavanda-y-loto', name: 'Pack Armonía Zen', price: 11990/* 5900 */, image: 'assets/v2/serenidad loto.png' }
    ]
  }, {
    id: 'velas-romantic-bandeja-floral',
    name: 'Bandeja Amor & Rosas',
    category: 'packs',
    categoryName: 'Packs',
    dimensions: '',
    description: 'Un detalle lleno de amor y dulzura. Bandeja decorativa de cemento acompañada de una vela “Love” con aroma a elección y delicadas flores en forma de rosas. Un regalo especial para celebrar el amor, aniversarios, cumpleaños o simplemente sorprender a alguien importante.',
    image: 'assets/v2/velas sobre bandeja floral.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    sizes: [
      { id: 'velas-romantic-bandeja-floral', name: 'Bandeja Amor & Rosas', price: 8990/* 7900 */, image: 'assets/v2/velas sobre bandeja floral.png' }
    ]
  }, {
    id: 'velas-florales-bandeja-romantica',
    name: 'Bandeja Jardín de Flores',
    category: 'packs',
    categoryName: 'Packs',
    dimensions: '',
    description: 'Un delicado rincón floral hecho para regalar y sorprender. Bandeja decorativa de cemento acompañada de hermosas velas florales de cera de soja, con detalles en forma de corazón y rosas. Puedes personalizar los colores y aromas para crear una combinación única y especial.',
    image: 'assets/v2/velas florales sobre bandeja romantica.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    sizes: [
      { id: 'velas-florales-bandeja-romantica', name: 'Bandeja Jardín de Flores', price: 7990/* 7900 */, image: 'assets/v2/velas florales sobre bandeja romantica.png' }
    ]
  }, {
    id: 'casitas-de-ensueno',
    name: 'Rincón de Casitas',
    category: 'packs',
    categoryName: 'Packs',
    dimensions: '',
    description: 'Pequeñas casitas, grandes momentos. Crea una decoración cálida y encantadora para tu hogar o para regalar.',
    image: 'assets/v2/casitas de ensueño con lavanda y petalos.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    sizes: [
      { id: 'casitas-de-ensueno', name: 'Rincón de Casitas', price: 2190/* 2190 */, image: 'assets/v2/casitas de ensueño con lavanda y petalos.png' }
    ]
  }, {
    id: 'pequeno-encanto',
    name: 'Pequeño Encanto',
    category: 'packs',
    categoryName: 'Regalos',
    dimensions: '',
    description: 'Un pequeño detalle lleno de aroma y encanto, ideal para perfumar espacios, cajones o regalar un momento de calma. Presentado con un hermoso detalle decorativo, listo para sorprender.(Incluye tarjeta personalizada)',
    image: 'assets/v2/saquito flores y recuerdos.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    sizes: [
      { id: 'pequeno-encanto', name: 'Pequeño Encanto', price: 1290/* 5900 */, image: 'assets/v2/saquito flores y recuerdos.png' }
    ]
  },// CATEGORIA 3: Litofanías y Recuerdos Personalizados
  {
    id: 'litofania-individual-10cm',
    name: 'Litofanía Individual Personalizada',
    category: 'litofanias',
    categoryName: 'Litofanías & Personalizados',
    dimensions: 'Placa de foto 3D de 10 cm de ancho.',
    description: 'Fotografía en relieve 3D que cobra vida al encender su vela. Un recuerdo mágico y emocionante.',
    image: 'assets/litofania/litografia base.webp',
    isCustomPhoto: true,
    excentoEmpaque: true,
    /* sizes: [
      { id: '10cm', name: 'Placa 10 cm', priceExtra: 0, image: 'assets/litofania/litografia base.webp' },
      { id: '15cm', name: 'Placa 15 cm', priceExtra: 2000, image: 'assets/litofania/litografia cuadro.webp' },
      { id: '20cm', name: 'Placa 20 cm', priceExtra: 4000, image: 'assets/litofania/litografia base.webp' }
    ], */
    variants: [
      { id: 'base-imagen', name: 'Base LED + Placa Imagen', price: 6990, image: 'assets/litofania/litografia base.webp' },
      { id: 'solo-imagen', name: 'Solo Placa Imagen 3D - 10 cm aprox', price: 4990, image: 'assets/litofania/litografia base.webp' },
      { id: 'solo-base', name: 'Solo Base LED Madera - 10 cm aprox', price: 2490, image: 'assets/litofania/litografia base.webp' }
    ]
  },
  {
    id: 'litofania-marco-cubo',
    name: 'Litofanía Marco Cubo (4 Fotos)',
    category: 'litofanias',
    categoryName: 'Litofanías & Personalizados',
    dimensions: 'Cubo con 4 fotografías personalizadas',
    description: 'Lámpara de noche en forma de cubo con 4 fotografías familiares personalizables para iluminación por vela.',
    image: 'assets/litofania/litografia cuadro.webp',
    isCustomPhoto: true,
    excentoEmpaque: true,
    /* sizes: [
      { id: 'estandar', name: 'Fotos 7,5 × 10 cm', priceExtra: 0, image: 'assets/litofania/litografia cuadro.webp' },
      { id: 'grande', name: 'Fotos 10 × 12 cm', priceExtra: 5000, image: 'assets/litofania/litografia base.webp' }
    ], */
    variants: [
      { id: 'marco-4fotos', name: 'Marco Cubo + 4 Fotos 3D', price: 19990, image: 'assets/litofania/litografia cuadro.webp' },
      { id: 'solo-marco', name: 'Solo Marco Cubo - 12 x 11 cm aprox', price: 8990, image: 'assets/litofania/litografia cuadro.webp' },
      { id: 'solo-imagen-repuesto', name: 'Solo 1 Foto - 7,5 × 10 cm aprox', price: 4490, image: 'assets/litofania/litografia cuadro.webp' }
    ]
  },



  // Yeso y cemento
  {
    id: 'Porta-contraluz',
    name: 'Porta Vela contraluz',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso',
    dimensions: '4 cm × 5, cm',
    description: 'Porta Vela contraluz para vela pequeña.',
    image: 'assets/v2/decoracion/contraluz angel gris yeso.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    material: [
      { id: 'Yeso', name: 'Yeso', price: 490/* , image: 'assets/decoracion/contraluz/contraluz angel.webp' */ },
    ],
    diseño: [
      { id: 'Angel', name: 'Angel', price: 0, image: 'assets/v2/decoracion/contraluz angel gris yeso.png' },
      { id: 'Estrella', name: 'Estrella', price: 0, image: 'assets/v2/decoracion/contraluz estrella gris yeso.png' },
      { id: 'Corazon', name: 'Corazón', price: 0, image: 'assets/v2/decoracion/contraluz corazon gris yeso.png' },
      { id: 'arbol navidad', name: 'Arbol Navidad', price: 0, image: 'assets/v2/decoracion/contraluz arbol navidad gris yeso.png' },
    ], sizes: [
      { id: 'estandar', name: '4 cm × 5 cm', price: 0/* , image: 'assets/decoracion/cuadradocontapa/cuadrado tapa blanco.webp' */ }
    ],
    colors: [
      { id: 'Gris', name: 'Gris/Blanco', hex: '#9E9E9E', priceExtra: 0 },
    ]/* ,
    entrega: [
      { id: 'enCaja', name: 'En Caja', priceExtra: 200 },
      { id: 'personalizado', name: 'En Caja y etiqueta personalizada', priceExtra: 400 },
      { id: 'recibir', name: 'Eventos', priceExtra: 600 }
    ], descuentosCantidad: [
      { min: 50, discount: 12 },
      { min: 20, discount: 8 },
      { min: 10, discount: 5 }
    ] */
  }, {
    id: 'portavelas-Alhajero',
    name: 'Portavelas Alhajero',
    category: 'yeso-cemento',
    categoryName: 'Decoración Cemento',
    dimensions: '11 cm × 9,5 cm',
    description: 'Alhajero minimalista y multipropósito, ideal para posar velas, joyas, llaves o elementos de perfumería.',
    image: 'assets/v2/decoracion/corazon gris cemento.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    material: [
      /* { id: 'Yeso', name: 'Yeso', price: 1490, image: 'assets/decoracion/joyeros/corazon.webp' }, */
      { id: 'Cemento', name: 'Cemento', price: 5990 },
    ],
    diseño: [
      { id: 'corazon', name: 'Corazon 11 cm × 9,5 cm', price: 5990, image: 'assets/v2/decoracion/corazon gris cemento.png' },
      { id: 'flor', name: 'Flor 10 cm × 10 cm', price: 5990, image: 'assets/v2/decoracion/flor gris cemento.png' },
      { id: 'mariposa', name: 'Mariposa 10 cm × 10 cm', price: 5990, image: 'assets/v2/decoracion/mariposa blanco cemento.png' },
    ],
    colors: [
      { id: 'Gris', name: 'Gris/Blanco', hex: '#9E9E9E', priceExtra: 0 },
    ]
  },
  {
    id: 'joyero-tortuga',
    name: 'Tortuga con Tapa',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '14 cm × 10 cm',
    description: 'Alhajero minimalista y multipropósito, ideal para posar velas, joyas o llaves.',
    image: 'assets/v2/decoracion/tortuga yeso gris.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    material: [
      { id: 'Yeso', name: 'Yeso', price: 3490, image: 'assets/v2/decoracion/tortuga yeso gris.png' },
      { id: 'Cemento', name: 'Cemento', price: 6990, image: 'assets/v2/decoracion/tortuga yeso gris.png' },
    ],
    sizes: [
      { id: 'estandar', name: '14 cm × 10 cm', price: 0 }
    ],
    colors: [
      { id: 'Gris', name: 'Gris/Blanco', hex: '#9E9E9E', priceExtra: 0 },
    ]
  },
  {
    id: 'joyero-taichi',
    name: 'Portavela tipo Tai chi',
    category: 'yeso-cemento',
    categoryName: 'Decoración Cemento',
    dimensions: 'Ø9 cm',
    description: 'Alhajero minimalista y multipropósito, ideal para posar velas, joyas, llaves o elementos de perfumería.',
    image: 'assets/v2/decoracion/taichi gris cemento.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    material: [
      /* { id: 'Yeso', name: 'Yeso', price: 1590, image: 'assets/decoracion/joyeros/taichi.webp' }, */
      { id: 'Cemento', name: 'Cemento', price: 4990/* 3790 */, image: 'assets/v2/decoracion/taichi gris cemento.png' },
    ],
    sizes: [
      { id: 'estandar', name: 'Ø9 cm', price: 0 }
    ],
    colors: [
      { id: 'Gris', name: 'Gris/Blanco', hex: '#9E9E9E', priceExtra: 0 },

    ]
  }, {
    id: 'joyero-cuerda',
    name: 'Portavela tipo Cuerda Cañamo ',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: 'Ø6 cm',
    description: 'Alhajero minimalista y multipropósito, ideal para posar velas, joyas, llaves o elementos de perfumería.',
    image: 'assets/v2/decoracion/frasco gris cemento.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    material: [
      { id: 'Yeso', name: 'Yeso', price: 1200/* 590 */, image: 'assets/v2/decoracion/frasco gris cemento.png' },
      { id: 'Cemento', name: 'Cemento', price: 3700/* 1290 */, image: 'assets/v2/decoracion/frasco gris cemento.png' },
    ],
    sizes: [
      { id: 'estandar', name: 'Ø6 cm', price: 0, image: 'assets/v2/decoracion/frasco gris cemento.png' }
    ],
    colors: [
      { id: 'Gris', name: 'Gris/Blanco', hex: '#9E9E9E', priceExtra: 0, image: 'assets/v2/decoracion/frasco gris cemento.png' },

    ]
  }, {
    id: 'joyero-infinito',
    name: 'Portavela Infinito “Tú & Yo” ❤️',
    category: 'yeso-cemento',
    categoryName: 'Decoración Cemento',
    dimensions: '16,5 cm x 6 cm',
    description: 'Alhajero minimalista y multipropósito, ideal para posar velas, joyas, llaves o elementos de perfumería.',
    image: 'assets/v2/decoracion/love infinito cemento.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    material: [
      /*  { id: 'Yeso', name: 'Yeso', price: 1790, image: 'assets/decoracion/joyeros/love infinito.webp' }, */
      { id: 'Cemento', name: 'Cemento', price: 7990/* 7990 */, image: 'assets/v2/decoracion/love infinito cemento.png' },
    ],
    sizes: [
      { id: 'estandar', name: '16,5 cm x 6 cm', price: 0, image: 'assets/v2/decoracion/love infinito cemento.png' }
    ],
    colors: [
      { id: 'Gris', name: 'Gris/Blanco', hex: '#9E9E9E', priceExtra: 0, image: 'assets/v2/decoracion/love infinito cemento.png' },
    ]
  }, {
    id: 'buda',
    name: 'Buda',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso',
    dimensions: '9,5 cm x 6 cm',
    description: 'Alhajero minimalista y multipropósito, ideal para posar velas, joyas, llaves o elementos de perfumería.',
    image: 'assets/v2/decoracion/buda yeso gris.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    material: [
      { id: 'Yeso', name: 'Yeso', price: 2490 /* 1290 */, image: 'assets/v2/decoracion/buda yeso gris.png' },
      //{ id: 'Cemento', name: 'Cemento', price: 5490/* 2990 */, image: 'assets/v2/decoracion/buda gris cemento.png' },
    ],
    sizes: [
      { id: 'estandar', name: '9,5 cm x 6 cm', price: 0 }
    ],
    colors: [
      { id: 'Gris', name: 'Gris/Blanco', hex: '#9E9E9E', priceExtra: 0 }
    ]
  }, {
    id: 'joyero-loto',
    name: 'Portavela tipo Loto',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: 'Ø8 cm',
    description: 'Alhajero minimalista y multipropósito, ideal para posar velas, joyas, llaves o elementos de perfumería.',
    image: 'assets/v2/decoracion/loto gris cemento.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    material: [
      { id: 'Yeso', name: 'Yeso', price: 1890/* 990 */, image: 'assets/v2/decoracion/loto gris cemento.png' },
      { id: 'Cemento', name: 'Cemento', price: 4490/* 2390 */, image: 'assets/v2/decoracion/loto gris cemento.png' },
    ],
    sizes: [
      { id: 'estandar', name: 'Ø8 cm', price: 0, image: 'assets/v2/decoracion/loto gris cemento.png' }
    ],
    colors: [
      { id: 'Gris', name: 'Gris/Blanco', hex: '#9E9E9E', priceExtra: 0, image: 'assets/decoracion/joyeros/loto.webp' }
    ]
  }, {
    id: 'bandeja-corazon',
    name: 'Bandeja Corazón',
    category: 'yeso-cemento',
    categoryName: 'Decoración Cemento',
    dimensions: '12 cm x 11,5 cm',
    description: 'Bandeja decorativa minimalista y versátil, ideal para posar velas, joyas, llaves o elementos de perfumería.',
    image: 'assets/v2/decoracion/bandeja corazon gris cemento.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    material: [
      /* { id: 'Yeso', name: 'Yeso', price: 1290, image: 'assets/decoracion/corazon/bandeja corazon.webp' }, */
      { id: 'Cemento', name: 'Cemento', price: 6990/* 2990 */, image: 'assets/v2/decoracion/bandeja corazon gris cemento.png' },
    ],
    sizes: [
      { id: '18cm', name: '12 cm x 11,5 cm', priceExtra: 0, image: 'assets/v2/decoracion/bandeja corazon gris cemento.png' }
    ],
    colors: [
      { id: 'Gris', name: 'Gris/Blanco', hex: '#9E9E9E', priceExtra: 0 },
    ]
  }, {
    id: 'bandeja-corazon2',
    name: 'Bandeja Corazón v2',
    category: 'yeso-cemento',
    categoryName: 'Decoración Cemento',
    dimensions: '9,5 cm x 10,5 cm',
    description: 'Bandeja decorativa minimalista y versátil, ideal para posar velas, joyas, llaves o elementos de perfumería.',
    image: 'assets/v2/decoracion/corazon v2 gris cemento.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    material: [
      /* { id: 'Yeso', name: 'Yeso', price: 1290, image: 'assets/decoracion/corazon/corazon v2.webp' }, */
      { id: 'Cemento', name: 'Cemento', price: 5990/* 2990 */, image: 'assets/v2/decoracion/corazon v2 gris cemento.png' },
    ],
    sizes: [
      { id: 'estandar', name: '9,5 cm x 10,5 cm', priceExtra: 0, image: 'assets/v2/decoracion/corazon v2 gris cemento.png' }
    ],
    colors: [
      { id: 'Gris', name: 'Gris/Blanco', hex: '#9E9E9E', priceExtra: 0 }
    ]
  },
  {
    id: 'bandeja-redonda',
    name: 'Bandeja Redonda',
    category: 'yeso-cemento',
    categoryName: 'Decoración Cemento',
    dimensions: '1 cm alto',
    description: 'Bandeja decorativa minimalista y versátil, ideal para posar velas, joyas, llaves o elementos de perfumería.',
    image: 'assets/v2/decoracion/ovalado mediano blanco cemento.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    material: [
      /* { id: 'Yeso', name: 'Yeso', price: 490, image: 'assets/decoracion/redondo/ovalado mediano.webp' }, */
      { id: 'Cemento', name: 'Cemento', price: 3990/* 3990 */, image: 'assets/v2/decoracion/ovalado mediano blanco cemento.png' },
    ],
    sizes: [
      { id: '18cm', name: 'Ø8 cm (Individual)', priceExtra: 0, image: 'assets/v2/decoracion/ovalado mediano blanco cemento.png' },
      { id: '25cm', name: 'Ø11 cm (Grande)', priceExtra: 1500/* 2900 */, image: 'assets/v2/decoracion/ovalado mediano blanco cemento.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Gris/Blanco', hex: '#FAF9F6', priceExtra: 0, image: 'assets/v2/decoracion/ovalado mediano blanco cemento.png' }
    ]
  },
  {
    id: 'gatito-portavelas',
    name: 'Gatito Portavelas',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso',
    dimensions: '10 cm largo × 6 cm alto aprox.',
    description: 'Ternura y funcionalidad en una sola pieza. Sculpted candle holder perfecto para dar calidez a tu mesa o velador.',
    image: 'assets/v2/decoracion/gato blanco cemento.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    material: [
      { id: 'Yeso', name: 'Yeso', price: 3990/* 1590 */, image: 'assets/decoracion/gato/gato blanco cemento.png' },
      /* { id: 'Cemento', name: 'Cemento', price: 2990 3890, image: 'assets/decoracion/gato/gato.webp' }, */
    ], sizes: [
      { id: 'estandar', name: '10 cm × 6 cm', price: 0 }
    ],
    colors: [
      { id: 'Blanco', name: 'Gris/Blanco', hex: '#FAF9F6', priceExtra: 0 }
    ]
  },
  /* {
    id: 'bandeja-hoja',
    name: 'Bandeja Hoja',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '21,2 × 12,2 cm',
    description: 'Diseño botánico inspirado en la naturaleza. Textura sutil y delicada para centro de mesa o decoración.',
    image: 'assets/decoracion/hoja/hoja.webp',
    material: [
      { id: 'Yeso', name: 'Yeso', price: 1690, image: 'assets/decoracion/hoja/hoja.webp' },
      { id: 'Cemento', name: 'Cemento', price: 3990, image: 'assets/decoracion/hoja/hoja.webp' },
    ], sizes: [
      { id: 'estandar', name: '21,2 × 12,2 cm', price: 0, image: 'assets/decoracion/hoja/hoja.webp' }
    ],
    colors: [
      { id: 'Blanco', name: 'Gris/Blanco', hex: '#FAF9F6', priceExtra: 0 }
    ]
  }, */
  {
    id: 'hornillo-aromatico',
    name: 'Hornillo Aromático con bandeja quemadora',
    category: 'yeso-cemento',
    categoryName: 'Decoración Cemento',
    dimensions: 'Ø8 cm × 7,5 cm',
    description: 'Diseñado especialmente para wax melts, aceites esenciales o aromaterapia. Incluye cavidad para tea-light.',
    image: 'assets/v2/decoracion/hornillo gris cemento.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    material: [
      /* { id: 'Yeso', name: 'Yeso', price: 2990, image: 'assets/decoracion/hornillo/hornillo.webp' }, */
      { id: 'Cemento', name: 'Cemento', price: 8990, image: 'assets/v2/decoracion/hornillo gris cemento.png' },
    ], sizes: [
      { id: 'estandar', name: 'Ø9 cm', price: 0, image: 'assets/v2/decoracion/hornillo gris cemento.png' }
    ],
    colors: [
      { id: 'Gris', name: 'Gris/Blanco', hex: '#9E9E9E', priceExtra: 0, image: 'assets/v2/decoracion/hornillo gris cemento.png', },
    ]
  },
  {
    id: 'bandeja-ovalada',
    name: 'Bandeja Ovalada',
    category: 'yeso-cemento',
    categoryName: 'Decoración Cemento',
    dimensions: '17,5 × 9 × 1,5 cm',
    description: 'Estética limpia y estilizada. Ideal para organizar frascos de perfume, accesorios o velas cilíndricas.',
    image: 'assets/v2/decoracion/ovalado blanco cemento.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    material: [
      //{ id: 'Yeso', name: 'Yeso', price: 0/* 1690 */, image: 'assets/v2/decoracion/ovalado blanco cemento.png' },
      { id: 'Cemento', name: 'Cemento', price: 6490/* 3990 */, image: 'assets/v2/decoracion/ovalado blanco cemento.png' },
    ], sizes: [
      { id: 'estandar', name: '17,5 × 9 × 1,5 cm', price: 0, image: 'assets/v2/decoracion/ovalado blanco cemento.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Gris/Blanco', hex: '#FAF9F6', priceExtra: 0 }
    ]
  }, {
    id: 'bandeja-ovalada-doble',
    name: 'Bandeja Ovalada doble',
    category: 'yeso-cemento',
    categoryName: 'Decoración Cemento',
    dimensions: '17,5 × 9 × 1,5 cm',
    description: 'Estética limpia y estilizada. Ideal para organizar frascos de perfume, accesorios o velas cilíndricas.',
    image: 'assets/v2/decoracion/ovalada doble blanco cemento.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    material: [
      //{ id: 'Yeso', name: 'Yeso', price: 1790, image: 'assets/decoracion/ovalado/ovalada doble.webp' },
      { id: 'Cemento', name: 'Cemento', price: 6990/* 4190 */, image: 'assets/v2/decoracion/ovalada doble blanco cemento.png' },
    ], sizes: [
      { id: 'estandar', name: '17,5 × 9 × 1,5 cm', price: 0, image: 'assets/v2/decoracion/ovalada doble blanco cemento.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Gris/Blanco', hex: '#9E9E9E', priceExtra: 0, image: 'assets/v2/decoracion/ovalada doble blanco cemento.png' }
    ]
  },/*  {
    id: 'bandeja-nube',
    name: 'Bandeja Nube',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '19 × 13,5 × 1,5 cm',
    description: 'Estética limpia y estilizada. Ideal para organizar frascos de perfume, accesorios o velas cilíndricas.',
    image: 'assets/decoracion/bandejanube/bandeja nube.webp',
    material: [
      { id: 'Yeso', name: 'Yeso', price: 1990, image: 'assets/decoracion/bandejanube/bandeja nube.webp' },
      { id: 'Cemento', name: 'Cemento', price: 4690, image: 'assets/decoracion/bandejanube/bandeja nube.webp' },
    ], sizes: [
      { id: 'estandar', name: '19 × 13,5 × 1,5 cm', price: 0, image: 'assets/decoracion/bandejanube/bandeja nube.webp' }
    ],
    colors: [
      { id: 'Gris', name: 'Gris/Blanco', hex: '#9E9E9E', priceExtra: 0, image: 'assets/decoracion/bandejanube/bandeja nube.webp' }
    ]
  },
  {
    id: 'caja-redonda-tapa',
    name: 'Caja Redonda con Tapa',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '5,5 cm × 3,5 cm',
    description: 'Alhajero minimalista y multipropósito con tapa encajable para resguardar pequeños tesoros.',
    image: 'assets/decoracion/redondocontapa/redondo tapa.webp',
    material: [
      { id: 'Yeso', name: 'Yeso', price: 590, image: 'assets/decoracion/redondocontapa/redondo tapa.webp' },
      { id: 'Cemento', name: 'Cemento', price: 1290, image: 'assets/decoracion/redondocontapa/redondo tapa.webp' },
    ], sizes: [
      { id: 'estandar', name: '5,5 cm × 3,5 cm', price: 0, image: 'assets/decoracion/redondocontapa/redondo tapa anco.webp' }
    ],
    colors: [
      { id: 'Blanco', name: 'Gris/Blanco', hex: '#FAF9F6', priceExtra: 0, image: 'assets/decoracion/redondocontapa/redondo tapa.webp' },
    ]
  },
  {
    id: 'caja-cuadrada-tapa',
    name: 'Caja Cuadrada con Tapa',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '6 cm × 4, cm',
    description: 'Alhajero minimalista y multipropósito con tapa encajable para resguardar pequeños tesoros.',
    image: 'assets/decoracion/cuadradocontapa/cuadrado tapa.webp',
    material: [
      { id: 'Yeso', name: 'Yeso', price: 790, image: 'assets/decoracion/cuadradocontapa/cuadrado tapa.webp' },
      { id: 'Cemento', name: 'Cemento', price: 1890, image: 'assets/decoracion/cuadradocontapa/cuadrado tapa.webp' },
    ], sizes: [
      { id: 'estandar', name: '6 cm × 4, cm', price: 0, image: 'assets/decoracion/cuadradocontapa/cuadrado tapa.webp' }
    ],
    colors: [
      { id: 'Blanco', name: 'Gris/Blanco', hex: '#FAF9F6', priceExtra: 0, image: 'assets/decoracion/cuadradocontapa/cuadrado tapa.webp' },
    ]
  }, */
  // Velas ---------------------------------------------------------
  {
    id: 'loto-v1',
    name: 'Flor de Loto Vela Soja',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: '9 cm ancho x 4 cm alto',
    description: 'Escultura de loto con micro-textura en cera de soja pura.',
    image: 'assets/v2/velas/loto.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    isCandle: true,
    sizes: [
      { id: 'estandar', name: '9 cm ancho x 4 cm alto', price: 3490/* 1700 */, image: 'assets/v2/velas/loto.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 500/* 100 */ },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 500/* 100 */ },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 500/* 100 */ },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 500/* 100 */ },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 500/* 100 */ },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 500/* 100 */ },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 500/* 100 */ },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 500/* 100 */ },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 500/* 100 */ },
      { id: 'Otro', name: 'Otro', hex: '', priceExtra: 500/* 100 */ },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0, icon: 'assets/icons/nada.webp' },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 1000/* 1200 */, icon: 'assets/icons/lavanda.webp' },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 1000/* 1200 */, icon: 'assets/icons/vainilla.webp' },
      { id: 'limon', name: 'Limón', priceExtra: 1000/* 1200 */, icon: 'assets/icons/limon.webp' },
      { id: 'Floral', name: 'Floral', priceExtra: 1000/* 1200 */, icon: 'assets/icons/flor.webp' }
    ]
  }, {
    id: 'love-v1',
    name: 'Vela "Love" Vela Soja',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: '10,5 cm ancho x 5 cm alto',
    description: 'Escultura romántica de corazón con micro-textura en cera de soja pura.',
    image: 'assets/v2/velas/vela romantica Love.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    isCandle: true,
    sizes: [
      { id: 'estandar', name: '10,5 cm ancho x 5 cm alto', price: 2990/* 2900 */, image: 'assets/v2/velas/vela romantica Love.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 500/* 100 */ },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 500/* 100 */ },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 500/* 100 */ },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 500/* 100 */ },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 500/* 100 */ },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 500/* 100 */ },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 500/* 100 */ },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 500/* 100 */ },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 500/* 100 */ },
      { id: 'Otro', name: 'Otro', hex: '', priceExtra: 500/* 100 */ },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0, icon: 'assets/icons/nada.webp' },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 1000/* 1200 */, icon: 'assets/icons/lavanda.webp' },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 1000/* 1200 */, icon: 'assets/icons/vainilla.webp' },
      { id: 'limon', name: 'Limón', priceExtra: 1000/* 1200 */, icon: 'assets/icons/limon.webp' },
      { id: 'Floral', name: 'Floral', priceExtra: 1000/* 1200 */, icon: 'assets/icons/flor.webp' }
    ]
  }, {
    id: 'cilindro-v1-Vela-Soja',
    name: 'Cilindro Ovalado Vela Soja',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura 12 cm alto aprox.',
    description: 'Escultura mística de cilindro en cera vegetal. Un detalle cálido y sereno para decorar tu hogar.',
    image: 'assets/v2/velas/cilindro ovalado v1 2.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    isCandle: true,
    sizes: [
      { id: 'estandar', name: '12 cm alto', price: 3490 /* 2100 */, image: 'assets/v2/velas/cilindro ovalado v1 2.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 500/* 100 */ },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 500/* 100 */ },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 500/* 100 */ },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 500/* 100 */ },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 500/* 100 */ },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 500/* 100 */ },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 500/* 100 */ },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 500/* 100 */ },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 500/* 100 */ },
      { id: 'Otro', name: 'Otro', hex: '', priceExtra: 500/* 100 */ },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0, icon: 'assets/icons/nada.webp' },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 1000/* 1200 */, icon: 'assets/icons/lavanda.webp' },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 1000/* 1200 */, icon: 'assets/icons/vainilla.webp' },
      { id: 'limon', name: 'Limón', priceExtra: 1000/* 1200 */, icon: 'assets/icons/limon.webp' },
      { id: 'Floral', name: 'Floral', priceExtra: 1000/* 1200 */, icon: 'assets/icons/flor.webp' }
    ]
  }, {
    id: 'Corazon-love-Vela-Soja',
    name: 'Corazon "Love" Vela Soja',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura 6 cm alto aprox.',
    description: 'Escultura romántica de corazón con micro-textura en cera de soja pura.',
    image: 'assets/v2/velas/corazon love 2.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    isCandle: true,
    sizes: [
      { id: 'estandar', name: '6 cm alto', price: 2990/* 1400 */, image: 'assets/v2/velas/corazon love 2.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 500/* 100 */ },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 500/* 100 */ },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 500/* 100 */ },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 500/* 100 */ },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 500/* 100 */ },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 500/* 100 */ },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 500/* 100 */ },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 500/* 100 */ },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 500/* 100 */ },
      { id: 'Otro', name: 'Otro', hex: '', priceExtra: 500/* 100 */ },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0, icon: 'assets/icons/nada.webp' },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 1000/* 1200 */, icon: 'assets/icons/lavanda.webp' },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 1000/* 1200 */, icon: 'assets/icons/vainilla.webp' },
      { id: 'limon', name: 'Limón', priceExtra: 1000/* 1200 */, icon: 'assets/icons/limon.webp' },
      { id: 'Floral', name: 'Floral', priceExtra: 1000/* 1200 */, icon: 'assets/icons/flor.webp' }
    ]
  }, {
    id: 'virgen-blanca-v1-Vela-Soja',
    name: 'Virgen v1 Vela Soja',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura 6,5 cm alto aprox.',
    description: 'Escultura mística de Virgen en cera vegetal. Un detalle cálido y sereno para decorar tu hogar.',
    image: 'assets/v2/velas/virgen blanca v1 2.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    isCandle: true,
    sizes: [
      { id: 'estandar', name: '6 cm alto', price: 1490/* 1100 */, image: 'assets/v2/velas/virgen blanca v1 2.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 500/* 100 */ },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 500/* 100 */ },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 500/* 100 */ },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 500/* 100 */ },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 500/* 100 */ },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 500/* 100 */ },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 500/* 100 */ },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 500/* 100 */ },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 500/* 100 */ },
      { id: 'Otro', name: 'Otro', hex: '', priceExtra: 500/* 100 */ },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0, icon: 'assets/icons/nada.webp' },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 1000/* 1200 */, icon: 'assets/icons/lavanda.webp' },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 1000/* 1200 */, icon: 'assets/icons/vainilla.webp' },
      { id: 'limon', name: 'Limón', priceExtra: 1000/* 1200 */, icon: 'assets/icons/limon.webp' },
      { id: 'Floral', name: 'Floral', priceExtra: 1000/* 1200 */, icon: 'assets/icons/flor.webp' }
    ]
  }, {
    id: 'virgen blanca v2-Vela-Soja',
    name: 'Virgen v2 Vela Soja',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura 6,5 cm alto aprox.',
    description: 'Escultura mística de Virgen en cera vegetal. Un detalle cálido y sereno para decorar tu hogar.',
    image: 'assets/v2/velas/virgen blanca v2 2.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    isCandle: true,
    sizes: [
      { id: 'estandar', name: '6,5 cm alto', price: 1490, image: 'assets/v2/velas/virgen blanca v2 2.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 500/* 100 */ },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 500/* 100 */ },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 500/* 100 */ },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 500/* 100 */ },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 500/* 100 */ },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 500/* 100 */ },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 500/* 100 */ },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 500/* 100 */ },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 500/* 100 */ },
      { id: 'Otro', name: 'Otro', hex: '', priceExtra: 500/* 100 */ },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0, icon: 'assets/icons/nada.webp' },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 1000/* 1200 */, icon: 'assets/icons/lavanda.webp' },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 1000/* 1200 */, icon: 'assets/icons/vainilla.webp' },
      { id: 'limon', name: 'Limón', priceExtra: 1000/* 1200 */, icon: 'assets/icons/limon.webp' },
      { id: 'Floral', name: 'Floral', priceExtra: 1000/* 1200 */, icon: 'assets/icons/flor.webp' }
    ]
  }, {
    id: 'angelitos-parafina',
    name: 'Ángel/Angelita Vela Parafina',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura 10 cm alto aprox.',
    description: 'Escultura delicada de ángel. Ideal para recuerditos de bautizo o primera comunión.',
    image: 'assets/v2/velas/angelita parafina.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    isCandle: true,
    sizes: [
      { id: 'mujer', name: 'Niña 10 cm alto', price: 3490/* 1500 */, image: 'assets/v2/velas/angelita parafina.png' },
      { id: 'hombre', name: 'Niño 10 cm alto', price: 3490/* 1500 */, image: 'assets/v2/velas/angel parafina.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 500/* 100 */ },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 500/* 100 */ },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 500/* 100 */ },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 500/* 100 */ },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 500/* 100 */ },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 500/* 100 */ },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 500/* 100 */ },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 500/* 100 */ },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 500/* 100 */ },
      { id: 'Otro', name: 'Otro', hex: '', priceExtra: 500/* 100 */ },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0, icon: 'assets/icons/nada.webp' },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 1000/* 1200 */, icon: 'assets/icons/lavanda.webp' },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 1000/* 1200 */, icon: 'assets/icons/vainilla.webp' },
      { id: 'limon', name: 'Limón', priceExtra: 1000/* 1200 */, icon: 'assets/icons/limon.webp' },
      { id: 'Floral', name: 'Floral', priceExtra: 1000/* 1200 */, icon: 'assets/icons/flor.webp' }
    ],
  },
  {
    id: 'wax-metls-corazon',
    name: 'Wax Melts Corazon',
    category: 'velas',
    categoryName: 'Velas Artesanales - Wax Melts',
    dimensions: '1,5 cm c/u',
    description: 'Conjunto de corazones para quemar en tu hornillo y dar un detalle cálido y sereno para dar fragancia a tu hogar.',
    image: 'assets/v2/velas/wax metls corazon.png',
    isCustomPhoto: false,
    excentoEmpaque: true,
    isCandle: true,
    sizes: [
      { id: 'mujer', name: 'Bolsa 25gr', price: 1990/* 1500 */, image: 'assets/v2/velas/wax metls corazon.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 300/* 100 */ },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 300/* 100 */ },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 300/* 100 */ },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 300/* 100 */ },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 300/* 100 */ },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 300/* 100 */ },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 300/* 100 */ },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 300/* 100 */ },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 300/* 100 */ },
      { id: 'Otro', name: 'Otro', hex: '', priceExtra: 300/* 100 */ },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0, icon: 'assets/icons/nada.webp' },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 700/* 1800 */, icon: 'assets/icons/lavanda.webp' },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 700/* 1800 */, icon: 'assets/icons/vainilla.webp' },
      { id: 'limon', name: 'Limón', priceExtra: 700/* 1800 */, icon: 'assets/icons/limon.webp' },
      { id: 'Floral', name: 'Floral', priceExtra: 700/* 1800 */, icon: 'assets/icons/flor.webp' }
    ]
  }
];

// STATE MANAGEMENT
let currentCategoryFilter = 'todos';
let searchQuery = '';
let selectedOptionsMap = {}; // { productId: { sizeId, colorId, aromaId, variantId } }
let expandedColorsMap = {}; // { productId: boolean }
let cart = []; // Array of cart items

// ============================================
// CONFIGURACIÓN GLOBAL DE LA COTIZACIÓN
// ============================================

const QUOTE_CONFIG = {
  presentacionGeneral: [
    { id: 'porProducto', name: 'Todo junto en una caja', badge: '(Una sola caja)', desc: 'Todos los productos se entregan juntos en una única caja.', priceExtra: 0, icon: '📦' },
    { id: 'todoJuntoPersonalizado', name: 'Todo junto en caja personalizada', badge: '(Una sola caja + etiqueta)', desc: 'Todos los productos se entregan juntos en una única caja con etiqueta personalizada.', priceExtra: 600, icon: '🏷️' },
    /* { id: 'sinEmpaqueGeneral', name: 'Sin empaque', badge: '(Pedido completo)', desc: 'Todo el pedido se entrega sin empaque.', priceExtra: 0, icon: '📦' }, */
    { id: 'eventos', name: 'Momentos especiales', badge: '(A cotizar)', desc: 'Envíanos tu idea y cotizamos la presentación general según tus necesidades.', priceExtra: -1, icon: '🎁' }
  ],
  presentacionesProducto: [
    /*  { id: 'sinEmpaque', name: 'Sin Diseño', badge: '(Sin diseño)', desc: 'La pieza se entrega sin diseño.', priceExtra: 0, icon: '👤' },
     { id: 'enCaja', name: 'En Caja', badge: '(Ideal para regalo simple)', desc: 'Incluye caja de cartón kraft.', priceExtra: 250, icon: '📦' },
     { id: 'personalizado', name: 'Caja Decorada + Etiqueta Personalizada', badge: '(Regalo único)', desc: 'Incluye caja decorada + etiqueta personalizada con tu diseño.', priceExtra: 400, icon: '🏷️' },
     { id: 'eventos', name: 'Momentos especiales', badge: '(A cotizar)', desc: 'Presentación especial a definir.', priceExtra: -1, icon: '🎁' } */
  ],
  descuentosCantidad: [
    { min: 51, discount: 15 },
    { min: 21, discount: 12 },
    { min: 10, discount: 10 }
  ]
};

let quoteOptions = { presentationMode: 'porProducto' };

function getProductPresentations(product) {
  if (!product || product.excentoEmpaque === true) return [];
  return Array.isArray(product.presentaciones) && product.presentaciones.length > 0 ? product.presentaciones : QUOTE_CONFIG.presentacionesProducto;
}

function getProductPresentation(product, presentationId) {
  if (!product || product.excentoEmpaque === true) return null;
  const presentations = getProductPresentations(product);
  return presentations.find(p => p.id === presentationId) || presentations[0] || null;
}

// PAGINATION STATE
let currentPage = 1;
const ITEMS_PER_PAGE = 12;

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  initDefaultState();
  renderCatalog();
  setupEventListeners();
  updateCartBadge();
});

function initDefaultState() {
  PRODUCTS_DATA.forEach(p => {
    selectedOptionsMap[p.id] = {
      materialId: null,
      diseñoId: null,
      sizeId: null,
      colorId: null,
      aromaId: null,
      variantId: null,
      presentationId: null,
      quantity: 1
    };
  });
}

function getMissingProductOptions(product, options = {}) {
  const missing = [];
  if (product.material && product.material.length > 0 && !options.materialId) {
    missing.push('Material');
  }
  if (product.diseño && product.diseño.length > 0 && !options.diseñoId) {
    missing.push('Diseño');
  }
  if (product.sizes && product.sizes.length > 0 && !options.sizeId) {
    missing.push('Tamaño');
  }
  if (product.colors && product.colors.length > 0 && !options.colorId) {
    missing.push('Color / Tono');
  }
  if (product.aromas && product.aromas.length > 0 && !options.aromaId) {
    missing.push('Aroma');
  }
  if (product.variants && product.variants.length > 0 && !options.variantId) {
    missing.push('Opción');
  }
  if (!product.excentoEmpaque && !options.presentationId) {
    missing.push('Presentación');
  }
  return missing;
}

function formatCLP(amount) {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(amount);
}

function setupEventListeners() {
  // Category tabs
  const tabBtns = document.querySelectorAll('.tab-pill');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategoryFilter = btn.dataset.category;
      currentPage = 1;
      renderCatalog();
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      currentPage = 1;
      renderCatalog();
    });
  }

  // Cart Drawer toggles
  document.getElementById('open-cart-btn')?.addEventListener('click', openCartDrawer);
  document.getElementById('close-cart-btn')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cart-backdrop')?.addEventListener('click', closeCartDrawer);
  document.getElementById('send-whatsapp-order')?.addEventListener('click', sendConsolidatedWhatsAppOrder);

  // Modal triggers
  document.getElementById('close-modal-btn')?.addEventListener('click', closeModal);
  document.getElementById('modal-backdrop')?.addEventListener('click', closeModal);
}

function getProductState(product) {
  const options = selectedOptionsMap[product.id] || {};
  debugger
  const selectedMaterial = options.materialId ? product.material?.find(s => s.id === options.materialId) || null : null;
  const selectedDiseño = options.diseñoId ? product.diseño?.find(s => s.id === options.diseñoId) || null : null;
  const selectedSize = options.sizeId ? product.sizes?.find(s => s.id === options.sizeId) || null : null;
  const selectedColor = options.colorId ? product.colors?.find(c => c.id === options.colorId) || null : null;
  const selectedAroma = options.aromaId ? product.aromas?.find(a => a.id === options.aromaId) || null : null;
  const selectedVariant = options.variantId ? product.variants?.find(v => v.id === options.variantId) || null : null;

  let price = 0;

  if (selectedVariant) {
    price = Number(selectedVariant.price) || 0;
  } else if (selectedMaterial) {
    price = Number(selectedMaterial.price) || 0;
  } else if (selectedSize) {
    price = Number(selectedSize.price) || 0;
  } else if (selectedDiseño) {
    price = Number(selectedDiseño.price) || 0;
  } else {
    price = Number(product.price) || 0;
  }


  // EXTRAS
  if (selectedSize && !selectedVariant) {
    price += Number(selectedSize.priceExtra) || 0;
  }

  if (selectedDiseño) {
    price += Number(selectedDiseño.priceExtra) || 0;
  }

  if (selectedColor) {
    price += Number(selectedColor.priceExtra) || 0;
  }

  if (selectedAroma) {
    price += Number(selectedAroma.priceExtra) || 0;
  }

  const quantity = Number(options.quantity) || 1;
  const discountPercent = getDiscountByQuantity(quantity);
  const discountAmount = price * (discountPercent / 100);
  const discountedPrice = price - discountAmount;


  // PRESENTACIÓN / EMPAQUE
  const selectedPresentation =
    (product.excentoEmpaque || !options.presentationId)
      ? null
      : getProductPresentation(product, options.presentationId);

  const presentationPrice =
    selectedPresentation && Number(selectedPresentation.priceExtra) > 0
      ? Number(selectedPresentation.priceExtra)
      : 0;


  // TOTAL DEL PRODUCTO + PRESENTACIÓN
  const total =
    (discountedPrice + presentationPrice) * quantity;


  let image = product.image;
  if (selectedColor && selectedColor.image) {
    image = selectedColor.image;
  } else if (selectedMaterial && selectedMaterial.image) {
    image = selectedMaterial.image;
  } else if (selectedDiseño && selectedDiseño.image) {
    image = selectedDiseño.image;
  } else if (selectedSize && selectedSize.image) {
    image = selectedSize.image;
  } else if (selectedVariant && selectedVariant.image) {
    image = selectedVariant.image;
  }

  /*  const selectedPresentation = (product.excentoEmpaque || !options.presentationId) ? null : getProductPresentation(product, options.presentationId); */

  const missingOptions = getMissingProductOptions(product, options);
  const isComplete = missingOptions.length === 0;

  return {
    selectedDiseño,
    selectedMaterial,
    selectedSize,
    selectedColor,
    selectedAroma,
    selectedVariant,
    selectedPresentation,
    price,
    image,
    quantity,
    discountPercent,
    discountAmount,
    discountedPrice,
    total,
    missingOptions,
    isComplete
  };
}

/* function getDiscountByQuantity(product, quantity) {
  if (!product.descuentosCantidad || quantity <= 0) {
    return 0;
  }

  const discount = product.descuentosCantidad
    .filter(d => quantity >= d.min)
    .sort((a, b) => b.min - a.min)[0];

  return discount ? discount.discount : 0;
} */
function getDiscountByQuantity(quantity) {
  if (!quantity || quantity <= 0) {
    return 0;
  }

  const discount = QUOTE_CONFIG.descuentosCantidad
    .filter(d => quantity >= d.min)
    .sort((a, b) => b.min - a.min)[0];

  return discount ? discount.discount : 0;
}

function updateQuotePresentationMode(modeId) {
  quoteOptions.presentationMode = modeId;
  renderCartDrawer();
}

function updateProductPresentation(productId, presentationId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product || product.excentoEmpaque) return;
  if (!selectedOptionsMap[productId]) selectedOptionsMap[productId] = {};
  selectedOptionsMap[productId].presentationId = presentationId;
  cart.forEach(item => {
    if (item.productId === productId) {
      const p = getProductPresentation(product, presentationId);
      item.presentationId = p?.id || null;
      item.presentationName = p?.name || 'Sin empaque';
      item.presentationPrice = Number(p?.priceExtra) || 0;
      item.presentationPending = p?.priceExtra === -1;
    }
  });
  renderCatalog();
  renderCartDrawer();
}

function updateCartItemPresentation(cartItemId, presentationId) {
  const item = cart.find(i => i.cartItemId === cartItemId);
  if (!item) return;
  const product = PRODUCTS_DATA.find(p => p.id === item.productId);
  if (!product || product.excentoEmpaque) return;
  const p = getProductPresentation(product, presentationId);
  if (!p) return;
  item.presentationId = p.id;
  item.presentationName = p.name;
  item.presentationPrice = Number(p.priceExtra) || 0;
  item.presentationPending = p.priceExtra === -1;
  if (!selectedOptionsMap[item.productId]) selectedOptionsMap[item.productId] = {};
  selectedOptionsMap[item.productId].presentationId = p.id;
  renderCartDrawer();
}

function getDiscountByQuantity(quantity) {
  if (!quantity || quantity <= 0) return 0;
  const discount = QUOTE_CONFIG.descuentosCantidad.filter(d => quantity >= d.min).sort((a, b) => b.min - a.min)[0];
  return discount ? discount.discount : 0;
}

function getQuoteTotals() {
  const totalQuantity = cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
  const productQuantitiesMap = {};
  cart.forEach(item => {
    const pid = item.productId || item.cartItemId.split('-')[0];
    productQuantitiesMap[pid] = (productQuantitiesMap[pid] || 0) + (Number(item.quantity) || 0);
  });
  let subtotal = 0, discountAmount = 0;
  const discountedProductsMap = {};
  const items = cart.map(item => {
    const quantity = Number(item.quantity) || 1;
    const unitPrice = Number(item.price) || 0;
    const pid = item.productId || item.cartItemId.split('-')[0];
    const totalProductQuantity = productQuantitiesMap[pid] || quantity;
    const discountPercent = getDiscountByQuantity(totalProductQuantity);
    const unitDiscount = unitPrice * discountPercent / 100;
    const discountedUnitPrice = unitPrice - unitDiscount;
    const itemSubtotal = unitPrice * quantity;
    const itemDiscount = unitDiscount * quantity;
    const itemTotal = discountedUnitPrice * quantity;
    subtotal += itemSubtotal; discountAmount += itemDiscount;
    if (discountPercent > 0 && itemDiscount > 0) {
      if (!discountedProductsMap[pid]) discountedProductsMap[pid] = { name: item.name, discountPercent, discountAmount: 0, totalUnits: totalProductQuantity };
      discountedProductsMap[pid].discountAmount += itemDiscount;
    }
    return { ...item, quantity, unitPrice, productTypeQuantity: totalProductQuantity, discountPercent, unitDiscount, discountedUnitPrice, itemSubtotal, itemDiscount, itemTotal };
  });

  const presentationMode = quoteOptions.presentationMode || 'porProducto';
  const generalPresentation = QUOTE_CONFIG.presentacionGeneral.find(p => p.id === presentationMode) || QUOTE_CONFIG.presentacionGeneral[0];
  let productPresentationAmount = 0, productPresentationPending = false;
  const productPresentationsMap = {};
  if (presentationMode === 'porProducto') {
    items.forEach(item => {
      const product = PRODUCTS_DATA.find(p => p.id === item.productId);
      if (!product || product.excentoEmpaque) return;
      const p = getProductPresentation(product, item.presentationId);
      if (!p) return;
      if (p.priceExtra === -1) productPresentationPending = true;
      else productPresentationAmount += (Number(p.priceExtra) || 0) * item.quantity;
      productPresentationsMap[item.cartItemId] = { id: p.id, name: p.name, priceExtra: Number(p.priceExtra) || 0, pending: p.priceExtra === -1, quantity: item.quantity };
    });
  }
  let generalPresentationAmount = 0, generalPresentationPending = false;
  if (presentationMode !== 'porProducto') {
    if (generalPresentation.priceExtra === -1) generalPresentationPending = true;
    else generalPresentationAmount = Number(generalPresentation.priceExtra) || 0;
  }
  const presentationAmount = productPresentationAmount + generalPresentationAmount;
  const presentationPending = productPresentationPending || generalPresentationPending;
  const total = subtotal - discountAmount + presentationAmount;
  return { items, subtotal, totalQuantity, discountAmount, discountedProductsMap, presentationMode, generalPresentation, productPresentationsMap, productPresentationAmount, generalPresentationAmount, presentationAmount, presentationPending, total };
}

function getWhatsAppLinkForProduct(product, state) {
  let waText = `Hola! Quisiera consultar por el producto: *${product.name}*\n`;
  if (state.selectedVariant) waText += `• Opción: ${state.selectedVariant.name}\n`;
  if (state.selectedMaterial) waText += `• Material: ${state.selectedMaterial.name}\n`;
  if (state.selectedDiseño) waText += `• Diseño: ${state.selectedDiseño.name}\n`;
  if (state.selectedSize) waText += `• Tamaño: ${state.selectedSize.name}\n`;
  if (state.selectedColor) waText += `• Color: ${state.selectedColor.name}\n`;
  if (state.selectedAroma) waText += `• Aroma: ${state.selectedAroma.name}\n`;
  waText += `• Precio: ${formatCLP(state.price)}`;

  return `https://wa.me/56948738454?text=${encodeURIComponent(waText)}`;
}

// PRICE RANGE & OPTIONS BADGES HELPERS FOR CLEAN CATALOG CARDS
function getProductPriceRange(product) {
  let basePrices = [];

  // =========================
  // PRECIO BASE DEL PRODUCTO
  // =========================

  if (product.variants && product.variants.length > 0) {
    basePrices = product.variants
      .map(v => Number(v.price) || 0)
      .filter(price => price > 0);

  } else if (product.material && product.material.length > 0) {
    basePrices = product.material
      .map(m => Number(m.price) || 0)
      .filter(price => price > 0);

  } else if (product.sizes && product.sizes.length > 0) {
    basePrices = product.sizes
      .map(s => {
        if (s.price !== undefined && Number(s.price) > 0) {
          return Number(s.price);
        }

        return (
          (Number(product.price) || 0) +
          (Number(s.priceExtra) || 0)
        );
      })
      .filter(price => price > 0);

  } else if (product.diseño && product.diseño.length > 0) {
    basePrices = product.diseño
      .map(d => {
        if (d.price !== undefined && Number(d.price) > 0) {
          return Number(d.price);
        }

        return (
          (Number(product.price) || 0) +
          (Number(d.priceExtra) || 0)
        );
      })
      .filter(price => price > 0);

  } else if (
    product.price !== undefined &&
    Number(product.price) > 0
  ) {
    basePrices.push(Number(product.price));
  }

  if (basePrices.length === 0) {
    return formatCLP(0);
  }


  // =========================
  // PRECIO BASE
  // =========================

  const minBasePrice = Math.min(...basePrices);
  const maxBasePrice = Math.max(...basePrices);


  // =========================
  // COLORES
  // =========================

  const colorExtras = product.colors?.length
    ? product.colors
      .map(c => Number(c.priceExtra) || 0)
      .filter(price => price >= 0)
    : [0];

  const minColorExtra = Math.min(...colorExtras);
  const maxColorExtra = Math.max(...colorExtras);


  // =========================
  // AROMAS
  // =========================

  const aromaExtras = product.aromas?.length
    ? product.aromas
      .map(a => Number(a.priceExtra) || 0)
      .filter(price => price >= 0)
    : [0];

  const minAromaExtra = Math.min(...aromaExtras);
  const maxAromaExtra = Math.max(...aromaExtras);


  // =========================
  // PRESENTACIONES
  // =========================

  const presentaciones = getProductPresentations(product);

  const presentacionExtras = presentaciones
    .map(p => Number(p.priceExtra) || 0)
    .filter(price => price >= 0);

  const minPresentacionExtra = presentacionExtras.length
    ? Math.min(...presentacionExtras)
    : 0;

  const maxPresentacionExtra = presentacionExtras.length
    ? Math.max(...presentacionExtras)
    : 0;


  // =========================
  // PRECIO FINAL MÍNIMO
  // =========================

  const minPrice =
    minBasePrice +
    minColorExtra +
    minAromaExtra +
    minPresentacionExtra;


  // =========================
  // PRECIO FINAL MÁXIMO
  // =========================

  const maxPrice =
    maxBasePrice +
    maxColorExtra +
    maxAromaExtra +
    maxPresentacionExtra;


  // =========================
  // RESULTADO
  // =========================

  if (minPrice === maxPrice) {
    return formatCLP(minPrice);
  }

  return `${formatCLP(minPrice)} – ${formatCLP(maxPrice)}`;
}

function getProductOptionsBadges(product) {
  const badges = [];
  if (product.material && product.material.length > 0) {
    const matNames = product.material.map(m => m.name).join(' / ');
    badges.push(`🏺 ${matNames}`);
  }
  if (product.colors && product.colors.length > 0) {
    badges.push(`🎨 ${product.colors.length} Colores`);
  }
  if (product.aromas && product.aromas.length > 0) {
    badges.push(`🌸 Aromas`);
  }
  if (product.diseño && product.diseño.length > 0) {
    badges.push(`✨ ${product.diseño.length} Diseños`);
  }
  if (product.sizes && product.sizes.length > 0) {
    badges.push(`📏 ${product.sizes.length} Tamaños`);
  }
  if (product.variants && product.variants.length > 0) {
    badges.push(`💡 ${product.variants.length} Opciones`);
  }
  if (product.isCustomPhoto) {
    badges.push(`🖼️ Foto 3D`);
  }
  return badges;
}

function updateProductOption(productId, optionType, optionId) {
  if (!selectedOptionsMap[productId]) {
    selectedOptionsMap[productId] = {};
  }
  if (optionType) {
    selectedOptionsMap[productId][optionType] = optionId;
  }

  updateModalDOM(productId);
}

function toggleExpandedColors(productId) {
  expandedColorsMap[productId] = !expandedColorsMap[productId];
  updateModalDOM(productId);
}

function updateProductPresentation(productId, presentationId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product || product.excentoEmpaque) return;
  if (!selectedOptionsMap[productId]) selectedOptionsMap[productId] = {};
  selectedOptionsMap[productId].presentationId = presentationId;

  updateModalDOM(productId);
}

function renderCatalog() {
  const container = document.getElementById('products-grid');
  const paginationContainer = document.getElementById('pagination-container');
  if (!container) return;

  const filtered = PRODUCTS_DATA.filter(product => {
    const matchesCategory = currentCategoryFilter === 'todos' || product.category === currentCategoryFilter;
    const matchesSearch = !searchQuery ||
      product.name.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery) ||
      product.categoryName.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const totalProducts = filtered.length;
  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE) || 1;

  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  if (totalProducts === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 px-4 bg-white/60 rounded-3xl border border-dashed border-[#C86D51]/30">
        <div class="w-16 h-16 mx-auto mb-4 text-[#C86D51] opacity-70">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-full h-full"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <h3 class="text-xl font-serif-title text-[#3A2E2B] mb-2 font-semibold">No se encontraron productos</h3>
        <p class="text-sm text-[#6C5C57] max-w-md mx-auto">Prueba seleccionando otra categoría o borrando tu término de búsqueda.</p>
        <button onclick="resetFilters()" class="mt-6 px-5 py-2.5 bg-[#C86D51] text-white text-sm font-medium rounded-full hover:bg-[#b35b40] transition-colors shadow-sm">Ver todo el catálogo</button>
      </div>
    `;
    if (paginationContainer) paginationContainer.innerHTML = '';
    return;
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalProducts);
  const pageProducts = filtered.slice(startIndex, endIndex);

  container.innerHTML = pageProducts.map(product => buildProductCardHTML(product)).join('');

  renderPaginationControls(totalProducts, totalPages, startIndex, endIndex);
}

function renderPaginationControls(totalProducts, totalPages, startIndex, endIndex) {
  const container = document.getElementById('pagination-container');
  if (!container) return;

  if (totalPages <= 1) {
    container.innerHTML = `
      <div class="text-xs text-[#8B5A2B] font-medium">
        Mostrando <strong>${totalProducts}</strong> de <strong>${totalProducts}</strong> productos
      </div>
      <div></div>
    `;
    return;
  }

  let pageButtonsHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const isActive = i === currentPage;
    pageButtonsHTML += `
      <button 
        type="button"
        onclick="goToPage(${i})"
        class="w-9 h-9 rounded-xl text-xs font-semibold transition-all cursor-pointer ${isActive
        ? 'bg-[#C86D51] text-white shadow-md font-bold scale-105'
        : 'bg-white text-[#3A2E2B] border border-gray-200 hover:border-[#C86D51]/50 hover:bg-[#FFFDF9]'
      }"
      >
        ${i}
      </button>
    `;
  }

  container.innerHTML = `
    <div class="text-xs text-[#8B5A2B] font-medium">
      Mostrando <strong>${startIndex + 1} - ${endIndex}</strong> de <strong>${totalProducts}</strong> productos
    </div>

    <div class="flex items-center gap-1.5">
      <button 
        type="button"
        onclick="goToPage(${currentPage - 1})"
        ${currentPage === 1 ? 'disabled' : ''}
        class="px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${currentPage === 1
      ? 'opacity-40 bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
      : 'bg-white text-[#3A2E2B] border-gray-200 hover:border-[#C86D51]/50 hover:bg-[#FFFDF9] cursor-pointer'
    }"
      >
        ← Anterior
      </button>

      ${pageButtonsHTML}

      <button 
        type="button"
        onclick="goToPage(${currentPage + 1})"
        ${currentPage === totalPages ? 'disabled' : ''}
        class="px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${currentPage === totalPages
      ? 'opacity-40 bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
      : 'bg-white text-[#3A2E2B] border-gray-200 hover:border-[#C86D51]/50 hover:bg-[#FFFDF9] cursor-pointer'
    }"
      >
        Siguiente →
      </button>
    </div>
  `;
}

function goToPage(page) {
  currentPage = page;
  renderCatalog();
  const catalogSection = document.getElementById('catalogo');
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function resetFilters() {
  currentCategoryFilter = 'todos';
  searchQuery = '';
  currentPage = 1;
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.tab-pill').forEach(b => {
    b.classList.toggle('active', b.dataset.category === 'todos');
  });
  renderCatalog();
}

function buildProductOptionsHTML(product, state, isModal = true) {
  return `
    <div class="space-y-3 my-3 bg-[#F7EFE5]/50 p-3.5 rounded-2xl border border-[#8B5A2B]/10">
       <!-- 1. Material -->
      ${product.material ? `
        <div>
          <div class="flex justify-between items-center mb-1.5">
            <span class="text-[11px] font-bold text-[#8B5A2B] uppercase tracking-wider">Material:</span>
            <span class="text-[11px] font-semibold text-[#C86D51]">${state.selectedMaterial ? state.selectedMaterial.name : ''}</span>
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${product.material.map(s => {
    const isSelected = state.selectedMaterial && state.selectedMaterial.id === s.id;
    return `
                <button 
                  type="button"
                  onclick="updateProductOption('${product.id}', 'materialId', '${s.id}')"
                  class="option-btn px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1 cursor-pointer ${isSelected ? 'selected' : 'bg-white text-[#3A2E2B] border-gray-200 hover:border-[#C86D51]/50 hover:bg-[#FFFDF9]'}"
                >
                  <span>${s.name}</span>
                  <span class="text-[10px] font-bold text-[#C86D51]">(${formatCLP(s.price)})</span>
                </button>
              `;
  }).join('')}
          </div>
        </div>
      ` : ''}

       <!-- 2. Diseño -->
      ${product.diseño ? `
        <div>
          <div class="flex justify-between items-center mb-1.5">
            <span class="text-[11px] font-bold text-[#8B5A2B] uppercase tracking-wider">Diseño:</span>
            <span class="text-[11px] font-semibold text-[#C86D51]">${state.selectedDiseño ? state.selectedDiseño.name : ''}</span>
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${product.diseño.map(s => {
    const isSelected = state.selectedDiseño && state.selectedDiseño.id === s.id;
    return `
                <button 
                  type="button"
                  onclick="updateProductOption('${product.id}', 'diseñoId', '${s.id}')"
                  class="option-btn px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1 cursor-pointer ${isSelected ? 'selected' : 'bg-white text-[#3A2E2B] border-gray-200 hover:border-[#C86D51]/50 hover:bg-[#FFFDF9]'}"
                >
                  <span>${s.name}</span>
                </button>
              `;
  }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 3. Tamaño -->
      ${product.sizes ? `
        <div>
          <div class="flex justify-between items-center mb-1.5">
            <span class="text-[11px] font-bold text-[#8B5A2B] uppercase tracking-wider">Tamaño:</span>
            <span class="text-[11px] font-semibold text-[#C86D51]">${state.selectedSize ? state.selectedSize.name : ''}</span>
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${product.sizes.map(s => {
    const isSelected = state.selectedSize && state.selectedSize.id === s.id;
    return `
                <button 
                  type="button"
                  onclick="updateProductOption('${product.id}', 'sizeId', '${s.id}')"
                  class="option-btn px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1 cursor-pointer ${isSelected ? 'selected' : 'bg-white text-[#3A2E2B] border-gray-200 hover:border-[#C86D51]/50 hover:bg-[#FFFDF9]'}"
                >
                  <span>${s.name}</span>
                </button>
              `;
  }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 4. Color / Tono -->
      ${product.colors ? (() => {
      const MAX_VISIBLE = 8;
      const isExpanded = !!expandedColorsMap[product.id];
      const totalColors = product.colors.length;
      const hasMore = totalColors > MAX_VISIBLE;

      let visibleColors = product.colors;
      if (hasMore && !isExpanded) {
        visibleColors = product.colors.slice(0, MAX_VISIBLE);
        if (state.selectedColor && !visibleColors.some(c => c.id === state.selectedColor.id)) {
          visibleColors = [...visibleColors.slice(0, MAX_VISIBLE - 1), state.selectedColor];
        }
      }

      const hiddenCount = totalColors - visibleColors.length;

      return `
          <div>
            <div class="flex justify-between items-center mb-1.5">
              <span class="text-[11px] font-bold text-[#8B5A2B] uppercase tracking-wider">Color / Tono:</span>
              <span class="text-[11px] font-semibold text-[#C86D51]">${state.selectedColor ? state.selectedColor.name : ''}</span>
            </div>
            <div class="flex flex-wrap gap-1.5 items-center">
              ${visibleColors.map(c => {
        const isSelected = state.selectedColor && state.selectedColor.id === c.id;
        const isAvailable = c.available !== false;

        return `
                  <button 
                    type="button"
                    onclick="updateProductOption('${product.id}', 'colorId', '${c.id}')"
                    class="option-btn px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 relative overflow-hidden ${isSelected
            ? 'selected'
            : isAvailable
              ? 'bg-[#FFFDF9] text-[#3A2E2B] border-gray-200 hover:border-[#C86D51]/50'
              : 'bg-gray-50 text-gray-400 border-gray-200 opacity-60'
          }"
                  >
                    <span class="w-3.5 h-3.5 rounded-full border border-black/10 inline-block flex-shrink-0" style="background-color: ${c.hex}"></span>
                    <span>${c.name}</span>
                    ${c.priceExtra > 0 ? `<span class="text-[10px] opacity-75">(+${formatCLP(c.priceExtra)})</span>` : ''}

                    ${!isAvailable ? `
                      <span class="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                        <svg class="w-full h-full stroke-gray-400/80" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <line x1="0" y1="100" x2="100" y2="0" stroke-width="1.5" vector-effect="non-scaling-stroke" />
                        </svg>
                      </span>
                    ` : ''}
                  </button>
                `;
      }).join('')}

              ${hasMore ? `
                <button 
                  type="button"
                  onclick="toggleExpandedColors('${product.id}')"
                  class="option-btn px-2.5 py-1.5 rounded-xl text-xs font-bold border border-[#C86D51]/40 bg-[#FFF5F0] text-[#C86D51] hover:bg-[#C86D51] hover:text-white transition-all cursor-pointer flex items-center gap-1 shadow-sm"
                  title="${isExpanded ? 'Ver menos colores' : 'Ver todos los colores'}"
                >
                  <span>${isExpanded ? '− Menos' : `+${hiddenCount}`}</span>
                </button>
              ` : ''}
            </div>
          </div>
        `;
    })() : ''}

      <!-- 5. Aromas -->
      ${product.aromas ? `
        <div>
          <div class="flex justify-between items-center mb-1.5">
            <span class="text-[11px] font-bold text-[#8B5A2B] uppercase tracking-wider">Aroma:</span>
            <span class="text-[11px] font-semibold text-[#C86D51]">${state.selectedAroma ? state.selectedAroma.name : ''}</span>
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${product.aromas.map(a => {
      const isSelected = state.selectedAroma && state.selectedAroma.id === a.id;
      return `
                <button 
                  type="button"
                  onclick="updateProductOption('${product.id}', 'aromaId', '${a.id}')"
                  class="option-btn px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${isSelected ? 'selected' : 'bg-white text-[#6C5C57] border-gray-200 hover:border-gray-400'}"
                >
                   <img src="${a.icon}"width=18 alt="${product.name}"/> ${a.name}
                  ${a.priceExtra > 0 ? `<span class="text-[10px] opacity-75">(+${formatCLP(a.priceExtra)})</span>` : ''}
                </button>
              `;
    }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 6. Variantes -->
      ${product.variants ? `
        <div>
          <div class="flex justify-between items-center mb-1.5">
            <span class="text-[11px] font-bold text-[#8B5A2B] uppercase tracking-wider">Opción:</span>
            <span class="text-[11px] font-semibold text-[#C86D51]">${state.selectedVariant ? state.selectedVariant.name : ''}</span>
          </div>
          <div class="grid grid-cols-1 gap-1.5">
            ${product.variants.map(v => {
      const isSelected = state.selectedVariant && state.selectedVariant.id === v.id;
      return `
                <button 
                  type="button"
                  onclick="updateProductOption('${product.id}', 'variantId', '${v.id}')"
                  class="option-btn px-3 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center justify-between gap-2 text-left cursor-pointer ${isSelected ? 'selected' : 'bg-white text-[#3A2E2B] border-gray-200 hover:border-[#C86D51]/50 hover:bg-[#FFFDF9]'}"
                >
                  <div class="flex items-center gap-1.5">
                    <span class="text-[#C86D51]">${isSelected ? '●' : '○'}</span>
                    <span>${v.name}</span>
                  </div>
                  <span class="font-bold text-[#C86D51]">${formatCLP(v.price)}</span>
                </button>
              `;
    }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 7. Presentación -->
      ${!product.excentoEmpaque ? `
        <div class="pt-3 mt-2 border-t border-[#8B5A2B]/10">
          <div class="flex justify-between items-center mb-1.5">
            <span class="text-[11px] font-bold text-[#8B5A2B] uppercase tracking-wider">🎁 Presentación / Empaque:</span>
            <span class="text-[11px] font-semibold text-[#C86D51]">${state.selectedPresentation ? state.selectedPresentation.name : 'Sin empaque'}</span>
          </div>
          <div class="grid grid-cols-1 gap-1.5">
            ${getProductPresentations(product).map(presentation => {
      const isSelected = state.selectedPresentation?.id === presentation.id;
      const isPending = presentation.priceExtra === -1;
      return `
                <button type="button" onclick="updateProductPresentation('${product.id}', '${presentation.id}')"
                  class="relative w-full text-left px-3 py-2 rounded-xl border transition-all ${isSelected ? (isPending ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-500/20' : 'bg-[#FFFDF9] border-[#C86D51] ring-2 ring-[#C86D51]/15') : 'bg-white border-gray-200 hover:border-[#C86D51]/40 hover:bg-[#FFFDF9]'}">
                  <div class="flex items-center justify-between gap-2">
                    <span class="flex items-center gap-1.5 text-xs font-semibold text-[#3A2E2B]"><span>${presentation.icon || '🎁'}</span><span>${presentation.name}</span></span>
                    <span class="text-[10px] font-bold ${isPending ? 'text-amber-700' : 'text-[#C86D51]'}">${isPending ? 'A cotizar' : (presentation.priceExtra > 0 ? '+' + formatCLP(presentation.priceExtra) : 'Sin costo')}</span>
                  </div>
                  <div class="text-[10px] text-[#6C5C57] mt-0.5">${presentation.desc}</div>
                  ${isSelected ? '<span class="absolute -top-2 right-2 bg-[#C86D51] text-white text-[9px] font-bold px-2 py-0.5 rounded-full">Seleccionado</span>' : ''}
                </button>`;
    }).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function changeModalQuantity(productId, delta) {
  if (!selectedOptionsMap[productId]) selectedOptionsMap[productId] = {};
  const currentQuantity = selectedOptionsMap[productId].quantity || 1;
  const newQuantity = Math.max(1, currentQuantity + delta);
  selectedOptionsMap[productId].quantity = newQuantity;

  updateModalDOM(productId);
}

function updateModalDOM(productId) {

  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  const state = getProductState(product);

  const modalHeader = document.getElementById('modal-header-banner');
  if (modalHeader) {
    /* if (state.isComplete) {
      modalHeader.className = 'bg-emerald-50 border-b border-emerald-200 p-4 flex items-center gap-3 transition-colors';
      modalHeader.innerHTML = `
        <span class="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold shadow-xs flex-shrink-0">✓</span>
        <div>
          <h4 class="text-xs font-bold text-emerald-900 uppercase tracking-wider">¡Opciones completas!</h4>
          <p class="text-[11px] text-emerald-800">Haz clic en el botón inferior para agregar este producto a tu cotización.</p>
        </div>
      `;
    } else {
      modalHeader.className = 'bg-amber-50 border-b border-amber-200 p-4 flex items-center gap-3 transition-colors';
      modalHeader.innerHTML = `
        <span class="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold shadow-xs flex-shrink-0">⚠️</span>
        <div>
          <h4 class="text-xs font-bold text-amber-900 uppercase tracking-wider">Falta seleccionar opciones</h4>
          <p class="text-[11px] text-amber-800">Debes elegir: <strong class="underline">${state.missingOptions.join(', ')}</strong> para habilitar la cotización.</p>
        </div>
      `;
    } */
  }

  const modalImg = document.getElementById('modal-product-img');
  if (modalImg && modalImg.getAttribute('src') !== state.image) {
    modalImg.classList.add('opacity-40');
    setTimeout(() => {
      modalImg.setAttribute('src', state.image);
      modalImg.classList.remove('opacity-40');
    }, 150);
  }

  const modalUnitPrice = document.getElementById('modal-unit-price-display');

  if (modalUnitPrice) {
    const presentationPrice =
      state.selectedPresentation &&
        Number(state.selectedPresentation.priceExtra) > 0
        ? Number(state.selectedPresentation.priceExtra)
        : 0;

    const configuredUnitPrice =
      Number(state.price || 0) + presentationPrice;

    modalUnitPrice.textContent =
      configuredUnitPrice > 0
        ? formatCLP(configuredUnitPrice)
        : 'Por configurar';
  }

  const modalDiscountBadge = document.getElementById('modal-discount-badge');
  if (modalDiscountBadge) {
    if (state.discountPercent > 0 && state.isComplete) {
      modalDiscountBadge.textContent = `🏷️ ¡${state.discountPercent}% de descuento por volumen aplicado!`;
      modalDiscountBadge.classList.remove('hidden');
    } else {
      modalDiscountBadge.classList.add('hidden');
    }
  }

  const modalOptions = document.getElementById('modal-product-options');
  if (modalOptions) modalOptions.innerHTML = buildProductOptionsHTML(product, state, true);

  const qtyVal = document.getElementById('modal-quantity-val');
  if (qtyVal) qtyVal.textContent = state.quantity;

  const btnContainer = document.getElementById('modal-add-to-cart-container');
  if (btnContainer) {
    if (state.isComplete) {
      btnContainer.innerHTML = `
        <button 
          id="modal-add-to-cart-btn"
          onclick="addConfiguredModalToCart('${product.id}')" 
          class="w-full bg-[#8B5A2B] hover:bg-[#724822] active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-2xl text-xs transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
          <span>✨ Agregar a mi Lista de Cotización — Total: ${formatCLP(state.total)}</span>
        </button>
      `;
    } else {
      btnContainer.innerHTML = `
        <button 
          id="modal-add-to-cart-btn"
          disabled
          class="w-full bg-gray-200 text-gray-400 font-bold py-3.5 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 cursor-not-allowed border border-gray-300 opacity-80"
        >
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          <span>Falta elegir: ${state.missingOptions.join(', ')}</span>
        </button>
      `;
    }
  }

  const modalWa = document.getElementById('modal-wa-link');
  if (modalWa) {
    if (state.isComplete) {
      modalWa.setAttribute('href', getWhatsAppLinkForProduct(product, state));
      modalWa.classList.remove('opacity-50', 'pointer-events-none');
    } else {
      modalWa.classList.add('opacity-50', 'pointer-events-none');
    }
  }
}

function addConfiguredModalToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  const state = getProductState(product);

  if (!state.isComplete) {
    showToastNotification(`Por favor selecciona: ${state.missingOptions.join(', ')}`);
    return;
  }

  const details = [];
  if (state.selectedVariant) details.push(state.selectedVariant.name);
  if (state.selectedMaterial) details.push(`Material: ${state.selectedMaterial.name}`);
  if (state.selectedDiseño) details.push(`Diseño: ${state.selectedDiseño.name}`);
  if (state.selectedSize) details.push(`Tamaño: ${state.selectedSize.name}`);
  if (state.selectedColor) details.push(`Color: ${state.selectedColor.name}`);
  if (state.selectedAroma) details.push(`Aroma: ${state.selectedAroma.name}`);
  const variantLabel = details.join(' · ') || 'Estándar';

  const cartItemId = `${productId}-${state.selectedMaterial?.id || ''}-${state.selectedDiseño?.id || ''}-${state.selectedSize?.id || ''}-${state.selectedColor?.id || ''}-${state.selectedAroma?.id || ''}-${state.selectedVariant?.id || ''}`;
  const presentation = product.excentoEmpaque ? null : state.selectedPresentation;

  const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += state.quantity;
  } else {
    cart.push({
      cartItemId,
      productId: product.id,
      name: product.name,
      variantName: variantLabel,
      price: state.price,
      quantity: state.quantity,
      image: state.image,
      excentoEmpaque: !!product.excentoEmpaque,
      presentationId: presentation?.id || null,
      presentationName: presentation?.name || (product.excentoEmpaque ? 'Exento de empaque' : 'Sin empaque'),
      presentationPrice: Number(presentation?.priceExtra) || 0,
      presentationPending: presentation?.priceExtra === -1
    });
  }

  updateCartBadge();
  renderCartDrawer();
  closeModal();
  showToastNotification(`¡"${product.name}" (${variantLabel}) × ${state.quantity} agregado a tu cotización!`);
}

function buildProductCardHTML(product) {
  const state = getProductState(product);
  const priceRange = getProductPriceRange(product);
  const optionBadges = getProductOptionsBadges(product);
  const isRange = priceRange.includes('–');

  return `
    <article data-product-id="${product.id}" class="product-card glass-panel rounded-3xl overflow-hidden flex flex-col justify-between border border-[#C86D51]/15 relative group hover:shadow-xl transition-all duration-300">
      
      <!-- Top Image Header (Clickable) -->
      <div onclick="openProductDetailModal('${product.id}')" class="relative overflow-hidden aspect-[4/3] bg-[#F7EFE5]/50 cursor-pointer group">
        <img src="${state.image}" alt="${product.name}" class="product-card-img img-zoom w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        
        <!-- Category Pill Badge -->
        <span class="absolute top-3 left-3 bg-[#FFFDF9]/90 backdrop-blur-md text-[#8B5A2B] text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-[#8B5A2B]/20">
          ${product.categoryName}
        </span>

        <!-- Quick View Hover Overlay -->
        <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span class="bg-white/95 backdrop-blur-md text-[#3A2E2B] text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <span>✨</span>
            <span>Personalizar y Cotizar</span>
          </span>
        </div>
      </div>

      <!-- Product Info -->
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <!-- Title & Price Range -->
          <div class="mb-2">
            <h3 onclick="openProductDetailModal('${product.id}')" class="text-lg font-serif-title font-bold text-[#3A2E2B] group-hover:text-[#C86D51] transition-colors leading-tight cursor-pointer">
              ${product.name}
            </h3>
            
            <div class="mt-1 flex items-baseline gap-1.5">
              <span class="text-xs text-[#8B5A2B] font-medium">Precio:</span>
              <span class="text-lg font-extrabold text-[#C86D51]">
                ${priceRange}
              </span>
              ${isRange ? '<span class="text-[10px] text-[#8B5A2B] italic">(según elección)</span>' : ''}
            </div>
          </div>
          
          <!-- Dimensions -->
          <p class="text-xs text-[#8B5A2B] font-medium mb-2 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-[#C86D51]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
            ${product.dimensions}
          </p>

          <!-- Short Description -->
          <p class="text-xs text-[#6C5C57] mb-3 line-clamp-2 leading-relaxed">
            ${product.description}
          </p>

          <!-- Customization Summary Badges -->
          <div class="flex flex-wrap gap-1 mb-3">
            ${optionBadges.map(b => `<span class="bg-[#F7EFE5] text-[#8B5A2B] text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-[#8B5A2B]/10">${b}</span>`).join('')}
          </div>
        </div>

        <!-- Clean Main Action CTA Button -->
        <div class="pt-3 border-t border-[#8B5A2B]/10 mt-2">
          <button 
            onclick="openProductDetailModal('${product.id}')"
            class="w-full bg-[#C86D51] hover:bg-[#b35b40] active:scale-[0.99] text-white font-bold py-3 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>✨</span>
            <span>Personalizar y Cotizar</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

// CART MANAGEMENT
function addToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  const state = getProductState(product);
  const details = [];
  if (state.selectedVariant) details.push(state.selectedVariant.name);
  if (state.selectedMaterial) details.push(`Material: ${state.selectedMaterial.name}`);
  if (state.selectedDiseño) details.push(`Diseño: ${state.selectedDiseño.name}`);
  if (state.selectedSize) details.push(`Tamaño: ${state.selectedSize.name}`);
  if (state.selectedColor) details.push(`Color: ${state.selectedColor.name}`);
  if (state.selectedAroma) details.push(`Aroma: ${state.selectedAroma.name}`);
  const variantLabel = details.join(' · ') || 'Estándar';
  const cartItemId = `${productId}-${state.selectedMaterial?.id || ''}-${state.selectedDiseño?.id || ''}-${state.selectedSize?.id || ''}-${state.selectedColor?.id || ''}-${state.selectedAroma?.id || ''}-${state.selectedVariant?.id || ''}`;
  const presentation = product.excentoEmpaque ? null : state.selectedPresentation;
  const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);
  if (existingIndex > -1) cart[existingIndex].quantity += 1;
  else cart.push({ cartItemId, productId: product.id, name: product.name, variantName: variantLabel, price: state.price, quantity: 1, image: state.image, excentoEmpaque: !!product.excentoEmpaque, presentationId: presentation?.id || null, presentationName: presentation?.name || (product.excentoEmpaque ? 'Exento de empaque' : 'Sin empaque'), presentationPrice: Number(presentation?.priceExtra) || 0, presentationPending: presentation?.priceExtra === -1 });
  updateCartBadge(); renderCartDrawer(); showToastNotification(`¡"${product.name}" (${variantLabel}) agregado a tu cotización!`);
}

function removeFromCart(cartItemId) {
  cart = cart.filter(item => item.cartItemId !== cartItemId);
  updateCartBadge();
  renderCartDrawer();
}

function updateCartQuantity(cartItemId, delta) {
  const item = cart.find(i => i.cartItemId === cartItemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(cartItemId);
    return;
  }

  updateCartBadge();
  renderCartDrawer();
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
  }
}

function openCartDrawer() {
  renderCartDrawer();
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
  }
}

function renderCartDrawer() {
  const container = document.getElementById('cart-items-list');
  const totalElem = document.getElementById('cart-total-price');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 px-4 text-[#6C5C57]">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F7EFE5] flex items-center justify-center text-[#8B5A2B]/60 text-2xl shadow-inner">
          🛒
        </div>
        <p class="font-serif-title font-bold text-lg text-[#3A2E2B]">Tu cotización está vacía</p>
        <p class="text-xs text-[#8B5A2B]/80 mt-1 max-w-xs mx-auto">Explora nuestro catálogo artesanal y agrega las piezas que desees para cotizar.</p>
      </div>
    `;
    if (totalElem) {
      totalElem.textContent = '$0';
    }
    const subtitleElem = document.getElementById('cart-total-subtitle');
    if (subtitleElem) {
      subtitleElem.textContent = 'Incluye descuentos y presentación seleccionada';
      subtitleElem.className = 'block text-[11px] text-[#8B5A2B]';
    }
    const priceNoticeElem = document.getElementById('cart-total-price-notice');
    if (priceNoticeElem) {
      priceNoticeElem.classList.add('hidden');
      priceNoticeElem.textContent = '';
    }
    const alertElem = document.getElementById('cart-presentation-alert');
    if (alertElem) {
      alertElem.classList.add('hidden');
    }
    return;
  }

  const totals = getQuoteTotals();

  // 1. BANNER DE INCENTIVO DE DESCUENTO POR TIPO DE PRODUCTO
  let bannerHTML = '';
  const sortedTiers = [...QUOTE_CONFIG.descuentosCantidad].sort((a, b) => a.min - b.min);
  const productSummaryList = Object.values(totals.discountedProductsMap || {});

  const productQuantitiesMap = {};
  cart.forEach(item => {
    const pid = item.productId || item.cartItemId.split('-')[0];
    if (!productQuantitiesMap[pid]) {
      productQuantitiesMap[pid] = { name: item.name, total: 0 };
    }
    productQuantitiesMap[pid].total += Number(item.quantity) || 0;
  });

  let closeToNextTierMessage = '';
  for (let pid in productQuantitiesMap) {
    const prod = productQuantitiesMap[pid];
    const nextTier = sortedTiers.find(t => t.min > prod.total);
    if (nextTier) {
      const needed = nextTier.min - prod.total;
      if (needed <= 15) {
        closeToNextTierMessage = `Agrega <strong>${needed} ${needed === 1 ? 'unidad más' : 'unidades más'}</strong> de <strong>"${prod.name}"</strong> para obtener <strong>${nextTier.discount}% OFF</strong> en ese artículo.`;
        break;
      }
    }
  }

  if (productSummaryList.length > 0) {
    const discountNames = productSummaryList.map(p => `${p.name} (${p.discountPercent}% OFF)`).join(', ');
    bannerHTML = `
      <div class="p-3.5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200/80 shadow-sm mb-4">
        <div class="flex items-center gap-2 text-xs font-semibold text-emerald-800 mb-1">
          <span class="text-base">🏷️</span>
          <span>¡Descuento por Volumen Aplicado!</span>
        </div>
        <p class="text-[11px] text-emerald-700 leading-tight">
          Descuento activo en: <strong>${discountNames}</strong>.
        </p>
        ${closeToNextTierMessage ? `
          <p class="text-[11px] text-[#6C5C57] mt-1.5 pt-1.5 border-t border-emerald-200/60 flex items-center gap-1">
            <span>💡</span> <span>${closeToNextTierMessage}</span>
          </p>
        ` : ''}
      </div>
    `;
  } else {
    bannerHTML = `
      <div class="p-3.5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200/80 shadow-sm mb-4">
        <div class="flex items-center justify-between text-xs font-semibold text-[#8B5A2B] mb-1">
          <span class="flex items-center gap-1.5">
            <span class="text-base">💡</span>
            <span>Descuentos por Cantidad por Artículo</span>
          </span>
          <span class="text-[#C86D51] font-bold text-[11px]">10+ un. por modelo</span>
        </div>
        <p class="text-[11px] text-[#6C5C57] leading-tight">
          ${closeToNextTierMessage ? closeToNextTierMessage : 'Obtén <strong>10% OFF</strong> al sumar 10 o más unidades de un mismo artículo (combinando variantes o colores).'}
        </p>
      </div>
    `;
  }

  // 2. CARDS DE PRODUCTOS
  const itemsHTML = totals.items.map(item => {
    return `
      <div class="p-4 bg-white rounded-2xl border border-[#8B5A2B]/12 shadow-sm hover:shadow-md transition-all flex flex-col gap-3">
        <div class="flex items-start gap-3">
          <img src="${item.image}" alt="${item.name}" class="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-gray-100 flex-shrink-0" />
          
          <div class="flex-1 min-w-0">
            <h4 class="font-serif-title font-bold text-base text-[#3A2E2B] leading-tight truncate">${item.name}</h4>
            <p class="text-xs text-[#8B5A2B] font-medium mt-0.5">${item.variantName}</p>
            
            <div class="flex items-baseline gap-2 mt-1.5">
              <span class="text-xs text-[#6C5C57] font-medium">${item.discountPercent > 0 ? formatCLP(item.unitPrice * (1 - item.discountPercent / 100)) : formatCLP(item.unitPrice)} c/u</span>
              ${item.discountPercent > 0 ? `
                <span class="text-[10px] text-gray-400 line-through">${formatCLP(item.unitPrice)}</span>
              ` : ''}
            </div>
          </div>

          <button onclick="removeFromCart('${item.cartItemId}')" title="Eliminar producto" class="text-gray-300 hover:text-red-500 p-1.5 transition-colors rounded-lg hover:bg-red-50">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>

        <!-- Price Breakdown & Quantity Controls -->
        <div class="flex items-center justify-between pt-2.5 border-t border-gray-100 mt-0.5">
          <div>
            <div class="text-[11px] text-gray-400 font-medium">Total Price</div>
            <div class="text-base font-bold text-[#3A2E2B]">${formatCLP(item.itemTotal)}</div>
          </div>

          ${item.itemDiscount > 0 ? `
            <div class="bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <span>🏷️</span>
              <span>Descuento Aplicado (-${formatCLP(item.itemDiscount)})</span>
            </div>
          ` : ''}

          <div class="flex items-center gap-2 bg-[#F7EFE5] rounded-xl px-2.5 py-1 border border-[#8B5A2B]/15">
            <button onclick="updateCartQuantity('${item.cartItemId}', -1)" class="w-6 h-6 flex items-center justify-center font-bold text-sm text-[#8B5A2B] hover:text-[#C86D51] transition-colors">-</button>
            <span class="text-xs font-bold text-[#3A2E2B] w-5 text-center">${item.quantity}</span>
            <button onclick="updateCartQuantity('${item.cartItemId}', 1)" class="w-6 h-6 flex items-center justify-center font-bold text-sm text-[#8B5A2B] hover:text-[#C86D51] transition-colors">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // 3. RESUMEN DEL PEDIDO
  const discountDetails = productSummaryList.map(p => p.name).join(', ');

  const summaryHTML = `
    <div class="mt-6 p-4 sm:p-5 rounded-2xl bg-[#F7EFE5]/90 border border-[#8B5A2B]/15 space-y-4 shadow-sm">
      <h4 class="font-serif-title font-bold text-sm text-[#3A2E2B] uppercase tracking-wider border-b border-[#8B5A2B]/15 pb-2 flex items-center justify-between">
        <span>RESUMEN DEL PEDIDO</span>
        <span class="text-xs font-normal lowercase text-[#8B5A2B]">(${totals.totalQuantity} ${totals.totalQuantity === 1 ? 'unidad' : 'unidades'})</span>
      </h4>

      <div class="space-y-2.5 text-xs">
        <div class="flex justify-between items-center text-[#6C5C57]">
          <span>Cantidad total:</span>
          <span class="font-semibold text-[#3A2E2B]">(${totals.totalQuantity} unidades)</span>
        </div>

        <div class="flex justify-between items-center text-[#6C5C57]">
          <span>Subtotal Productos:</span>
          <span class="font-semibold text-[#3A2E2B]">${formatCLP(totals.subtotal)}</span>
        </div>

        ${totals.discountAmount > 0 ? `
          <div class="flex justify-between items-center bg-[#258B47] text-white p-2.5 rounded-xl font-medium shadow-sm">
            <span class="font-semibold flex items-center gap-1.5 text-xs">
              <span>🏷️</span>
              <span>Descuento por Volumen ${discountDetails ? `(${discountDetails})` : ''}:</span>
            </span>
            <span class="font-extrabold text-sm">-${formatCLP(totals.discountAmount)}</span>
          </div>

          <div class="flex justify-between items-center text-[#3A2E2B] font-medium pt-0.5">
            <span>Subtotal (después de descuento):</span>
            <span class="font-bold text-sm text-[#3A2E2B]">${formatCLP(totals.subtotal - totals.discountAmount)}</span>
          </div>
        ` : ''}

        ${totals.presentationAmount > 0 ? `
          <div class="flex justify-between items-center text-[#6C5C57] pt-1">
            <span>Presentación (${totals.generalPresentation.name}):</span>
            <span class="font-semibold text-[#8B5A2B]">+${formatCLP(totals.presentationAmount)}</span>
          </div>
        ` : (totals.presentationPending ? `
          <div class="flex justify-between items-center text-[#6C5C57] pt-1">
            <span>Presentación (${totals.generalPresentation.name}):</span>
            <span class="font-semibold text-amber-800 bg-amber-100/90 border border-amber-300/60 px-2 py-0.5 rounded-md text-[11px] flex items-center gap-1">
              <span>⚠️</span>
              <span>+ Por confirmar</span>
            </span>
          </div>
        ` : '')}
      </div>

      <!-- PERSONALIZACIÓN DE LA PRESENTACIÓN GENERAL -->
      <div class="pt-3 border-t border-[#8B5A2B]/15">
        <div class="mb-3">
          <h5 class="text-xs font-bold text-[#3A2E2B] uppercase tracking-wider flex items-center gap-1.5"><span>🎁</span><span>PERSONALIZACIÓN DE LA PRESENTACIÓN GENERAL</span></h5>
          <p class="text-[11px] text-[#8B5A2B] mt-0.5">Elige si cada producto mantiene su presentación o si quieres agrupar todo el pedido.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          ${QUOTE_CONFIG.presentacionGeneral.map(p => {
    const selected = totals.presentationMode === p.id, pending = p.priceExtra === -1;
    return `<div onclick="updateQuotePresentationMode('${p.id}')" class="relative cursor-pointer p-3 rounded-2xl border transition-all ${selected ? (pending ? 'bg-amber-50/50 border-amber-500 ring-2 ring-amber-500/25' : 'bg-[#FFFDF9] border-[#C86D51] ring-2 ring-[#C86D51]/20') : 'bg-white/80 border-[#8B5A2B]/20 hover:border-[#C86D51]/40 hover:bg-white'}">
              ${selected ? `<span class="absolute -top-2.5 right-2 ${pending ? 'bg-amber-600' : 'bg-[#C86D51]'} text-white text-[9px] font-bold px-2 py-0.5 rounded-full">Seleccionado 🎖️</span>` : ''}
              <div class="flex items-center gap-1.5 mb-1"><span class="text-xl">${p.icon}</span><h6 class="font-bold text-xs text-[#3A2E2B]">${p.name}</h6></div>
              <p class="text-[10px] text-[#8B5A2B] font-semibold">${p.badge}</p><p class="text-[10px] text-[#6C5C57] mt-1">${p.desc}</p>
              <div class="mt-2 pt-2 border-t border-[#8B5A2B]/10 text-[11px] font-bold ${pending ? 'text-amber-700' : 'text-[#C86D51]'}">${pending ? 'Empaque sujeto a confirmación' : (p.priceExtra > 0 ? '+' + formatCLP(p.priceExtra) + ' total' : 'Sin costo adicional')}</div>
            </div>`;
  }).join('')}
        </div>
        ${totals.presentationMode === 'porProducto' ? `
          <div class="mt-3 rounded-xl bg-[#FFFDF9] border border-[#8B5A2B]/10 p-3">
            <p class="text-[10px] font-bold text-[#8B5A2B] uppercase tracking-wider mb-2">Presentación seleccionada por producto</p>
            <div class="space-y-2">
              ${totals.items.map(item => {
    const product = PRODUCTS_DATA.find(p => p.id === item.productId); if (!product) return '';
    if (product.excentoEmpaque) return `<div class="flex justify-between gap-2 text-[11px]"><span class="font-medium text-[#3A2E2B]">${item.name} ×${item.quantity}</span><span class="italic text-[#6C5C57]">Exento de empaque</span></div>`;
    const selected = getProductPresentation(product, item.presentationId);
    return `<div class="rounded-xl border border-[#8B5A2B]/10 p-2.5 bg-white"><div class="flex justify-between gap-2 mb-1.5"><span class="text-[11px] font-semibold text-[#3A2E2B]">${item.name} ×${item.quantity}</span><span class="text-[10px] font-bold text-[#C86D51]">${selected?.priceExtra === -1 ? 'A cotizar' : (selected?.priceExtra > 0 ? '+' + formatCLP(selected.priceExtra) + ' c/u' : 'Sin costo')}</span></div><select onchange="updateCartItemPresentation('${item.cartItemId}', this.value)" class="w-full text-[11px] px-2.5 py-2 rounded-lg border border-[#8B5A2B]/20 bg-[#FFFDF9] text-[#3A2E2B]">${getProductPresentations(product).map(x => `<option value="${x.id}" ${x.id === selected?.id ? 'selected' : ''}>${x.name}${x.priceExtra === -1 ? ' — A cotizar' : (x.priceExtra > 0 ? ` — +${formatCLP(x.priceExtra)} c/u` : ' — Sin costo')}</option>`).join('')}</select></div>`;
  }).join('')}
            </div>
          </div>` : `<div class="mt-3 bg-[#FFFDF9] border border-[#8B5A2B]/10 rounded-xl p-3 text-[11px] text-[#6C5C57]"><strong class="text-[#3A2E2B]">Presentación agrupada:</strong> todos los productos del pedido se consideran dentro de una sola presentación general.</div>`}
      </div>
    </div>
  `;

  container.innerHTML = bannerHTML + itemsHTML + summaryHTML;

  const isPendingDelivery = totals.presentationPending;

  if (totalElem) {
    totalElem.textContent = isPendingDelivery ? `${formatCLP(totals.total)}*` : formatCLP(totals.total);
  }

  const subtitleElem = document.getElementById('cart-total-subtitle');
  if (subtitleElem) {
    if (isPendingDelivery) {
      subtitleElem.textContent = '⚠️ Precio base estimado (empaque sujeto a confirmación)';
      subtitleElem.className = 'block text-[11px] text-amber-700 font-semibold';
    } else {
      subtitleElem.textContent = 'Incluye descuentos y presentación seleccionada';
      subtitleElem.className = 'block text-[11px] text-[#8B5A2B]';
    }
  }

  const priceNoticeElem = document.getElementById('cart-total-price-notice');
  if (priceNoticeElem) {
    if (isPendingDelivery) {
      priceNoticeElem.textContent = '*+ empaque por confirmar';
      priceNoticeElem.classList.remove('hidden');
    } else {
      priceNoticeElem.textContent = '';
      priceNoticeElem.classList.add('hidden');
    }
  }

  const alertElem = document.getElementById('cart-presentation-alert');
  if (alertElem) {
    if (isPendingDelivery) {
      alertElem.innerHTML = `
        <span class="text-base leading-none">⚠️</span>
        <div class="text-[11px] leading-tight">
          <strong class="font-bold text-amber-950">El precio final puede variar:</strong> Al elegir <em>${totals.generalPresentation.name}</em>, el valor del empaque se definirá directamente por WhatsApp según tus requerimientos.
        </div>
      `;
      alertElem.classList.remove('hidden');
    } else {
      alertElem.classList.add('hidden');
    }
  }
}

function sendConsolidatedWhatsAppOrder() {
  if (cart.length === 0) { alert('Tu lista de cotización está vacía.'); return; }
  const totals = getQuoteTotals();
  let msg = `✨ *Hola Entre Risas Cálidas!* Quisiera realizar la siguiente cotización / pedido:

`;
  totals.items.forEach((item, idx) => {
    msg += `*${idx + 1}. ${item.name}* (x${item.quantity})
`;
    if (item.variantName) msg += `   • Detalles: ${item.variantName}
`;
    msg += `   • Precio unitario: ${formatCLP(item.unitPrice)}
`;
    if (item.discountPercent > 0) {
      msg += `   • Descuento por cantidad (${item.discountPercent}%): -${formatCLP(item.itemDiscount)}
`; msg += `   • Precio unitario c/desc: ${formatCLP(item.discountedUnitPrice)}
`;
    }
    if (item.excentoEmpaque) msg += `   • Presentación: Exento de empaque
`;
    else if (totals.presentationMode === 'porProducto') {
      const p = getProductPresentation(PRODUCTS_DATA.find(x => x.id === item.productId), item.presentationId); if (p) msg += `   • Presentación: ${p.name}${p.priceExtra === -1 ? ' (A cotizar)' : (p.priceExtra > 0 ? ` (+${formatCLP(p.priceExtra)} c/u)` : '')}
`;
    }
    msg += `   • Total producto: ${formatCLP(item.itemTotal)}

`;
  });
  msg += `📋 *RESUMEN DEL PEDIDO:*
📦 *Cantidad total:* ${totals.totalQuantity} unidades
💰 *Subtotal productos:* ${formatCLP(totals.subtotal)}
`;
  if (totals.discountAmount > 0) {
    const names = Object.values(totals.discountedProductsMap || {}).map(p => p.name).join(', '); msg += `🏷️ *Descuento total por volumen ${names ? `(${names})` : ''}:* -${formatCLP(totals.discountAmount)}
`; msg += `💲 *Subtotal c/descuento:* ${formatCLP(totals.subtotal - totals.discountAmount)}
`;
  }
  if (totals.presentationMode === 'porProducto') {
    msg += `🎁 *Presentación:* Según cada producto
`; if (totals.presentationAmount > 0) msg += `🚚 *Costo presentación:* +${formatCLP(totals.presentationAmount)}
`;
  }
  else {
    msg += `🎁 *Presentación general:* ${totals.generalPresentation.name}${totals.generalPresentation.priceExtra === -1 ? ' (Por confirmar / a cotizar)' : (totals.generalPresentation.priceExtra > 0 ? ` (+${formatCLP(totals.generalPresentation.priceExtra)} total)` : ' (Sin costo adicional)')}
`;
  }
  if (totals.presentationPending) msg += `⚠️ *Nota:* El valor final de la presentación queda sujeto a confirmación.
`;
  msg += `
💵 *TOTAL ESTIMADO: ${formatCLP(totals.total)}*${totals.presentationPending ? ' _(+ presentación por confirmar)_' : ''}

`;
  msg += `Quedo atento a la disponibilidad y tiempos de entrega en El Monte / envíos. ¡Muchas gracias!`;
  window.open(`https://wa.me/56948738454?text=${encodeURIComponent(msg)}`, '_blank');
}

// PRODUCT DETAIL & CUSTOMIZATION CONFIRMATION MODAL
function openProductDetailModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('product-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  selectedOptionsMap[product.id] = {
    materialId: product.material && product.material.length > 0 ? product.material[0].id : null,
    diseñoId: product.diseño && product.diseño.length > 0 ? product.diseño[0].id : null,
    sizeId: product.sizes && product.sizes.length > 0 ? product.sizes[0].id : null,
    colorId: product.colors && product.colors.length > 0 ? product.colors[0].id : null,
    aromaId: product.aromas && product.aromas.length > 0 ? product.aromas[0].id : null,
    variantId: product.variants && product.variants.length > 0 ? product.variants[0].id : null,
    presentationId: null,
    quantity: 1
  };
  const state = getProductState(product);

  content.innerHTML = `
    <div data-modal-product-id="${product.id}" class="relative">
      
      <!-- Top Guidance Header inside Modal -->
      <div id="modal-header-banner" class="bg-amber-50 border-b border-amber-200 p-4 flex items-center gap-3 transition-colors">
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        
        <!-- Left Column: Product Image & Lithophane Upload -->
        <div class="space-y-3">
          <div class="relative rounded-2xl overflow-hidden bg-[#F7EFE5] flex items-center justify-center min-h-[260px] border border-[#8B5A2B]/10 shadow-inner">
            <img id="modal-product-img" src="${state.image}" alt="${product.name}" class="w-full h-full object-cover rounded-2xl transition-all duration-300 max-h-[380px]" />
          </div>

          <!-- Price & Volume Discount Summary Callout -->
          <div class="bg-[#FFFDF9] p-3 rounded-2xl border border-[#8B5A2B]/15 text-center shadow-xs">
            <span class="text-[11px] font-bold text-[#8B5A2B] uppercase tracking-wider block">Precio Unitario Configurado</span>
            <div id="modal-unit-price-display" class="text-2xl font-extrabold text-[#C86D51]">
              ${state.price > 0 ? formatCLP(state.price) : 'Por configurar'}
            </div>
            <div id="modal-discount-badge" class="mt-1 text-[11px] font-bold text-emerald-700 hidden">
            </div>
          </div>
        </div>

        <!-- Right Column: Product Info & Options -->
        <div class="flex flex-col justify-between space-y-4">
          <div>
            <span class="text-[11px] font-semibold text-[#8B5A2B] bg-[#F7EFE5] px-3 py-1 rounded-full uppercase tracking-wider">${product.categoryName}</span>
            <h2 class="text-2xl font-serif-title font-bold text-[#3A2E2B] mt-2 mb-1">${product.name}</h2>
            <p class="text-xs font-semibold text-[#8B5A2B] mb-2 flex items-center gap-1">
              <span>📐 Dimensiones:</span>
              <span class="text-[#3A2E2B]">${product.dimensions}</span>
            </p>

            <p class="text-xs text-[#6C5C57] leading-relaxed mb-3">${product.description}</p>

            <!-- Options Selectors -->
            <div id="modal-product-options">
              ${buildProductOptionsHTML(product, state, true)}
            </div>

          </div>

          <!-- Bottom Action Buttons inside Modal -->
          <div class="space-y-2.5 pt-3 border-t border-[#8B5A2B]/15">
            <div id="modal-add-to-cart-container">
              <button 
                id="modal-add-to-cart-btn"
                disabled
                class="w-full bg-gray-200 text-gray-400 font-bold py-3.5 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 cursor-not-allowed border border-gray-300 opacity-80"
              >
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                <span>Falta elegir: ${state.missingOptions.join(', ')}</span>
              </button>
            </div>
            
            <a 
              id="modal-wa-link" 
              href="${getWhatsAppLinkForProduct(product, state)}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-full bg-[#C86D51] hover:bg-[#b35b40] text-white font-bold py-3 px-4 rounded-2xl text-xs transition-colors flex items-center justify-center gap-2 shadow-xs opacity-50 pointer-events-none"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              <span>Consultar este producto por WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  `;
  updateModalDOM(product.id);
  modal.classList.remove('hidden');
  backdrop?.classList.remove('hidden');
}

function previewLithophanePhoto(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.getElementById('modal-product-img');
      if (img) {
        img.src = e.target.result;
        img.classList.add('lithophane-glow', 'sepia', 'contrast-125');
      }
    };
    reader.readAsDataURL(file);
  }
}

function closeModal() {
  document.getElementById('product-modal')?.classList.add('hidden');
  document.getElementById('modal-backdrop')?.classList.add('hidden');
}

// TOAST NOTIFICATION
function showToastNotification(message) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#3A2E2B] text-white text-xs font-semibold px-5 py-3 rounded-full shadow-2xl z-50 flex items-center gap-2 animate-bounce';
  toast.innerHTML = `
    <span class="text-green-400">✓</span>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2800);
}
