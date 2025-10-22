document.addEventListener("DOMContentLoaded", () => {
  const viewport = document.querySelector(".carousel-track"); // viewport
  const prevBtn  = document.querySelector(".prev");
  const nextBtn  = document.querySelector(".next");

  // ---- Asegurar .carousel-rail (tu bloque, intacto) ----
  let rail = viewport.querySelector(".carousel-rail");
  if (!rail) {
    rail = document.createElement("div");
    rail.className = "carousel-rail";
    while (viewport.firstChild) rail.appendChild(viewport.firstChild);
    viewport.appendChild(rail);
  }

  let items = Array.from(rail.querySelectorAll(".valor"));

  // Estado
  let currentIndex = 0;  // índice del primer ítem visible
  let stepPx = 0;        // avance por card (cardWidth + gap)
  let visibles = 1;      // cuántas caben a la vez
  let maxIndex = 0;      // último índice inicial posible
  let isAnimating = false;

  function readGapPx(el) {
    const cs = getComputedStyle(el);
    // algunos navegadores exponen gap como columnGap/rowGap
    return parseFloat(cs.gap || cs.columnGap || "0") || 0;
  }

  function computeSizes() {
    // refrescar items por si cambiaste el DOM
    items = Array.from(rail.querySelectorAll(".valor"));
    if (items.length === 0) return;

    const first = items[0];
    const gap = readGapPx(rail);

    // ancho real de la card
    const cardRect = first.getBoundingClientRect();
    const cardWidth = cardRect.width;

    // ancho del viewport
    const vpWidth = viewport.clientWidth;

    // cuántas entran completas
    visibles = Math.max(1, Math.floor((vpWidth + gap) / (cardWidth + gap)));

    // paso en píxeles por “una” card
    stepPx = cardWidth + gap;

    // último índice inicial que aún deja “visibles” cards
    maxIndex = Math.max(0, items.length - visibles);

    // corregir índice si quedó fuera de rango tras un resize
    currentIndex = Math.min(currentIndex, maxIndex);

    applyTransform();
    updateButtons();
  }

  function applyTransform() {
    const offset = -(currentIndex * stepPx);
    rail.style.transform = `translateX(${offset}px)`;
  }

  function updateButtons() {
    if (prevBtn) {
      prevBtn.disabled = currentIndex <= 0;
      prevBtn.setAttribute("aria-disabled", String(prevBtn.disabled));
    }
    if (nextBtn) {
      nextBtn.disabled = currentIndex >= maxIndex;
      nextBtn.setAttribute("aria-disabled", String(nextBtn.disabled));
    }
  }

  function goTo(index) {
    if (isAnimating) return;
    // clamp a los bordes (sin loop)
    const clamped = Math.max(0, Math.min(index, maxIndex));
    if (clamped === currentIndex) return;
    currentIndex = clamped;

    isAnimating = true;
    applyTransform();
    updateButtons();
    // La transición CSS dura ~450ms (según tu CSS)
    setTimeout(() => (isAnimating = false), 480);
  }

  // Controles (avanzar de a 1 card)
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

  // Recalcular en resize (con RAF para no spamear)
  let resizeRaf;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(computeSizes);
  });

  // Primer cálculo (deja que el layout/polices asienten)
  setTimeout(computeSizes, 0);

  // // (Opcional) Autoplay cada 4s:
  // setInterval(() => {
  //   if (currentIndex < maxIndex) goTo(currentIndex + 1);
  //   else goTo(0); // reinicia
  // }, 4000);

  // Helpers por si agregas/quitas cards dinámicamente
  // window.recomputeCarousel = computeSizes;
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


