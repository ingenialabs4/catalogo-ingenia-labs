// ---------------------------------------------
// Ingenia Labs — Asistente virtual del catálogo
// Motor de respuestas por palabras clave sobre el
// contenido del sitio, con efecto de escritura.
// ---------------------------------------------

function normalizeText(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

function hasKeyword(normInput, keyword) {
  if (keyword.length <= 3) {
    return new RegExp(`\\b${keyword}\\b`).test(normInput);
  }
  return normInput.includes(keyword);
}

function findProject(id) {
  return PROJECTS.find((p) => p.id === id);
}

function projectReply(id) {
  const p = findProject(id);
  return {
    text: `${p.title}: ${p.summary} Tecnologías: ${p.tech.join(", ")}.`,
    actions: [{ label: "Ver detalles →", openProject: p.id }]
  };
}

const CHAT_INTENTS = [
  {
    keywords: ["medirella", "consultorio", "clinica", "ginecolog", "obstetric"],
    respond: () => projectReply("medirella")
  },
  {
    keywords: ["facturacion", "ferreter", "sunat", "comprobante"],
    respond: () => projectReply("sistema-facturacion")
  },
  {
    keywords: ["altoque", "financiera", "deudas", "cobros", "yape", "plin"],
    respond: () => projectReply("altoque")
  },
  {
    keywords: ["punto de venta", "pos", "delivery", "georreferenci", "ecommerce", "e-commerce"],
    respond: () => projectReply("ventas-inventario")
  },
  {
    keywords: ["precio", "costo", "cuesta", "presupuesto", "cotiza", "tarifa", "cobran"],
    respond: () => ({
      text: "Cada proyecto es distinto, así que preferimos armar una propuesta a tu medida según el alcance, la plataforma y los tiempos. Escríbenos contándonos tu idea y te respondemos con un presupuesto.",
      actions: [{ label: "Escribir a ingenialabs4@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=ingenialabs4@gmail.com" }]
    })
  },
  {
    keywords: ["contacto", "correo", "email", "whatsapp", "comunicarme", "escribir", "hablar"],
    respond: () => ({
      text: "Puedes escribirnos directamente a ingenialabs4@gmail.com o usar el botón “Hablemos” al final de la página. ¡Con gusto conversamos sobre tu proyecto!",
      actions: [{ label: "Escribir a ingenialabs4@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=ingenialabs4@gmail.com" }]
    })
  },
  {
    keywords: ["tecnologia", "stack", "lenguaje", "framework", "laravel", "flutter", "python", "java", "php"],
    respond: () => ({
      text: "Trabajamos con Laravel, Flutter/Dart, PHP, Python, Java, C++ y JavaScript en el desarrollo, Tailwind CSS y Firebase para interfaces y backend, y MySQL/SQL Server/SQLite para datos. También usamos IA como apoyo en el proceso: generación y revisión de código, y análisis de optimización.",
      actions: [{ label: "Ver todas las tecnologías", scrollTo: "#tecnologias" }]
    })
  },
  {
    keywords: ["inteligencia artificial", "ia", "chatbot", "eres una ia", "eres ia"],
    respond: () => ({
      text: "Además de construir software a medida, integramos IA en nuestro propio flujo de trabajo (generación y revisión de código, análisis y optimización) y podemos sumar funcionalidades de IA a tus proyectos: chatbots como este, automatización inteligente, análisis de datos y más.",
      actions: [{ label: "Contarles mi idea", href: "https://mail.google.com/mail/?view=cm&fs=1&to=ingenialabs4@gmail.com" }]
    })
  },
  {
    keywords: ["servicio", "que hacen", "que ofrecen", "a que se dedican", "que hace ingenia"],
    respond: () => ({
      text: "Ofrecemos desarrollo web y de apps móviles a medida, software y SaaS personalizado, automatización de procesos, modernización de sistemas antiguos, diseño de bases de datos, experiencia de usuario (UX) y control de calidad.",
      actions: [{ label: "Ver todo lo que ofrecemos", scrollTo: "#sobre-mi" }]
    })
  },
  {
    keywords: ["proyecto", "portafolio", "trabajos", "ejemplos", "catalogo", "que han hecho"],
    respond: () => ({
      text: `Tenemos ${PROJECTS.length} proyectos en el catálogo: ${PROJECTS.map((p) => p.title).join(", ")}. ¿Sobre cuál te gustaría saber más?`,
      actions: PROJECTS.map((p) => ({ label: p.title, openProject: p.id }))
    })
  },
  {
    keywords: ["hola", "buenas", "hey", "que tal", "saludos"],
    respond: () => ({
      text: "¡Hola! \u{1F44B} Soy el asistente virtual de Ingenia Labs. Puedo contarte sobre nuestros proyectos, servicios, tecnologías o ayudarte a contactarnos. ¿Qué te gustaría saber?",
      actions: []
    })
  },
  {
    keywords: ["gracias", "chau", "adios", "hasta luego", "nos vemos", "bye"],
    respond: () => ({
      text: "¡Gracias a ti! Si tienes más preguntas, aquí estaré. \u{1F64C}",
      actions: []
    })
  }
];

const FALLBACK_REPLY = {
  text: "No estoy seguro de haber entendido eso \u{1F914} Puedo ayudarte con información sobre nuestros proyectos, servicios, tecnologías o cómo contactarnos. ¿Sobre cuál te gustaría saber más?",
  actions: []
};

const DEFAULT_SUGGESTIONS = ["Ver proyectos", "¿Qué servicios ofrecen?", "Tecnologías", "Contacto"];

function findReply(userText) {
  const norm = normalizeText(userText);
  const intent = CHAT_INTENTS.find((i) => i.keywords.some((k) => hasKeyword(norm, k)));
  return intent ? intent.respond() : FALLBACK_REPLY;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function messagesEl() {
  return document.getElementById("chatbot-messages");
}

function scrollChatToBottom() {
  const el = messagesEl();
  el.scrollTop = el.scrollHeight;
}

function appendUserMessage(text) {
  const el = document.createElement("div");
  el.className = "self-end max-w-[85%] bg-brand-600 text-white text-sm rounded-2xl rounded-br-sm px-3.5 py-2 animate-fade-in";
  el.textContent = text;
  messagesEl().appendChild(el);
  scrollChatToBottom();
}

function appendTypingIndicator() {
  const el = document.createElement("div");
  el.id = "chatbot-typing";
  el.className = "self-start flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-bl-sm px-3.5 py-2.5 animate-fade-in";
  el.innerHTML = `
    <span class="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 animate-bounce" style="animation-delay:0ms"></span>
    <span class="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 animate-bounce" style="animation-delay:150ms"></span>
    <span class="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 animate-bounce" style="animation-delay:300ms"></span>
  `;
  messagesEl().appendChild(el);
  scrollChatToBottom();
}

function removeTypingIndicator() {
  document.getElementById("chatbot-typing")?.remove();
}

function typeText(el, text, speed = 16) {
  return new Promise((resolve) => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      el.textContent = text.slice(0, i);
      scrollChatToBottom();
      if (i >= text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

function buildActionChip(action) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = action.label;
  btn.className = "text-xs font-medium px-3 py-1.5 rounded-full border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 hover:bg-brand-50 dark:hover:bg-brand-900/30 transition-colors";
  btn.addEventListener("click", () => {
    if (action.href) window.open(action.href, "_blank", "noopener");
    if (action.scrollTo) {
      closeChatbot();
      document.querySelector(action.scrollTo)?.scrollIntoView({ behavior: "smooth" });
    }
    if (action.openProject) {
      closeChatbot();
      if (typeof openModal === "function") openModal(action.openProject);
    }
  });
  return btn;
}

async function appendBotMessage({ text, actions = [] }) {
  const wrap = document.createElement("div");
  wrap.className = "self-start max-w-[90%] flex flex-col gap-2";
  const bubble = document.createElement("div");
  bubble.className = "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-sm rounded-2xl rounded-bl-sm px-3.5 py-2.5 animate-fade-in";
  wrap.appendChild(bubble);
  messagesEl().appendChild(wrap);
  scrollChatToBottom();

  await typeText(bubble, text);

  if (actions.length) {
    const actionsRow = document.createElement("div");
    actionsRow.className = "flex flex-wrap gap-2";
    actions.forEach((a) => actionsRow.appendChild(buildActionChip(a)));
    wrap.appendChild(actionsRow);
    scrollChatToBottom();
  }
}

function renderSuggestions() {
  const el = document.getElementById("chatbot-suggestions");
  el.innerHTML = "";
  DEFAULT_SUGGESTIONS.forEach((s) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.textContent = s;
    chip.className = "text-xs font-medium px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors";
    chip.addEventListener("click", () => handleUserMessage(s));
    el.appendChild(chip);
  });
}

let chatbotBusy = false;

function setChatbotBusy(busy) {
  chatbotBusy = busy;
  const input = document.getElementById("chatbot-input");
  const submitBtn = document.querySelector("#chatbot-form button[type=submit]");
  input.disabled = busy;
  submitBtn.disabled = busy;
  submitBtn.classList.toggle("opacity-50", busy);
}

async function handleUserMessage(text) {
  if (chatbotBusy) return;
  setChatbotBusy(true);

  document.getElementById("chatbot-suggestions").innerHTML = "";
  appendUserMessage(text);
  appendTypingIndicator();

  const reply = findReply(text);
  const delay = Math.min(1600, 500 + text.length * 12);
  await wait(delay);

  removeTypingIndicator();
  await appendBotMessage(reply);
  renderSuggestions();
  setChatbotBusy(false);
}

let chatbotStarted = false;

async function startConversation() {
  setChatbotBusy(true);
  appendTypingIndicator();
  await wait(700);
  removeTypingIndicator();
  await appendBotMessage({
    text: "¡Hola! \u{1F44B} Soy el asistente virtual de Ingenia Labs. Puedo contarte sobre nuestros proyectos, servicios, tecnologías o ayudarte a contactarnos.",
    actions: []
  });
  renderSuggestions();
  setChatbotBusy(false);
}

function openChatbot() {
  document.getElementById("chatbot-panel").classList.remove("hidden");
  document.getElementById("chatbot-toggle").setAttribute("aria-expanded", "true");
  if (!chatbotStarted) {
    chatbotStarted = true;
    startConversation();
  }
  document.getElementById("chatbot-input").focus();
}

function closeChatbot() {
  document.getElementById("chatbot-panel").classList.add("hidden");
  document.getElementById("chatbot-toggle").setAttribute("aria-expanded", "false");
}

function renderChatbotWidget() {
  const root = document.getElementById("ai-chatbot");
  if (!root) return;

  root.innerHTML = `
    <button id="chatbot-toggle" type="button" aria-label="Abrir asistente virtual" aria-expanded="false"
      class="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-brand-600 to-purple-600 text-white shadow-lg shadow-brand-600/30 flex items-center justify-center hover:scale-105 transition-transform">
      <span class="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-20"></span>
      <i data-lucide="sparkles" class="w-6 h-6 relative"></i>
    </button>

    <div id="chatbot-panel" class="hidden fixed bottom-24 right-6 z-50 w-[22rem] max-w-[calc(100vw-2rem)] h-[30rem] max-h-[70vh] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl flex flex-col overflow-hidden animate-scale-in">
      <div class="flex items-center justify-between gap-2 px-4 py-3 bg-gradient-to-r from-brand-600 to-purple-600 text-white shrink-0">
        <div class="flex items-center gap-2">
          <span class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <i data-lucide="bot" class="w-4 h-4"></i>
          </span>
          <div>
            <p class="text-sm font-bold leading-tight">Asistente Ingenia Labs</p>
            <p class="text-[11px] text-white/80 flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> En línea · IA
            </p>
          </div>
        </div>
        <button id="chatbot-close" type="button" aria-label="Cerrar asistente" class="w-7 h-7 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <div id="chatbot-messages" class="flex-1 overflow-y-auto p-4 flex flex-col gap-3"></div>

      <div id="chatbot-suggestions" class="px-4 pb-2 flex flex-wrap gap-2 shrink-0"></div>

      <form id="chatbot-form" class="flex items-center gap-2 p-3 border-t border-slate-200 dark:border-slate-800 shrink-0">
        <input id="chatbot-input" type="text" autocomplete="off" placeholder="Escribe tu pregunta..."
          class="flex-1 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm outline-none focus:ring-2 focus:ring-brand-500">
        <button type="submit" aria-label="Enviar" class="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center hover:bg-brand-700 transition-colors shrink-0">
          <i data-lucide="send" class="w-4 h-4"></i>
        </button>
      </form>
    </div>
  `;

  lucide.createIcons();

  document.getElementById("chatbot-toggle").addEventListener("click", () => {
    document.getElementById("chatbot-panel").classList.contains("hidden") ? openChatbot() : closeChatbot();
  });
  document.getElementById("chatbot-close").addEventListener("click", closeChatbot);
  document.getElementById("chatbot-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("chatbot-input");
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    handleUserMessage(text);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderChatbotWidget();
});
