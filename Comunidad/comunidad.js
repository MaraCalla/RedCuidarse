
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
// Botón "Volver atrás"
document.getElementById("backButton")?.addEventListener("click", () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html"; // en caso de que no haya historial
  }
});
