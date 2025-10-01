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

function cardHTML(p){
  const tags = p.tags.map(t=>`<span class="tag">${t}</span>`).join("");
  return `
    <article class="post">
      <div class="cover" role="img" aria-label="${p.titulo}"></div>
      <div class="content">
        <h3>${p.titulo}</h3>
        <div class="meta">${p.categoria} • ${p.tiempo}</div>
        <p>${p.resumen}</p>
        <div class="tags">${tags}</div>
        <div class="actions">
          <button class="btn" data-open="${p.id}">Vista rápida</button>
          <a class="btn" href="${p.url}" target="_blank" rel="noopener">Abrir</a>
        </div>
      </div>
    </article>
  `;
}

function render(){
  const q = state.q.trim().toLowerCase();
  const list = POSTS.filter(p=>{
    const okCat = state.cat==="all" || p.categoria===state.cat;
    const okQ = !q || p.titulo.toLowerCase().includes(q) || p.resumen.toLowerCase().includes(q) || p.tags.join(" ").toLowerCase().includes(q);
    return okCat && okQ;
  });
  grid.innerHTML = list.map(cardHTML).join("") || `<div class="note">Sin resultados.</div>`;
  // bind quick view
  document.querySelectorAll("[data-open]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const post = POSTS.find(p=>p.id===btn.dataset.open);
      if(!post) return;
      modalTitle.textContent = post.titulo;
      modalMeta.textContent = `${post.categoria} • ${post.tiempo}`;
      modalContent.innerHTML = `<p>${post.resumen}</p>`;
      modalOpen.href = post.url || "#";
      modal.classList.add("show");
      modal.setAttribute("aria-hidden","false");
    })
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
