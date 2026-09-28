// app.js - Entre Risas Cálidas - Interactive Catalog & Order Engine

const PRODUCTS_DATA = [
  // CATEGORIA 1: Decoración en Yeso y Cemento
  {
    id: 'bandeja-redonda',
    name: 'Bandeja Redonda',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: 'Ø18 cm · alto 2 cm',
    description: 'Bandeja decorativa minimalista y versátil, ideal para posar velas, joyas, llaves o elementos de perfumería.',
    image: 'assets/decoracion/bandeja redonda.png',
    defaultVariant: 'yeso',
    variants: [
      { id: 'yeso', name: 'Yeso Artesanal', price: 990, label: 'Yeso: $990' },
      { id: 'cemento', name: 'Cemento Pulido', price: 3490, label: 'Cemento: $3.490' }
    ]
  },
  {
    id: 'gatito-portavelas',
    name: 'Gatito Portavelas',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '12,2 cm largo × 6,5 cm alto aprox.',
    description: 'Ternura y funcionalidad en una sola pieza. Sculpted candle holder perfecto para dar calidez a tu mesa o velador.',
    image: 'assets/decoracion/gato portavelas.png',
    defaultVariant: 'yeso',
    variants: [
      { id: 'yeso', name: 'Yeso Artesanal', price: 1490, label: 'Yeso: $1.490' },
      { id: 'cemento', name: 'Cemento Pulido', price: 3490, label: 'Cemento: $3.490' }
    ]
  },
  {
    id: 'bandeja-hoja',
    name: 'Bandeja Hoja',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '21,2 × 12,2 cm',
    description: 'Diseño botánico inspirado en la naturaleza. Textura sutil y delicada para centro de mesa o decoración.',
    image: 'assets/decoracion/Hoja 21,2 × 12,2 cm.png',
    defaultVariant: 'yeso',
    variants: [
      { id: 'yeso', name: 'Yeso Artesanal', price: 1690, label: 'Yeso: $1.690' },
      { id: 'cemento', name: 'Cemento Pulido', price: 4490, label: 'Cemento: $4.490' }
    ]
  },
  {
    id: 'hornillo-aromatico',
    name: 'Hornillo Aromático',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: 'Ø8 cm × 7,5 cm',
    description: 'Diseñado especialmente para wax melts, aceites esenciales o aromaterapia. Incluye cavidad para tea-light.',
    image: 'assets/decoracion/hornillo aromatico 2.png',
    defaultVariant: 'yeso',
    variants: [
      { id: 'yeso', name: 'Yeso Artesanal', price: 2490, label: 'Yeso: $2.490' },
      { id: 'cemento', name: 'Cemento Pulido', price: 9990, label: 'Cemento: $9.990' }
    ]
  },
  {
    id: 'bandeja-ovalada',
    name: 'Bandeja Ovalada',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: '18 × 9 × 2 cm',
    description: 'Estética limpia y estilizada. Ideal para organizar frascos de perfume, accesorios o velas cilíndricas.',
    image: 'assets/decoracion/Ovalado 17,8 × 9,4 cm 2.png',
    defaultVariant: 'yeso',
    variants: [
      { id: 'yeso', name: 'Yeso Artesanal', price: 1990, label: 'Yeso: $1.990' },
      { id: 'cemento', name: 'Cemento Pulido', price: 4990, label: 'Cemento: $4.990' }
    ]
  },
  {
    id: 'caja-redonda-tapa',
    name: 'Caja Redonda con Tapa',
    category: 'yeso-cemento',
    categoryName: 'Decoración Yeso y Cemento',
    dimensions: 'Ø7 cm × 4,5 cm',
    description: 'Alhajero minimalista y multipropósito con tapa encajable para resguardar pequeños tesoros.',
    image: 'assets/decoracion/Cerrado Ovalado 6,1cm 2.png',
    defaultVariant: 'yeso',
    variants: [
      { id: 'yeso', name: 'Yeso Artesanal', price: 590, label: 'Yeso: $590' },
      { id: 'cemento', name: 'Cemento Pulido', price: 1990, label: 'Cemento: $1.990' }
    ]
  },

  // CATEGORIA 2: Velas Artesanales
  {
    id: 'vela-frasco-100ml',
    name: 'Vela en Frasco 100 ml',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: '100 ml · Formato Individual',
    description: 'Vela de cera de soja 100% vegetal en frasco de vidrio reutilizable con tapa de corcho natural y lazo de yute.',
    image: 'assets/vela/vela 100ml soja.jpg',
    isCandle: true,
    defaultVariant: 'normal',
    variants: [
      { id: 'normal', name: 'Vela Normal (Sin aroma/color)', price: 3490, label: 'Normal: $3.490' },
      { id: 'aroma', name: 'Con Aroma Especial', price: 4590, label: 'Con aroma: $4.590' },
      { id: 'color', name: 'Con Color Pastel', price: 3800, label: 'Con color: $3.800' },
      { id: 'aroma-color', name: 'Con Aroma + Color', price: 5490, label: 'Aroma + Color: $5.490' }
    ]
  },
  {
    id: 'vela-frasco-200ml',
    name: 'Vela en Frasco 200 ml',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: '200 ml · Formato Mediano',
    description: 'Formato más grande diseñado para perfumar e iluminar espacios amplios. Mayor duración de quemado limpio.',
    image: 'assets/vela/vela 200ml soja.jpg',
    isCandle: true,
    defaultVariant: 'normal',
    variants: [
      { id: 'normal', name: 'Vela Normal (Sin aroma/color)', price: 5490, label: 'Normal: $5.490' },
      { id: 'aroma', name: 'Con Aroma Especial', price: 6590, label: 'Con aroma: $6.590' },
      { id: 'color', name: 'Con Color Pastel', price: 5990, label: 'Con color: $5.990' },
      { id: 'aroma-color', name: 'Con Aroma + Color', price: 7490, label: 'Aroma + Color: $7.490' }
    ]
  },
  {
    id: 'angelitos-parafina',
    name: 'Angelitos en Cera de Parafina',
    category: 'velas',
    categoryName: 'Velas Artesanales',
    dimensions: 'Figura 10 cm alto aprox.',
    description: 'Escultura delicada de ángel en cera de alta pureza. Ideal para recuerditos de bautizo, primera comunión o altar.',
    image: 'assets/vela/angel parafina.png',
    isCandle: true,
    defaultVariant: 'normal',
    variants: [
      { id: 'normal', name: 'Vela Normal', price: 2490, label: 'Normal: $2.490' },
      { id: 'aroma', name: 'Con Aroma', price: 2990, label: 'Con aroma: $2.990' },
      { id: 'color', name: 'Con Color', price: 2790, label: 'Con color: $2.790' },
      { id: 'aroma-color', name: 'Con Aroma + Color', price: 3400, label: 'Aroma + Color: $3.400' }
    ]
  },

  // CATEGORIA 3: Litofanías y Recuerdos Personalizados
  {
    id: 'litofania-individual-10cm',
    name: 'Litofanía Individual (10 cm)',
    category: 'litofanias',
    categoryName: 'Litofanías & Personalizados',
    dimensions: '10 cm · Placa de foto 3D',
    description: 'Fotografía en relieve 3D que cobra vida al encender su luz LED. Un recuerdo mágico y emocionante.',
    image: 'assets/litofania/litografia + base.jpg',
    isCustomPhoto: true,
    defaultVariant: 'base-imagen',
    variants: [
      { id: 'base-imagen', name: 'Base LED + Imagen 10 cm', price: 6990, label: 'Base + Imagen: $6.990' },
      { id: 'solo-imagen', name: 'Solo Placa Imagen 10 cm', price: 4990, label: 'Solo Imagen: $4.990' },
      { id: 'solo-base', name: 'Solo Base LED de Madera', price: 2490, label: 'Solo Base: $2.490' }
    ]
  },
  {
    id: 'litofania-marco-cubo',
    name: 'Litofanía Marco Cubo (4 Fotos)',
    category: 'litofanias',
    categoryName: 'Litofanías & Personalizados',
    dimensions: 'Medida fotos: 7,5 × 10 cm (4 caras)',
    description: 'Lámpara de noche en forma de cubo con 4 fotografías familiares personalizables retroiluminadas.',
    image: 'assets/litofania/litografia + cuadro.PNG',
    isCustomPhoto: true,
    defaultVariant: 'marco-4fotos',
    variants: [
      { id: 'marco-4fotos', name: 'Marco Cubo + 4 Fotos Personalizadas', price: 19990, label: 'Marco + 4 Fotos: $19.990' },
      { id: 'solo-marco', name: 'Solo Marco Cubo para 4 Fotos', price: 8990, label: 'Solo Marco: $8.990' },
      { id: 'solo-imagen-repuesto', name: 'Solo 1 Imagen de Repuesto (7,5×10cm)', price: 4490, label: 'Imagen repuesto: $4.490' }
    ]
  }
];

const AROMAS_OPTIONS = [
  'Vainilla Francesa & Coco',
  'Lavanda Silvestre & Relajación',
  'Café Tostado & Caramelo',
  'Jazmín Blanco & Ámbar',
  'Sin aroma (Neutro)'
];

const COLORES_OPTIONS = [
  'Marfil / Blanco Natural',
  'Terracota Cálido',
  'Caramelo / Tostado',
  'Lavanda Pastel',
  'Rosa Palo Suave',
  'Verde Menta Artesanal'
];

// STATE MANAGEMENT
let currentCategoryFilter = 'todos';
let searchQuery = '';
let activeVariantsMap = {}; // { productId: variantId }
let selectedCandleOptions = {}; // { productId: { aroma, color } }
let cart = []; // Array of cart items { id, productId, name, variantName, price, aroma, color, customNote, quantity }

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  initDefaultState();
  renderCatalog();
  setupEventListeners();
  updateCartBadge();
});

function initDefaultState() {
  PRODUCTS_DATA.forEach(p => {
    activeVariantsMap[p.id] = p.defaultVariant;
    if (p.isCandle) {
      selectedCandleOptions[p.id] = {
        aroma: AROMAS_OPTIONS[0],
        color: COLORES_OPTIONS[0]
      };
    }
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
      renderCatalog();
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }

  // Cart Drawer toggles
  document.getElementById('open-cart-btn')?.addEventListener('click', openCartDrawer);
  document.getElementById('close-cart-btn')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cart-backdrop')?.addEventListener('click', closeCartDrawer);
  document.getElementById('send-whatsapp-order')?.addEventListener('click', sendConsolidatedWhatsAppOrder);

  // Lithophane Lightbox Preview Tool modal triggers
  document.getElementById('close-modal-btn')?.addEventListener('click', closeModal);
  document.getElementById('modal-backdrop')?.addEventListener('click', closeModal);
}

function renderCatalog() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const filtered = PRODUCTS_DATA.filter(product => {
    const matchesCategory = currentCategoryFilter === 'todos' || product.category === currentCategoryFilter;
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery) ||
      product.categoryName.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
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
    return;
  }

  container.innerHTML = filtered.map(product => buildProductCardHTML(product)).join('');
}

function resetFilters() {
  currentCategoryFilter = 'todos';
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.tab-pill').forEach(b => {
    b.classList.toggle('active', b.dataset.category === 'todos');
  });
  renderCatalog();
}

function buildProductCardHTML(product) {
  const selectedVariantId = activeVariantsMap[product.id] || product.defaultVariant;
  const currentVariant = product.variants.find(v => v.id === selectedVariantId) || product.variants[0];
  const priceFormatted = formatCLP(currentVariant.price);

  const isCandleWithOptions = product.isCandle && (selectedVariantId === 'aroma' || selectedVariantId === 'aroma-color' || selectedVariantId === 'color');
  const candleState = selectedCandleOptions[product.id] || { aroma: AROMAS_OPTIONS[0], color: COLORES_OPTIONS[0] };

  // Generate WhatsApp single item URL
  let waText = `Hola! Quisiera consultar por el producto: *${product.name}* (Opción: ${currentVariant.name} - ${priceFormatted})`;
  if (isCandleWithOptions) {
    if (selectedVariantId.includes('aroma')) waText += ` - Aroma: ${candleState.aroma}`;
    if (selectedVariantId.includes('color')) waText += ` - Color: ${candleState.color}`;
  }
  const singleWaLink = `https://wa.me/56948738454?text=${encodeURIComponent(waText)}`;

  return `
    <article class="product-card glass-panel rounded-3xl overflow-hidden flex flex-col justify-between border border-[#C86D51]/15 relative group">
      <!-- Top Image Header -->
      <div class="relative overflow-hidden aspect-[4/3] bg-[#F7EFE5]/50">
        <img src="${product.image}" alt="${product.name}" class="img-zoom w-full h-full object-cover object-center" loading="lazy" />
        
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
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-baseline justify-between mb-1 gap-2">
            <h3 class="text-xl font-serif-title font-semibold text-[#3A2E2B] group-hover:text-[#C86D51] transition-colors leading-tight">${product.name}</h3>
            <span class="text-lg font-bold text-[#C86D51] whitespace-nowrap">${priceFormatted}</span>
          </div>
          
          <p class="text-xs text-[#8B5A2B] font-medium mb-3 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-[#C86D51]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
            ${product.dimensions}
          </p>

          <p class="text-xs text-[#6C5C57] mb-5 line-clamp-2 leading-relaxed">
            ${product.description}
          </p>

          <!-- Dynamic Material / Variant Selector -->
          <div class="mb-5 bg-[#F7EFE5]/60 p-3 rounded-2xl border border-[#8B5A2B]/10">
            <label class="block text-[11px] font-bold text-[#8B5A2B] uppercase tracking-wider mb-2">Selecciona Opción / Material:</label>
            <div class="grid grid-cols-2 gap-1.5">
              ${product.variants.map(v => `
                <button 
                  onclick="selectProductVariant('${product.id}', '${v.id}')"
                  class="variant-btn text-xs py-2 px-2.5 rounded-xl border text-center font-medium transition-all ${
                    v.id === selectedVariantId 
                      ? 'active bg-[#8B5A2B] text-white border-[#8B5A2B] shadow-sm' 
                      : 'bg-white text-[#3A2E2B] border-[#8B5A2B]/20 hover:border-[#8B5A2B]/50'
                  }"
                >
                  ${v.label}
                </button>
              `).join('')}
            </div>

            <!-- Candle Aromas & Colors dropdowns if applicable -->
            ${isCandleWithOptions ? `
              <div class="mt-3 pt-3 border-t border-[#8B5A2B]/15 space-y-2">
                ${selectedVariantId.includes('aroma') ? `
                  <div>
                    <label class="block text-[10px] font-semibold text-[#8B5A2B] mb-1">Fragancia / Aroma:</label>
                    <select onchange="updateCandleOption('${product.id}', 'aroma', this.value)" class="w-full text-xs bg-white text-[#3A2E2B] border border-[#8B5A2B]/20 rounded-lg py-1.5 px-2 focus:outline-none focus:border-[#C86D51]">
                      ${AROMAS_OPTIONS.map(a => `<option value="${a}" ${candleState.aroma === a ? 'selected' : ''}>${a}</option>`).join('')}
                    </select>
                  </div>
                ` : ''}

                ${selectedVariantId.includes('color') ? `
                  <div>
                    <label class="block text-[10px] font-semibold text-[#8B5A2B] mb-1">Tono / Color:</label>
                    <select onchange="updateCandleOption('${product.id}', 'color', this.value)" class="w-full text-xs bg-white text-[#3A2E2B] border border-[#8B5A2B]/20 rounded-lg py-1.5 px-2 focus:outline-none focus:border-[#C86D51]">
                      ${COLORES_OPTIONS.map(c => `<option value="${c}" ${candleState.color === c ? 'selected' : ''}>${c}</option>`).join('')}
                    </select>
                  </div>
                ` : ''}
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="grid grid-cols-5 gap-2 pt-2 border-t border-[#8B5A2B]/10">
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
            class="col-span-3 bg-[#C86D51] hover:bg-[#b35b40] text-white font-semibold py-2.5 px-3 rounded-2xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-md"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            Pedir WhatsApp
          </a>
        </div>
      </div>
    </article>
  `;
}

function selectProductVariant(productId, variantId) {
  activeVariantsMap[productId] = variantId;
  renderCatalog();
}

function updateCandleOption(productId, key, value) {
  if (!selectedCandleOptions[productId]) {
    selectedCandleOptions[productId] = {};
  }
  selectedCandleOptions[productId][key] = value;
  renderCatalog();
}

// CART MANAGEMENT
function addToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const variantId = activeVariantsMap[productId] || product.defaultVariant;
  const variant = product.variants.find(v => v.id === variantId) || product.variants[0];
  const candleState = selectedCandleOptions[productId] || {};

  const cartItemId = `${productId}-${variantId}-${candleState.aroma || ''}-${candleState.color || ''}`;

  const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      cartItemId,
      productId: product.id,
      name: product.name,
      variantName: variant.name,
      price: variant.price,
      aroma: (variantId.includes('aroma') ? candleState.aroma : null),
      color: (variantId.includes('color') ? candleState.color : null),
      quantity: 1,
      image: product.image
    });
  }

  updateCartBadge();
  showToastNotification(`¡"${product.name}" agregado a tu cotización!`);
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
          ${item.aroma ? `<p class="text-[10px] text-[#6C5C57]">Aroma: ${item.aroma}</p>` : ''}
          ${item.color ? `<p class="text-[10px] text-[#6C5C57]">Color: ${item.color}</p>` : ''}
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
    msg += `   • Opción: ${item.variantName}\n`;
    if (item.aroma) msg += `   • Aroma: ${item.aroma}\n`;
    if (item.color) msg += `   • Color: ${item.color}\n`;
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

  const selectedVariantId = activeVariantsMap[product.id] || product.defaultVariant;
  const currentVariant = product.variants.find(v => v.id === selectedVariantId) || product.variants[0];

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div class="relative rounded-2xl overflow-hidden bg-[#F7EFE5] flex items-center justify-center min-h-[250px]">
        <img id="modal-product-img" src="${product.image}" alt="${product.name}" class="w-full h-full object-cover rounded-2xl" />
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
          <p class="text-sm font-semibold text-[#8B5A2B] mb-3">${product.dimensions}</p>
          
          <div class="text-2xl font-bold text-[#C86D51] mb-4">${formatCLP(currentVariant.price)}</div>

          <p class="text-sm text-[#6C5C57] leading-relaxed mb-6">${product.description}</p>
        </div>

        <div class="space-y-3 pt-4 border-t border-[#8B5A2B]/10">
          <button onclick="addToCart('${product.id}'); closeModal();" class="w-full bg-[#8B5A2B] hover:bg-[#724822] text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
            Agregar a la lista de Cotización
          </button>
          
          <a href="https://wa.me/56948738454?text=${encodeURIComponent(`Hola! Consulto por ${product.name}`)}" target="_blank" class="w-full bg-[#C86D51] hover:bg-[#b35b40] text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
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
    reader.onload = function(e) {
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
