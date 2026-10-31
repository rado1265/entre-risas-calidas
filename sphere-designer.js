/**
 * sphere-designer.js
 * Diseñador Interactivo de Esfera Navideña 3D (Litofanía 4:1)
 * Entre Risas Cálidas — El Monte, Chile
 * 
 * Permite a los clientes subir fotos familiares, acomodarlas (zoom, pan, rotación),
 * agregar nombres y adornos navideños (corona, árbol, copos),
 * ver simulación nocturna con luz cálida, girar la esfera en 3D 360°,
 * y descargar la tira 4:1 exacta de 4000x1000 px requerida para imprimir en 3D.
 */

// Estado del diseñador de esfera
window.sphereDesignerState = {
  template: '3photos', // '3photos', '2photos', '1photo', 'wreath_name'
  photos: [
    { id: 0, file: null, img: null, zoom: 1.0, panX: 0, panY: 0, rotation: 0 },
    { id: 1, file: null, img: null, zoom: 1.0, panX: 0, panY: 0, rotation: 0 },
    { id: 2, file: null, img: null, zoom: 1.0, panX: 0, panY: 0, rotation: 0 }
  ],
  text: '',
  fontFamily: "'Dancing Script', cursive",
  fontFamilyKey: 'dancing',
  fontSize: 100, // escala sobre 1000px de altura
  textPosition: 'center', // 'left', 'center', 'right'
  stickers: {
    wreathLeft: false,
    wreathRight: false,
    treeLeft: false,
    treeRight: false,
    snowflakes: false
  },
  activeTab: 'strip', // 'strip', 'litophane', 'sphere3d'
  isLitLightOn: true,
  sphereAngle: 0,
  isDraggingSphere: false,
  dragStartX: 0,
  selectedSlotIndex: 0,
  isDraggingSlotPhoto: false,
  dragSlotStartX: 0,
  dragSlotStartY: 0,
  initialPanX: 0,
  initialPanY: 0,
  cached4000Canvas: null,
  finalDataUrl: null
};

// ==========================================
// INICIALIZACIÓN Y CONFIGURACIÓN DE PLANTILLAS
// ==========================================

function setSphereTemplate(templateId) {
  const s = window.sphereDesignerState;
  s.template = templateId;

  // Ajustes de configuración por plantilla
  /* if (templateId === '3photos') {
    s.stickers.wreathLeft = false;
    s.stickers.wreathRight = false;
    s.stickers.treeLeft = false;
    s.stickers.treeRight = false;
  } else if (templateId === '2photos') {
    s.stickers.wreathLeft = false;
    s.stickers.wreathRight = false;
    s.stickers.treeLeft = false;
    s.stickers.treeRight = false;
    if (!s.text) s.text = 'Navidad 2024';
    s.textPosition = 'center';
  } else if (templateId === '1photo') {
    s.stickers.treeLeft = true;
    s.stickers.wreathRight = true;
    if (!s.text) s.text = 'Feliz Navidad';
    s.textPosition = 'center';
  } else if (templateId === 'wreath_name') {
    s.stickers.wreathLeft = true;
    s.stickers.wreathRight = false;
    s.stickers.treeLeft = false;
    s.stickers.treeRight = false;
    if (!s.text) s.text = 'Josefa';
    s.textPosition = 'right';
  } */

  updateSphereDesignerUI();
  renderSphereCanvas();
}

// Cargar preset de ejemplo real de los adjuntos del cliente
function loadSphereExample(exampleIndex) {
  const s = window.sphereDesignerState;

  /* if (exampleIndex === 1) {
    // Ejemplo 1: Corona + Josefa
    s.template = 'wreath_name';
    s.text = 'Josefa';
    s.fontFamilyKey = 'dancing';
    s.fontFamily = "'Dancing Script', cursive";
    s.textPosition = 'right';
    s.stickers.wreathLeft = true;
    s.stickers.wreathRight = false;
    s.stickers.treeLeft = false;
    s.stickers.treeRight = false;
    s.photos[0].img = null;
    s.photos[1].img = null;
    s.photos[2].img = null;
  } else if (exampleIndex === 2) {
    // Ejemplo 2: Árbol + Foto Pareja + Corona
    s.template = '1photo';
    s.text = 'Entre Risas Cálidas';
    s.fontFamilyKey = 'dancing';
    s.fontFamily = "'Dancing Script', cursive";
    s.textPosition = 'center';
    s.stickers.treeLeft = true;
    s.stickers.wreathRight = true;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      s.photos[1].img = img;
      s.photos[1].zoom = 1.0;
      s.photos[1].panX = 0;
      s.photos[1].panY = 0;
      renderSphereCanvas();
    };
    img.src = 'assets/litofania/ejemplo-esfera-arbol-pareja.png';
  } else if (exampleIndex === 3) {
    // Ejemplo 3: 3 Fotos Familiares en 360°
    s.template = '3photos';
    s.text = 'Familia';
    s.stickers.wreathLeft = false;
    s.stickers.wreathRight = false;
    s.stickers.treeLeft = false;
    s.stickers.treeRight = false;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      s.photos[0].img = img;
      s.photos[1].img = img;
      s.photos[2].img = img;
      renderSphereCanvas();
    };
    img.src = 'assets/litofania/ejemplo-esfera-familia-3fotos.jpg';
  } */
  s.template = 'wreath_name';
  s.text = '';
  s.fontFamilyKey = 'dancing';
  s.fontFamily = "'Dancing Script', cursive";
  s.textPosition = 'right';
  s.stickers.wreathLeft = true;
  s.stickers.wreathRight = false;
  s.stickers.treeLeft = false;
  s.stickers.treeRight = false;
  s.photos[0].img = null;
  s.photos[1].img = null;
  s.photos[2].img = null;

  updateSphereDesignerUI();
  renderSphereCanvas();
  showToastNotification(`¡Ejemplo ${exampleIndex} cargado en el diseñador!`);
}

// Subir foto para un slot específico
function handleSpherePhotoUpload(event, slotIndex) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const s = window.sphereDesignerState;
      s.photos[slotIndex].img = img;
      s.photos[slotIndex].file = file;
      s.photos[slotIndex].zoom = 1.0;
      s.photos[slotIndex].panX = 0;
      s.photos[slotIndex].panY = 0;
      s.photos[slotIndex].rotation = 0;
      s.selectedSlotIndex = slotIndex;
      updateSphereDesignerUI();
      renderSphereCanvas();
      showToastNotification(`Foto cargada en Slot ${slotIndex + 1}`);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// Ajustes de zoom, pan y rotación
function adjustSpherePhotoZoom(slotIndex, delta) {
  const slot = window.sphereDesignerState.photos[slotIndex];
  if (!slot || !slot.img) return;
  slot.zoom = Math.max(0.4, Math.min(3.5, slot.zoom + delta));
  updateSlotControlsUI(slotIndex);
  renderSphereCanvas();
}

function setSpherePhotoZoom(slotIndex, value) {
  const slot = window.sphereDesignerState.photos[slotIndex];
  if (!slot || !slot.img) return;
  slot.zoom = parseFloat(value);
  updateSlotControlsUI(slotIndex);
  renderSphereCanvas();
}

function adjustSpherePhotoPan(slotIndex, deltaX, deltaY) {
  const slot = window.sphereDesignerState.photos[slotIndex];
  if (!slot || !slot.img) return;
  slot.panX += deltaX;
  slot.panY += deltaY;
  renderSphereCanvas();
}

function rotateSpherePhoto(slotIndex) {
  const slot = window.sphereDesignerState.photos[slotIndex];
  if (!slot || !slot.img) return;
  slot.rotation = (slot.rotation + 90) % 360;
  renderSphereCanvas();
}

function resetSpherePhoto(slotIndex) {
  const slot = window.sphereDesignerState.photos[slotIndex];
  if (!slot || !slot.img) return;
  slot.zoom = 1.0;
  slot.panX = 0;
  slot.panY = 0;
  slot.rotation = 0;
  updateSlotControlsUI(slotIndex);
  renderSphereCanvas();
}

function removeSpherePhoto(slotIndex) {
  const slot = window.sphereDesignerState.photos[slotIndex];
  if (!slot) return;
  slot.img = null;
  slot.file = null;
  slot.zoom = 1.0;
  slot.panX = 0;
  slot.panY = 0;
  slot.rotation = 0;
  updateSphereDesignerUI();
  renderSphereCanvas();
}

// Ajustes de texto y tipografía
function setSphereText(value) {
  window.sphereDesignerState.text = value;
  renderSphereCanvas();
}

function setSphereFont(fontKey) {
  const s = window.sphereDesignerState;
  s.fontFamilyKey = fontKey;
  if (fontKey === 'dancing') {
    s.fontFamily = "'Dancing Script', cursive";
  } else if (fontKey === 'playfair') {
    s.fontFamily = "'Playfair Display', serif";
  } else {
    s.fontFamily = "'Plus Jakarta Sans', sans-serif";
  }
  updateSphereButtonStates();
  renderSphereCanvas();
}

function setSphereTextPosition(position) {
  window.sphereDesignerState.textPosition = position;
  updateSphereButtonStates();
  renderSphereCanvas();
}

function toggleSphereSticker(stickerKey) {
  const s = window.sphereDesignerState;
  s.stickers[stickerKey] = !s.stickers[stickerKey];
  updateSphereButtonStates();
  renderSphereCanvas();
}

function switchSphereTab(tabId) {
  window.sphereDesignerState.activeTab = tabId;
  updateSphereDesignerUI();
  renderSphereCanvas();
}

function toggleSphereLitLight() {
  const s = window.sphereDesignerState;
  s.isLitLightOn = !s.isLitLightOn;
  renderSphereCanvas();
}

// ==========================================
// ACTUALIZACIÓN QUIRÚRGICA DE BOTONES (SIN RE-RENDER)
// Evita destruir/recrear el canvas en cada click.
// ==========================================
function updateSphereButtonStates() {
  const s = window.sphereDesignerState;

  // --- Tabs ---
  document.querySelectorAll('[data-sphere-tab]').forEach(btn => {
    const isActive = s.activeTab === btn.dataset.sphereTab;
    btn.dataset.active = isActive;
  });

  // --- Photo slots ---
  document.querySelectorAll('[data-sphere-slot]').forEach(card => {
    const isActive = s.selectedSlotIndex === parseInt(card.dataset.sphereSlot, 10);
    card.dataset.active = isActive;
  });

  // --- Font buttons ---
  document.querySelectorAll('[data-sphere-font]').forEach(btn => {
    const isActive = s.fontFamilyKey === btn.dataset.sphereFont;
    btn.dataset.active = isActive;
  });

  // --- Position buttons ---
  document.querySelectorAll('[data-sphere-pos]').forEach(btn => {
    const isActive = s.textPosition === btn.dataset.spherePos;
    btn.dataset.active = isActive;
  });

  // --- Sticker buttons ---
  document.querySelectorAll('[data-sphere-sticker]').forEach(btn => {
    const key = btn.dataset.sphereSticker;
    btn.dataset.active = !!(s.stickers[key]);
  });
}

// ==========================================
// DIBUJO EN CANVAS 4000x1000 (TIRA 4:1)
// ==========================================

function drawVectorWreath(ctx, cx, cy, radius) {
  ctx.save();
  ctx.translate(cx, cy);

  // 1. Círculo verde base (corona con hojas)
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.lineWidth = radius * 0.45;
  ctx.strokeStyle = '#23733B';
  ctx.stroke();

  // Hojas decorativas con volumen
  for (let i = 0; i < 24; i++) {
    const angle = (i / 24) * Math.PI * 2;
    const r = radius + (Math.sin(i * 3) * radius * 0.12);
    const lx = Math.cos(angle) * r;
    const ly = Math.sin(angle) * r;

    ctx.beginPath();
    ctx.arc(lx, ly, radius * 0.18, 0, Math.PI * 2);
    ctx.fillStyle = i % 2 === 0 ? '#1b5e20' : '#2e7d32';
    ctx.fill();
  }

  // 2. Bolitas decorativas rojas y amarillas
  for (let i = 0; i < 14; i++) {
    const angle = (i / 14) * Math.PI * 2 + 0.2;
    const bx = Math.cos(angle) * radius;
    const by = Math.sin(angle) * radius;
    ctx.beginPath();
    ctx.arc(bx, by, radius * 0.1, 0, Math.PI * 2);
    ctx.fillStyle = i % 3 === 0 ? '#FFB300' : '#D32F2F';
    ctx.fill();
    ctx.lineWidth = radius * 0.02;
    ctx.strokeStyle = '#FFFFFF';
    ctx.stroke();
  }

  // 3. Lazo / Moño rojo superior con cintas
  ctx.save();
  ctx.translate(0, -radius * 0.95);

  // Cintas colgantes
  ctx.beginPath();
  ctx.moveTo(-radius * 0.1, radius * 0.1);
  ctx.lineTo(-radius * 0.35, radius * 0.6);
  ctx.lineTo(-radius * 0.2, radius * 0.62);
  ctx.lineTo(0, radius * 0.2);
  ctx.fillStyle = '#C62828';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(radius * 0.1, radius * 0.1);
  ctx.lineTo(radius * 0.35, radius * 0.6);
  ctx.lineTo(radius * 0.2, radius * 0.62);
  ctx.lineTo(0, radius * 0.2);
  ctx.fillStyle = '#C62828';
  ctx.fill();

  // Lazos circulares
  ctx.beginPath();
  ctx.ellipse(-radius * 0.3, 0, radius * 0.3, radius * 0.22, -0.2, 0, Math.PI * 2);
  ctx.fillStyle = '#E53935';
  ctx.fill();
  ctx.strokeStyle = '#B71C1C';
  ctx.lineWidth = radius * 0.04;
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(radius * 0.3, 0, radius * 0.3, radius * 0.22, 0.2, 0, Math.PI * 2);
  ctx.fillStyle = '#E53935';
  ctx.fill();
  ctx.strokeStyle = '#B71C1C';
  ctx.lineWidth = radius * 0.04;
  ctx.stroke();

  // Nudo central
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.15, 0, Math.PI * 2);
  ctx.fillStyle = '#D32F2F';
  ctx.fill();
  ctx.stroke();

  ctx.restore();
  ctx.restore();
}

function drawVectorChristmasTree(ctx, cx, cy, size) {
  ctx.save();
  ctx.translate(cx, cy);

  const half = size / 2;

  // Tronco de madera
  ctx.fillStyle = '#5D4037';
  ctx.fillRect(-size * 0.09, half - size * 0.18, size * 0.18, size * 0.18);

  // Capas del árbol verde
  const layers = [
    { top: half - size * 0.3, bottom: half - size * 0.05, width: size * 0.44 },
    { top: half - size * 0.58, bottom: half - size * 0.28, width: size * 0.36 },
    { top: -half + size * 0.18, bottom: half - size * 0.54, width: size * 0.26 }
  ];

  layers.forEach((l, idx) => {
    ctx.beginPath();
    ctx.moveTo(0, l.top - size * 0.06);
    ctx.lineTo(l.width, l.bottom);
    ctx.lineTo(-l.width, l.bottom);
    ctx.closePath();
    ctx.fillStyle = idx === 0 ? '#1b5e20' : idx === 1 ? '#2e7d32' : '#388e3c';
    ctx.fill();
    ctx.lineWidth = size * 0.02;
    ctx.strokeStyle = '#143e17';
    ctx.stroke();
  });

  // Esferas decorativas
  const baubles = [
    { x: -size * 0.25, y: half - size * 0.14, c: '#E53935' },
    { x: size * 0.22, y: half - size * 0.16, c: '#FFB300' },
    { x: -size * 0.18, y: half - size * 0.38, c: '#42A5F5' },
    { x: size * 0.16, y: half - size * 0.42, c: '#E53935' },
    { x: 0, y: half - size * 0.22, c: '#FFD54F' },
    { x: 0, y: half - size * 0.65, c: '#E53935' }
  ];

  baubles.forEach(b => {
    ctx.beginPath();
    ctx.arc(b.x, b.y, size * 0.045, 0, Math.PI * 2);
    ctx.fillStyle = b.c;
    ctx.fill();
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = size * 0.01;
    ctx.stroke();
  });

  // Estrella dorada superior
  ctx.save();
  ctx.translate(0, -half + size * 0.12);
  ctx.beginPath();
  const spikes = 5;
  const outerRadius = size * 0.13;
  const innerRadius = size * 0.06;
  let rot = Math.PI / 2 * 3;
  let x = 0;
  let y = 0;
  const step = Math.PI / spikes;

  ctx.moveTo(0, -outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = Math.cos(rot) * outerRadius;
    y = Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = Math.cos(rot) * innerRadius;
    y = Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(0, -outerRadius);
  ctx.closePath();
  ctx.fillStyle = '#FFD700';
  ctx.fill();
  ctx.lineWidth = size * 0.015;
  ctx.strokeStyle = '#FFA000';
  ctx.stroke();
  ctx.restore();

  ctx.restore();
}

function drawVectorSnowflake(ctx, cx, cy, radius) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.strokeStyle = '#90CAF9';
  ctx.lineWidth = radius * 0.14;
  ctx.lineCap = 'round';

  for (let i = 0; i < 6; i++) {
    ctx.rotate(Math.PI / 3);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, radius);
    // Ramitas del copo
    ctx.moveTo(0, radius * 0.6);
    ctx.lineTo(radius * 0.3, radius * 0.85);
    ctx.moveTo(0, radius * 0.6);
    ctx.lineTo(-radius * 0.3, radius * 0.85);
    ctx.stroke();
  }
  ctx.restore();
}

// Renderizar la tira completa 4000x1000 px
function renderSphereFullResolutionCanvas() {
  const s = window.sphereDesignerState;

  // Creamos canvas maestro de 4000 x 1000 px
  if (!s.cached4000Canvas) {
    s.cached4000Canvas = document.createElement('canvas');
    s.cached4000Canvas.width = 4000;
    s.cached4000Canvas.height = 1000;
  }

  const canvas = s.cached4000Canvas;
  const ctx = canvas.getContext('2d');
  const W = 4000;
  const H = 1000;

  // Fondo blanco puro (esencial para litofanías: blanco = espesor base delgado y translúcido)
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, W, H);

  // 1. ZONAS SEGÚN LA PLANTILLA SELECCIONADA
  if (s.template === '3photos') {
    // 3 slots continuos (1333 px c/u)
    const slotW = W / 3;
    drawPhotoInSlot(ctx, s.photos[0], 0, 0, slotW, H);
    drawPhotoInSlot(ctx, s.photos[1], slotW, 0, slotW, H);
    drawPhotoInSlot(ctx, s.photos[2], slotW * 2, 0, slotW, H);

    // Separadores o unión suave
    ctx.strokeStyle = 'rgba(255,255,255,0.4)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(slotW, 0); ctx.lineTo(slotW, H);
    ctx.moveTo(slotW * 2, 0); ctx.lineTo(slotW * 2, H);
    ctx.stroke();

  } else if (s.template === '2photos') {
    // Foto izquierda (0-1400), Zona central para dedicatoria (1400-2600), Foto derecha (2600-4000)
    drawPhotoInSlot(ctx, s.photos[0], 0, 0, 1450, H);
    drawPhotoInSlot(ctx, s.photos[1], 2550, 0, 1450, H);

    // Corona al centro sobre el fondo blanco
    drawVectorWreath(ctx, 2000, 360, 220);

  } else if (s.template === '1photo') {
    // Foto central grande (1100 a 2900)
    drawPhotoInSlot(ctx, s.photos[1], 1100, 0, 1800, H);

    // Decoración a los lados
    if (s.stickers.treeLeft) {
      drawVectorChristmasTree(ctx, 550, 500, 600);
    }
    if (s.stickers.wreathRight) {
      drawVectorWreath(ctx, 3450, 500, 260);
    }

  } else if (s.template === 'wreath_name') {
    // Estilo Josefa: Corona en un tercio, nombre en caligrafía en el resto
    drawVectorWreath(ctx, 700, 500, 320);

    // Opcional foto de fondo o slot si el cliente la sube
    if (s.photos[0].img) {
      drawPhotoInSlot(ctx, s.photos[0], 2300, 100, 1500, 800);
    }
  }

  // 2. STICKERS Y ADORNOS ADICIONALES
  if (s.stickers.wreathLeft && s.template !== 'wreath_name') {
    drawVectorWreath(ctx, 450, 500, 220);
  }
  if (s.stickers.wreathRight && s.template !== '1photo') {
    drawVectorWreath(ctx, 3550, 500, 220);
  }
  if (s.stickers.treeLeft && s.template !== '1photo') {
    drawVectorChristmasTree(ctx, 500, 500, 520);
  }
  if (s.stickers.treeRight) {
    drawVectorChristmasTree(ctx, 3500, 500, 520);
  }
  if (s.stickers.snowflakes) {
    drawVectorSnowflake(ctx, 300, 200, 60);
    drawVectorSnowflake(ctx, 950, 850, 45);
    drawVectorSnowflake(ctx, 2000, 140, 50);
    drawVectorSnowflake(ctx, 3050, 860, 55);
    drawVectorSnowflake(ctx, 3700, 220, 65);
  }

  // 3. TEXTO / NOMBRE PERSONALIZADO
  if (s.text && s.text.trim()) {
    ctx.save();
    ctx.fillStyle = '#1A1817'; // Negro / grafito oscuro para relieve de litofanía
    ctx.font = `bold ${s.fontSize}px ${s.fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    let textX = W / 2;
    let textY = H / 2;

    if (s.template === '2photos') {
      textX = 2000;
      textY = 720;
    } else if (s.template === 'wreath_name') {
      textX = 2400;
      textY = 500;
      ctx.font = `bold ${s.fontSize * 1.5}px ${s.fontFamily}`;
    } else if (s.template === '1photo') {
      textX = 2000;
      textY = 880;
      // Caja sutil de contraste detrás del texto
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      const textMetrics = ctx.measureText(s.text);
      ctx.fillRect(textX - textMetrics.width / 2 - 40, textY - 50, textMetrics.width + 80, 100);
      ctx.fillStyle = '#1A1817';
    } else if (s.template === '3photos') {
      // Texto inferior sobre la foto central
      textX = 2000;
      textY = 880;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      const textMetrics = ctx.measureText(s.text);
      ctx.fillRect(textX - textMetrics.width / 2 - 40, textY - 50, textMetrics.width + 80, 100);
      ctx.fillStyle = '#1A1817';
    }

    if (s.textPosition === 'left') textX = 700;
    if (s.textPosition === 'right') textX = 3300;

    ctx.fillText(s.text, textX, textY);
    ctx.restore();
  }

  return canvas;
}

// Dibujar foto dentro de una caja recortada (slot) con zoom, pan y rotación
function drawPhotoInSlot(ctx, slot, x, y, w, h) {
  ctx.save();

  // Recorte exacto para no invadir slots contiguos
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();

  if (slot.img) {
    const img = slot.img;
    const imgW = img.naturalWidth || img.width;
    const imgH = img.naturalHeight || img.height;

    // Calcular escala cover básica
    const scale = Math.max(w / imgW, h / imgH) * slot.zoom;
    const renderW = imgW * scale;
    const renderH = imgH * scale;

    const centerX = x + w / 2 + slot.panX;
    const centerY = y + h / 2 + slot.panY;

    ctx.translate(centerX, centerY);
    if (slot.rotation) {
      ctx.rotate((slot.rotation * Math.PI) / 180);
    }
    ctx.drawImage(img, -renderW / 2, -renderH / 2, renderW, renderH);

  } else {
    // Fondo de placeholder con textura cálida y guía
    ctx.fillStyle = '#FBF7F2';
    ctx.fillRect(x, y, w, h);

    ctx.strokeStyle = '#D4C4B5';
    ctx.lineWidth = 4;
    ctx.setLineDash([16, 16]);
    ctx.strokeRect(x + 20, y + 20, w - 40, h - 40);
    ctx.setLineDash([]);

    // Icono y texto de subida
    ctx.fillStyle = '#8B5A2B';
    ctx.font = 'bold 50px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('📸', x + w / 2, y + h / 2 - 25);
    ctx.font = '36px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#A38F85';
    ctx.fillText('Se ajustará automáticamente a 360°', x + w / 2, y + h / 2 + 45);
  }

  ctx.restore();
}

// ==========================================
// RENDERIZADO EN EL CANVAS VISIBLE DE LA UI
// ==========================================

function renderSphereCanvas() {
  const previewCanvas = document.getElementById('sphere-preview-canvas');
  if (!previewCanvas) return;

  const s = window.sphereDesignerState;
  const fullCanvas = renderSphereFullResolutionCanvas();
  // Redimensionar el canvas según el tab activo
  if (s.activeTab === 'sphere3d') {
    if (previewCanvas.width !== 600 || previewCanvas.height !== 600) {
      previewCanvas.width = 600;
      previewCanvas.height = 600;
    }
  } else {
    if (previewCanvas.width !== 1000 || previewCanvas.height !== 250) {
      previewCanvas.width = 1000;
      previewCanvas.height = 250;
    }
  }
  const ctx = previewCanvas.getContext('2d');
  const w = previewCanvas.width;
  const h = previewCanvas.height;

  ctx.clearRect(0, 0, w, h);

  if (s.activeTab === 'strip') {
    // MODO 1: TIRA PANORÁMICA 4:1
    ctx.drawImage(fullCanvas, 0, 0, w, h);

    // Dibujar guías de cuadrante de la esfera
    ctx.save();
    ctx.strokeStyle = 'rgba(200, 109, 81, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 6]);

    // Guías de los tercios (360° dividido en 3 caras)
    ctx.beginPath();
    ctx.moveTo(w * 0.333, 0); ctx.lineTo(w * 0.333, h);
    ctx.moveTo(w * 0.666, 0); ctx.lineTo(w * 0.666, h);
    ctx.stroke();
    ctx.setLineDash([]);

    // Etiquetas sutiles de orientación
    ctx.fillStyle = 'rgba(139, 90, 43, 0.75)';
    ctx.font = '10px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Lateral Izquierdo (120°)', w * 0.166, 16);
    ctx.fillText('Frente de la Esfera (120°)', w * 0.5, 16);
    ctx.fillText('Lateral Derecho (120°)', w * 0.833, 16);

    ctx.restore();

  } else if (s.activeTab === 'litophane') {
    // MODO 2: SIMULACIÓN DE LITOFANÍA ENCENDIDA (LUZ CÁLIDA)
    // Procesamos el canvas a escala de grises con resplandor cálido de vela/LED 2700K
    renderLitophaneSimulation(ctx, fullCanvas, w, h, s.isLitLightOn);

  } else if (s.activeTab === 'sphere3d') {
    // MODO 3: ESFERA 3D 360° GIRATORIA
    renderSphere3DView(ctx, fullCanvas, w, h, s.sphereAngle, s.isLitLightOn);
  }
}

// Simulación de luz cálida nocturna atravesando el relieve 3D
function renderLitophaneSimulation(ctx, sourceCanvas, w, h, isLightOn) {
  // 1. Dibujar imagen base en blanco y negro de alto contraste
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = w;
  tempCanvas.height = h;
  const tempCtx = tempCanvas.getContext('2d');
  tempCtx.drawImage(sourceCanvas, 0, 0, w, h);

  const imgData = tempCtx.getImageData(0, 0, w, h);
  const data = imgData.data;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // Luminancia estándar
    const gray = (0.299 * r + 0.587 * g + 0.114 * b);

    if (isLightOn) {
      // Luz cálida 2700K: Las partes claras dejan pasar luz dorada brillante;
      // las partes oscuras bloquean luz mostrando color ámbar profundo
      const norm = gray / 255;
      data[i] = Math.min(255, 255 * (0.4 + norm * 0.6));       // R cálido
      data[i + 1] = Math.min(255, 215 * (0.25 + norm * 0.75));  // G dorado
      data[i + 2] = Math.min(255, 130 * (0.1 + norm * 0.9));    // B ámbar
    } else {
      // Litofanía apagada: Plástico blanco hueso con relieve sutil
      data[i] = 235 - (255 - gray) * 0.25;
      data[i + 1] = 232 - (255 - gray) * 0.25;
      data[i + 2] = 225 - (255 - gray) * 0.25;
    }
  }

  tempCtx.putImageData(imgData, 0, 0);

  // Fondo oscuro nocturno para apreciar el resplandor
  ctx.fillStyle = isLightOn ? '#1A1412' : '#2A2422';
  ctx.fillRect(0, 0, w, h);

  // Halo de resplandor radial cálido
  if (isLightOn) {
    const glow = ctx.createRadialGradient(w / 2, h / 2, h * 0.2, w / 2, h / 2, w * 0.6);
    glow.addColorStop(0, 'rgba(255, 200, 110, 0.4)');
    glow.addColorStop(0.6, 'rgba(200, 110, 50, 0.15)');
    glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, w, h);
  }

  // Dibujar la tira iluminada
  ctx.save();
  ctx.drawImage(tempCanvas, 0, 0, w, h);

  if (isLightOn) {
    ctx.globalCompositeOperation = 'screen';
    const softGlow = ctx.createLinearGradient(0, 0, w, 0);
    softGlow.addColorStop(0, 'rgba(255, 180, 80, 0.15)');
    softGlow.addColorStop(0.5, 'rgba(255, 240, 180, 0.35)');
    softGlow.addColorStop(1, 'rgba(255, 180, 80, 0.15)');
    ctx.fillStyle = softGlow;
    ctx.fillRect(0, 0, w, h);
  }
  ctx.restore();
}

// Vista interactiva de la Esfera 3D con textura envolvente
function renderSphere3DView(ctx, sourceCanvas, w, h, angleDeg, isLightOn) {
  // Fondo oscuro elegante
  ctx.fillStyle = '#161211';
  ctx.fillRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h / 2 + 10;
  const radius = Math.min(w, h) * 0.42;

  // 1. Resplandor exterior nocturno
  if (isLightOn) {
    const outerGlow = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.6);
    outerGlow.addColorStop(0, 'rgba(255, 215, 130, 0.45)');
    outerGlow.addColorStop(0.5, 'rgba(200, 109, 81, 0.18)');
    outerGlow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = outerGlow;
    ctx.fillRect(0, 0, w, h);
  }

  // 2. Colgador de bola de Navidad (Casquillo dorado + cuerda)
  ctx.save();
  // Cuerda para colgar
  ctx.strokeStyle = '#D4AF37';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(cx, 0);
  ctx.lineTo(cx, cy - radius - 20);
  ctx.stroke();

  // Argolla metálica
  ctx.beginPath();
  ctx.arc(cx, cy - radius - 15, 9, 0, Math.PI * 2);
  ctx.strokeStyle = '#F5D77F';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Casquillo metálico estriado
  const capW = 28;
  const capH = 14;
  const capGrad = ctx.createLinearGradient(cx - capW / 2, 0, cx + capW / 2, 0);
  capGrad.addColorStop(0, '#B8860B');
  capGrad.addColorStop(0.5, '#FFE082');
  capGrad.addColorStop(1, '#8B6508');
  ctx.fillStyle = capGrad;
  ctx.fillRect(cx - capW / 2, cy - radius - 6, capW, capH);
  ctx.restore();

  // 3. Proyección esférica de la tira (360 grados)
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.clip();

  // Color de base de la litofanía
  ctx.fillStyle = isLightOn ? '#FFE4B5' : '#EFEBE9';
  ctx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);

  // Muestreo cilíndrico/esférico en franjas verticales
  const slices = 90;
  const sliceW = (radius * 2) / slices;
  const srcW = sourceCanvas.width;
  const srcH = sourceCanvas.height;

  // Ángulo actual normalizado en 0 a 1
  const normAngle = ((angleDeg % 360) + 360) % 360 / 360;

  for (let i = 0; i < slices; i++) {
    const xPos = (i / slices) * 2 - 1; // -1 a 1 en el diámetro horizontal
    if (Math.abs(xPos) > 0.99) continue;

    // Proyección de esfera: x = sin(phi)
    const phi = Math.asin(xPos);
    const textureXFrac = ((phi / Math.PI + 0.5) + normAngle) % 1.0;
    const sx = Math.floor(textureXFrac * srcW);

    const destX = cx + xPos * radius;
    // Efecto de curvatura esférica en altura
    const sphereCurvatureY = Math.sqrt(1 - xPos * xPos);
    const destH = radius * 2 * sphereCurvatureY;
    const destY = cy - destH / 2;

    // Sombreado lateral para volumen 3D
    ctx.drawImage(sourceCanvas, sx, 0, Math.max(1, srcW / slices), srcH, destX, destY, sliceW + 0.8, destH);
  }

  // 4. Iluminación y sombreado 3D de la esfera
  const sphereShading = ctx.createRadialGradient(cx - radius * 0.3, cy - radius * 0.3, radius * 0.1, cx, cy, radius);
  if (isLightOn) {
    sphereShading.addColorStop(0, 'rgba(255, 255, 230, 0.35)');
    sphereShading.addColorStop(0.6, 'rgba(255, 180, 80, 0.15)');
    sphereShading.addColorStop(0.9, 'rgba(120, 50, 10, 0.45)');
    sphereShading.addColorStop(1, 'rgba(40, 15, 5, 0.8)');
  } else {
    sphereShading.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
    sphereShading.addColorStop(0.6, 'rgba(200, 190, 180, 0.2)');
    sphereShading.addColorStop(1, 'rgba(40, 35, 30, 0.65)');
  }
  ctx.fillStyle = sphereShading;
  ctx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);

  // Brillo especular sutil
  ctx.beginPath();
  ctx.ellipse(cx - radius * 0.35, cy - radius * 0.4, radius * 0.2, radius * 0.1, -0.4, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
  ctx.fill();

  ctx.restore();

  // Borde y contorno
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.lineWidth = 2;
  ctx.strokeStyle = isLightOn ? 'rgba(255, 220, 140, 0.4)' : 'rgba(200, 190, 180, 0.3)';
  ctx.stroke();

  // Instrucción interactiva
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = '11px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('🖱️ Arrastra horizontalmente para girar tu esfera en 360°', cx, h - 8);
}

// ==========================================
// INTERACCIÓN CON EL CANVAS (TOUCH / MOUSE)
// ==========================================

function initSphereCanvasInteractions() {
  const canvas = document.getElementById('sphere-preview-canvas');
  if (!canvas) return;

  // Soporte de arrastre para rotar la esfera 3D o reposicionar fotos
  const onPointerDown = (e) => {
    const s = window.sphereDesignerState;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    const relX = clientX - rect.left;
    const relY = clientY - rect.top;

    if (s.activeTab === 'sphere3d') {
      s.isDraggingSphere = true;
      s.dragStartX = clientX;
    } else if (s.activeTab === 'strip') {
      // Detectar slot clickeado para pan de foto
      const normX = relX / rect.width;
      let slotIdx = 0;
      if (s.template === '3photos') {
        slotIdx = normX < 0.333 ? 0 : normX < 0.666 ? 1 : 2;
      } else if (s.template === '2photos') {
        slotIdx = normX < 0.4 ? 0 : normX > 0.6 ? 1 : -1;
      } else if (s.template === '1photo') {
        slotIdx = 1;
      }
      if (slotIdx >= 0 && s.photos[slotIdx] && s.photos[slotIdx].img) {
        s.selectedSlotIndex = slotIdx;
        s.isDraggingSlotPhoto = true;
        s.dragSlotStartX = clientX;
        s.dragSlotStartY = clientY;
        s.initialPanX = s.photos[slotIdx].panX;
        s.initialPanY = s.photos[slotIdx].panY;
      }
    }
  };

  const onPointerMove = (e) => {
    const s = window.sphereDesignerState;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    if (s.isDraggingSphere) {
      const deltaX = clientX - s.dragStartX;
      s.sphereAngle += deltaX * 0.75;
      s.dragStartX = clientX;
      renderSphereCanvas();
    } else if (s.isDraggingSlotPhoto) {
      const deltaX = clientX - s.dragSlotStartX;
      const deltaY = clientY - s.dragSlotStartY;
      const slot = s.photos[s.selectedSlotIndex];
      // Multiplicar según proporción 4000 a ancho visual
      const rect = canvas.getBoundingClientRect();
      const scaleFactor = 4000 / rect.width;
      slot.panX = s.initialPanX + deltaX * scaleFactor;
      slot.panY = s.initialPanY + deltaY * scaleFactor;
      renderSphereCanvas();
    }
  };

  const onPointerUp = () => {
    const s = window.sphereDesignerState;
    s.isDraggingSphere = false;
    s.isDraggingSlotPhoto = false;
  };

  canvas.onmousedown = onPointerDown;
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  canvas.ontouchstart = (e) => {
    // Prevenir scroll de página al interactuar con el canvas
    if (window.sphereDesignerState.activeTab === 'sphere3d') e.preventDefault();
    onPointerDown(e);
  };
  // Non-passive para poder llamar preventDefault() en sphere3d
  if (!canvas._touchMoveAdded) {
    canvas._touchMoveAdded = true;
    window.addEventListener('touchmove', (e) => {
      if (window.sphereDesignerState.isDraggingSphere || window.sphereDesignerState.isDraggingSlotPhoto) {
        e.preventDefault();
      }
      onPointerMove(e);
    }, { passive: false });
    window.addEventListener('touchend', onPointerUp);
  }
}

// ==========================================
// EXPORTACIÓN Y DESCARGA DE LA IMAGEN 4:1
// ==========================================

function exportSphereLithophaneImage() {
  const fullCanvas = renderSphereFullResolutionCanvas();
  const dataUrl = fullCanvas.toDataURL('image/png', 0.98);
  window.sphereDesignerState.finalDataUrl = dataUrl;

  // Descargar archivo con nombre descriptivo
  const downloadLink = document.createElement('a');
  downloadLink.download = `litofania-esfera-4000x1000-${Date.now()}.png`;
  downloadLink.href = dataUrl;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();

  showToastNotification('📥 ¡Imagen 4:1 de alta resolución descargada! Lista para subir a lithophanemaker.');
  return dataUrl;
}

// Aplicar diseño a la cotización / carrito
function applySphereDesignToQuote(productId) {
  const s = window.sphereDesignerState;
  const fullCanvas = renderSphereFullResolutionCanvas();
  const dataUrl = fullCanvas.toDataURL('image/jpeg', 0.92);
  s.finalDataUrl = dataUrl;

  // Contar cuántas fotos se subieron
  const photosCount = s.photos.filter(p => p.img !== null).length;

  // Actualizar imagen y detalles en el modal actual
  const modalImg = document.getElementById('modal-product-img');
  if (modalImg) {
    modalImg.src = dataUrl;
    modalImg.classList.add('lithophane-glow', 'sepia', 'contrast-125');
  }

  // Guardar metadata en selectedOptionsMap
  if (!window.selectedOptionsMap) window.selectedOptionsMap = {};
  if (!window.selectedOptionsMap[productId]) window.selectedOptionsMap[productId] = {};

  window.selectedOptionsMap[productId].customSphereDesign = {
    dataUrl: dataUrl,
    template: s.template,
    text: s.text,
    photosCount: photosCount,
    readyToPrint: true
  };

  // Notificar al usuario
  showToastNotification('✓ ¡Diseño 4:1 aplicado con éxito a tu esfera navideña!');

  // Habilitar botón de agregar o actualizar
  if (typeof updateModalDOM === 'function') {
    updateModalDOM(productId);
  }
}

// ==========================================
// CONSTRUCCIÓN DEL HTML DEL DISEÑADOR
// ==========================================

function buildSphereDesignerStudioHTML(product) {
  const s = window.sphereDesignerState;

  return `
    <div class="bg-gradient-to-br from-[#FFFDF9] to-[#F7EFE5] rounded-3xl p-4 sm:p-6 border border-[#C86D51]/25 shadow-sm space-y-6">
      
      <!-- Studio Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#8B5A2B]/15 pb-4">
        <div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#C86D51]/10 text-[#C86D51] mb-1">
            <span>🎄</span>
            <span>Estudio 3D · Tira 4:1 (4000 × 1000 px)</span>
          </span>
          <h3 class="text-xl sm:text-2xl font-serif-title font-bold text-[#3A2E2B]">Diseña tu Esfera Navideña Personalizada</h3>
          <p class="text-xs text-[#6C5C57]">Sube tus fotos familiares, agrega nombres y adornos. Generaremos la tira exacta para imprimir en 3D.</p>
        </div>

        <!-- Presets Rápidos Reales del Taller 
        <div class="flex items-center gap-1.5 flex-wrap">
          <span class="text-[11px] font-bold text-[#8B5A2B]">Ejemplos:</span>
          <button type="button" onclick="loadSphereExample(1)" class="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-white border border-[#8B5A2B]/20 hover:border-[#C86D51] hover:text-[#C86D51] transition-all shadow-2xs">
            Corona + Josefa
          </button>
          <button type="button" onclick="loadSphereExample(2)" class="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-white border border-[#8B5A2B]/20 hover:border-[#C86D51] hover:text-[#C86D51] transition-all shadow-2xs">
            Árbol + Pareja
          </button>
          <button type="button" onclick="loadSphereExample(3)" class="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-white border border-[#8B5A2B]/20 hover:border-[#C86D51] hover:text-[#C86D51] transition-all shadow-2xs">
            3 Fotos 360°
          </button>
        </div>
         -->
      </div>

      <!-- Live Interactive Visualizer -->
      <div class="space-y-3">
        <!-- Visualizer Tabs -->
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <div class="flex items-center gap-1 bg-[#F7EFE5] p-1 rounded-2xl border border-[#8B5A2B]/15">
            <button 
              type="button" 
              data-sphere-tab="strip"
              data-active="${s.activeTab === 'strip'}"
              onclick="switchSphereTab('strip')" 
              class="sphere-tab-btn px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${s.activeTab === 'strip' ? 'bg-[#C86D51] text-white shadow-xs' : 'text-[#6C5C57] hover:text-[#3A2E2B]'}"
            >
              🖼️ Tira Panorámica 4:1
            </button>
            <button 
              type="button" 
              data-sphere-tab="litophane"
              data-active="${s.activeTab === 'litophane'}"
              onclick="switchSphereTab('litophane')" 
              class="sphere-tab-btn px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${s.activeTab === 'litophane' ? 'bg-[#C86D51] text-white shadow-xs' : 'text-[#6C5C57] hover:text-[#3A2E2B]'}"
            >
              💡 Luz Cálida Encendida
            </button>
            <button 
              type="button" 
              data-sphere-tab="sphere3d"
              data-active="${s.activeTab === 'sphere3d'}"
              onclick="switchSphereTab('sphere3d')" 
              class="sphere-tab-btn px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${s.activeTab === 'sphere3d' ? 'bg-[#C86D51] text-white shadow-xs' : 'text-[#6C5C57] hover:text-[#3A2E2B]'}"
            >
              🔮 Esfera 3D Giratoria
            </button>
          </div>

          <!-- Luz Encendida Toggle (En modos de simulación) -->
          ${s.activeTab !== 'strip' ? `
            <button 
              type="button" 
              onclick="toggleSphereLitLight()" 
              class="text-xs font-semibold px-3 py-1.5 rounded-xl border flex items-center gap-1.5 transition-all ${s.isLitLightOn ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-xs' : 'bg-gray-100 text-gray-600 border-gray-300'}"
            >
              <span>${s.isLitLightOn ? '💡 Luz LED Encendida' : '🌑 Luz Apagada'}</span>
            </button>
          ` : `
            <span class="text-[11px] text-[#8B5A2B] font-medium hidden sm:inline">Proporción 4:1 (Envolvente 360° × 90°)</span>
          `}
        </div>

        <!-- Canvas Container -->
        <div class="relative w-full rounded-2xl overflow-hidden bg-white shadow-md border border-[#8B5A2B]/20 flex items-center justify-center min-h-[160px] sm:min-h-[220px]">
          <canvas 
            id="sphere-preview-canvas" 
            width="1000" 
            height="250" 
            class="w-full h-auto max-h-[300px] object-contain cursor-grab active:cursor-grabbing block"
          ></canvas>
        </div>
      </div>

      <!-- Designer Controls Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">

        <!-- Column 1: Plantillas & Fotos (7 cols) -->
        <div class="lg:col-span-7 space-y-4">
          
          <!-- 1. Selector de Plantillas
          <div>
            <label class="block text-xs font-bold text-[#8B5A2B] uppercase tracking-wider mb-2">1. Elige tu Estructura de Diseño:</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button 
                type="button" 
                onclick="setSphereTemplate('3photos')" 
                class="p-2.5 rounded-2xl border text-center transition-all ${s.template === '3photos' ? 'bg-[#FFFDF9] border-[#C86D51] ring-2 ring-[#C86D51]/30 font-bold' : 'bg-white border-gray-200 hover:border-[#C86D51]/40'}"
              >
                <div class="text-lg">👥</div>
                <div class="text-[11px] text-[#3A2E2B] font-semibold mt-0.5">3 Fotos 360°</div>
                <div class="text-[9px] text-[#8B5A2B]">Panorámica total</div>
              </button>

              <button 
                type="button" 
                onclick="setSphereTemplate('2photos')" 
                class="p-2.5 rounded-2xl border text-center transition-all ${s.template === '2photos' ? 'bg-[#FFFDF9] border-[#C86D51] ring-2 ring-[#C86D51]/30 font-bold' : 'bg-white border-gray-200 hover:border-[#C86D51]/40'}"
              >
                <div class="text-lg">💑</div>
                <div class="text-[11px] text-[#3A2E2B] font-semibold mt-0.5">2 Fotos + Mensaje</div>
                <div class="text-[9px] text-[#8B5A2B]">Dedicatoria centro</div>
              </button>

              <button 
                type="button" 
                onclick="setSphereTemplate('1photo')" 
                class="p-2.5 rounded-2xl border text-center transition-all ${s.template === '1photo' ? 'bg-[#FFFDF9] border-[#C86D51] ring-2 ring-[#C86D51]/30 font-bold' : 'bg-white border-gray-200 hover:border-[#C86D51]/40'}"
              >
                <div class="text-lg">🎄</div>
                <div class="text-[11px] text-[#3A2E2B] font-semibold mt-0.5">Foto + Adornos</div>
                <div class="text-[9px] text-[#8B5A2B]">Árbol y corona</div>
              </button>

              <button 
                type="button" 
                onclick="setSphereTemplate('wreath_name')" 
                class="p-2.5 rounded-2xl border text-center transition-all ${s.template === 'wreath_name' ? 'bg-[#FFFDF9] border-[#C86D51] ring-2 ring-[#C86D51]/30 font-bold' : 'bg-white border-gray-200 hover:border-[#C86D51]/40'}"
              >
                <div class="text-lg">🎀</div>
                <div class="text-[11px] text-[#3A2E2B] font-semibold mt-0.5">Corona + Nombre</div>
                <div class="text-[9px] text-[#8B5A2B]">Estilo Josefa</div>
              </button>
            </div>
          </div>
           -->

          <!-- 2. Subida y Ajuste de Fotos por Slot -->
          <div class="bg-white rounded-2xl p-4 border border-[#8B5A2B]/15 shadow-2xs space-y-3">
            <div class="flex items-center justify-between">
              <label class="text-xs font-bold text-[#8B5A2B] uppercase tracking-wider">2. Sube y Ajusta tus Fotos:</label>
              <span class="text-[10px] text-[#6C5C57]">Arrastra en la foto para moverla</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              ${renderSlotUploaderHTML(0, 'Foto Izquierda (o Lateral)')}
              ${renderSlotUploaderHTML(1, s.template === '1photo' ? 'Foto Principal Central' : 'Foto Central')}
              ${renderSlotUploaderHTML(2, 'Foto Derecha (o Posterior)')}
            </div>

            <!-- Controles de ajuste fino para la foto activa -->
            <div id="slot-active-controls">
              ${renderSlotFineControlsHTML(s.selectedSlotIndex)}
            </div>
          </div>

        </div>

        <!-- Column 2: Texto, Adornos & Acciones (5 cols) -->
        <div class="lg:col-span-5 space-y-4">

          <!-- 3. Texto & Tipografía -->
          <div class="bg-white rounded-2xl p-4 border border-[#8B5A2B]/15 shadow-2xs space-y-3">
            <label class="block text-xs font-bold text-[#8B5A2B] uppercase tracking-wider">3. Texto / Dedicatoria / Nombres:</label>
            
            <input 
              type="text" 
              value="${s.text}" 
              placeholder="Ej: Josefa, Familia González, 2024..." 
              oninput="setSphereText(this.value)" 
              class="w-full text-xs px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C86D51] bg-[#FFFDF9]"
            />

            <!-- Opciones de fuente -->
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-bold text-[#8B5A2B]">Fuente:</span>
              <button 
                type="button" 
                data-sphere-font="dancing"
                data-active="${s.fontFamilyKey === 'dancing'}"
                onclick="setSphereFont('dancing')" 
                class="text-xs px-2.5 py-1 rounded-lg border font-script sphere-font-btn ${s.fontFamilyKey === 'dancing' ? 'bg-[#C86D51] text-white font-bold border-[#C86D51]' : 'bg-gray-50 text-gray-700 border-gray-200'}"
              >
                Cursiva
              </button>
              <button 
                type="button" 
                data-sphere-font="playfair"
                data-active="${s.fontFamilyKey === 'playfair'}"
                onclick="setSphereFont('playfair')" 
                class="text-xs px-2.5 py-1 rounded-lg border font-serif-title sphere-font-btn ${s.fontFamilyKey === 'playfair' ? 'bg-[#C86D51] text-white font-bold border-[#C86D51]' : 'bg-gray-50 text-gray-700 border-gray-200'}"
              >
                Elegante
              </button>
              <button 
                type="button" 
                data-sphere-font="sans"
                data-active="${s.fontFamilyKey === 'sans'}"
                onclick="setSphereFont('sans')" 
                class="text-xs px-2.5 py-1 rounded-lg border font-sans sphere-font-btn ${s.fontFamilyKey === 'sans' ? 'bg-[#C86D51] text-white font-bold border-[#C86D51]' : 'bg-gray-50 text-gray-700 border-gray-200'}"
              >
                Moderna
              </button>
            </div>

            <!-- Posición del texto -->
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-bold text-[#8B5A2B]">Posición:</span>
              <button 
                type="button" 
                data-sphere-pos="left"
                data-active="${s.textPosition === 'left'}"
                onclick="setSphereTextPosition('left')" 
                class="text-[10px] px-2 py-1 rounded-lg border sphere-pos-btn ${s.textPosition === 'left' ? 'bg-[#8B5A2B] text-white font-bold' : 'bg-gray-50 text-gray-600'}"
              >
                Izquierda
              </button>
              <button 
                type="button" 
                data-sphere-pos="center"
                data-active="${s.textPosition === 'center'}"
                onclick="setSphereTextPosition('center')" 
                class="text-[10px] px-2 py-1 rounded-lg border sphere-pos-btn ${s.textPosition === 'center' ? 'bg-[#8B5A2B] text-white font-bold' : 'bg-gray-50 text-gray-600'}"
              >
                Centro
              </button>
              <button 
                type="button" 
                data-sphere-pos="right"
                data-active="${s.textPosition === 'right'}"
                onclick="setSphereTextPosition('right')" 
                class="text-[10px] px-2 py-1 rounded-lg border sphere-pos-btn ${s.textPosition === 'right' ? 'bg-[#8B5A2B] text-white font-bold' : 'bg-gray-50 text-gray-600'}"
              >
                Derecha
              </button>
            </div>
          </div>

          <!-- 4. Adornos Navideños (Stickers) -->
          <div class="bg-white rounded-2xl p-4 border border-[#8B5A2B]/15 shadow-2xs space-y-2">
            <label class="block text-xs font-bold text-[#8B5A2B] uppercase tracking-wider">4. Adornos Navideños en la Tira:</label>
            <div class="flex flex-wrap gap-1.5">
              <button 
                type="button" 
                data-sphere-sticker="wreathLeft"
                data-active="${s.stickers.wreathLeft}"
                onclick="toggleSphereSticker('wreathLeft')" 
                class="sphere-sticker-btn text-[11px] px-2.5 py-1.5 rounded-xl border transition-all flex items-center gap-1 ${s.stickers.wreathLeft ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600'}"
              >
                <span>🎀 Corona Izquierda</span>
              </button>
              <button 
                type="button" 
                data-sphere-sticker="wreathRight"
                data-active="${s.stickers.wreathRight}"
                onclick="toggleSphereSticker('wreathRight')" 
                class="sphere-sticker-btn text-[11px] px-2.5 py-1.5 rounded-xl border transition-all flex items-center gap-1 ${s.stickers.wreathRight ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600'}"
              >
                <span>🎀 Corona Derecha</span>
              </button>
              <button 
                type="button" 
                data-sphere-sticker="treeLeft"
                data-active="${s.stickers.treeLeft}"
                onclick="toggleSphereSticker('treeLeft')" 
                class="sphere-sticker-btn text-[11px] px-2.5 py-1.5 rounded-xl border transition-all flex items-center gap-1 ${s.stickers.treeLeft ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600'}"
              >
                <span>🎄 Árbol Izquierdo</span>
              </button>
              <button 
                type="button" 
                data-sphere-sticker="snowflakes"
                data-active="${s.stickers.snowflakes}"
                onclick="toggleSphereSticker('snowflakes')" 
                class="sphere-sticker-btn text-[11px] px-2.5 py-1.5 rounded-xl border transition-all flex items-center gap-1 ${s.stickers.snowflakes ? 'bg-blue-50 border-blue-500 text-blue-800 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600'}"
              >
                <span>❄️ Copos de Nieve</span>
              </button>
            </div>
          </div>

          <!-- 5. Acciones Principales -->
          <div class="space-y-2 pt-2">
            <button 
              type="button" 
              onclick="applySphereDesignToQuote('${product.id}')" 
              class="w-full bg-[#258B47] hover:bg-[#1f733a] active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-2xl text-xs transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>✓ Confirmar Diseño y Aplicar a mi Pedido</span>
            </button>

            <button 
              type="button" 
              onclick="exportSphereLithophaneImage()" 
              class="w-full bg-white hover:bg-[#F7EFE5] text-[#8B5A2B] border border-[#8B5A2B]/30 font-bold py-2.5 px-4 rounded-2xl text-xs transition-all flex items-center justify-center gap-2 shadow-2xs"
            >
              <svg class="w-4 h-4 text-[#C86D51]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              <span>📥 Descargar Imagen 4:1 (4000 × 1000 px)</span>
            </button>
            <p class="text-[10px] text-center text-[#8B5A2B]">La imagen descargada es la que utilizaremos para imprimir tu litofanía en 3D.</p>
          </div>

        </div>

      </div>

    </div>
  `;
}

function renderSlotUploaderHTML(slotIndex, label) {
  const s = window.sphereDesignerState;
  const slot = s.photos[slotIndex];
  const isSelected = s.selectedSlotIndex === slotIndex;

  return `
    <div 
      onclick="selectSphereSlot(${slotIndex})" 
      data-sphere-slot="${slotIndex}"
      data-active="${isSelected}"
      class="p-2.5 rounded-xl border text-center transition-all cursor-pointer sphere-slot-card ${isSelected ? 'border-[#C86D51] bg-[#FFF5F0] ring-2 ring-[#C86D51]/25' : 'border-gray-200 bg-gray-50/70 hover:bg-white'}"
    >
      <div class="text-[10px] font-bold text-[#8B5A2B] truncate mb-1.5">${label}</div>
      
      ${slot.img ? `
        <div class="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-white border border-gray-200 mb-1.5 group">
          <img src="${slot.img.src}" class="w-full h-full object-cover" />
          <button 
            type="button" 
            onclick="event.stopPropagation(); removeSpherePhoto(${slotIndex})" 
            title="Quitar foto" 
            class="absolute top-1 right-1 w-5 h-5 bg-red-600 text-white rounded-full text-[10px] flex items-center justify-center shadow-md hover:scale-110 transition-transform"
          >
            ✕
          </button>
        </div>
        <span class="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block">Cargada ✓</span>
      ` : `
        <label class="w-full aspect-[4/3] rounded-lg border-2 border-dashed border-[#8B5A2B]/25 hover:border-[#C86D51] bg-white flex flex-col items-center justify-center p-2 cursor-pointer transition-colors block">
          <span class="text-xl">➕</span>
          <span class="text-[9px] font-semibold text-[#8B5A2B] mt-1">Subir Foto</span>
          <input 
            type="file" 
            accept="image/*" 
            onchange="handleSpherePhotoUpload(event, ${slotIndex})" 
            class="hidden" 
          />
        </label>
      `}
    </div>
  `;
}

function selectSphereSlot(slotIndex) {
  window.sphereDesignerState.selectedSlotIndex = slotIndex;
  updateSphereButtonStates();
  // Actualizar controles finos sin re-render completo
  const ctrlContainer = document.getElementById('slot-active-controls');
  if (ctrlContainer) ctrlContainer.innerHTML = renderSlotFineControlsHTML(slotIndex);
}

function renderSlotFineControlsHTML(slotIndex) {
  const slot = window.sphereDesignerState.photos[slotIndex];
  if (!slot || !slot.img) {
    return `<div class="text-[10px] text-gray-400 italic text-center py-1">Selecciona o sube una foto arriba para ajustar zoom, posición y giro.</div>`;
  }

  return `
    <div class="pt-2 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-xs">
      <div class="flex items-center gap-1.5">
        <span class="text-[10px] font-bold text-[#8B5A2B]">Zoom Slot ${slotIndex + 1}:</span>
        <button type="button" onclick="adjustSpherePhotoZoom(${slotIndex}, -0.1)" class="w-6 h-6 rounded-md bg-gray-100 hover:bg-gray-200 font-bold text-xs flex items-center justify-center">-</button>
        <input 
          type="range" 
          min="0.5" 
          max="3.0" 
          step="0.05" 
          value="${slot.zoom}" 
          oninput="setSpherePhotoZoom(${slotIndex}, this.value)" 
          class="w-20 accent-[#C86D51] cursor-pointer" 
        />
        <button type="button" onclick="adjustSpherePhotoZoom(${slotIndex}, 0.1)" class="w-6 h-6 rounded-md bg-gray-100 hover:bg-gray-200 font-bold text-xs flex items-center justify-center">+</button>
      </div>

      <div class="flex items-center gap-1">
        <button type="button" onclick="rotateSpherePhoto(${slotIndex})" title="Girar 90°" class="px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-[10px] font-semibold flex items-center gap-1">
          <span>🔄</span> <span>90°</span>
        </button>
        <button type="button" onclick="resetSpherePhoto(${slotIndex})" title="Centrar" class="px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-[10px] font-semibold">
          Centrar
        </button>
      </div>
    </div>
  `;
}

function updateSlotControlsUI(slotIndex) {
  const container = document.getElementById('slot-active-controls');
  if (container) {
    container.innerHTML = renderSlotFineControlsHTML(slotIndex);
  }
}

function updateSphereDesignerUI() {
  const container = document.getElementById('sphere-designer-container');
  if (!container) return;
  // Re-render controls keeping canvas intact
  const product = window.PRODUCTS_DATA?.find(p => p.id === 'litofania-esfera-navidena');
  if (product) {
    container.innerHTML = buildSphereDesignerStudioHTML(product);
    initSphereCanvasInteractions();
    renderSphereCanvas();
  }
}
