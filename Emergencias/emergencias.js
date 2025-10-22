/* ===== Directorio de Salud Mental =====
  - pais
  - continente: "América" | "Europa" | "África" | "Asia" | "Oceanía"
  - recursos: { crisis?: string, suicidio?: string, chat?: string, texto?: string, info?: string, observ?: string }
  ⚠️ Verifica siempre con fuentes oficiales de tu país/ciudad.
*/
const COUNTRIES = [
  // 🌎 América
  { pais: "Argentina", continente: "América", recursos: {
    suicidio: "135 (CABA/GB) | 0800-345-1435 (nacional)",
    info: "Líneas locales pueden variar por provincia."
  }},
  { pais: "Perú", continente: "América", recursos: {
    crisis: "113 (opción 5) – Salud Mental",
    info: "También consulta centros de salud/CMH cercanos."
  }},
  { pais: "Chile", continente: "América", recursos: {
    crisis: "600 360 7777 (Salud Responde)",
    info: "Verifica líneas regionales de salud mental."
  }},
  { pais: "México", continente: "América", recursos: {
    crisis: "800 911 2000 – Línea de la Vida",
    chat: "Línea de la Vida (chat) – gob.mx",
  }},
  { pais: "Estados Unidos", continente: "América", recursos: {
    crisis: "988 – Suicide & Crisis Lifeline",
    texto: "Envía ‘HOME’ al 741741 (Crisis Text Line)"
  }},
  { pais: "Colombia", continente: "América", recursos: {
    crisis: "106 – Línea de Atención a la Conducta Suicida (Bogotá)",
    info: "Líneas locales disponibles en otras ciudades."
  }},
  { pais: "Brasil", continente: "América", recursos: {
    crisis: "188 – CVV (Centro de Valorização da Vida)",
    info: "Atención gratuita y confidencial 24/7."
  }},
  { pais: "Ecuador", continente: "América", recursos: {
    crisis: "171 (opción 6) – Ministerio de Salud Pública",
  }},
  { pais: "Uruguay", continente: "América", recursos: {
    crisis: "0800 0767 – Línea Vida",
    info: "Disponible 24 horas."
  }},
  { pais: "Bolivia", continente: "América", recursos: {
    crisis: "156 – Cruz Roja (emergencias psicológicas)",
  }},
  { pais: "Paraguay", continente: "América", recursos: {
    crisis: "141 – Servicio de Orientación y Ayuda Psicológica",
  }},
  { pais: "Venezuela", continente: "América", recursos: {
    crisis: "0-800-825-3663 – Línea de Ayuda Psicológica",
  }},
  { pais: "Canadá", continente: "América", recursos: {
    crisis: "988 – Suicide Crisis Helpline",
    texto: "Disponible por llamada o mensaje."
  }},

  // 🌍 Europa
  { pais: "España", continente: "Europa", recursos: {
    crisis: "024 – Línea 024 (suicidio)",
    info: "112 en emergencias generales."
  }},
  { pais: "Francia", continente: "Europa", recursos: {
    crisis: "3114 – Prévention du suicide",
    info: "112 emergencias si hay peligro inmediato."
  }},
  { pais: "Reino Unido", continente: "Europa", recursos: {
    crisis: "Samaritans 116 123",
    texto: "SHOUT – texto al 85258"
  }},
  { pais: "Alemania", continente: "Europa", recursos: {
    crisis: "TelefonSeelsorge 0800 111 0 111 / 0800 111 0 222",
    info: "Atención confidencial gratuita 24/7."
  }},
  { pais: "Italia", continente: "Europa", recursos: {
    crisis: "Telefono Amico 02 2327 2327",
    info: "Atención también por chat en telefonoamico.net."
  }},
  { pais: "Portugal", continente: "Europa", recursos: {
    crisis: "SOS Voz Amiga 213 544 545",
  }},
  { pais: "Países Bajos", continente: "Europa", recursos: {
    crisis: "113 Zelfmoordpreventie – 0800 0113",
  }},
  { pais: "Suecia", continente: "Europa", recursos: {
    crisis: "Mind Självmordslinjen 90101 | chat: mind.se",
  }},

  // 🌍 África
  { pais: "Sudáfrica", continente: "África", recursos: {
    crisis: "SADAG Suicide Crisis 0800 567 567",
    texto: "31393 (SADAG) – verifica cobertura."
  }},
  { pais: "Nigeria", continente: "África", recursos: {
    crisis: "Lifeline Nigeria 0908 103 1237",
  }},
  { pais: "Kenya", continente: "África", recursos: {
    crisis: "Befrienders Kenya 0722 178 177",
  }},
  { pais: "Egipto", continente: "África", recursos: {
    crisis: "Befrienders Cairo 762 2381",
  }},

  // 🌏 Asia
  { pais: "India", continente: "Asia", recursos: {
    crisis: "KIRAN 1800-599-0019",
  }},
  { pais: "Japón", continente: "Asia", recursos: {
    crisis: "Yorisoi Hotline 0120-279-338",
  }},
  { pais: "China", continente: "Asia", recursos: {
    crisis: "Beijing Hotline 0800-810-1117",
  }},
  { pais: "Corea del Sur", continente: "Asia", recursos: {
    crisis: "Mental Health Centre 1577-0199",
  }},
  { pais: "Filipinas", continente: "Asia", recursos: {
    crisis: "NCMH Crisis Hotline 1553 | 0966 351 4518 (Globe)",
  }},
  { pais: "Indonesia", continente: "Asia", recursos: {
    crisis: "Konseling SEJIWA 119 (ext. 8)",
  }},

  // 🌊 Oceanía
  { pais: "Australia", continente: "Oceanía", recursos: {
    crisis: "Lifeline 13 11 14",
    texto: "0477 13 11 14 (SMS)"
  }},
  { pais: "Nueva Zelanda", continente: "Oceanía", recursos: {
    crisis: "Need to Talk? 1737 (call/text)",
  }},
  { pais: "Fiyi", continente: "Oceanía", recursos: {
    crisis: "Lifeline Fiji 132 454",
  }},
  { pais: "Papúa Nueva Guinea", continente: "Oceanía", recursos: {
    crisis: "National Mental Health Helpline 675 799 8601",
  }},
];


/* ===== Render ===== */
const grid = document.getElementById("countriesGrid");
const tabs = document.querySelectorAll(".tab");
const searchInput = document.getElementById("searchInput");
const mainNav = document.getElementById("mainNav");
const mobileToggle = document.getElementById("mobileToggle");

let state = { continent: "all", query: "" };

function renderCountries(){
  const q = state.query.trim().toLowerCase();
  const list = COUNTRIES.filter(c => {
    const okC = state.continent === "all" || c.continente === state.continent;
    const okQ = !q || c.pais.toLowerCase().includes(q);
    return okC && okQ;
  });

  if (!list.length){
    grid.innerHTML = `<div class="note" style="grid-column:1/-1">No se encontraron países con esos filtros.</div>`;
    return;
  }

  grid.innerHTML = list.map(c => {
    const r = c.recursos || {};
    function pill(label, value){
      return value ? `<div class="phone"><strong>${value}</strong><small>${label}</small></div>` : "";
    }
    const pills = [
      pill("Crisis", r.crisis),
      pill("Suicidio", r.suicidio),
      pill("Chat", r.chat),
      pill("Texto/SMS", r.texto),
      pill("Info", r.info),
      pill("Nota", r.observ)
    ].filter(Boolean).join("");

    return `
      <article class="country-card" tabindex="0" aria-label="Recursos de ${c.pais}">
        <div class="country-title">
          <h4>${c.pais}</h4>
          <span class="badge">${c.continente}</span>
        </div>
        <div class="phones">
          ${pills || `<div class="phone"><small>Sin datos</small></div>`}
        </div>
      </article>
    `;
  }).join("");
}

/* Tabs */
tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    tabs.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.continent = btn.dataset.continent;
    renderCountries();
  });
});

/* Búsqueda */
searchInput.addEventListener("input", (e) => {
  state.query = e.target.value;
  renderCountries();
});

/* Menú móvil */
mobileToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("active");
  mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

/* Scroll suave anclas */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target){
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (mainNav.classList.contains("active")){
        mainNav.classList.remove("active");
        mobileToggle.setAttribute("aria-expanded", "false");
      }
    }
  });
});

/* Init */
renderCountries();
// Botón "Volver atrás"
document.getElementById("backButton")?.addEventListener("click", () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html"; // en caso de que no haya historial
  }
});
