/* ===== Data de muestra para “Explora” =====
   Puedes reemplazar por tus propios items.
   - titulo: nombre del recurso
   - tipo: "Blog" | "Contenido" | "Recomendaciones"
   - descripcion: breve
   - link: URL (subpágina o ancla)
*/
const ITEMS = [
  { titulo: "Respirar para bajar ansiedad", tipo: "Contenido", descripcion: "Ficha paso a paso (PDF) para usar en aula o casa.", link: "contenido.html#respiracion" },
  { titulo: "Hábitos de sueño", tipo: "Blog", descripcion: "Por qué importa y cómo ajustarlos sin frustrarte.", link: "blog.html#sueno" },
  { titulo: "Podcast: Mindset & Salud", tipo: "Recomendaciones", descripcion: "Episodio introductorio para principiantes.", link: "recomendaciones.html#podcast1" },
  { titulo: "Herramienta 5-4-3-2-1", tipo: "Contenido", descripcion: "Anclaje sensorial para momentos de pánico.", link: "contenido.html#54321" },
  { titulo: "Autocompasión práctica", tipo: "Blog", descripcion: "Guía breve para empezar hoy (3 ejercicios).", link: "blog.html#autocompasion" },
  { titulo: "Lectura: ansiedad en jóvenes", tipo: "Recomendaciones", descripcion: "Artículo claro y con recursos gratuitos.", link: "recomendaciones.html#lectura1" },
];

const grid = document.getElementById("toolsGrid");
const tabs = document.querySelectorAll(".tab");
const searchInput = document.getElementById("searchInput");
const mainNav = document.getElementById("mainNav");
const mobileToggle = document.getElementById("mobileToggle");

let state = { section: "all", query: "" };

function renderList(){
  const q = state.query.trim().toLowerCase();
  const list = ITEMS.filter(it => {
    const okS = state.section === "all" || it.tipo === state.section;
    const okQ = !q || it.titulo.toLowerCase().includes(q) || it.descripcion.toLowerCase().includes(q);
    return okS && okQ;
  });

  if (!list.length){
    grid.innerHTML = `<div class="note" style="grid-column:1/-1">No se encontraron recursos con esos filtros.</div>`;
    return;
  }

  grid.innerHTML = list.map(it => `
    <article class="country-card">
      <div class="country-title">
        <h4>${it.titulo}</h4>
        <span class="badge">${it.tipo}</span>
      </div>
      <div class="phones">
        <div class="phone">
          <small>${it.descripcion}</small>
        </div>
        <a class="btn" href="${it.link}" aria-label="Abrir ${it.titulo}">Abrir</a>
      </div>
    </article>
  `).join("");
}

/* Tabs */
tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    tabs.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.section = btn.dataset.section;
    renderList();
  });
});

/* Búsqueda */
searchInput.addEventListener("input", (e) => {
  state.query = e.target.value;
  renderList();
});

/* Menú móvil */
mobileToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("active");
  mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

/* Scroll suave para anclas del header */
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
renderList();
// Botón "Volver atrás"
document.getElementById("backButton")?.addEventListener("click", () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html"; // en caso de que no haya historial
  }
});

