// ===== Libros =====
const BOOKS = [
  {
    titulo: "Mindset: La actitud del éxito",
    autor: "Carol S. Dweck",
    cover: '../../IMAGENESCU/mindset.jpg', // ../IMAGENESCU/libro1.jpg
    resumen: "Si piensas que no eres bueno en muchas cosas o sientes que todo es un gran desafio que no podras superar, este libro es para ti.",
    online: "https://www.youtube.com/watch?v=6MNyEk-15IIhttps://www.youtube.com/watch?v=_iU_Gv3oELU",
    fisico: "https://www.buscalibre.pe/libro-mindset/9788416579167/p/47493050#",
  },
  {
    titulo: "El poder del ahora",
    autor: "Eckhart Tolle",
    cover: "../../IMAGENESCU/ahora.jpeg",
    resumen: "Estar presente conscientemente te puede ayudar a mejorar tu bienestar emocional.",
    online: "https://www.youtube.com/watch?v=483bQyV-R08",
    fisico: "https://www.buscalibre.pe/libro-el-poder-del-ahora/9786124463013/p/52099810#",
  },
  {
    titulo: "Más Fuerte que nunca",
    autor: "Brené Brown",
    cover: "../../IMAGENESCU/fuerte.jpeg",
    resumen: "Levantarse despues de sentir el fracaso es dificil, te invitamos a leer este libro.",
    online: "https://www.youtube.com/watch?v=VaQsFG5KtMw",
    fisico: "https://www.buscalibre.pe/libro-mas-fuerte-que-nunca/9786073900560/p/55148635",
  }
];

// Refs y Carrusel para Libros
const booksTrack = document.getElementById("booksTrack");
const booksPrev = document.getElementById("booksPrev");
const booksNext = document.getElementById("booksNext");
let booksCarouselIndex = 0;

// Función para generar las cards de libros
function bookCard(b) {
  return `
    <article class="card">
      <div class="thumb" style="background-image: url('${b.cover}');" role="img" aria-label="${b.titulo}"></div>
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

// Función para renderizar los libros
function renderBooks() {
  booksTrack.innerHTML = BOOKS.map(bookCard).join("");  // Renderiza las cards de libros
  updateBooksCarousel();  // Actualiza el carrusel
}

// Función para actualizar el carrusel de libros
function updateBooksCarousel() {
  const cardWidth = 280;  // Ajusta este valor según el tamaño de los libros
  const gap = 16;  // Espaciado entre los libros
  const offset = -(cardWidth + gap) * booksCarouselIndex;
  booksTrack.style.transform = `translateX(${offset}px)`;  // Desplaza los libros
}

// Funciones para navegar en el carrusel de libros
booksPrev.addEventListener("click", () => {
  booksCarouselIndex = Math.min(BOOKS.length -1, booksCarouselIndex + 1);  // No permitir el índice por debajo de 0
  updateBooksCarousel();
});

booksNext.addEventListener("click", () => {
  booksCarouselIndex = Math.max(+1, booksCarouselIndex  -1);  // No permitir el índice superior al número de libros
  updateBooksCarousel();
});

// Inicializa el renderizado de los libros
renderBooks();
const viewCatalogBtn = document.getElementById("viewCatalog");
const viewPadletBtn = document.getElementById("viewPadlet");
const librosCatalog = document.getElementById("librosCatalog");
const librosPadlet = document.getElementById("librosPadlet");

// Función para mostrar el catálogo
viewCatalogBtn.addEventListener("click", () => {
  librosCatalog.hidden = false;
  librosPadlet.hidden = true;
  viewCatalogBtn.classList.add("active");
  viewPadletBtn.classList.remove("active");
});

// Función para mostrar el Padlet
viewPadletBtn.addEventListener("click", () => {
  librosCatalog.hidden = true;
  librosPadlet.hidden = false;
  viewPadletBtn.classList.add("active");
  viewCatalogBtn.classList.remove("active");
});

// ===== Podcasts/YouTube (creators) =====
const CREATORS = [
  {
    nombre: "Farid Dieck",
    desc: "Psicólogo y conferencista. Videos sobre psicología y desarrollo personal.",
    embed: "https://www.youtube.com/embed/y7gFKG4vL_w?si=90812Kh8WhxPY-UA"
  },
  {
    nombre: "Gabriel Rolón",
    desc: "Psicoanalista y escritor. Reflexiones sobre las emociones y la mente humana.",
    embed: "https://www.youtube.com/embed/ITovsJg-q5c?si=ABkOT9xmcA1x0Ahc"
  },
  {
    nombre: "Aprendamos Juntos",
    desc: "Videos educativos sobre temas de bienestar y desarrollo personal.",
    embed: "https://www.youtube.com/embed/5YJ_t41Z440?si=ThaMzAQWo_x96k6R"
  },
  {
    nombre: "ClaudiaNicolasa",
    desc: "Psicóloga con temas de autoconocimiento y bienestar emocional.",
    embed: "https://www.youtube.com/embed/DfGIIuguRM8?si=xECuXL5myD6Jqi-8"
  }
];

// Refs y Carrusel para Podcasts
const creatorsTrack = document.getElementById("creatorsTrack");
const creatorsPrev = document.getElementById("creatorsPrev");
const creatorsNext = document.getElementById("creatorsNext");
let creatorsCarouselIndex = 0;

// Función para renderizar los creadores de contenido
function renderCreators() {
  creatorsTrack.innerHTML = CREATORS.map((creator) => `
    <article class="creator">
      <div class="embed">
        <iframe width="560" height="315" src="${creator.embed}" title="${creator.nombre}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="body">
        <h3>${creator.nombre}</h3>
        <p>${creator.desc}</p>
      </div>
    </article>
  `).join("");
  updateCreatorsCarousel();  // Actualizamos el carrusel de creadores
}

// Función para actualizar el carrusel de creadores
function updateCreatorsCarousel() {
  const cardWidth = 580;  // Ajusta este valor según el tamaño de tu iframe
  const gap = 20;  // Espaciado entre los items
  const offset = -(cardWidth + gap) * creatorsCarouselIndex;
  creatorsTrack.style.transform = `translateX(${offset}px)`;  // Desplaza los videos
}

// Funciones para navegar en el carrusel de creadores
creatorsPrev.addEventListener("click", () => {
  creatorsCarouselIndex = Math.max(0, creatorsCarouselIndex - 1);  // No permitir el índice por debajo de 0
  updateCreatorsCarousel();
});

creatorsNext.addEventListener("click", () => {
  creatorsCarouselIndex = Math.min(CREATORS.length - 1, creatorsCarouselIndex + 1);  // No permitir el índice superior al número de creadores
  updateCreatorsCarousel();
});

// Inicializa el renderizado de los creadores
renderCreators();

// Mobile + smooth anchors
mobileToggle?.addEventListener("click", ()=> {
  const isOpen = mainNav.classList.toggle("active");
  mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (mainNav.classList.contains("active")) {
        mainNav.classList.remove("active");
        mobileToggle.setAttribute("aria-expanded", "false");
      }
    }
  });
});

// Init
renderBooks();
renderCreators();


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
// Botón "Volver atrás"
document.getElementById("backButton")?.addEventListener("click", () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html"; // en caso de que no haya historial
  }
});
