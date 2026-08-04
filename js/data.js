// Catálogo de proyectos de Ingenia Labs.
// Para agregar un proyecto nuevo, añade un objeto más a este array.
const PROJECTS = [
  {
    id: "gestion-escolar",
    title: "Sistema de Gestión Escolar",
    category: "educativo",
    categoryLabel: "Educativo",
    icon: "graduation-cap",
    color: "blue",
    summary: "Plataforma web para la gestión académica de estudiantes, cursos, notas y usuarios.",
    description: "Plataforma integral pensada para instituciones educativas que necesitan centralizar la administración académica. Permite registrar estudiantes, asignar cursos, capturar calificaciones y generar reportes de rendimiento en tiempo real.",
    features: [
      "Gestión de estudiantes, docentes y cursos",
      "Registro y cálculo automático de calificaciones",
      "Reportes de rendimiento académico con gráficos",
      "Roles y permisos por tipo de usuario"
    ],
    tech: ["Laravel", "MySQL", "Bootstrap", "Chart.js"],
    links: { demo: "#", repo: "#" }
  },
  {
    id: "tienda-online",
    title: "Tienda Online",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    icon: "shopping-cart",
    color: "emerald",
    summary: "Sistema de comercio electrónico con carrito de compras, pagos y gestión de pedidos.",
    description: "Tienda en línea completa con catálogo de productos, carrito de compras, pasarela de pagos integrada y panel para gestionar pedidos e inventario desde un solo lugar.",
    features: [
      "Catálogo de productos con filtros y búsqueda",
      "Carrito de compras y checkout con Stripe",
      "Gestión de pedidos y estados de envío",
      "Panel de administración de productos"
    ],
    tech: ["Laravel", "MySQL", "Tailwind CSS", "Stripe"],
    links: { demo: "#", repo: "#" }
  },
  {
    id: "panel-administrativo",
    title: "Panel Administrativo",
    category: "administrativo",
    categoryLabel: "Administrativo",
    icon: "layout-dashboard",
    color: "purple",
    summary: "Dashboard administrativo con reportes en tiempo real y gestión de usuarios y permisos.",
    description: "Panel central para administrar usuarios, roles y permisos de una organización, con visualización de métricas clave en tiempo real mediante gráficos interactivos.",
    features: [
      "Dashboard con métricas en tiempo real",
      "Gestión de usuarios, roles y permisos",
      "Gráficos interactivos con ApexCharts",
      "Interfaz reactiva con Alpine.js"
    ],
    tech: ["Laravel", "MySQL", "Alpine.js", "ApexCharts"],
    links: { demo: "#", repo: "#" }
  },
  {
    id: "citas-medicas",
    title: "Sistema de Citas Médicas",
    category: "salud",
    categoryLabel: "Salud",
    icon: "heart-pulse",
    color: "pink",
    summary: "Plataforma para la reserva de citas médicas y gestión de pacientes y especialistas.",
    description: "Sistema que facilita la reserva de citas médicas en línea, con calendario de disponibilidad por especialista y expediente básico de pacientes.",
    features: [
      "Calendario de citas con FullCalendar",
      "Gestión de pacientes y especialistas",
      "Recordatorios y confirmación de citas",
      "Panel de administración para clínicas"
    ],
    tech: ["PHP", "MySQL", "Bootstrap", "FullCalendar"],
    links: { demo: "#", repo: "#" }
  },
  {
    id: "plataforma-cursos",
    title: "Plataforma de Cursos",
    category: "educativo",
    categoryLabel: "Educativo",
    icon: "book-open",
    color: "blue",
    summary: "Sistema de gestión de cursos en línea con lecciones, evaluaciones y seguimiento de progreso.",
    description: "Plataforma de e-learning donde los usuarios pueden inscribirse a cursos, avanzar por lecciones en video, presentar evaluaciones y hacer seguimiento a su progreso.",
    features: [
      "Cursos con lecciones en video y materiales",
      "Evaluaciones y seguimiento de progreso",
      "Certificados al completar un curso",
      "Interfaz dinámica con Vue.js"
    ],
    tech: ["Laravel", "MySQL", "Vue.js", "Tailwind CSS"],
    links: { demo: "#", repo: "#" }
  },
  {
    id: "sistema-inventarios",
    title: "Sistema de Inventarios",
    category: "administrativo",
    categoryLabel: "Administrativo",
    icon: "package",
    color: "orange",
    summary: "Control de inventarios, productos, proveedores y movimientos en tiempo real.",
    description: "Herramienta para controlar el inventario de una empresa: entradas y salidas de productos, proveedores asociados y alertas de stock bajo, con tablas dinámicas y exportables.",
    features: [
      "Control de entradas y salidas de stock",
      "Gestión de proveedores y productos",
      "Alertas de inventario bajo",
      "Tablas con DataTables (exportar a Excel/PDF)"
    ],
    tech: ["PHP", "MySQL", "Bootstrap", "DataTables"],
    links: { demo: "#", repo: "#" }
  },
  {
    id: "app-reservas",
    title: "App de Reservas de Espacios",
    category: "otros",
    categoryLabel: "Otros",
    icon: "calendar-check",
    color: "amber",
    summary: "Reserva de salas y espacios compartidos con calendario y confirmación automática.",
    description: "Aplicación para reservar salas de reuniones o espacios compartidos dentro de una organización, evitando conflictos de horario mediante validación automática de disponibilidad.",
    features: [
      "Calendario de disponibilidad de espacios",
      "Confirmación automática de reservas",
      "Notificaciones por correo",
      "Panel de administración de espacios"
    ],
    tech: ["Laravel", "MySQL", "Alpine.js", "Tailwind CSS"],
    links: { demo: "#", repo: "#" }
  },
  {
    id: "landing-inmobiliaria",
    title: "Landing Inmobiliaria",
    category: "otros",
    categoryLabel: "Otros",
    icon: "building-2",
    color: "amber",
    summary: "Landing page para inmobiliaria con catálogo de propiedades y formulario de contacto.",
    description: "Sitio de presentación para una inmobiliaria, con catálogo filtrable de propiedades, galería de imágenes y formulario de contacto conectado a WhatsApp.",
    features: [
      "Catálogo de propiedades con filtros",
      "Galería de imágenes por propiedad",
      "Formulario de contacto vía WhatsApp",
      "Diseño 100% responsivo"
    ],
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    links: { demo: "#", repo: "#" }
  },
  {
    id: "gestor-eventos",
    title: "Gestor de Eventos",
    category: "otros",
    categoryLabel: "Otros",
    icon: "ticket",
    color: "amber",
    summary: "Publicación de eventos, venta de entradas y control de asistencia.",
    description: "Plataforma para publicar eventos, vender entradas en línea y controlar la asistencia mediante códigos QR generados por compra.",
    features: [
      "Publicación y gestión de eventos",
      "Venta de entradas en línea",
      "Generación de códigos QR",
      "Control de asistencia en tiempo real"
    ],
    tech: ["Laravel", "MySQL", "Bootstrap", "QR Code"],
    links: { demo: "#", repo: "#" }
  }
];
