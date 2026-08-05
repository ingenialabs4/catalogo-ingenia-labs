// Catálogo de proyectos de Ingenia Labs.
// Para agregar un proyecto nuevo, añade un objeto más a este array.
// El campo "images" es opcional: si está vacío se muestra un ícono
// como marcador de posición. Para agregar imágenes, coloca los archivos
// en assets/img/proyectos/ y referencia la ruta aquí, ej:
// images: ["assets/img/proyectos/medirella-1.jpg"]
const PROJECTS = [
  {
    id: "medirella",
    title: "MEDIRELLA",
    category: "salud",
    categoryLabel: "Salud",
    icon: "heart-pulse",
    color: "pink",
    summary: "Sistema web de gestión de consultorio médico enfocado en atención general, ginecología y obstetricia.",
    description: "Sistema web de gestión de consultorio médico enfocado en atención general, ginecología y obstetricia. Incluye ficha de atención clínica con autoguardado en tiempo real, seguridad y aislamiento de datos por médico, y control inteligente de stock de medicación, todo con un diseño responsivo premium y soporte de temas.",
    features: [
      "Gestión de citas: programación, estados y cancelaciones",
      "Expediente del paciente: identificación, antecedentes y alergias",
      "Historia clínica detallada: anamnesis, signos vitales, IMC, anticonceptivos, diagnósticos y recetas",
      "Inventario y catálogos de servicios y medicamentos con stock",
      "Ficha de atención clínica con autoguardado en tiempo real",
      "Seguridad y aislamiento de datos por médico"
    ],
    tech: ["PHP 8.2", "Laravel", "HTML5", "CSS3", "Tailwind", "Vite"],
    images: ["assets/img/proyectos/medirella-1.png", "assets/img/proyectos/medirella-2.png"],
    links: { demo: "https://medirella.es/tienda", repo: "" }
  },
  {
    id: "sistema-facturacion",
    title: "Sistema de Facturación",
    category: "administrativo",
    categoryLabel: "Administrativo",
    icon: "package",
    color: "orange",
    summary: "Sistema web de gestión de compras, ventas e inventario para el rubro ferretero, con facturación electrónica.",
    description: "Sistema web de gestión de compras, ventas e inventario para el rubro ferretero, con emisión de comprobantes autorizados y un módulo de facturación electrónica integrado con SUNAT (Perú).",
    features: [
      "Control de inventario de productos",
      "Gestión de clientes y proveedores",
      "Registro de compras y ventas",
      "Emisión de comprobantes autorizados",
      "Facturación electrónica integrada con SUNAT (Perú)"
    ],
    tech: ["PHP", "Laravel 12"],
    images: [
      "assets/img/proyectos/ferreteria-1.png",
      "assets/img/proyectos/ferreteria-2.png",
      "assets/img/proyectos/ferreteria-3.png",
      "assets/img/proyectos/ferreteria-4.png",
      "assets/img/proyectos/ferreteria-5.png",
      "assets/img/proyectos/ferreteria-6.png",
      "assets/img/proyectos/ferreteria-7.png"
    ],
    links: { demo: "", repo: "" }
  },
  {
    id: "altoque",
    title: "AlToque — Gestión Financiera Inteligente",
    category: "movil",
    categoryLabel: "Móvil",
    icon: "smartphone",
    color: "purple",
    summary: "App móvil multiplataforma para registrar, controlar y programar recordatorios de compromisos financieros cotidianos.",
    description: "Aplicación móvil multiplataforma (Android) diseñada para el registro, control y programación de recordatorios y notificaciones de actividades y compromisos financieros cotidianos: pagos, deudas y cobros, con generación y lectura de códigos QR.",
    features: [
      "Normales: notificaciones simples para eventos, tareas o compromisos del día a día",
      "Pagos: control manual y registro de vencimiento de facturas y obligaciones recurrentes",
      "Deudas: registro de dinero adeudado, con escaneo y almacenamiento de códigos QR de pago (Yape/Plin)",
      "Cobros: registro de dinero por cobrar, con generación de QR propios y envío por WhatsApp",
      "Recordatorios mensuales: actualización automática de estado 'Pagado/Cobrado' a 'Pendiente'"
    ],
    tech: ["Flutter", "Dart", "Provider", "Firebase", "Cloud Firestore", "Cloud Functions (Node.js)", "AdMob"],
    images: [
      "assets/img/proyectos/altoque-1.jpg",
      "assets/img/proyectos/altoque-2.jpg",
      "assets/img/proyectos/altoque-3.jpg",
      "assets/img/proyectos/altoque-4.jpg",
      "assets/img/proyectos/altoque-5.jpg",
      "assets/img/proyectos/altoque-6.jpg",
      "assets/img/proyectos/altoque-7.jpg"
    ],
    links: { demo: "", repo: "" }
  },
  {
    id: "ventas-inventario",
    title: "Sistema de Ventas e Inventario",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    icon: "shopping-cart",
    color: "emerald",
    summary: "Gestión integral de tienda: inventario, punto de venta (POS), catálogo público y delivery georreferenciado.",
    description: "Aplicación web moderna para la gestión integral de una tienda: administración de productos, control de stock y movimientos de inventario, ventas mediante un punto de venta (POS) interactivo, y un catálogo público para clientes con soporte de delivery georreferenciado mediante mapas.",
    features: [
      "Gestión de inventario: control completo de productos, stock y movimientos",
      "Punto de venta (POS): carrito interactivo, descuentos, múltiples métodos de pago y anulación de transacciones",
      "Delivery georreferenciado con Google Maps para ubicación de tienda y direcciones de entrega",
      "Portal del cliente: catálogo interactivo con stock en tiempo real",
      "Configuración dinámica de parámetros clave (ubicación, tarifa de envío, alertas de vencimiento)",
      "Alertas automáticas por correo de productos próximos a vencer"
    ],
    tech: ["PHP 8.2+", "Laravel 12", "Tailwind CSS 4", "Vite", "Alpine.js", "SQLite", "Google Maps API"],
    images: [
      "assets/img/proyectos/ventas-inventario-1.png",
      "assets/img/proyectos/ventas-inventario-2.png",
      "assets/img/proyectos/ventas-inventario-3.png",
      "assets/img/proyectos/ventas-inventario-4.png",
      "assets/img/proyectos/ventas-inventario-5.png",
      "assets/img/proyectos/ventas-inventario-6.png"
    ],
    links: { demo: "", repo: "" }
  },
  {
    id: "inmopredict",
    title: "InmoPredict — Predicción Inmobiliaria con IA",
    category: "administrativo",
    categoryLabel: "Administrativo",
    icon: "trending-up",
    color: "blue",
    summary: "Sistema de tasación de propiedades con Machine Learning: panel web, predictor de precios y control de acceso por roles.",
    description: "Sistema completo para tasar propiedades usando Machine Learning, con panel web y control de acceso por roles (administrador, analista, invitado). Un modelo Random Forest entrenado con ~6,000 propiedades sintéticas calibradas a precios reales de distritos de Lima (San Isidro, Miraflores, Barranco, San Borja, Surco, La Molina, entre otros) predice el precio a partir de distrito, área, antigüedad, tipo de inmueble, conservación, dormitorios, baños, estacionamientos, piso, ascensor y amoblado. Incluye dashboard con KPIs de cartera, catálogo de propiedades con comparación de precio de lista vs. estimación de la IA, gestión de clientes, bandeja de consultas y un módulo de análisis de mercado con métricas reales de desempeño del modelo (MAPE, R²).",
    features: [
      "Predictor de precio con IA: tasación con rango de confianza y precisión del modelo a partir de las características del inmueble",
      "Dashboard con KPIs de cartera, estimador rápido de precio y tareas pendientes",
      "Catálogo de propiedades con filtros y ficha detallada comparando precio de lista vs. estimación de la IA",
      "Gestión de clientes: ficha con propiedades asociadas, historial de consultas y notas de seguimiento",
      "Bandeja de consultas organizadas en hilos, con respuesta y marcado como resuelta",
      "Análisis de mercado: valor de suelo por distrito, distribución de cartera y métricas del modelo (MAPE, R²)",
      "Control de acceso por roles (administrador, analista, invitado) y gestión de equipo",
      "Búsqueda global en vivo y notificaciones de consultas pendientes"
    ],
    tech: ["FastAPI", "Python", "scikit-learn", "Random Forest", "SQLite", "React", "Tailwind CSS"],
    images: [
      "assets/img/proyectos/prediccion-inmobiliaria-1.png",
      "assets/img/proyectos/prediccion-inmobiliaria-2.png",
      "assets/img/proyectos/prediccion-inmobiliaria-3.png",
      "assets/img/proyectos/prediccion-inmobiliaria-4.png"
    ],
    links: { demo: "", repo: "" }
  }
];
