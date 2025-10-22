// Data demo (reemplaza/tunealo)
const POSTS = [
  {
    id: "respiracion-4-7-8",
    titulo: "Respiración 4-7-8: cómo y cuándo usarla",
    categoria: "Mindfulness",
    tags: ["respiración","estrés","sueño"],
    tiempo: "4 min",
    cover: "", // podrías usar ../IMAGENESCU/cover1.jpg
    resumen: "Una técnica breve para bajar activación fisiológica y conciliar el sueño.",
    url: "#"
  },
  {
    id: "higiene-del-sueno",
    titulo: "Higiene del sueño sin obsesionarte",
    categoria: "Hábitos",
    tags: ["sueño","rutinas"],
    tiempo: "5 min",
    cover: "",
    resumen: "Pequeños ajustes con alto impacto y sin culpa.",
    url: "#"
  },
  {
    id: "ansiedad-en-examenes",
    titulo: "Ansiedad en exámenes: 3 estrategias express",
    categoria: "Ansiedad",
    tags: ["academia","exámenes"],
    tiempo: "3 min",
    cover: "",
    resumen: "Reencuadre rápido, respiración cuadrada y checklist previo.",
    url: "#"
  },
  {
    id: "autocompasion",
    titulo: "Autocompasión práctica en 3 pasos",
    categoria: "Bienestar",
    tags: ["autoestima","autocuidado"],
    tiempo: "4 min",
    cover: "",
    resumen: "No es autoindulgencia: es realismo amable para avanzar.",
    url: "#"
  },
  {
  id: "inteligencia-emocional",
  titulo: "Inteligencia Emocional – Daniel Goleman",
  categoria: "Bienestar",
  tags: ["emociones", "resiliencia", "autoconocimiento"],
  tiempo: "6 min",
  autor: "Grace Oluwasunmisola Olusanmi",
  cover: "../../IMAGENESCU/coleman.jpg", // ← puedes cambiarlo según tu carpeta
  resumen: "Una obra esencial que revela cómo las emociones, bien comprendidas, pueden transformar nuestra mente, nuestras relaciones y nuestro bienestar interior.",
  url: "#",
  contenido: `
    <p><em>"Inteligencia Emocional"</em> de Daniel Goleman es una guía luminosa que ilumina el poder transformador de las emociones en el fomento del bienestar mental. En un mundo donde la mente y el corazón se entrelazan, esta obra maestra desvela una verdad profunda: la inteligencia emocional es el latido de una vida equilibrada y plena.</p>

    <p>Este trabajo seminal entrelaza ciencia y narrativa, mostrando cómo la inteligencia emocional (IE) se convierte en la piedra angular de la resiliencia mental, las relaciones sanas y la paz interior. Goleman rompe la idea de que el intelecto lo es todo, y destaca el papel vital de la IE en la manera en que enfrentamos el estrés, construimos vínculos y nos comprendemos a nosotros mismos.</p>

    <h4>Por qué la Inteligencia Emocional es Importante para el Bienestar Mental</h4>
    <ul>
      <li><strong>Navegar las emociones:</strong> reconocerlas y regularlas reduce la ansiedad y la depresión.</li>
      <li><strong>Fomentar conexiones:</strong> la empatía y las habilidades sociales fortalecen relaciones de apoyo.</li>
      <li><strong>Construir resiliencia:</strong> la autorregulación emocional permite afrontar desafíos con mayor equilibrio.</li>
      <li><strong>Mejorar la autocomprensión:</strong> la IE promueve un diálogo compasivo con uno mismo.</li>
    </ul>

    <p>Goleman invita al lector a despertar su inteligencia emocional, cultivando una vida de autoconocimiento, empatía y resiliencia. Su exploración es tanto un espejo como un mapa: refleja nuestras emociones y traza rutas hacia una conexión más profunda con nosotros y con los demás.</p>

    <h4>Un Faro para el Bienestar Mental</h4>
    <p><em>"Inteligencia Emocional"</em> es un tesoro atemporal para quienes buscan nutrir su bienestar mental, construir relaciones auténticas y alcanzar una vida equilibrada. Goleman nos muestra cómo cultivar la IE puede conducir a:</p>
    <ul>
      <li>Reducir el estrés y el tumulto emocional.</li>
      <li>Fortalecer relaciones empáticas y compasivas.</li>
      <li>Aumentar la adaptabilidad ante los altibajos de la vida.</li>
    </ul>

    <p>En un mundo que anhela comprensión emocional, este libro se alza como un compañero inspirador para quienes desean una vida más armoniosa y consciente.</p>
  `
}
];

const grid = document.getElementById("postsGrid");
const tabs = document.querySelectorAll(".tab");
const searchInput = document.getElementById("searchInput");
const mobileToggle = document.getElementById("mobileToggle");
const mainNav = document.getElementById("mainNav");

// Modal refs
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalContent = document.getElementById("modalContent");
const modalOpen = document.getElementById("modalOpen");
const modalClose = document.getElementById("modalClose");

let state = { cat: "all", q: "" };

function cardHTML(p) {
  const tags = p.tags.map(t => `<span class="tag">${t}</span>`).join("");
  return `
    <article class="post">
      <div class="cover" style="--cover-img: url('${p.cover || "../../IMAGENESCU/nack.png"}');" role="img" aria-label="${p.titulo}"></div>
      <div class="content">
        <h3>${p.titulo}</h3>
        <div class="meta">${p.categoria} • ${p.tiempo}</div>
        <p>${p.resumen}</p>
        <div class="tags">${tags}</div>
        <div class="actions">
          <button class="btn" data-open="${p.id}">Leer artículo</button>
        </div>
      </div>
    </article>
  `;
}

function render() {
  const q = state.q.trim().toLowerCase();
  const list = POSTS.filter(p => {
    const okCat = state.cat === "all" || p.categoria === state.cat;
    const okQ = !q || p.titulo.toLowerCase().includes(q) || p.resumen.toLowerCase().includes(q) || p.tags.join(" ").toLowerCase().includes(q);
    return okCat && okQ;
  });

  grid.innerHTML = list.map(cardHTML).join("") || `<div class="note">Sin resultados.</div>`;

  // bind quick view
  document.querySelectorAll("[data-open]").forEach(btn => {
    btn.addEventListener("click", () => {
      const post = POSTS.find(p => p.id === btn.dataset.open);
      if (!post) return;

      // ✨ Mostrar toda la información
      modalTitle.textContent = post.titulo;
      modalMeta.textContent = `${post.categoria} • ${post.tiempo}`;

      // Si existe contenido completo, mostrarlo
      if (post.contenido) {
        modalContent.innerHTML = post.contenido;
      } else {
        modalContent.innerHTML = `<p>${post.resumen}</p>`;
      }
      
      // Si tiene autor, lo mostramos debajo
      modalAuthor.textContent = post.autor ? `Por ${post.autor}` : "";
      modal.querySelector(".modal-dialog").style.setProperty("--cover-img", `url('${post.cover}')`);
      modal.classList.add("show");
      modal.setAttribute("aria-hidden", "false");
    });
  });
}

render();
// tabs
tabs.forEach(t=>{
  t.addEventListener("click", ()=>{
    tabs.forEach(x=>x.classList.remove("active"));
    t.classList.add("active");
    state.cat = t.dataset.cat;
    render();
  });
});
// search
searchInput.addEventListener("input",(e)=>{ state.q = e.target.value; render(); });
// modal close
modalClose.addEventListener("click", ()=>{
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden","true");
});
modal.addEventListener("click",(e)=>{ if(e.target===modal) modalClose.click(); });
// mobile menu
mobileToggle?.addEventListener("click", ()=>{
  const isOpen = mainNav.classList.toggle("active");
  mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});
// smooth anchor
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",(e)=>{
    const target=document.querySelector(a.getAttribute("href"));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth", block:"start"});
      if(mainNav.classList.contains("active")){
        mainNav.classList.remove("active");
        mobileToggle.setAttribute("aria-expanded","false");
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("backButton");
  if (!backBtn) return;

  backBtn.addEventListener("click", () => {
    // Si hay historial de navegación, vuelve
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Si no hay historial (por ejemplo si se abrió directo)
      const path = window.location.pathname;
      // Sube un nivel hacia el index principal
      const parent = path.includes("/") ? path.split("/").slice(0, -1).join("/") : "/";
      window.location.href = parent.includes("index.html") ? "../index.html" : "../";
    }
  });
});

