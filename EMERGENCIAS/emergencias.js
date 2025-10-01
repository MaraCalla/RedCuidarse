/* ===== Directorio de Salud Mental =====
  - pais
  - continente: "América" | "Europa" | "África" | "Asia" | "Oceanía"
  - recursos: { crisis?: string, suicidio?: string, chat?: string, texto?: string, info?: string, observ?: string }
  ⚠️ Verifica siempre con fuentes oficiales de tu país/ciudad.
*/
const COUNTRIES = [
  // América
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
    crisis: "Líneas locales (p.ej., 106 en ciudades); verifica Secretaría de Salud",
  }},

  // Europa
  { pais: "España", continente: "Europa", recursos: {
    crisis: "024 – Línea 024 (suicidio)",
    info: "112 en emergencias generales"
  }},
  { pais: "Francia", continente: "Europa", recursos: {
    crisis: "3114 – Prévention du suicide",
    info: "112 emergencias si hay peligro inmediato"
  }},
  { pais: "Reino Unido", continente: "Europa", recursos: {
    crisis: "Samaritans 116 123",
    texto: "SHOUT – texto al 85258"
  }},

  // África
  { pais: "Sudáfrica", continente: "África", recursos: {
    crisis: "SADAG Suicide Crisis 0800 567 567",
    texto: "31393 (SADAG) – verifica cobertura"
  }},

  // Asia
  { pais: "India", continente: "Asia", recursos: {
    crisis: "KIRAN 1800-599-0019",
  }},
  { pais: "Japón", continente: "Asia", recursos: {
    crisis: "Yorisoi Hotline 0120-279-338",
  }},

  // Oceanía
  { pais: "Australia", continente: "Oceanía", recursos: {
    crisis: "Lifeline 13 11 14",
    texto: "0477 13 11 14 (SMS)"
  }},
  { pais: "Nueva Zelanda", continente: "Oceanía", recursos: {
    crisis: "Need to Talk? 1737 (call/text)",
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
