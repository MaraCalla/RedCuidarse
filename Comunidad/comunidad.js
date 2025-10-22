
// ------------------------------
// Acordeón FAQ (Comunidad)
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector("h3");
            const answer = item.querySelector("p");

            // Ocultar respuestas por defecto
            answer.style.display = "none";

            question.addEventListener("click", () => {
                const isVisible = answer.style.display === "block";

                // Cerrar todas las respuestas antes de abrir otra
                faqItems.forEach(i => i.querySelector("p").style.display = "none");

                // Abrir solo la seleccionada
                answer.style.display = isVisible ? "none" : "block";
            });
        });
    }
});
/* Menú móvil */
mobileToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("active");
  mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
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

