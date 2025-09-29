document.addEventListener("DOMContentLoaded", () => {
  const viewport = document.querySelector(".carousel-track"); // será el viewport
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

   let rail = viewport.querySelector(".carousel-rail");
  if (!rail) {
    rail = document.createElement("div");
    rail.className = "carousel-rail";
    while (viewport.firstChild) rail.appendChild(viewport.firstChild);
    viewport.appendChild(rail);
  }

  const items = Array.from(rail.querySelectorAll(".valor"));

  let currentIndex = 0;
  let slideWidth = 0;
  let slideGap = 0;
  let isAnimating = false;

  function computeSizes() {
    // Ancho visible del viewport (lo que se ve por pantalla)
    sviewportWidth = viewport.clientWidth;
    const csRail = window.getComputedStyle(rail);
    gapPx = parseFloat(csRail.gap || csRail.columnGap || "0") || 0;
    // Ajuste índice por seguridad
    if (currentIndex > items.length - 1) currentIndex = items.length - 1;

    applyTransform();
  }

  function applyTransform() {
    const offset = -(currentIndex * (slideWidth + slideGap));
    rail.style.transform = `translateX(${offset}px)`;
  }

  function goTo(index) {
    if (isAnimating) return;
    const maxIndex = items.length - 1;
    currentIndex = index < 0 ? maxIndex : index > maxIndex ? 0 : index;
    isAnimating = true;
    applyTransform();
    setTimeout(() => (isAnimating = false), 500);
  }

  // Controles
  prevBtn?.addEventListener("click", () => goTo(currentIndex - 1));
  nextBtn?.addEventListener("click", () => goTo(currentIndex + 1));

  // Swipe en móviles
  let startX = 0, touching = false;
  viewport.addEventListener("touchstart", (e) => {
    touching = true;
    startX = e.touches[0].clientX;
  }, { passive: true });

  viewport.addEventListener("touchend", (e) => {
    if (!touching) return;
    const delta = e.changedTouches[0].clientX - startX;
    const umbral = 50;
    if (delta > umbral) goTo(currentIndex - 1);
    if (delta < -umbral) goTo(currentIndex + 1);
    touching = false;
  });

  // Recalcular en resize
  window.addEventListener("resize", computeSizes);
  // Primer cálculo (pequeño delay por fuentes/layout)
  setTimeout(computeSizes, 0);

  // (Opcional) Autoplay:
  // setInterval(() => goTo(currentIndex + 1), 4000);
});

