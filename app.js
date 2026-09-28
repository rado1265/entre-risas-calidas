// app.js - Entre Risas Cálidas - Interactive Catalog & Order Engine

const PRODUCTS_DATA = [
  {
    id: 'Porta-contraluz',
    name: 'Porta Vela contraluz',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '4 cm × 5, cm',
    description: 'Alhajero minimalista y multipropósito con tapa encajable para resguardar pequeños tesoros.',
    image: 'assets/decoracion/contraluz/contraluz angel.png',
    material: [
      { id: 'Yeso', name: 'Yeso', price: 490/* , image: 'assets/decoracion/contraluz/contraluz angel.png' */ },
      { id: 'Cemento', name: 'Cemento', price: 1190/* , image: 'assets/decoracion/contraluz/contraluz angel.png'  */ },
    ],
    diseño: [
      { id: 'Angel', name: 'Angel', price: 0, image: 'assets/decoracion/contraluz/contraluz angel.png' },
      { id: 'Estrella', name: 'Estrella', price: 0, image: 'assets/decoracion/contraluz/contraluz estrella.png' },
      { id: 'Corazon', name: 'Corazón', price: 0, image: 'assets/decoracion/contraluz/contraluz corazon.png' },
      { id: 'arbol navidad', name: 'Arbol Navidad', price: 0, image: 'assets/decoracion/contraluz/contraluz arbol navidad.png' },
    ], sizes: [
      { id: 'estandar', name: '4 cm × 5 cm', price: 0/* , image: 'assets/decoracion/cuadradocontapa/cuadrado tapa blanco.png' */ }
    ],
    colors: [
      { id: 'Gris', name: 'Gris', hex: '#9E9E9E', priceExtra: 0/* , image: 'assets/decoracion/contraluz/contraluz estrella.png' */ },
      { id: 'Verde', name: 'Verde', hex: '#308d44', priceExtra: 0, available: false },
      { id: 'Blanco', name: 'Blanco', hex: '#FAF9F6', priceExtra: 0, available: false },
      { id: 'Amarillo', name: 'Amarillo', hex: '#ffec45', priceExtra: 0, available: false },
      { id: 'Rojo', name: 'Rojo', hex: '#d1402d', priceExtra: 0, available: false },
      { id: 'Azul', name: 'Azul', hex: '#3523d4', priceExtra: 0, available: false }
    ]
  }, {
    id: 'joyero-corazon',
    name: 'Corazón joyero + portavela',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '11 cm × 9,5 cm',
    description: 'Alhajero minimalista y multipropósito con tapa encajable para resguardar pequeños tesoros.',
    image: 'assets/decoracion/joyeros/corazon.png',
    material: [
      { id: 'Yeso', name: 'Yeso', price: 1490, image: 'assets/decoracion/joyeros/corazon.png' },
      { id: 'Cemento', name: 'Cemento', price: 3490, image: 'assets/decoracion/joyeros/corazon.png' },
    ],
    sizes: [
      { id: 'estandar', name: '11 cm × 9,5 cm', price: 0, image: 'assets/decoracion/joyeros/corazon.png' }
    ],
    colors: [
      { id: 'Gris', name: 'Gris', hex: '#9E9E9E', priceExtra: 0, image: 'assets/decoracion/joyeros/corazon.png' },
      { id: 'Verde', name: 'Verde', hex: '#308d44', priceExtra: 0, available: false },
      { id: 'Blanco', name: 'Blanco', hex: '#FAF9F6', priceExtra: 0, available: false },
      { id: 'Amarillo', name: 'Amarillo', hex: '#ffec45', priceExtra: 0, available: false },
      { id: 'Rojo', name: 'Rojo', hex: '#d1402d', priceExtra: 0, available: false },
      { id: 'Azul', name: 'Azul', hex: '#3523d4', priceExtra: 0, available: false }
    ]
  }, {
    id: 'joyero-flor',
    name: 'Flor joyero + portavela',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '10 cm × 10 cm',
    description: 'Alhajero minimalista y multipropósito con tapa encajable para resguardar pequeños tesoros.',
    image: 'assets/decoracion/joyeros/flor.png',
    material: [
      { id: 'Yeso', name: 'Yeso', price: 1490, image: 'assets/decoracion/joyeros/flor.png' },
      { id: 'Cemento', name: 'Cemento', price: 3490, image: 'assets/decoracion/joyeros/flor.png' },
    ],
    sizes: [
      { id: 'estandar', name: '10 cm × 10 cm', price: 0, image: 'assets/decoracion/joyeros/flor.png' }
    ],
    colors: [
      { id: 'Gris', name: 'Gris', hex: '#9E9E9E', priceExtra: 0, image: 'assets/decoracion/joyeros/flor.png' },
      { id: 'Verde', name: 'Verde', hex: '#308d44', priceExtra: 0, available: false },
      { id: 'Blanco', name: 'Blanco', hex: '#FAF9F6', priceExtra: 0, available: false },
      { id: 'Amarillo', name: 'Amarillo', hex: '#ffec45', priceExtra: 0, available: false },
      { id: 'Rojo', name: 'Rojo', hex: '#d1402d', priceExtra: 0, available: false },
      { id: 'Azul', name: 'Azul', hex: '#3523d4', priceExtra: 0, available: false }
    ]
  },
  {
    id: 'joyero-taichi',
    name: 'Portavela tipo Tai chi',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: 'Ø9 cm',
    description: 'Alhajero minimalista y multipropósito con tapa encajable para resguardar pequeños tesoros.',
    image: 'assets/decoracion/joyeros/taichi.png',
    material: [
      { id: 'Yeso', name: 'Yeso', price: 1590, image: 'assets/decoracion/joyeros/taichi.png' },
      { id: 'Cemento', name: 'Cemento', price: 3790, image: 'assets/decoracion/joyeros/taichi.png' },
    ],
    sizes: [
      { id: 'estandar', name: 'Ø9 cm', price: 0, image: 'assets/decoracion/joyeros/taichi.png' }
    ],
    colors: [
      { id: 'Gris', name: 'Gris', hex: '#9E9E9E', priceExtra: 0, image: 'assets/decoracion/joyeros/taichi.png' },
      { id: 'Verde', name: 'Verde', hex: '#308d44', priceExtra: 0, available: false },
      { id: 'Blanco', name: 'Blanco', hex: '#FAF9F6', priceExtra: 0, available: false },
      { id: 'Amarillo', name: 'Amarillo', hex: '#ffec45', priceExtra: 0, available: false },
      { id: 'Rojo', name: 'Rojo', hex: '#d1402d', priceExtra: 0, available: false },
      { id: 'Azul', name: 'Azul', hex: '#3523d4', priceExtra: 0, available: false }
    ]
  }, {
    id: 'joyero-cuerda',
    name: 'Portavela tipo Cuerda Cañamo ',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: 'Ø6 cm',
    description: 'Alhajero minimalista y multipropósito con tapa encajable para resguardar pequeños tesoros.',
    image: 'assets/decoracion/joyeros/frasco.png',
    material: [
      { id: 'Yeso', name: 'Yeso', price: 590, image: 'assets/decoracion/joyeros/frasco.png' },
      { id: 'Cemento', name: 'Cemento', price: 1290, image: 'assets/decoracion/joyeros/frasco.png' },
    ],
    sizes: [
      { id: 'estandar', name: 'Ø6 cm', price: 0, image: 'assets/decoracion/joyeros/frasco.png' }
    ],
    colors: [
      { id: 'Gris', name: 'Gris', hex: '#9E9E9E', priceExtra: 0, image: 'assets/decoracion/joyeros/frasco.png' },
      { id: 'Verde', name: 'Verde', hex: '#308d44', priceExtra: 0, available: false },
      { id: 'Blanco', name: 'Blanco', hex: '#FAF9F6', priceExtra: 0, available: false },
      { id: 'Amarillo', name: 'Amarillo', hex: '#ffec45', priceExtra: 0, available: false },
      { id: 'Rojo', name: 'Rojo', hex: '#d1402d', priceExtra: 0, available: false },
      { id: 'Azul', name: 'Azul', hex: '#3523d4', priceExtra: 0, available: false }
    ]
  }, {
    id: 'joyero-infinito',
    name: 'Portavela tipo Infinito "Tú & Yo"',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '16,5 cm x 6 cm',
    description: 'Alhajero minimalista y multipropósito con tapa encajable para resguardar pequeños tesoros.',
    image: 'assets/decoracion/joyeros/love infinito.png',
    material: [
      { id: 'Yeso', name: 'Yeso', price: 1790, image: 'assets/decoracion/joyeros/love infinito.png' },
      { id: 'Cemento', name: 'Cemento', price: 4290, image: 'assets/decoracion/joyeros/love infinito.png' },
    ],
    sizes: [
      { id: 'estandar', name: '16,5 cm x 6 cm', price: 0, image: 'assets/decoracion/joyeros/love infinito.png' }
    ],
    colors: [
      { id: 'Gris', name: 'Gris', hex: '#9E9E9E', priceExtra: 0, image: 'assets/decoracion/joyeros/love infinito.png' },
      { id: 'Verde', name: 'Verde', hex: '#308d44', priceExtra: 0, available: false },
      { id: 'Blanco', name: 'Blanco', hex: '#FAF9F6', priceExtra: 0, available: false },
      { id: 'Amarillo', name: 'Amarillo', hex: '#ffec45', priceExtra: 0, available: false },
      { id: 'Rojo', name: 'Rojo', hex: '#d1402d', priceExtra: 0, available: false },
      { id: 'Azul', name: 'Azul', hex: '#3523d4', priceExtra: 0, available: false }
    ]
  }, {
    id: 'joyero-loto',
    name: 'Portavela tipo Loto',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: 'Ø8 cm',
    description: 'Alhajero minimalista y multipropósito con tapa encajable para resguardar pequeños tesoros.',
    image: 'assets/decoracion/joyeros/loto.png',
    material: [
      { id: 'Yeso', name: 'Yeso', price: 990, image: 'assets/decoracion/joyeros/loto.png' },
      { id: 'Cemento', name: 'Cemento', price: 2390, image: 'assets/decoracion/joyeros/loto.png' },
    ],
    sizes: [
      { id: 'estandar', name: 'Ø8 cm', price: 0, image: 'assets/decoracion/joyeros/loto.png' }
    ],
    colors: [
      { id: 'Gris', name: 'Gris', hex: '#9E9E9E', priceExtra: 0, image: 'assets/decoracion/joyeros/loto.png' },
      { id: 'Verde', name: 'Verde', hex: '#308d44', priceExtra: 0, available: false },
      { id: 'Blanco', name: 'Blanco', hex: '#FAF9F6', priceExtra: 0, available: false },
      { id: 'Amarillo', name: 'Amarillo', hex: '#ffec45', priceExtra: 0, available: false },
      { id: 'Rojo', name: 'Rojo', hex: '#d1402d', priceExtra: 0, available: false },
      { id: 'Azul', name: 'Azul', hex: '#3523d4', priceExtra: 0, available: false }
    ]
  },
  // CATEGORIA 1: Decoración en Yeso y Cemento
  {
    id: 'bandeja-redonda',
    name: 'Bandeja Redonda',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '1 cm alto',
    description: 'Bandeja decorativa minimalista y versátil, ideal para posar velas, joyas, llaves o elementos de perfumería.',
    image: 'assets/decoracion/redondo/ovalado mediano blanco.png',
    material: [
      { id: 'Yeso', name: 'Yeso', price: 490, image: 'assets/decoracion/redondo/ovalado mediano blanco.png' },
      { id: 'Cemento', name: 'Cemento', price: 1190, image: 'assets/decoracion/redondo/ovalado mediano blanco.png' },
    ],
    sizes: [
      { id: '18cm', name: 'Ø8 cm (Individual)', priceExtra: 0, image: 'assets/decoracion/redondo/ovalado mediano blanco.png' },
      { id: '25cm', name: 'Ø11 cm (Grande)', priceExtra: 800, image: 'assets/decoracion/redondo/ovalado mediano blanco.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#FAF9F6', priceExtra: 0, image: 'assets/decoracion/redondo/ovalado mediano blanco.png' },
      { id: 'Verde', name: 'Verde', hex: '#308d44', priceExtra: 0, image: 'assets/decoracion/redondo/ovalado mediano verde.png' },
      { id: 'Gris', name: 'Gris', hex: '#9E9E9E', priceExtra: 0, available: false },
      { id: 'Amarillo', name: 'Amarillo', hex: '#ffec45', priceExtra: 0, available: false },
      { id: 'Rojo', name: 'Rojo', hex: '#d1402d', priceExtra: 0, available: false },
      { id: 'Azul', name: 'Azul', hex: '#3523d4', priceExtra: 0, available: false }
    ]
  },
  {
    id: 'gatito-portavelas',
    name: 'Gatito Portavelas',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '10 cm largo × 6 cm alto aprox.',
    description: 'Ternura y funcionalidad en una sola pieza. Sculpted candle holder perfecto para dar calidez a tu mesa o velador.',
    image: 'assets/decoracion/gato/gato blanco.png',
    material: [
      { id: 'Yeso', name: 'Yeso', price: 1490, image: 'assets/decoracion/gato/gato blanco.png' },
      { id: 'Cemento', name: 'Cemento', price: 3490, image: 'assets/decoracion/gato/gato blanco.png' },
    ], sizes: [
      { id: 'estandar', name: '10 cm × 6 cm', price: 0, image: 'assets/decoracion/gato/gato blanco.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#FAF9F6', priceExtra: 0, image: 'assets/decoracion/gato/gato blanco.png' },
      { id: 'Gris', name: 'Gris', hex: '#9E9E9E', priceExtra: 0, image: 'assets/decoracion/gato/gato gris.png' },
      { id: 'Amarillo', name: 'Amarillo', hex: '#ffec45', priceExtra: 0, image: 'assets/decoracion/gato/gato amarillo.png' },
      { id: 'Verde', name: 'Verde', hex: '#308d44', priceExtra: 0, available: false },
      { id: 'Rojo', name: 'Rojo', hex: '#d1402d', priceExtra: 0, available: false },
      { id: 'Azul', name: 'Azul', hex: '#3523d4', priceExtra: 0, available: false }
    ]
  },
  {
    id: 'bandeja-hoja',
    name: 'Bandeja Hoja',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '21,2 × 12,2 cm',
    description: 'Diseño botánico inspirado en la naturaleza. Textura sutil y delicada para centro de mesa o decoración.',
    image: 'assets/decoracion/hoja/hoja blanca.png',
    material: [
      { id: 'Yeso', name: 'Yeso', price: 1690, image: 'assets/decoracion/hoja/hoja blanca.png' },
      { id: 'Cemento', name: 'Cemento', price: 3990, image: 'assets/decoracion/hoja/hoja blanca.png' },
    ], sizes: [
      { id: 'estandar', name: '21,2 × 12,2 cm', price: 0, image: 'assets/decoracion/hoja/hoja blanca.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#FAF9F6', priceExtra: 0, image: 'assets/decoracion/hoja/hoja blanca.png' },
      { id: 'Amarillo', name: 'Amarillo', hex: '#ffec45', priceExtra: 0, image: 'assets/decoracion/hoja/hoja amarilla.png' },
      { id: 'Gris', name: 'Gris', hex: '#9E9E9E', priceExtra: 0, available: false },
      { id: 'Verde', name: 'Verde', hex: '#308d44', priceExtra: 0, available: false },
      { id: 'Rojo', name: 'Rojo', hex: '#d1402d', priceExtra: 0, available: false },
      { id: 'Azul', name: 'Azul', hex: '#3523d4', priceExtra: 0, available: false }
    ]
  }/* ,
  {
    id: 'hornillo-aromatico',
    name: 'Hornillo Aromático',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: 'Ø8 cm × 7,5 cm',
    description: 'Diseñado especialmente para wax melts, aceites esenciales o aromaterapia. Incluye cavidad para tea-light.',
    image: 'assets/decoracion/hornillo aromatico 2.png',
    sizes: [
      { id: 'estandar', name: 'Ø8 cm (Estándar)', price: 2490, image: 'assets/decoracion/hornillo aromatico 2.png' },
      { id: 'maxi', name: 'Ø10 cm (Maxi)', price: 3990, image: 'assets/decoracion/Cerrado Ovalado 6,1cm 2.png' }
    ],
    colors: [
      { id: 'yeso', name: 'Yeso Blanco', hex: '#FAF9F6', priceExtra: 0, image: 'assets/decoracion/hornillo aromatico 2.png' },
      { id: 'cemento', name: 'Cemento Pulido', hex: '#9E9E9E', priceExtra: 7500, image: 'assets/decoracion/Ovalado 17,8 × 9,4 cm 2.png' },
      { id: 'terracota', name: 'Terracota', hex: '#C86D51', priceExtra: 800, image: 'assets/decoracion/bandeja redonda.png' }
    ]
  } */,
  {
    id: 'bandeja-ovalada',
    name: 'Bandeja Ovalada',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '17,5 × 9 × 1,5 cm',
    description: 'Estética limpia y estilizada. Ideal para organizar frascos de perfume, accesorios o velas cilíndricas.',
    image: 'assets/decoracion/ovalado/ovalado blanco.png',
    material: [
      { id: 'Yeso', name: 'Yeso', price: 1690, image: 'assets/decoracion/ovalado/ovalado blanco.png' },
      { id: 'Cemento', name: 'Cemento', price: 3990, image: 'assets/decoracion/ovalado/ovalado blanco.png' },
    ], sizes: [
      { id: 'estandar', name: '17,5 × 9 × 1,5 cm', price: 0, image: 'assets/decoracion/ovalado/ovalado blanco.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#FAF9F6', priceExtra: 0, image: 'assets/decoracion/ovalado/ovalado blanco.png' },
      { id: 'Amarillo', name: 'Amarillo', hex: '#ffec45', priceExtra: 0, image: 'assets/decoracion/ovalado/ovalado amarillo.png' },
      { id: 'Verde', name: 'Verde', hex: '#308d44', priceExtra: 0, image: 'assets/decoracion/ovalado/ovalado verde.png' },
      { id: 'Gris', name: 'Gris', hex: '#9E9E9E', priceExtra: 0, available: false },
      { id: 'Rojo', name: 'Rojo', hex: '#d1402d', priceExtra: 0, available: false },
      { id: 'Azul', name: 'Azul', hex: '#3523d4', priceExtra: 0, available: false }
    ]
  },
  {
    id: 'caja-redonda-tapa',
    name: 'Caja Redonda con Tapa',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '5,5 cm × 3,5 cm',
    description: 'Alhajero minimalista y multipropósito con tapa encajable para resguardar pequeños tesoros.',
    image: 'assets/decoracion/redondocontapa/redondo tapa blanco.png',
    material: [
      { id: 'Yeso', name: 'Yeso', price: 590, image: 'assets/decoracion/redondocontapa/redondo tapa blanco.png' },
      { id: 'Cemento', name: 'Cemento', price: 1290, image: 'assets/decoracion/redondocontapa/redondo tapa blanco.png' },
    ], sizes: [
      { id: 'estandar', name: '5,5 cm × 3,5 cm', price: 0, image: 'assets/decoracion/redondocontapa/redondo tapa blanco.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#FAF9F6', priceExtra: 0, image: 'assets/decoracion/redondocontapa/redondo tapa blanco.png' },
      { id: 'Gris', name: 'Gris', hex: '#9E9E9E', priceExtra: 0, available: false },
      { id: 'Verde', name: 'Verde', hex: '#308d44', priceExtra: 0, available: false },
      { id: 'Amarillo', name: 'Amarillo', hex: '#ffec45', priceExtra: 0, available: false },
      { id: 'Rojo', name: 'Rojo', hex: '#d1402d', priceExtra: 0, available: false },
      { id: 'Azul', name: 'Azul', hex: '#3523d4', priceExtra: 0, available: false }
    ]
  },
  {
    id: 'caja-cuadrada-tapa',
    name: 'Caja Cuadrada con Tapa',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '6 cm × 4, cm',
    description: 'Alhajero minimalista y multipropósito con tapa encajable para resguardar pequeños tesoros.',
    image: 'assets/decoracion/cuadradocontapa/cuadrado tapa blanco.png',
    material: [
      { id: 'Yeso', name: 'Yeso', price: 790, image: 'assets/decoracion/cuadradocontapa/cuadrado tapa blanco.png' },
      { id: 'Cemento', name: 'Cemento', price: 1890, image: 'assets/decoracion/cuadradocontapa/cuadrado tapa blanco.png' },
    ], sizes: [
      { id: 'estandar', name: '6 cm × 4, cm', price: 0, image: 'assets/decoracion/cuadradocontapa/cuadrado tapa blanco.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#FAF9F6', priceExtra: 0, image: 'assets/decoracion/cuadradocontapa/cuadrado tapa blanco.png' },
      { id: 'Gris', name: 'Gris', hex: '#9E9E9E', priceExtra: 0, available: false },
      { id: 'Verde', name: 'Verde', hex: '#308d44', priceExtra: 0, available: false },
      { id: 'Amarillo', name: 'Amarillo', hex: '#ffec45', priceExtra: 0, available: false },
      { id: 'Rojo', name: 'Rojo', hex: '#d1402d', priceExtra: 0, available: false },
      { id: 'Azul', name: 'Azul', hex: '#3523d4', priceExtra: 0, available: false }
    ]
  },

  // CATEGORIA 2: Velas Artesanales
  /* {
    id: 'vela-frasco-soja',
    name: 'Vela Soja en Frasco',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Frasco de vidrio con tapa de corcho',
    description: 'Vela de cera de soja 100% vegetal en frasco reutilizable con tapa de corcho natural y lazo de yute.',
    image: 'assets/vela/vela 100ml soja.jpg',
    isCandle: true,
    sizes: [
      { id: '100ml', name: '100 ml (Individual)', price: 3490, image: 'assets/vela/vela 100ml soja.jpg' },
      { id: '200ml', name: '200 ml (Mediana)', price: 5490, image: 'assets/vela/vela 200ml soja.jpg' }
    ],
    colors: [
      { id: 'marfil', name: 'Marfil Natural', hex: '#FAF0E6', priceExtra: 0, image: 'assets/vela/vela 100ml soja.jpg' },
      { id: 'terracota', name: 'Terracota Cálido', hex: '#C86D51', priceExtra: 310, image: 'assets/vela/margarita.PNG' },
      { id: 'lavanda', name: 'Lavanda Pastel', hex: '#C8B6E2', priceExtra: 310, image: 'assets/vela/luna.PNG' },
      { id: 'rosa', name: 'Rosa Palo', hex: '#E8C5C8', priceExtra: 310, image: 'assets/vela/rosa.PNG' },
      { id: 'verde', name: 'Verde Menta', hex: '#A3D9C9', priceExtra: 310, image: 'assets/vela/nube.PNG' }
    ],
    aromas: [
      { id: 'vainilla', name: 'Vainilla & Coco' },
      { id: 'lavanda', name: 'Lavanda Silvestre' },
      { id: 'cafe', name: 'Café & Caramelo' },
      { id: 'jazmin', name: 'Jazmín & Ámbar' },
      { id: 'sin-aroma', name: 'Sin aroma (Neutro)' }
    ]
  },
  {
    id: 'vela-frasco-gel',
    name: 'Vela Gel en Frasco',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Frasco de vidrio con tapa de corcho',
    description: 'Vela de cera de gel vegetal en frasco de vidrio reutilizable con acabado transparente brillante y alta durabilidad.',
    image: 'assets/vela/vela 100ml gel.jpg',
    isCandle: true,
    sizes: [
      { id: '100ml', name: '100 ml (Individual)', price: 3490, image: 'assets/vela/vela 100ml gel.jpg' },
      { id: '200ml', name: '200 ml (Mediana)', price: 5490, image: 'assets/vela/vela 200ml soja.jpg' }
    ],
    colors: [
      { id: 'transparente', name: 'Gel Transparente', hex: '#E0F7FA', priceExtra: 0, image: 'assets/vela/vela 100ml gel.jpg' },
      { id: 'rosa-cristal', name: 'Rosa Cristal', hex: '#F8BBD0', priceExtra: 400, image: 'assets/vela/corazon textura.PNG' },
      { id: 'azul-marino', name: 'Azul Marino', hex: '#B3E5FC', priceExtra: 400, image: 'assets/vela/cilindro ovalado v1.PNG' }
    ],
    aromas: [
      { id: 'vainilla', name: 'Vainilla & Coco' },
      { id: 'lavanda', name: 'Lavanda Silvestre' },
      { id: 'cafe', name: 'Café & Caramelo' },
      { id: 'jazmin', name: 'Jazmín & Ámbar' },
      { id: 'sin-aroma', name: 'Sin aroma (Neutro)' }
    ]
  },
  {
    id: 'Margarita-Vela-Soja',
    name: 'Margarita Vela Soja',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura floral en cera de alta pureza',
    description: 'Escultura delicada de margarita en cera de alta pureza. Ideal para centros de mesa o recuerdos.',
    image: 'assets/vela/margarita.PNG',
    isCandle: true,
    sizes: [
      { id: 'chico', name: 'Chica (5,5 cm)', price: 2490, image: 'assets/vela/margarita.PNG' },
      { id: 'grande', name: 'Grande (8,5 cm)', price: 3490, image: 'assets/vela/margarita 2.PNG' }
    ],
    colors: [
      { id: 'blanco', name: 'Blanco Natural', hex: '#FFFFFF', priceExtra: 0, image: 'assets/vela/margarita.PNG' },
      { id: 'rosa', name: 'Rosa Palo', hex: '#E8C5C8', priceExtra: 300, image: 'assets/vela/margarita 2.PNG' },
      { id: 'terracota', name: 'Terracota', hex: '#C86D51', priceExtra: 300, image: 'assets/vela/corazon textura.PNG' }
    ],
    aromas: [
      { id: 'vainilla', name: 'Vainilla & Coco' },
      { id: 'lavanda', name: 'Lavanda Silvestre' },
      { id: 'jazmin', name: 'Jazmín & Ámbar' },
      { id: 'sin-aroma', name: 'Sin aroma' }
    ]
  }, */
  {
    id: 'luna-Vela-Soja',
    name: 'Luna Vela Soja',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura de Luna en cera artesanal',
    description: 'Escultura mística de Luna en cera vegetal. Un detalle cálido y sereno para decorar tu hogar.',
    image: 'assets/vela/moldes/luna.PNG',
    isCandle: true,
    sizes: [
      { id: 'estandar', name: '5,5 cm', price: 300, image: 'assets/vela/moldes/luna.PNG' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 200 },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 200 },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 200 },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 0 },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 200 },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 200 },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 200 },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 200 },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 200 },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0 },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 500 },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 500 },
      { id: 'limon', name: 'Limón', priceExtra: 500 },
      { id: 'menta', name: 'Menta', priceExtra: 500 }
    ]
  },
  {
    id: 'rosa-Vela-Soja',
    name: 'Rosa Vela Soja',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura esculpida de Rosa',
    description: 'Detallada escultura en cera de alta densidad con forma de rosa florecida.',
    image: 'assets/vela/moldes/rosa.PNG',
    isCandle: true,
    sizes: [
      { id: 'estandar', name: '5 cm ancho x 3 cm alto', price: 350, image: 'assets/vela/moldes/rosa.PNG' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 200 },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 200 },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 200 },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 0 },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 200 },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 200 },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 200 },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 200 },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 200 },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0 },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 500 },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 500 },
      { id: 'limon', name: 'Limón', priceExtra: 500 },
      { id: 'menta', name: 'Menta', priceExtra: 500 }
    ]
  },
  {
    id: 'nube-Vela-Soja',
    name: 'Nube Vela Soja',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura esponjosa de nube',
    description: 'Forma suave y moderna de nube decorativa en cera de soja.',
    image: 'assets/vela/moldes/nube.PNG',
    isCandle: true,
    sizes: [
      { id: 'pequeño', name: '4,5 cm ancho x 2 cm alto', price: 200, image: 'assets/vela/moldes/nube.PNG' },
      { id: 'mediano', name: '6,5 cm ancho x 2,5 cm alto', price: 400, image: 'assets/vela/moldes/nube.PNG' },
      { id: 'grande', name: '8 cm ancho x 3,5 cm alto', price: 600, image: 'assets/vela/moldes/nube.PNG' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 200 },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 200 },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 200 },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 0 },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 200 },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 200 },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 200 },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 200 },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 200 },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0 },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 500 },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 500 },
      { id: 'limon', name: 'Limón', priceExtra: 500 },
      { id: 'menta', name: 'Menta', priceExtra: 500 }
    ]
  },
  {
    id: 'corazon-textura-Vela-Soja',
    name: 'Corazón Textura Vela Soja',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura de corazón con relieve',
    description: 'Escultura romántica de corazón con micro-textura en cera de soja pura.',
    image: 'assets/vela/moldes/corazon textura.PNG',
    isCandle: true,
    sizes: [
      { id: 'estandar', name: '6 cm ancho x 1,5 cm alto', price: 890, image: 'assets/vela/moldes/corazon textura.PNG' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 200 },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 200 },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 200 },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 0 },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 200 },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 200 },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 200 },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 200 },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 200 },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0 },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 500 },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 500 },
      { id: 'limon', name: 'Limón', priceExtra: 500 },
      { id: 'menta', name: 'Menta', priceExtra: 500 }
    ]
  },
  {
    id: 'cilindro-v1-Vela-Soja',
    name: 'Cilindro Ovalado Vela Soja',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura 10 cm alto aprox.',
    description: 'Escultura mística de cilindro en cera vegetal. Un detalle cálido y sereno para decorar tu hogar.',
    image: 'assets/vela/moldes/cilindro ovalado v1.PNG',
    isCandle: true,
    sizes: [
      { id: 'estandar', name: '10 cm alto', price: 1600, image: 'assets/vela/moldes/cilindro ovalado v1.PNG' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 200 },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 200 },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 200 },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 0 },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 200 },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 200 },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 200 },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 200 },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 200 },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0 },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 600 },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 600 },
      { id: 'limon', name: 'Limón', priceExtra: 600 },
      { id: 'menta', name: 'Menta', priceExtra: 600 }
    ]
  }, {
    id: 'Corazon-love-Vela-Soja',
    name: 'Corazon "Love" Vela Soja',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura 6 cm alto aprox.',
    description: 'Escultura romántica de corazón con micro-textura en cera de soja pura.',
    image: 'assets/vela/moldes/corazon love.png',
    isCandle: true,
    sizes: [
      { id: 'estandar', name: '6 cm alto', price: 1400, image: 'assets/vela/moldes/corazon love.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 200 },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 200 },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 200 },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 0 },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 200 },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 200 },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 200 },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 200 },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 200 },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0 },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 600 },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 600 },
      { id: 'limon', name: 'Limón', priceExtra: 600 },
      { id: 'menta', name: 'Menta', priceExtra: 600 }
    ]
  }, {
    id: 'margarita-Vela-Soja',
    name: 'Margarita Vela Soja',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura 6 cm aprox.',
    description: 'Escultura mística de margarita en cera vegetal. Un detalle cálido y sereno para decorar tu hogar.',
    image: 'assets/vela/moldes/margarita.png',
    isCandle: true,
    sizes: [
      { id: 'estandar', name: '6 cm', price: 1200, image: 'assets/vela/moldes/margarita.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 200 },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 200 },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 200 },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 0 },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 200 },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 200 },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 200 },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 200 },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 200 },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0 },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 500 },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 500 },
      { id: 'limon', name: 'Limón', priceExtra: 500 },
      { id: 'menta', name: 'Menta', priceExtra: 500 }
    ]
  }, {
    id: 'osito-Vela-Soja',
    name: 'Osito Vela Soja',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura 4,5 cm alto aprox.',
    description: 'Escultura mística de osito en cera vegetal. Un detalle cálido y sereno para decorar tu hogar.',
    image: 'assets/vela/moldes/Osito.png',
    isCandle: true,
    sizes: [
      { id: 'estandar', name: '4,5 cm alto', price: 600, image: 'assets/vela/moldes/osito.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 100 },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 100 },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 100 },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 100 },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 100 },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 100 },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 100 },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 100 },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 100 },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0 },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 300 },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 300 },
      { id: 'limon', name: 'Limón', priceExtra: 300 },
      { id: 'menta', name: 'Menta', priceExtra: 300 }
    ]
  }, {
    id: 'virgen-blanca-v1-Vela-Soja',
    name: 'Virgen v1 Vela Soja',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura 6,5 cm alto aprox.',
    description: 'Escultura mística de Virgen en cera vegetal. Un detalle cálido y sereno para decorar tu hogar.',
    image: 'assets/vela/moldes/Virgen blanca v1.png',
    isCandle: true,
    sizes: [
      { id: 'estandar', name: '6 cm alto', price: 1200, image: 'assets/vela/moldes/virgen blanca v1.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 200 },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 200 },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 200 },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 0 },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 200 },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 200 },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 200 },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 200 },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 200 },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0 },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 600 },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 600 },
      { id: 'limon', name: 'Limón', priceExtra: 600 },
      { id: 'menta', name: 'Menta', priceExtra: 600 }
    ]
  }, {
    id: 'virgen blanca v2-Vela-Soja',
    name: 'Virgen v2 Vela Soja',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura 6,5 cm alto aprox.',
    description: 'Escultura mística de Virgen en cera vegetal. Un detalle cálido y sereno para decorar tu hogar.',
    image: 'assets/vela/moldes/corazon love.png',
    isCandle: true,
    sizes: [
      { id: 'estandar', name: '6,5 cm alto', price: 1200, image: 'assets/vela/moldes/virgen blanca v2.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 200 },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 200 },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 200 },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 0 },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 200 },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 200 },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 200 },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 200 },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 200 },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0 },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 600 },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 600 },
      { id: 'limon', name: 'Limón', priceExtra: 600 },
      { id: 'menta', name: 'Menta', priceExtra: 600 }
    ]
  },
  {
    id: 'angelitos-parafina',
    name: 'Angelitos en Cera',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura 10 cm alto aprox.',
    description: 'Escultura delicada de ángel en cera. Ideal para recuerditos de bautizo o primera comunión.',
    image: 'assets/vela/moldes/angel parafina.png',
    isCandle: true,
    sizes: [
      { id: 'mujer', name: 'Niña 10 cm alto', price: 1500, image: 'assets/vela/moldes/angel parafina.png' },
      { id: 'hombre', name: 'Niño 10 cm alto', price: 1500, image: 'assets/vela/moldes/angel parafina.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 200 },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 200 },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 200 },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 0 },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 200 },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 200 },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 200 },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 200 },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 200 },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0 },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 600 },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 600 },
      { id: 'limon', name: 'Limón', priceExtra: 600 },
      { id: 'menta', name: 'Menta', priceExtra: 600 }
    ]
  }, {
    id: 'wax-metls-corazon',
    name: 'Wax Melts Corazon',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: '1,5 cm c/u',
    description: 'Conjunto de corazones para quemar en tu hornillo y dar un detalle cálido y sereno para dar fragancia a tu hogar.',
    image: 'assets/vela/wax metls/wax metls corazon.png',
    isCandle: true,
    sizes: [
      { id: 'mujer', name: 'Bolsa 12 unidades', price: 2500, image: 'assets/vela/wax metls/wax metls corazon.png' }
    ],
    colors: [
      { id: 'Blanco', name: 'Blanco', hex: '#f5f5f5', priceExtra: 0 },
      { id: 'Verde', name: 'Verde', hex: '#57dd69', priceExtra: 200 },
      { id: 'Rojo', name: 'Rojo', hex: '#c23939', priceExtra: 200 },
      { id: 'Naranjo', name: 'Naranjo', hex: '#d18f2b', priceExtra: 200 },
      { id: 'Amarillo', name: 'Amarillo', hex: '#fcff2f', priceExtra: 0 },
      { id: 'Rosado', name: 'Rosado', hex: '#e45fc7', priceExtra: 200 },
      { id: 'Lila', name: 'Lila', hex: '#92577f', priceExtra: 200 },
      { id: 'Azul', name: 'Azul', hex: '#2e2794', priceExtra: 200 },
      { id: 'Celeste', name: 'Celeste', hex: '#B3E5FC', priceExtra: 200 },
      { id: 'Gris', name: 'Gris', hex: '#4e4e4e', priceExtra: 200 },
    ],
    aromas: [
      { id: 'sin-aroma', name: 'Sin aroma', priceExtra: 0 },
      { id: 'lavanda', name: 'Lavanda', priceExtra: 500 },
      { id: 'vainilla', name: 'Vainilla', priceExtra: 500 },
      { id: 'limon', name: 'Limón', priceExtra: 500 },
      { id: 'menta', name: 'Menta', priceExtra: 600 }
    ]
  },


  // CATEGORIA 3: Litofanías y Recuerdos Personalizados
  {
    id: 'litofania-individual-10cm',
    name: 'Litofanía Individual Personalizada',
    category: 'litofanias',
    categoryName: 'Litofanías & Personalizados',
    dimensions: 'Placa de foto 3D retroiluminada 10 cm de ancho',
    description: 'Fotografía en relieve 3D que cobra vida al encender su luz LED. Un recuerdo mágico y emocionante.',
    image: 'assets/litofania/litografia base.jpg',
    isCustomPhoto: true,
    /* sizes: [
      { id: '10cm', name: 'Placa 10 cm', priceExtra: 0, image: 'assets/litofania/litografia base.jpg' },
      { id: '15cm', name: 'Placa 15 cm', priceExtra: 2000, image: 'assets/litofania/litografia cuadro.PNG' },
      { id: '20cm', name: 'Placa 20 cm', priceExtra: 4000, image: 'assets/litofania/litografia base.jpg' }
    ], */
    variants: [
      { id: 'base-imagen', name: 'Base LED + Placa Imagen', price: 6990, image: 'assets/litofania/litografia base.jpg' },
      { id: 'solo-imagen', name: 'Solo Placa Imagen 3D - 10 cm aprox', price: 4990, image: 'assets/litofania/litografia base.jpg' },
      { id: 'solo-base', name: 'Solo Base LED Madera - 10 cm aprox', price: 2490, image: 'assets/litofania/litografia base.jpg' }
    ]
  },
  {
    id: 'litofania-marco-cubo',
    name: 'Litofanía Marco Cubo (4 Fotos)',
    category: 'litofanias',
    categoryName: 'Litofanías & Personalizados',
    dimensions: 'Cubo con 4 fotografías personalizadas',
    description: 'Lámpara de noche en forma de cubo con 4 fotografías familiares personalizables retroiluminadas.',
    image: 'assets/litofania/litografia cuadro.PNG',
    isCustomPhoto: true,
    /* sizes: [
      { id: 'estandar', name: 'Fotos 7,5 × 10 cm', priceExtra: 0, image: 'assets/litofania/litografia cuadro.PNG' },
      { id: 'grande', name: 'Fotos 10 × 12 cm', priceExtra: 5000, image: 'assets/litofania/litografia base.jpg' }
    ], */
    variants: [
      { id: 'marco-4fotos', name: 'Marco Cubo + 4 Fotos 3D', price: 19990, image: 'assets/litofania/litografia cuadro.PNG' },
      { id: 'solo-marco', name: 'Solo Marco Cubo - 12 x 11 cm aprox', price: 8990, image: 'assets/litofania/litografia cuadro.PNG' },
      { id: 'solo-imagen-repuesto', name: 'Solo 1 Foto - 7,5 × 10 cm aprox', price: 4490, image: 'assets/litofania/litografia cuadro.PNG' }
    ]
  }
];

// STATE MANAGEMENT
let currentCategoryFilter = 'todos';
let searchQuery = '';
let selectedOptionsMap = {}; // { productId: { sizeId, colorId, aromaId, variantId } }
let expandedColorsMap = {}; // { productId: boolean }
let cart = []; // Array of cart items

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
      materialId: p.material ? p.material[0].id : null,
      diseñoId: p.diseño ? p.diseño[0].id : null,
      sizeId: p.sizes ? p.sizes[0].id : null,
      colorId: p.colors ? p.colors[0].id : null,
      aromaId: p.aromas ? p.aromas[0].id : null,
      variantId: p.variants ? p.variants[0].id : null
    };
  });
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
  const selectedMaterial = product.material?.find(s => s.id === options.materialId) || product.material?.[0] || null;
  const selectedDiseño = product.diseño?.find(s => s.id === options.diseñoId) || product.diseño?.[0] || null;
  const selectedSize = product.sizes?.find(s => s.id === options.sizeId) || product.sizes?.[0] || null;
  const selectedColor = product.colors?.find(c => c.id === options.colorId) || product.colors?.[0] || null;
  const selectedAroma = product.aromas?.find(a => a.id === options.aromaId) || product.aromas?.[0] || null;
  const selectedVariant = product.variants?.find(v => v.id === options.variantId) || product.variants?.[0] || null;

  // Calculate total price based on selected size / variant + extras
  let price = 0;
  if (selectedVariant) {
    price = selectedVariant.price;
  } else if (selectedMaterial) {
    price = selectedMaterial.price || 0;
  } else if (selectedSize) {
    price = selectedSize.price || 0;
  } else {
    price = product.price || 0;
  }

  if (selectedSize && selectedSize.priceExtra && !selectedVariant) {
    price += selectedSize.priceExtra;
  }
  if (selectedDiseño && selectedDiseño.priceExtra) {
    price += selectedDiseño.priceExtra;
  }
  if (selectedColor && selectedColor.priceExtra) {
    price += selectedColor.priceExtra;
  }
  if (selectedAroma && selectedAroma.priceExtra) {
    price += selectedAroma.priceExtra;
  }

  // Calculate dynamic image
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

  return {
    selectedDiseño,
    selectedMaterial,
    selectedSize,
    selectedColor,
    selectedAroma,
    selectedVariant,
    price,
    image
  };
}

function getWhatsAppLinkForProduct(product, state) {
  let waText = `Hola! Quisiera consultar por el producto: *${product.name}*\n`;
  if (state.selectedVariant) waText += `• Opción: ${state.selectedVariant.name}\n`;
  if (state.selectedSize) waText += `• Tamaño: ${state.selectedSize.name}\n`;
  if (state.selectedColor) waText += `• Color: ${state.selectedColor.name}\n`;
  if (state.selectedAroma) waText += `• Aroma: ${state.selectedAroma.name}\n`;
  waText += `• Precio: ${formatCLP(state.price)}`;

  return `https://wa.me/56948738454?text=${encodeURIComponent(waText)}`;
}

function updateProductOption(productId, optionType, optionId) {
  if (!selectedOptionsMap[productId]) {
    selectedOptionsMap[productId] = {};
  }
  selectedOptionsMap[productId][optionType] = optionId;

  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const state = getProductState(product);

  // 1. Update in Product Card DOM if visible
  const card = document.querySelector(`[data-product-id="${productId}"]`);
  if (card) {
    const imgEl = card.querySelector('.product-card-img');
    if (imgEl && imgEl.getAttribute('src') !== state.image) {
      imgEl.classList.add('opacity-40');
      setTimeout(() => {
        imgEl.setAttribute('src', state.image);
        imgEl.classList.remove('opacity-40');
      }, 150);
    }

    const priceEl = card.querySelector('.product-card-price');
    if (priceEl) priceEl.textContent = formatCLP(state.price);

    const optionsEl = card.querySelector('.product-card-options');
    if (optionsEl) optionsEl.innerHTML = buildProductOptionsHTML(product, state, false);

    const waBtn = card.querySelector('.product-wa-btn');
    if (waBtn) waBtn.setAttribute('href', getWhatsAppLinkForProduct(product, state));
  }

  // 2. Update in Modal DOM if currently open for this product
  const modalContainer = document.querySelector(`[data-modal-product-id="${productId}"]`);
  if (modalContainer) {
    const modalImg = document.getElementById('modal-product-img');
    if (modalImg && modalImg.getAttribute('src') !== state.image) {
      modalImg.classList.add('opacity-40');
      setTimeout(() => {
        modalImg.setAttribute('src', state.image);
        modalImg.classList.remove('opacity-40');
      }, 150);
    }

    const modalPrice = document.getElementById('modal-product-price');
    if (modalPrice) modalPrice.textContent = formatCLP(state.price);

    const modalOptions = document.getElementById('modal-product-options');
    if (modalOptions) modalOptions.innerHTML = buildProductOptionsHTML(product, state, true);

    const modalWa = document.getElementById('modal-wa-link');
    if (modalWa) modalWa.setAttribute('href', getWhatsAppLinkForProduct(product, state));
  }
}

function toggleExpandedColors(productId) {
  expandedColorsMap[productId] = !expandedColorsMap[productId];
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const state = getProductState(product);

  const card = document.querySelector(`[data-product-id="${productId}"]`);
  if (card) {
    const optionsEl = card.querySelector('.product-card-options');
    if (optionsEl) optionsEl.innerHTML = buildProductOptionsHTML(product, state, false);
  }

  const modalContainer = document.querySelector(`[data-modal-product-id="${productId}"]`);
  if (modalContainer) {
    const modalOptions = document.getElementById('modal-product-options');
    if (modalOptions) modalOptions.innerHTML = buildProductOptionsHTML(product, state, true);
  }
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

function buildProductOptionsHTML(product, state, isModal = false) {
  return `
    <div class="space-y-3 my-3 bg-[#F7EFE5]/50 p-3 rounded-2xl border border-[#8B5A2B]/10">
       <!-- 1. MAterial (Option Buttons - MercadoLibre Style) -->
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
                  class="option-btn px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1 cursor-pointer ${isSelected ? 'selected' : 'bg-white text-[#3A2E2B] border-gray-200 hover:border-[#C86D51]/50 hover:bg-[#FFFDF9]'
      }"
                >
                  <span>${s.name}</span>
                </button>
              `;
  }).join('')}
          </div>
        </div>
      ` : ''}
       <!-- 1. Diseño (Option Buttons - MercadoLibre Style) -->
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
                  class="option-btn px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1 cursor-pointer ${isSelected ? 'selected' : 'bg-white text-[#3A2E2B] border-gray-200 hover:border-[#C86D51]/50 hover:bg-[#FFFDF9]'
      }"
                >
                  <span>${s.name}</span>
                </button>
              `;
  }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 1. TAMAÑO (Option Buttons - MercadoLibre Style) -->
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
                  class="option-btn px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1 cursor-pointer ${isSelected ? 'selected' : 'bg-white text-[#3A2E2B] border-gray-200 hover:border-[#C86D51]/50 hover:bg-[#FFFDF9]'
      }"
                >
                  <span>${s.name}</span>
                </button>
              `;
  }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 2. COLOR / TONO Swatches (Option Buttons - MercadoLibre Style + Toggle) -->
      ${product.colors ? (() => {
      const MAX_VISIBLE = 3;
      const isExpanded = !!expandedColorsMap[product.id];
      const totalColors = product.colors.length;
      const hasMore = totalColors > MAX_VISIBLE;

      let visibleColors = product.colors;
      if (hasMore && !isExpanded) {
        visibleColors = product.colors.slice(0, MAX_VISIBLE);
        // Always ensure current selected color is visible even if collapsed
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
        const isSelected =
          c.available !== false &&
          state.selectedColor &&
          state.selectedColor.id === c.id;
        const isAvailable = c.available !== false;

        return `
    <button 
      type="button"
      ${isAvailable
            ? `onclick="updateProductOption('${product.id}', 'colorId', '${c.id}')"`
            : ''
          }
      class="
        option-btn 
        px-2.5 py-1.5 
        rounded-xl 
        text-xs 
        font-semibold 
        border 
        transition-all 
        flex 
        items-center 
        gap-1.5
        relative
        overflow-hidden
        ${!isAvailable
            ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-70'
            : isSelected
              ? 'selected cursor-pointer'
              : 'bg-white text-[#3A2E2B] border-gray-200 hover:border-[#C86D51]/50 hover:bg-[#FFFDF9] cursor-pointer'
          }
      "
      title="${isAvailable ? c.name : `${c.name} - No disponible`}"
      ${!isAvailable ? 'disabled' : ''}
    >
      <span 
        class="
          w-3.5 h-3.5 
          rounded-full 
          border border-black/20 
          shadow-inner 
          flex-shrink-0
          ${!isAvailable ? 'grayscale opacity-50' : ''}
        "
        style="background-color: ${c.hex}"
      ></span>

      <span>${c.name}</span>

      ${!isAvailable ? `
        <span class="absolute inset-0 pointer-events-none">
          <span class="absolute w-[140%] h-[1px] bg-gray-400/70 rotate-[-20deg] top-1/2 left-[-20%]"></span>
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

      <!-- 3. FRAGANCIA / AROMA (Option Buttons - MercadoLibre Style) -->
      ${product.aromas ? `
        <div>
          <div class="flex justify-between items-center mb-1.5">
            <span class="text-[11px] font-bold text-[#8B5A2B] uppercase tracking-wider">Aroma:</span>
            <span class="text-[11px] font-semibold text-[#C86D51]">${state.selectedAroma ? state.selectedAroma.name : ''}</span>
          </div>
          <div class="flex flex-wrap gap-1">
            ${product.aromas.map(a => {
      const isSelected = state.selectedAroma && state.selectedAroma.id === a.id;
      return `
                <button 
                  type="button"
                  onclick="updateProductOption('${product.id}', 'aromaId', '${a.id}')"
                  class="option-btn px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-all cursor-pointer ${isSelected ? 'selected' : 'bg-white text-[#6C5C57] border-gray-200 hover:border-gray-400'
        }"
                >
                  🌸 ${a.name}
                </button>
              `;
    }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 4. VARIANTS / LITOGRAFÍA (Option Buttons - MercadoLibre Style) -->
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
                  class="option-btn px-3 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center justify-between gap-2 text-left cursor-pointer ${isSelected ? 'selected' : 'bg-white text-[#3A2E2B] border-gray-200 hover:border-[#C86D51]/50 hover:bg-[#FFFDF9]'
        }"
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

    </div>
  `;
}

function buildProductCardHTML(product) {
  const state = getProductState(product);
  const singleWaLink = getWhatsAppLinkForProduct(product, state);

  return `
    <article data-product-id="${product.id}" class="product-card glass-panel rounded-3xl overflow-hidden flex flex-col justify-between border border-[#C86D51]/15 relative group">
      <!-- Top Image Header -->
      <div class="relative overflow-hidden aspect-[4/3] bg-[#F7EFE5]/50">
        <img src="${state.image}" alt="${product.name}" class="product-card-img img-zoom w-full h-full object-cover object-center" loading="lazy" />
        
        <!-- Category Pill Badge -->
        <span class="absolute top-3 left-3 bg-[#FFFDF9]/90 backdrop-blur-md text-[#8B5A2B] text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-[#8B5A2B]/20">
          ${product.categoryName}
        </span>

        <!-- Preview Modal Action Icon -->
        <button onclick="openProductDetailModal('${product.id}')" title="Ver detalles y vista previa" class="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#3A2E2B] hover:text-[#C86D51] hover:bg-white shadow-md transition-all">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
        </button>
      </div>

      <!-- Product Info -->
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-baseline justify-between mb-1 gap-2">
            <h3 class="text-lg font-serif-title font-bold text-[#3A2E2B] group-hover:text-[#C86D51] transition-colors leading-tight">${product.name}</h3>
            <span class="product-card-price text-lg font-extrabold text-[#C86D51] whitespace-nowrap">${formatCLP(state.price)}</span>
          </div>
          
          <p class="text-xs text-[#8B5A2B] font-medium mb-2 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-[#C86D51]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
            ${product.dimensions}
          </p>

          <p class="text-xs text-[#6C5C57] mb-3 line-clamp-2 leading-relaxed">
            ${product.description}
          </p>

          <!-- Dynamic Option Buttons (MercadoLibre Style) -->
          <div class="product-card-options">
            ${buildProductOptionsHTML(product, state, false)}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="grid grid-cols-5 gap-2 pt-3 border-t border-[#8B5A2B]/10 mt-2">
          <button 
            onclick="addToCart('${product.id}')"
            class="col-span-2 bg-[#F7EFE5] hover:bg-[#EFE2D3] text-[#8B5A2B] font-semibold py-2.5 px-3 rounded-2xl text-xs flex items-center justify-center gap-1.5 transition-colors border border-[#8B5A2B]/20"
            title="Agregar a la lista de cotización"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
            Cotizar
          </button>
          
          <a 
            href="${singleWaLink}" 
            target="_blank"
            rel="noopener noreferrer"
            class="product-wa-btn col-span-3 bg-[#C86D51] hover:bg-[#b35b40] text-white font-semibold py-2.5 px-3 rounded-2xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-md"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            Pedir WhatsApp
          </a>
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
  if (state.selectedSize) details.push(`Tamaño: ${state.selectedSize.name}`);
  if (state.selectedColor) details.push(`Color: ${state.selectedColor.name}`);
  if (state.selectedAroma) details.push(`Aroma: ${state.selectedAroma.name}`);

  const variantLabel = details.join(' · ') || 'Estándar';
  const cartItemId = `${productId}-${state.selectedSize?.id || ''}-${state.selectedColor?.id || ''}-${state.selectedAroma?.id || ''}-${state.selectedVariant?.id || ''}`;

  const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      cartItemId,
      productId: product.id,
      name: product.name,
      variantName: variantLabel,
      price: state.price,
      quantity: 1,
      image: state.image
    });
  }

  updateCartBadge();
  showToastNotification(`¡"${product.name}" (${variantLabel}) agregado a tu cotización!`);
}

function removeFromCart(cartItemId) {
  cart = cart.filter(item => item.cartItemId !== cartItemId);
  updateCartBadge();
  renderCartDrawer();
}

function updateCartQuantity(cartItemId, delta) {
  const item = cart.find(i => i.cartItemId === cartItemId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(cartItemId);
    } else {
      updateCartBadge();
      renderCartDrawer();
    }
  }
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
      <div class="text-center py-12 text-[#6C5C57]">
        <svg class="w-12 h-12 mx-auto mb-3 text-[#8B5A2B]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
        <p class="font-medium text-sm">Tu cotización está vacía</p>
        <p class="text-xs text-[#8B5A2B]/70 mt-1">Explora nuestro catálogo y agrega las piezas que desees.</p>
      </div>
    `;
    if (totalElem) totalElem.textContent = '$0';
    return;
  }

  let total = 0;
  container.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    return `
      <div class="flex items-center gap-3 p-3 bg-white rounded-2xl border border-[#8B5A2B]/10 shadow-sm">
        <img src="${item.image}" alt="${item.name}" class="w-14 h-14 rounded-xl object-cover" />
        <div class="flex-1">
          <h4 class="font-serif-title font-semibold text-sm text-[#3A2E2B] leading-tight">${item.name}</h4>
          <p class="text-[11px] text-[#8B5A2B]">${item.variantName}</p>
          <div class="text-xs font-bold text-[#C86D51] mt-1">${formatCLP(itemTotal)}</div>
        </div>
        <div class="flex items-center gap-1.5 bg-[#F7EFE5] rounded-xl px-2 py-1">
          <button onclick="updateCartQuantity('${item.cartItemId}', -1)" class="w-5 h-5 flex items-center justify-center font-bold text-xs text-[#8B5A2B] hover:text-[#C86D51]">-</button>
          <span class="text-xs font-semibold text-[#3A2E2B] w-4 text-center">${item.quantity}</span>
          <button onclick="updateCartQuantity('${item.cartItemId}', 1)" class="w-5 h-5 flex items-center justify-center font-bold text-xs text-[#8B5A2B] hover:text-[#C86D51]">+</button>
        </div>
        <button onclick="removeFromCart('${item.cartItemId}')" class="text-gray-400 hover:text-red-500 p-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
        </button>
      </div>
    `;
  }).join('');

  if (totalElem) totalElem.textContent = formatCLP(total);
}

function sendConsolidatedWhatsAppOrder() {
  if (cart.length === 0) {
    alert('Tu lista de cotización está vacía.');
    return;
  }

  let msg = `✨ *Hola Entre Risas Cálidas!* Quisiera realizar la siguiente cotización / pedido:\n\n`;
  let total = 0;

  cart.forEach((item, idx) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    msg += `*${idx + 1}. ${item.name}* (x${item.quantity})\n`;
    msg += `   • Detalles: ${item.variantName}\n`;
    msg += `   • Subtotal: ${formatCLP(itemTotal)}\n\n`;
  });

  msg += `💰 *TOTAL ESTIMADO: ${formatCLP(total)}*\n\n`;
  msg += `Quedo atento a la disponibilidad y tiempos de entrega en El Monte / envíos. ¡Muchas gracias!`;

  const waUrl = `https://wa.me/56948738454?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}

// PRODUCT DETAIL & LITHOPHANE PREVIEW MODAL
function openProductDetailModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('product-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  const state = getProductState(product);

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6" data-modal-product-id="${product.id}">
      <div class="relative rounded-2xl overflow-hidden bg-[#F7EFE5] flex items-center justify-center min-h-[250px]">
        <img id="modal-product-img" src="${state.image}" alt="${product.name}" class="w-full h-full object-cover rounded-2xl transition-all duration-300" />
        ${product.isCustomPhoto ? `
          <div class="absolute inset-x-4 bottom-4 bg-black/70 backdrop-blur-md text-white p-3 rounded-xl text-center text-xs">
            <p class="font-semibold text-yellow-300">💡 Simulación de Retroiluminación 3D</p>
            <p class="text-[11px] text-gray-200 mt-0.5">Sube una foto para previsualizar tu litofanía iluminada:</p>
            <input type="file" accept="image/*" onchange="previewLithophanePhoto(event)" class="mt-2 text-xs text-slate-200 file:mr-2 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#C86D51] file:text-white hover:file:bg-[#b35b40] cursor-pointer" />
          </div>
        ` : ''}
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <span class="text-xs font-semibold text-[#8B5A2B] bg-[#F7EFE5] px-3 py-1 rounded-full uppercase tracking-wider">${product.categoryName}</span>
          <h2 class="text-2xl font-serif-title font-bold text-[#3A2E2B] mt-2 mb-1">${product.name}</h2>
          <p class="text-xs font-semibold text-[#8B5A2B] mb-2">${product.dimensions}</p>
          
          <div id="modal-product-price" class="text-2xl font-bold text-[#C86D51] mb-4">${formatCLP(state.price)}</div>

          <p class="text-xs text-[#6C5C57] leading-relaxed mb-4">${product.description}</p>

          <!-- Interactive Options inside modal -->
          <div id="modal-product-options">
            ${buildProductOptionsHTML(product, state, true)}
          </div>
        </div>

        <div class="space-y-3 pt-4 border-t border-[#8B5A2B]/10">
          <button onclick="addToCart('${product.id}'); closeModal();" class="w-full bg-[#8B5A2B] hover:bg-[#724822] text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
            Agregar a la lista de Cotización
          </button>
          
          <a id="modal-wa-link" href="${getWhatsAppLinkForProduct(product, state)}" target="_blank" rel="noopener noreferrer" class="w-full bg-[#C86D51] hover:bg-[#b35b40] text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-sm">
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;

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
