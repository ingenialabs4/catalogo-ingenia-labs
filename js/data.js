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
    images: ["assets/img/proyectos/medirella-1.png"],
    links: { demo: "https://medirella.es/tienda", repo: "" }
  },
  {
    id: "ferreteria-el-ingenierito",
    title: "Sistema de Facturación — Ferretería \"El Ingenierito\"",
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
    images: [],
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
    images: [],
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
    images: [],
    links: { demo: "", repo: "" }
  }
];
