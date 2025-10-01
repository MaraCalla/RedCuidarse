// ===== Libros =====
const BOOKS = [
  {
    titulo: "Hábitos Atómicos",
    autor: "James Clear",
    cover: "", // ../IMAGENESCU/libro1.jpg
    resumen: "Cómo pequeñas mejoras diarias generan cambios notables.",
    online: "https://www.google.com/search?q=Hábitos+Atómicos+ebook",
    fisico: "https://www.buscalibre.com.pe/",
  },
  {
    titulo: "El poder del ahora",
    autor: "Eckhart Tolle",
    cover: "",
    resumen: "Presencia y conciencia para reducir sufrimiento mental.",
    online: "https://www.google.com/search?q=El+poder+del+ahora+ebook",
    fisico: "https://www.buscalibre.com.pe/",
  },
  {
    titulo: "Mindset",
    autor: "Carol Dweck",
    cover: "",
    resumen: "Mentalidad fija vs de crecimiento y su impacto en la vida.",
    online: "https://www.google.com/search?q=Mindset+ebook",
    fisico: "https://www.buscalibre.com.pe/",
  }
];

// ===== Podcasts/YouTube (creators) =====
const CREATORS = [
  {
    nombre: "Psicoeducación en 10'",
    desc: "Videos cortos con conceptos clave de ansiedad, estrés y hábitos.",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ" // ← reemplaza por el video real
  },
  {
    nombre: "Mindful Studio",
    desc: "Meditaciones guiadas y respiraciones para principiantes.",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    nombre: "Ciencia & Hábitos",
    desc: "Entrevistas a expert@s sobre autocuidado basado en evidencia.",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

// ===== Películas / Series =====
const MOVIES = [
  {
    titulo: "Inside Out (Intensa-Mente)",
    cover: "", // ../IMAGENESCU/insideout.jpg
    resumen: "Una mirada amable a las emociones y su rol en la vida.",
    ver: "https://www.justwatch.com/" // reemplaza con enlace directo si quieres
  },
  {
    titulo: "Atypical (Serie)",
    cover: "",
    resumen: "Adolescente en el espectro y desafíos familiares/relacionales.",
    ver: "https://www.justwatch.com/"
  },
  {
    titulo: "The Pursuit of Happyness",
    cover: "",
    resumen: "Resiliencia, propósito y vínculos en tiempos difíciles.",
    ver: "https://www.justwatch.com/"
  }
];

// Refs generales
const mainNav = document.getElementById("mainNav");
const mobileToggle = document.getElementById("mobileToggle");

// Libros
const booksTrack = document.getElementById("booksTrack");
const booksGrid = document.getElementById("booksGrid");
const booksPrev = document.getElementById("booksPrev");
const booksNext = document.getElementById("booksNext");
let carouselIndex = 0;

function bookCard(b){
  return `
    <article class="card">
      <div class="thumb" role="img" aria-label="${b.titulo}"></div>
      <div class="body">
        <span class="badge">Libro</span>
        <h3>${b.titulo}</h3>
        <p><em>${b.autor}</em></p>
        <p>${b.resumen}</p>
        <div class="links">
          <a class="btn" href="${b.online}" target="_blank" rel="noopener">Ver online</a>
          <a class="btn outline" href="${b.fisico}" target="_blank" rel="noopener">Buscalibre</a>
        </div>
      </div>
    </article>
  `;
}
function renderBooks(){
  booksTrack.innerHTML = BOOKS.map(bookCard).join("");
  booksGrid.innerHTML = BOOKS.map(bookCard).join("");
  updateCarousel();
}
function updateCarousel(){
  const cardWidth = 280; // aproximado (dependerá del padding); puedes refinar con getBoundingClientRect
  const gap = 16;
  const offset = -(cardWidth + gap) * carouselIndex;
  booksTrack.style.transform = `translateX(${offset}px)`;
}
booksPrev.addEventListener("click", ()=>{ carouselIndex = Math.max(0, carouselIndex-1); updateCarousel(); });
booksNext.addEventListener("click", ()=>{ carouselIndex = Math.min(BOOKS.length-1, carouselIndex+1); updateCarousel(); });

// Toggle catálogo / padlet
const viewCatalog = document.getElementById("viewCatalog");
const viewPadlet = document.getElementById("viewPadlet");
const librosCatalog = document.getElementById("librosCatalog");
const librosPadlet = document.getElementById("librosPadlet");

viewCatalog.addEventListener("click", ()=>{
  viewCatalog.classList.add("active"); viewPadlet.classList.remove("active");
  librosCatalog.hidden = false; librosPadlet.hidden = true;
});
viewPadlet.addEventListener("click", ()=>{
  viewPadlet.classList.add("active"); viewCatalog.classList.remove("active");
  librosCatalog.hidden = true; librosPadlet.hidden = false;
});

// Creators
const creatorsGrid = document.getElementById("creatorsGrid");
function renderCreators(){
  creatorsGrid.innerHTML = CREATORS.map(c=>`
    <article class="creator">
      <div class="embed">
        <iframe width="100%" height="100%" src="${c.embed}" title="${c.nombre}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowfullscreen></iframe>
      </div>
      <div class="body">
        <h3>${c.nombre}</h3>
        <p>${c.desc}</p>
      </div>
    </article>
  `).join("");
}

// Spotify: actualizar embed desde url
const spotifySet = document.getElementById("spotifySet");
const spotifyUrl = document.getElementById("spotifyUrl");
const spotifyFrame = document.getElementById("spotifyFrame");
spotifySet.addEventListener("click", ()=>{
  const url = spotifyUrl.value.trim();
  if(!url) return;
  // Si el usuario pega un enlace de playlist, construimos el embed:
  // https://open.spotify.com/playlist/{ID} -> https://open.spotify.com/embed/playlist/{ID}
  try{
    const u = new URL(url);
    const parts = u.pathname.split("/");
    const idx = parts.findIndex(p=>p==="playlist");
    if(idx>-1 && parts[idx+1]){
      spotifyFrame.src = `https://open.spotify.com/embed/playlist/${parts[idx+1]}`;
    }
  }catch(_){}
});

// YouTube playlist: actualizar embed
const ytSet = document.getElementById("ytSet");
const ytUrl = document.getElementById("ytUrl");
const ytFrame = document.getElementById("ytFrame");
ytSet.addEventListener("click", ()=>{
  const url = ytUrl.value.trim();
  if(!url) return;
  // https://www.youtube.com/playlist?list=PLxxxx -> https://www.youtube.com/embed/videoseries?list=PLxxxx
  try{
    const u = new URL(url);
    const listId = u.searchParams.get("list");
    if(listId){
      ytFrame.src = `https://www.youtube.com/embed/videoseries?list=${listId}`;
    }
  }catch(_){}
});

// Mobile + smooth anchors
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

// Init
renderBooks();
renderCreators();
