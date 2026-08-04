// ---------------------------------------------
// Ingenia Labs — Catálogo de proyectos
// Lógica de filtros, búsqueda, modal y tema
// ---------------------------------------------

const CATEGORIES = [
  { key: "todos", label: "Todos", icon: "layout-grid" },
  { key: "salud", label: "Salud", icon: "heart-pulse" },
  { key: "administrativo", label: "Administrativos", icon: "briefcase" },
  { key: "movil", label: "Móvil", icon: "smartphone" },
  { key: "ecommerce", label: "E-commerce", icon: "shopping-cart" }
];

const COLOR_MAP = {
  blue:    { badgeBg: "bg-blue-100 dark:bg-blue-900/40",    badgeText: "text-blue-700 dark:text-blue-300",    iconBg: "bg-blue-500" },
  emerald: { badgeBg: "bg-emerald-100 dark:bg-emerald-900/40", badgeText: "text-emerald-700 dark:text-emerald-300", iconBg: "bg-emerald-500" },
  purple:  { badgeBg: "bg-purple-100 dark:bg-purple-900/40",  badgeText: "text-purple-700 dark:text-purple-300",  iconBg: "bg-purple-500" },
  pink:    { badgeBg: "bg-pink-100 dark:bg-pink-900/40",    badgeText: "text-pink-700 dark:text-pink-300",    iconBg: "bg-pink-500" },
  orange:  { badgeBg: "bg-orange-100 dark:bg-orange-900/40",  badgeText: "text-orange-700 dark:text-orange-300",  iconBg: "bg-orange-500" },
  amber:   { badgeBg: "bg-amber-100 dark:bg-amber-900/40",   badgeText: "text-amber-700 dark:text-amber-300",   iconBg: "bg-amber-500" }
};

const PAGE_SIZE = 6;

const state = {
  activeCategory: "todos",
  searchTerm: "",
  visibleCount: PAGE_SIZE
};

const grid = document.getElementById("projects-grid");
const filtersEl = document.getElementById("category-filters");
const searchInput = document.getElementById("search-input");
const loadMoreBtn = document.getElementById("load-more");
const emptyState = document.getElementById("empty-state");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalContent = document.getElementById("modal-content");
const themeToggle = document.getElementById("theme-toggle");

function getFilteredProjects() {
  const term = state.searchTerm.trim().toLowerCase();
  return PROJECTS.filter((p) => {
    const matchesCategory = state.activeCategory === "todos" || p.category === state.activeCategory;
    const matchesSearch =
      !term ||
      p.title.toLowerCase().includes(term) ||
      p.summary.toLowerCase().includes(term) ||
      p.tech.some((t) => t.toLowerCase().includes(term));
    return matchesCategory && matchesSearch;
  });
}

function renderFilters() {
  filtersEl.innerHTML = CATEGORIES.map((cat) => {
    const isActive = cat.key === state.activeCategory;
    const classes = isActive
      ? "bg-gradient-to-r from-brand-600 to-purple-600 text-white shadow"
      : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800";
    return `
      <button data-category="${cat.key}"
        class="filter-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${classes}">
        <i data-lucide="${cat.icon}" class="w-3.5 h-3.5"></i> ${cat.label}
      </button>`;
  }).join("");

  filtersEl.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activeCategory = btn.dataset.category;
      state.visibleCount = PAGE_SIZE;
      renderFilters();
      renderGrid();
    });
  });

  lucide.createIcons();
}

function projectCardHTML(project) {
  const color = COLOR_MAP[project.color] || COLOR_MAP.blue;
  const hasImage = project.images && project.images.length > 0;
  const isMobileApp = project.category === "movil";

  let thumbnailWrap;
  if (hasImage && isMobileApp) {
    const preview = project.images.slice(0, 3);
    thumbnailWrap = `<div class="relative h-40 bg-slate-100 dark:bg-slate-800 flex items-center justify-center gap-2 p-3">
         ${preview.map((src) => `
           <div class="h-full flex-1 max-w-[33%] bg-white dark:bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center">
             <img src="${src}" alt="${project.title}" class="h-full w-auto object-contain">
           </div>`).join("")}
         <span class="absolute top-3 left-3 w-9 h-9 rounded-lg ${color.iconBg} text-white flex items-center justify-center">
           <i data-lucide="${project.icon}" class="w-4 h-4"></i>
         </span>
       </div>`;
  } else if (hasImage) {
    thumbnailWrap = `<div class="relative bg-slate-100 dark:bg-slate-800">
         <img src="${project.images[0]}" alt="${project.title}" class="w-full h-auto block">
         <span class="absolute top-3 left-3 w-9 h-9 rounded-lg ${color.iconBg} text-white flex items-center justify-center">
           <i data-lucide="${project.icon}" class="w-4 h-4"></i>
         </span>
       </div>`;
  } else {
    thumbnailWrap = `<div class="h-40 bg-slate-100 dark:bg-slate-800 relative flex items-center justify-center">
         <i data-lucide="${project.icon}" class="w-10 h-10 text-slate-300 dark:text-slate-600"></i>
         <span class="absolute top-3 left-3 w-9 h-9 rounded-lg ${color.iconBg} text-white flex items-center justify-center">
           <i data-lucide="${project.icon}" class="w-4 h-4"></i>
         </span>
       </div>`;
  }
  return `
    <article data-id="${project.id}"
      class="project-card group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer">
      ${thumbnailWrap}
      <div class="p-5">
        <div class="flex items-center justify-between gap-2 mb-2">
          <h3 class="font-bold">${project.title}</h3>
          <span class="shrink-0 text-xs font-semibold px-2 py-1 rounded-full ${color.badgeBg} ${color.badgeText}">${project.categoryLabel}</span>
        </div>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">${project.summary}</p>
        <div class="flex flex-wrap gap-1.5 mb-4">
          ${project.tech.map((t) => `<span class="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">${t}</span>`).join("")}
        </div>
        <button data-id="${project.id}" class="details-btn inline-flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:gap-2 transition-all">
          Ver detalles <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </article>`;
}

function renderGrid() {
  const filtered = getFilteredProjects();
  const visible = filtered.slice(0, state.visibleCount);

  grid.innerHTML = visible.map(projectCardHTML).join("");

  emptyState.classList.toggle("hidden", filtered.length > 0);
  loadMoreBtn.classList.toggle("hidden", state.visibleCount >= filtered.length);

  grid.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(btn.dataset.id);
    });
  });
  grid.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });

  lucide.createIcons();
}

function openModal(id) {
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return;
  const color = COLOR_MAP[project.color] || COLOR_MAP.blue;
  const hasImages = project.images && project.images.length > 0;

  const header = hasImages
    ? `<div class="rounded-t-2xl overflow-hidden flex bg-slate-100 dark:bg-slate-800">
         <div class="relative flex-1 min-w-0">
           <img id="modal-main-image" src="${project.images[0]}" alt="${project.title}" class="w-full h-auto block">
           <button id="modal-close" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-900/90 flex items-center justify-center hover:bg-white dark:hover:bg-slate-900">
             <i data-lucide="x" class="w-4 h-4"></i>
           </button>
         </div>
         ${project.images.length > 1 ? `
         <div class="w-20 shrink-0 flex flex-col gap-2 p-2 overflow-y-auto max-h-[28rem]">
           ${project.images.map((src, i) => `
             <button type="button" data-src="${src}"
               class="thumb-btn shrink-0 w-full aspect-square rounded-lg border-2 ${i === 0 ? "border-brand-500" : "border-transparent"} bg-white dark:bg-slate-900 overflow-hidden">
               <img src="${src}" alt="" class="w-full h-full object-cover">
             </button>`).join("")}
         </div>` : ""}
       </div>`
    : `<div class="relative h-44 bg-slate-100 dark:bg-slate-800 flex items-center justify-center rounded-t-2xl">
         <i data-lucide="${project.icon}" class="w-14 h-14 text-slate-300 dark:text-slate-600"></i>
         <button id="modal-close" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-900/90 flex items-center justify-center hover:bg-white dark:hover:bg-slate-900">
           <i data-lucide="x" class="w-4 h-4"></i>
         </button>
       </div>`;

  const links = [];
  if (project.links.demo) {
    links.push(`<a href="${project.links.demo}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity">
      <i data-lucide="external-link" class="w-4 h-4"></i> Ver demo
    </a>`);
  }
  if (project.links.repo) {
    links.push(`<a href="${project.links.repo}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
      <i data-lucide="github" class="w-4 h-4"></i> Repositorio
    </a>`);
  }

  modalContent.innerHTML = `
    ${header}
    <div class="p-6 sm:p-8">
      <div class="flex items-center gap-2 mb-3">
        <span class="text-xs font-semibold px-2 py-1 rounded-full ${color.badgeBg} ${color.badgeText}">${project.categoryLabel}</span>
      </div>
      <h2 class="text-2xl font-bold mb-3">${project.title}</h2>
      <p class="text-slate-600 dark:text-slate-400 mb-6">${project.description}</p>

      <h3 class="font-semibold mb-2 text-sm uppercase tracking-wide text-slate-400">Características</h3>
      <ul class="mb-6 space-y-2">
        ${project.features.map((f) => `
          <li class="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
            <i data-lucide="check-circle-2" class="w-4 h-4 mt-0.5 text-brand-500 shrink-0"></i> ${f}
          </li>`).join("")}
      </ul>

      <h3 class="font-semibold mb-2 text-sm uppercase tracking-wide text-slate-400">Tecnologías</h3>
      <div class="flex flex-wrap gap-2 ${links.length ? "mb-8" : ""}">
        ${project.tech.map((t) => `<span class="text-xs px-2.5 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">${t}</span>`).join("")}
      </div>

      ${links.length ? `<div class="flex flex-wrap gap-3">${links.join("")}</div>` : ""}
    </div>`;

  modalBackdrop.classList.remove("hidden");
  modalBackdrop.classList.add("flex");
  document.body.classList.add("overflow-hidden");

  document.getElementById("modal-close").addEventListener("click", closeModal);

  const mainImage = document.getElementById("modal-main-image");
  modalContent.querySelectorAll(".thumb-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      mainImage.src = btn.dataset.src;
      modalContent.querySelectorAll(".thumb-btn").forEach((b) => {
        b.classList.remove("border-brand-500");
        b.classList.add("border-transparent");
      });
      btn.classList.remove("border-transparent");
      btn.classList.add("border-brand-500");
    });
  });

  lucide.createIcons();
}

function closeModal() {
  modalBackdrop.classList.add("hidden");
  modalBackdrop.classList.remove("flex");
  document.body.classList.remove("overflow-hidden");
}

modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

searchInput.addEventListener("input", (e) => {
  state.searchTerm = e.target.value;
  state.visibleCount = PAGE_SIZE;
  renderGrid();
});

loadMoreBtn.addEventListener("click", () => {
  state.visibleCount += PAGE_SIZE;
  renderGrid();
});

// Tema claro/oscuro con persistencia
function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.contains("dark");
  applyTheme(isDark ? "light" : "dark");
});

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderGrid();
});
