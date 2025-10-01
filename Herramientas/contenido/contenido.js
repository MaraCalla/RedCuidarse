// Demo data (sustitúyelo con tus archivos reales)
const ITEMS = [
  { titulo: "Guía de manejo de ansiedad (PDF)", tipo: "Guía", desc: "Pasos prácticos y señales de alerta.", link: "#", descargar: "#" },
  { titulo: "Infografía: higiene del sueño (PNG)", tipo: "Infografía", desc: "Rutinas simples para dormir mejor.", link: "#", descargar: "#" },
  { titulo: "Respiración 4-4 (Ejercicio)", tipo: "Ejercicio", desc: "Inhala 4s / Exhala 4s. Animación guiada.", action: "breathing" },
  { titulo: "Meditación 1 minuto (Audio)", tipo: "Ejercicio", desc: "Reinicio breve de atención.", link: "#", descargar: "#" },
  { titulo: "Guía: primeros pasos en terapia", tipo: "Guía", desc: "Cómo elegir y qué esperar.", link: "#", descargar: "#" },
  { titulo: "Infografía: hábitos saludables", tipo: "Infografía", desc: "Mini checklist para la semana.", link: "#", descargar: "#" }
];

const grid = document.getElementById("contentGrid");
const tabs = document.querySelectorAll(".tab");
const searchInput = document.getElementById("searchInput");
const mobileToggle = document.getElementById("mobileToggle");
const mainNav = document.getElementById("mainNav");

// Respiración overlay
const breathOverlay = document.getElementById("breathOverlay");
const breathClose = document.getElementById("breathClose");
const breathStart = document.getElementById("breathStart");
const breathStop = document.getElementById("breathStop");
const breathPhase = document.getElementById("breathPhase");
const breathCircle = document.getElementById("breathCircle");
let breathTimer = null, inhale = true;

let state = { type: "all", q: "" };

function cardHTML(it){
  const badge = `<span class="badge">${it.tipo}</span>`;
  const buttons = it.action==="breathing"
    ? `<button class="btn" data-breath>Iniciar</button>`
    : `
      ${it.link ? `<a class="btn" href="${it.link}" target="_blank" rel="noopener">Ver</a>` : ""}
      ${it.descargar ? `<a class="btn outline" href="${it.descargar}" target="_blank" rel="noopener">Descargar</a>` : ""}
    `;
  return `
    <article class="card">
      ${badge}
      <h3>${it.titulo}</h3>
      <p>${it.desc}</p>
      <div class="actions">${buttons}</div>
    </article>
  `;
}

function render(){
  const q = state.q.trim().toLowerCase();
  const list = ITEMS.filter(it=>{
    const okT = state.type==="all" || it.tipo===state.type;
    const okQ = !q || it.titulo.toLowerCase().includes(q) || it.desc.toLowerCase().includes(q);
    return okT && okQ;
  });
  grid.innerHTML = list.map(cardHTML).join("") || `<div class="note">Sin resultados.</div>`;
  // bind breathing
  document.querySelectorAll("[data-breath]").forEach(btn=>{
    btn.addEventListener("click", openBreathing);
  });
}
render();

// tabs
tabs.forEach(t=>{
  t.addEventListener("click", ()=>{
    tabs.forEach(x=>x.classList.remove("active"));
    t.classList.add("active");
    state.type = t.dataset.type;
    render();
  });
});
// search
searchInput.addEventListener("input",(e)=>{ state.q = e.target.value; render(); });

// breathing overlay logic
function openBreathing(){
  breathOverlay.classList.add("show");
  breathOverlay.setAttribute("aria-hidden","false");
  breathPhase.textContent = "Inhala";
  breathCircle.style.transform = "scale(1.0)";
}
function closeBreathing(){
  breathOverlay.classList.remove("show");
  breathOverlay.setAttribute("aria-hidden","true");
  stopBreathing();
}
breathClose.addEventListener("click", closeBreathing);
breathOverlay.addEventListener("click",(e)=>{ if(e.target===breathOverlay) closeBreathing(); });

function startBreathing(){
  stopBreathing();
  inhale = true;
  breathPhase.textContent = "Inhala";
  breathCircle.style.transform = "scale(1.25)";
  breathTimer = setInterval(()=>{
    inhale = !inhale;
    breathPhase.textContent = inhale ? "Inhala" : "Exhala";
    breathCircle.style.transform = inhale ? "scale(1.25)" : "scale(0.9)";
  }, 4000); // 4s por fase
}
function stopBreathing(){
  if(breathTimer){ clearInterval(breathTimer); breathTimer=null; }
  breathCircle.style.transform = "scale(1.0)";
}
breathStart.addEventListener("click", startBreathing);
breathStop.addEventListener("click", stopBreathing);

// mobile + smooth anchor
mobileToggle?.addEventListener("click", ()=>{
  const isOpen = mainNav.classList.toggle("active");
  mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});
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
