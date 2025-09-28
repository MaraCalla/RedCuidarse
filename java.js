
// Menú móvil
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Función para mostrar y ocultar el menú
mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Alterna la clase 'active' para mostrar/ocultar el menú
});

// Cierra el menú cuando se hace clic en un enlace
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Cierra el menú si se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Efecto de scroll en la barra de navegación
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    // Cambia el estilo de la barra de navegación cuando se hace scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animación de entrada con Intersection Observer
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Ajuste para el espacio del menú
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Carrusel
let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Ajusta el índice actual según la dirección
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    // Mueve el carrusel
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 33.33}%)`;  // Cambié el valor de 100% a 33.33% para ajustarlo al 30% de cada publicación

    // Ajuste en el carrusel para pantallas pequeñas
    if (window.innerWidth <= 768) {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`; // Para móviles, la transición se realiza al 100% por cada publicación
    }
}

// Hacer el carrusel más interactivo en pantallas móviles
window.addEventListener('resize', () => {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-item');
    if (window.innerWidth <= 768) {
        // Para pantallas móviles, hacer que las publicaciones sean de 100% de ancho (para un solo ítem por vez)
        carousel.style.transition = 'transform 0.3s ease-in-out';
        slides.forEach(slide => slide.style.width = '100%');
    } else {
        // Para pantallas más grandes, ajustamos el carrusel a 33.33% por publicación
        carousel.style.transition = 'transform 0.5s ease-in-out';
        slides.forEach(slide => slide.style.width = '33.33%');
    }
});

// Ejecutar el ajuste al cargar la página
window.addEventListener('load', () => {
    if (window.innerWidth <= 768) {
        // Si la pantalla es pequeña, ajustamos el carrusel
        moveSlide(0);  // Muestra el primer elemento del carrusel
    }
});
